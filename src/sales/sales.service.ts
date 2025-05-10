import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TxClient } from 'src/prisma/types/txclient.type';
import { InventoryHelpers } from 'src/common/helpers/inventory.helpers';
import { SalesQueryDto } from 'src/common/dto/sales-query.dto';
// import { Prisma } from '../prisma/generated/client';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { ProductsSold } from './types/products-sold.type';
import { S3Service } from 'src/common/s3/s3.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalesService {
  private readonly logger = new Logger(SalesService.name);

  constructor(
    private prisma: PrismaService,
    private readonly inventoryHelpers: InventoryHelpers,
    private readonly paginationService: PaginationService,
    private readonly s3Service: S3Service,
  ) {}

  /** -------------------- CREATE -------------------- */
  /**
   * Crea una venta y los productos asociados a ella.
   *
   * @param dto Datos de la venta a crear
   */
  async create(dto: CreateSaleDto) {
    try {
      return this.prisma.$transaction(async (tx) => {
        // 1) verificar empleado
        const exists = await tx.employees.findUnique({
          where: { CID: dto.employee_cid },
          select: { CID: true },
        });

        if (!exists) throw new BadRequestException('Employee not found');

        // 2) crear cabecera
        const sale = await tx.sales.create({
          data: {
            employee_cid: dto.employee_cid,
            date: new Date(dto.sale_date),
          },
        });

        // 3) procesar productos vendidos
        for (const item of dto.products) {
          await this._processProductSale(tx, sale.sales_id, item);
        }

        // 4) calcular total
        await this.inventoryHelpers._recalcTotal(tx, sale.sales_id);

        return { message: 'Sale created', sales_id: sale.sales_id };
      });
    } catch (error) {
      if (error instanceof BadRequestException) throw error;

      console.error('ERROR AL CREAR REGISTRO DE VENTA EN BD: ', error);
      throw new InternalServerErrorException(
        'Unespected error. Check the logs.',
      );
    }
  }

  /** -------------------- FIND ALL (paginado + filtros) -------------------- */
  /**
   * Lista todas las ventas
   * Nota: Las ventas que esten marcadas como eliminadas no seran listadas
   *
   * @param queryParams
   */
  async findAll(query: SalesQueryDto) {
    const {
      page = 1,
      limit = 10,
      query: q,
      dateFrom,
      dateTo,
      minTotal,
      maxTotal,
      includeDeleted,
    } = query;

    /* ----- where dinámico ----- */
    const where: Prisma.SalesWhereInput = {
      AND: [
        q ? { employee_cid: { contains: q, mode: 'insensitive' } } : {},
        dateFrom ? { date: { gte: new Date(dateFrom) } } : {},
        dateTo ? { date: { lte: new Date(dateTo) } } : {},
        minTotal ? { total_amount: { gte: minTotal } } : {},
        maxTotal ? { total_amount: { lte: maxTotal } } : {},
        includeDeleted ? {} : { deleted_at: null },
      ],
    };

    /* consulta principal */
    const result = await this.prisma.sales.findMany({
      where,
      include: {
        products_sales: true,
        _count: { select: { products_sales: true } },
      },
      orderBy: { created_at: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }); // usa findMany + include _count para eficiencia :contentReference[oaicite:3]{index=3}

    /* total global con filtros */
    const total = await this.prisma.sales.count({ where }); // accurate count :contentReference[oaicite:4]{index=4}
    const meta = this.paginationService.getPaginationMeta(page, limit, total); // igual que Purchases

    return { total, result, meta };
  }

  /** -------- FIND ONE (detallado) --------------------------- */
  /**
   * Busca una venta por su ID
   * Incluye los productos vendidos y el empleado que la realizó.
   *
   * @param id Id de la venta a buscar
   */
  async findOne(id: string) {
    try {
      const products_sold: Array<ProductsSold> = [];

      const sale = await this.prisma.sales.findFirst({
        where: { sales_id: id },
        include: {
          employee: { select: { first_name: true, last_name: true } },
          products_sales: {
            include: {
              product: {
                select: {
                  product_id: true,
                  branch: true,
                  model: true,
                  description: true,
                  category_name: true,
                  provider_name: true,
                  pos_name: true,
                  img: { select: { image_thumb_key: true }, take: 1 },
                },
              },
            },
          },
        },
      }); // relation queries with include :contentReference[oaicite:5]{index=5}

      if (!sale) throw new NotFoundException('Sale not found');

      try {
        // Iterar sobre los productos comprados y crear objetos de tipo ProductsPurchased
        await Promise.all(
          sale.products_sales.map(async (element) => {
            const o: ProductsSold = {
              product_id: '',
              branch: '',
              model: '',
              description: '',
              product_quantity: 0,
              product_unit_price: 0,
              category_name: '',
              provider_name: '',
              pos_name: '',
              imageUrl: '',
            };

            o['product_id'] = element.product_id;
            o['branch'] = element.product.branch;
            o['model'] = element.product.model;
            o['description'] = element.product.description;
            o['product_quantity'] = element.quantity;
            o['product_unit_price'] = Number(element.unit_price);
            o['category_name'] = element.product.category_name;
            o['provider_name'] = element.product.provider_name;
            o['pos_name'] = element.product.pos_name;

            let url: string = '';
            if (element.product.img.length > 0) {
              url = await this.s3Service.getObjectSignedUrl(
                element.product.img[0].image_thumb_key,
              );
              o['imageUrl'] = url;
            }

            products_sold.push(o);
          }),
        );
      } catch (error) {
        console.error(
          `ERROR AL TRAER  DE BD EL DETALLE DE LA COMPRA CON EL ID "${id}": `,
          error,
        );
        throw new InternalServerErrorException(
          'Unespected error. Check the logs.',
        );
      }

      return {
        sale_id: sale?.sales_id,
        sale_date: sale?.date,
        products_sold,
        created_at: sale?.created_at,
        last_update: sale?.last_update,
      };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      console.error(
        `ERROR AL TRAER EL DETALLE DE LA VENTA CON ID "${id}": `,
        error,
      );
      throw new InternalServerErrorException(
        'Unespected error. Check the logs.',
      );
    }
  }

  /** -------------------- UPDATE -------------------- */
  /**
   * Actualiza la venta y los productos asociados a ella.
   * Si el producto no existe en la venta se agrega, si existe se actualiza.
   * Si se elimina un producto de la venta se elimina de la relación.
   * NOTA: Procesa la actualizacion del registro como un metodo PUT.
   *
   * @param id Id de la venta a actualizar
   * @param dto Datos a actualizar
   */
  async update(id: string, dto: UpdateSaleDto) {
    try {
      return this.prisma.$transaction(async (tx) => {
        // 1) verifica la existencia de la venta
        const sale = await tx.sales.findUnique({
          where: { sales_id: id },
          include: { products_sales: true },
        });

        if (!sale) throw new NotFoundException('Sale not found');

        // 2) actualizar cabecera
        if (dto.employee_cid) {
          const emp = await tx.employees.findUnique({
            where: { CID: dto.employee_cid },
            select: { CID: true },
          });
          // verifica la existencia del empleado
          if (!emp) throw new BadRequestException('Employee not found');
        }
        await tx.sales.update({
          where: { sales_id: id },
          data: {
            employee_cid: dto.employee_cid,
            date: dto.sale_date ? new Date(dto.sale_date) : undefined,
          },
        });

        // 3) manejar productos: igual que compras
        if (dto.products?.length) {
          // crear mapa para lookup rápido de los productos asociados a la venta
          const current = new Map(
            sale.products_sales.map((p) => [p.product_id, p]),
          );

          // itera sobre los productos a actualizar que vienen en el dto
          for (const p of dto.products) {
            // verifica la existencia del producto a actualizar en el mapa
            if (current.has(p.product_id)) {
              /** venta existente → calcular deltaQty */
              const rel = current.get(p.product_id)!;
              // calcula el delta de la cantidad que se vendio con la que estaba previamente registrada
              const deltaQty = p.quantity - rel.quantity;
              // actualiza en stock del producto
              await this.inventoryHelpers._applyStockDelta(
                tx,
                p.product_id,
                -deltaQty,
              );

              // actualiza el registro de la relación de la venta con el producto
              await tx.products_sales.update({
                where: {
                  sale_id_product_id: { sale_id: id, product_id: p.product_id },
                },
                data: {
                  quantity: p.quantity,
                  unit_price: p.unit_price,
                  total_price: p.unit_price * p.quantity,
                },
              });
              // elimina el producto ya procesado del mapa
              current.delete(p.product_id);
            } else {
              // como el producto no estaba registrado en la venta llo procesa como nuevo producto añadido al registro
              await this._processProductSale(tx, id, p);
            }
          }

          // 4) productos quitados
          // itera sobre los productos que quedan en el mapa, son los que no se actualizaron y por lo tanto se eliminaron de la venta
          // hace que se comporte como un metodo PUT en lugar de un PATCH

          // TODO: cambiar a el comportamiento de un PUT a un PATCH similar a como se hace en Purchases
          for (const obsolete of current.values()) {
            await this.inventoryHelpers._applyStockDelta(
              tx,
              obsolete.product_id,
              obsolete.quantity,
            );
            await tx.products_sales.delete({
              where: {
                sale_id_product_id: {
                  sale_id: id,
                  product_id: obsolete.product_id,
                },
              },
            });
          }
        }

        await this.inventoryHelpers._recalcTotal(tx, id);
        return { message: 'Sale updated', sales_id: id };
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      if (error instanceof BadRequestException) throw error;

      console.error(
        `ERROR AL ACTUALIZAR REGISTRO DE VENTA CON ID: '${id}'`,
        error,
      );
      throw new InternalServerErrorException(
        'Unespected error. Check the logs.',
      );
    }
  }

  /** -------------------- DELETE (soft) -------------------- */
  /**
   * Elimina la venta del registro haciendo un soft-delete de la misma
   *
   * @param id Id de la venta a eliminar
   */
  async remove(id: string) {
    try {
      return this.prisma.$transaction(async (tx) => {
        const sale = await tx.sales.findUnique({
          where: { sales_id: id },
          include: { products_sales: true },
        });
        if (!sale) throw new NotFoundException('Sale not found');

        // revertir stock
        for (const rel of sale.products_sales) {
          await this.inventoryHelpers._applyStockDelta(
            tx,
            rel.product_id,
            rel.quantity,
          );
        }
        await tx.sales.delete({ where: { sales_id: id } }); // middleware → soft
        return { message: 'Sale soft-deleted' };
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      if (error instanceof BadRequestException) throw error;

      this.logger.error(
        `ERROR AL ELIMINAR (soft) EL REGISTRO DE VENTA CON ID: '${id}'`,
        error.stack,
      );
      throw new InternalServerErrorException(
        'Unexpected error while soft-deleting sale. Check logs.',
      );
    }
  }

  //TODO: Asociar este metodo con el rol de administrador
  //TODO: Implementar una extension de prisma para que solo los usuarios con este rol puedan restaurar un registro de venta eliminado
  /** -------------------- RESTORE -------------------- */
  /**
   * Restaura un venta que ha sido eliminada previamente.
   *
   * @param id Id de la venta a actualizar
   */
  async restore(id: string) {
    try {
      return this.prisma.$transaction(async (tx) => {
        const sale = await tx.sales.findUnique({
          where: { sales_id: id },
          include: { products_sales: true },
        });
        if (!sale || !sale.deleted_at)
          throw new NotFoundException('Sale not found or it is not deleted');

        // restar nuevamente stock
        for (const rel of sale.products_sales) {
          await this.inventoryHelpers._applyStockDelta(
            tx,
            rel.product_id,
            -rel.quantity,
            true,
          );
        }

        await tx.sales.update({
          where: { sales_id: id },
          data: { deleted_at: null },
        });
        return { message: 'Sale restored' };
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      console.error(
        `ERROR AL RESTAURAR EL REGISTRO DE VENTA CON ID: '${id}'`,
        error,
      );
      throw new InternalServerErrorException(
        'Unespected error. Check the logs.',
      );
    }
  }

  /** -------------------- helper -------------------- */
  /**
   * Actualiza el stock de un producto ya existente y lo agrega a un registro de venta
   *
   *
   * @param tx Cliente transaccional
   * @param saleId Id de la venta a actualizar
   * @param item Datos del producto a relacionar con la venta
   */
  private async _processProductSale(
    tx: TxClient,
    saleId: string,
    item: { product_id: string; quantity: number; unit_price: number },
  ) {
    await this.inventoryHelpers._applyStockDelta(
      tx,
      item.product_id,
      -item.quantity,
    );

    await tx.products_sales.create({
      data: {
        sale_id: saleId,
        product_id: item.product_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total_price: item.unit_price * item.quantity,
      },
    });
  }
}
