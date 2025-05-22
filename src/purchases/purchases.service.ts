import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { S3Service } from 'src/common/s3/s3.service';
import { ProductsService } from 'src/products/products.service';
import { RCreateProductDto } from 'src/products/dto/r-create-product.dto';
import { QueryParamsDto } from 'src/common/dto/query-params.dto';
import { PurchasesResult } from './types/purchase-result.type';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { ProductsPurchased } from './types/products-purchased.type';
import { InventoryHelpers } from 'src/common/helpers/inventory.helpers';

/**
 * Servicio que gestiona las operaciones de compra de inventario de forma atómica.
 * Incluye la creación de la compra, el procesamiento de productos existentes y nuevos,
 * la subida de imágenes a S3 y el registro de relaciones en Products_purchases.
 */
@Injectable()
export class PurchasesService {
  private readonly logger = new Logger(PurchasesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
    private readonly productsService: ProductsService,
    private readonly paginationService: PaginationService,
    private readonly inventoryHelpers: InventoryHelpers,
  ) {}

  // ---------- CREATE ----------
  /**
   * Crea un registro de compra y procesa productos existentes y delega al metodo create de la clase ProductService el procesamiento de los nuevos.
   * Ejecuta todas las operaciones en una transacción Prisma.
   * Si alguna operación falla, se revierte la transacción.
   *
   * @param createPurchaseDto Objeto DTO con los datos de la compra.
   * @param files Arreglo de archivos que corresponde 1:1 con newProducts.
   * @returns
   *
   * ```ts
   * {
   *    purchaseId: string,
   *    updatedProducts: string[],
   *    createdProductsResult: Array<{
   *      productId: string,
   *      imageUrl: string
   *    }>
   *  }
   *
   * ```
   * @throws InternalServerErrorException con detalles en caso de error.
   *
   * ```ts
   * {
   *    errorType: 'VALIDATION' | 'DATABASE' | 'FILE_STORAGE',
   *    message: string,
   *    failedOperations: Array<{
   *      productId?: string,
   *      operation: 'CREATE' | 'UPDATE' | 'IMAGE_UPLOAD',
   *      errorDetails: string
   *    }>
   * }
   *
   * ```
   */
  async create(
    createPurchaseDto: CreatePurchaseDto,
    files?: Express.Multer.File[],
  ): Promise<{
    purchaseId: string;
    updatedProducts: string[];
    createdProductsResult: Array<{ productId: string; imageUrl: string }>;
  }> {
    // Arreglo para almacenar las claves de archivos subidos a S3 para poder revertir en caso de fallo.
    const s3UploadedFiles: string[] = [];
    const updatedProducts: string[] = [];
    const createdProductsResult: Array<{
      productId: string;
      imageUrl: string;
    }> = [];
    let purchaseRecord: Record<string, string> = {};

    try {
      await this.prisma.$transaction(
        async (tx) => {
          // Crear registro de compra.
          purchaseRecord = await tx.purchases.create({
            data: {
              purchase_date: createPurchaseDto.purchase_date,
            },
            select: {
              purchases_id: true,
            },
          });

          // Procesar productos existentes (si existen).
          if (
            createPurchaseDto.existingProducts &&
            createPurchaseDto.existingProducts.length > 0
          ) {
            for (const existingProductDto of createPurchaseDto.existingProducts) {
              // Validar existencia del producto.
              const product = await tx.products.findUnique({
                where: { product_id: existingProductDto.product_id },
              });
              if (!product) {
                throw new BadRequestException(
                  `Product with id ${existingProductDto.product_id} not found.`,
                );
              }
              // Comparar fechas: actualizar purchase_date y purchase_price si la nueva fecha es posterior.
              const newPurchaseDate = new Date(createPurchaseDto.purchase_date);
              const stock_quantity = (product.stock_quantity +=
                existingProductDto.stock_quantity);
              let updateData: Record<string, string | number> = {
                // Incrementar stock.
                stock_quantity,
                // Actualizar amount.
                amount: Number(product.purchase_price) * stock_quantity,
              };
              if (newPurchaseDate > product.purchase_date) {
                updateData = {
                  ...updateData,
                  purchase_date: newPurchaseDate.toISOString(),
                  purchase_price: existingProductDto.purchase_price,
                  amount:
                    Number(existingProductDto.purchase_price) * stock_quantity,
                };
              }
              // await tx.products.update({
              //   where: { product_id: existingProductDto.product_id },
              //   data: updateData,
              // });

              // Actualiza producto mediante el metodo update de la clase ProductService.
              await this.productsService.update(
                existingProductDto.product_id,
                updateData,
              );

              // Registrar relación en Products_purchases.
              await tx.products_purchases.create({
                data: {
                  purchase_id: purchaseRecord.purchases_id,
                  product_id: product.product_id,
                  product_quantity: existingProductDto.stock_quantity,
                  product_unit_price: existingProductDto.purchase_price,
                },
              });
              updatedProducts.push(existingProductDto.product_id);
            }
          }

          // Procesar nuevos productos (si existen).
          if (
            createPurchaseDto.newProducts &&
            createPurchaseDto.newProducts.length > 0 &&
            files &&
            files.length > 0
          ) {
            for (let i = 0; i < createPurchaseDto.newProducts.length; i++) {
              // Este array es para almacenar el producto a crear y pasarselo a metodo create de productService que solo admite arrays de tipo Product.
              const newProductDto: Array<RCreateProductDto> = [];

              const newProduct = createPurchaseDto.newProducts[i];
              const newProductData = {
                branch: newProduct.branch,
                model: newProduct.model,
                description: newProduct.description,
                purchase_price: newProduct.purchase_price,
                stock_quantity: newProduct.stock_quantity,
                amount: newProduct.purchase_price * newProduct.stock_quantity,
                purchase_date: createPurchaseDto.purchase_date,
                category_name: newProduct.category_name,
                provider_name: newProduct.provider_name,
                pos_name: newProduct.pos_name,
              };

              newProductDto.push(newProductData);

              const createProductResponse = await this.productsService.create(
                newProductDto,
                files,
                'Service',
              );
              if (
                'createdProducts' in createProductResponse.data &&
                's3UploadedFiles' in createProductResponse.data
              ) {
                createdProductsResult.push(
                  createProductResponse.data.createdProducts[0],
                );
                s3UploadedFiles.push(
                  createProductResponse.data.s3UploadedFiles[0],
                );
              }

              // Registrar la relación en Products_purchases para el nuevo producto.
              await tx.products_purchases.create({
                data: {
                  purchase_id: purchaseRecord.purchases_id,
                  product_id: createdProductsResult[0].productId,
                  product_quantity: newProductData.stock_quantity,
                  product_unit_price: newProductData.purchase_price,
                },
              });
            }
          }
        },
        {
          timeout: 30000,
          maxWait: 35000,
          isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
        },
      );

      return {
        purchaseId: purchaseRecord.purchases_id,
        updatedProducts,
        createdProductsResult,
      };
    } catch (error) {
      // Rollback manual de archivos S3 en caso de error.
      for (const key of s3UploadedFiles) {
        try {
          const deleteResponse = await this.s3Service.deleteFile(key);
          if (!deleteResponse)
            console.error(`Failed to rollback S3 file ${key}:`);
        } catch (s3Error) {
          console.error(`Failed to rollback S3 file ${key}:`, s3Error);
        }
      }

      // Retornar error con detalles según el tipo
      if (error instanceof BadRequestException) {
        throw error;
      }
      if (error instanceof InternalServerErrorException) {
        throw error;
      }

      throw new InternalServerErrorException({
        errorType: 'DATABASE',
        message: 'An unexpected error occurred',
        failedOperations: [
          {
            operation: 'CREATE',
            errorDetails: error.message,
          },
        ],
      });
    }
  }

  // ---------- FINDALL ----------
  async findAll(queryParams: QueryParamsDto) {
    const { limit = 10, page = 1 } = queryParams;
    const result: Array<PurchasesResult> = [];

    try {
      const purchases = await this.prisma.purchases.findMany({
        include: {
          products_purchases: true,
          _count: {
            select: {
              products_purchases: true,
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
        skip: (page - 1) * limit,
        take: limit,
      });

      // TODO: Refactorizar este metodo a partir de aqui procesando las compras como en el metodo findAll del modulo Sales
      purchases.forEach((purchase) => {
        const o: PurchasesResult = {
          purchase_id: '',
          purchase_date: '',
          total_products_purchased: 0,
          total_stocks_added: 0,
          total_invested: 0,
          created_at: '',
          last_update: '',
        };
        let total_invested: number = 0,
          total_stocks_added: number = 0;

        o['purchase_id'] = purchase.purchases_id;
        o['purchase_date'] = purchase.purchase_date.toISOString();
        o['total_products_purchased'] = purchase._count.products_purchases;

        purchase.products_purchases.forEach((purchase_element) => {
          total_stocks_added += purchase_element.product_quantity;
          total_invested +=
            Number(purchase_element.product_unit_price) *
            purchase_element.product_quantity;
        });
        o['total_stocks_added'] = total_stocks_added;
        o['total_invested'] = total_invested;
        o['created_at'] = purchase.created_at.toISOString();
        o['last_update'] = purchase.last_update.toISOString();

        result.push(o);
      });
    } catch (error) {
      console.error('ERROR AL TRAER LISTA DE LOS COMPRAS DE BD: ', error);
      throw new InternalServerErrorException(
        'Unespected error. Check the logs',
      );
    }

    const total = await this.prisma.purchases.count();
    const meta = this.paginationService.getPaginationMeta(page, limit, total);

    return {
      total,
      result,
      meta,
    };
  }

  // ---------- FINDONE ----------
  async findOne(uuid: string) {
    try {
      const products_purchased: Array<ProductsPurchased> = [];

      const purchase = await this.prisma.purchases.findFirst({
        where: {
          purchases_id: uuid,
        },
        include: {
          products_purchases: {
            include: {
              products: {
                select: {
                  product_id: true,
                  branch: true,
                  model: true,
                  description: true,
                  category_name: true,
                  provider_name: true,
                  pos_name: true,
                  img: {
                    select: {
                      image_thumb_key: true,
                    },
                    take: 1,
                  },
                },
              },
            },
          },
        },
      });

      if (!purchase) {
        throw new NotFoundException('Purchase not found with the provided id.');
      }

      try {
        // Iterar sobre los productos comprados y crear objetos de tipo ProductsPurchased
        await Promise.all(
          purchase.products_purchases.map(async (element) => {
            const o: ProductsPurchased = {
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
            o['branch'] = element.products.branch;
            o['model'] = element.products.model;
            o['description'] = element.products.description;
            o['product_quantity'] = element.product_quantity;
            o['product_unit_price'] = Number(element.product_unit_price);
            o['category_name'] = element.products.category_name;
            o['provider_name'] = element.products.provider_name;
            o['pos_name'] = element.products.pos_name;

            let url: string = '';
            if (element.products.img.length > 0) {
              url = await this.s3Service.getObjectSignedUrl(
                element.products.img[0].image_thumb_key,
              );
              o['imageUrl'] = url;
            }

            products_purchased.push(o);
          }),
        );
      } catch (error) {
        console.error(
          `ERROR AL TRAER  DE BD EL DETALLE DE LA COMPRA CON EL ID "${uuid}": `,
          error,
        );
        throw new InternalServerErrorException(
          'Unespected error. Check the logs.',
        );
      }

      return {
        purchases_id: purchase?.purchases_id,
        purchase_date: purchase?.purchase_date,
        products_purchased,
        created_at: purchase?.created_at,
        last_update: purchase?.last_update,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(
        `ERROR AL TRAER  DE BD EL DETALLE DE LA COMPRA CON EL ID "${uuid}": `,
        error,
      );
      throw new InternalServerErrorException(
        'Unespected error. Check the logs.',
      );
    }
  }
  // ---------- UPDATE ----------
  async update(
    uuid: string,
    dto: UpdatePurchaseDto,
  ): Promise<{ message: string; purchase_id: string }> {
    try {
      return this.prisma.$transaction(async (tx) => {
        // 1) Verificar existencia
        const purchase = await tx.purchases.findUnique({
          where: { purchases_id: uuid },
          include: { products_purchases: true },
        });
        if (!purchase) {
          throw new NotFoundException(`Purchase ${uuid} not found.`);
        }

        /* 2) Posible cambio de fecha de la compra */
        const newPurchaseDate = dto.purchase_date
          ? new Date(dto.purchase_date)
          : undefined;
        if (newPurchaseDate) {
          await tx.purchases.update({
            where: { purchases_id: uuid },
            data: { purchase_date: newPurchaseDate },
          });
        }

        // 3) Actualizar productos existentes
        if (dto.updatedProducts?.length) {
          for (const p of dto.updatedProducts) {
            const relation = purchase.products_purchases.find(
              (r) => r.product_id === p.product_id,
            );
            if (!relation) {
              throw new BadRequestException(
                `Product ${p.product_id} is not part of purchase ${uuid}.`,
              );
            }

            // diferencia de cantidad para ajustar stock
            const deltaQty =
              (p.product_quantity ?? relation.product_quantity) -
              relation.product_quantity;

            await this.inventoryHelpers._applyStockDelta(
              tx,
              p.product_id,
              deltaQty,
            );

            const updatedRelation = await tx.products_purchases.update({
              where: {
                purchase_id_product_id: {
                  purchase_id: uuid,
                  product_id: p.product_id,
                },
              },
              data: {
                product_quantity: p.product_quantity,
                product_unit_price: p.product_unit_price,
              },
            });

            /* Sincronizar meta del producto (fecha, precio, amount) */
            if (newPurchaseDate) {
              await this.inventoryHelpers._syncProductMeta(
                tx,
                p.product_id,
                newPurchaseDate,
                p.product_unit_price ??
                  Number(updatedRelation.product_unit_price),
                this.logger,
              );
            }
          }
        }

        // 4) Eliminar productos de la compra
        if (dto.deletedProducts?.length) {
          for (const d of dto.deletedProducts) {
            await this.inventoryHelpers._applyStockDelta(
              tx,
              d.product_id,
              -d.product_quantity,
            );

            await tx.products_purchases.delete({
              where: {
                purchase_id_product_id: {
                  purchase_id: uuid,
                  product_id: d.product_id,
                },
              },
            });
          }
        }

        /* 5) Si sólo cambió la fecha, sincronizar el resto de productos no tocados */
        if (newPurchaseDate) {
          for (const rel of purchase.products_purchases) {
            /* Evitar repetir los que ya ajustamos arriba */
            const alreadyUpdated =
              dto.updatedProducts?.some(
                (u) => u.product_id === rel.product_id,
              ) ?? false;
            const deleted =
              dto.deletedProducts?.some(
                (x) => x.product_id === rel.product_id,
              ) ?? false;
            if (!alreadyUpdated && !deleted) {
              await this.inventoryHelpers._syncProductMeta(
                tx,
                rel.product_id,
                newPurchaseDate,
                Number(rel.product_unit_price),
                this.logger,
              );
            }
          }
        }

        this.logger.log(`Purchase ${uuid} updated`);
        return { message: 'Purchase updated successfully.', purchase_id: uuid };
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      console.error(error);
      throw new InternalServerErrorException(
        `Unexpeted error while updating the purchase detail with id:'${uuid}'.`,
      );
    }
  }

  // ---------- DELETE ----------
  async remove(uuid: string) {
    try {
      return this.prisma.$transaction(async (tx) => {
        const purchase = await tx.purchases.findUnique({
          where: { purchases_id: uuid },
          include: { products_purchases: true },
        });
        if (!purchase) {
          throw new NotFoundException(`Purchase ${uuid} not found.`);
        }

        // revertir stocks
        for (const rel of purchase.products_purchases) {
          await this.inventoryHelpers._applyStockDelta(
            tx,
            rel.product_id,
            -rel.product_quantity,
          );
        }

        // eliminar relaciones y compra
        await tx.products_purchases.deleteMany({
          where: { purchase_id: uuid },
        });
        await tx.purchases.delete({ where: { purchases_id: uuid } });

        this.logger.warn(`Purchase ${uuid} deleted`);
        return true;
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      console.error(error);
      throw new InternalServerErrorException(
        `Unexpeted error while deleting the purchase with id:'${uuid}'.`,
      );
    }
  }

  //TODO: Implementar soft delete
}
