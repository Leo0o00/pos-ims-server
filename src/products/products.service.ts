import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { RCreateProductDto } from './dto/r-create-product.dto';
import { S3Service } from '../common/s3/s3.service';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from '../common/pagination/pagination.service';
import { EncryptionService } from 'src/common/encryption/encryption.service';
import { Prisma } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryParamsDto } from '../common/dto/query-params.dto';
// import { TxClient } from 'src/prisma/types/txclient.type';
import { mapProductToDto } from './mapper/product.mapper';
import { MediaService } from 'src/common/media/media.service';
import { DeletedImagesDto } from './dto/deleted-images.dto';
import {
  CACHE_KEYS,
  CACHE_TTL,
} from '../common/cache/constants/cache.constants';
import { CacheService } from '../common/cache/cache.service';
import { ProductListItemsDto } from './dto/product-list-items.dto';
import { MetaType } from '../common/types/meta.type';

type Source = 'Service' | 'Request';

type RequestFromAntotherServiceResponse = {
  data: {
    createdProducts: {
      productId: string;
      imageUrl: string;
    }[];
    s3UploadedFiles: string[];
  };
  message?: undefined;
};

type RequestFromControllerResponse = {
  message: string;
  data: {
    productId: string;
    imageUrl: string;
  }[];
};

type ProductServiceResponseType =
  | RequestFromAntotherServiceResponse
  | RequestFromControllerResponse;

type FindAllProductsResult = {
  total: number;
  result: ProductListItemsDto[];
  meta: MetaType;
};

type OriginalImagesUrls = {
  imageOriginalSizeName: string;
  imageOriginalSizelUrl: string;
};

type FindOneProductsResult = {
  product_id: string;
  branch: string;
  model: string;
  description: string;
  purchase_price: number;
  stock_quantity: number;
  amount: number;
  purchase_date: Date;
  category_name: string;
  provider_name: string;
  pos_name: string;
  created_at: Date;
  last_update: Date;
  imagesUrls: OriginalImagesUrls[];
};

@Injectable()
export class ProductsService {
  private logger = new Logger(ProductsService.name);
  constructor(
    private readonly s3Service: S3Service,
    private readonly media: MediaService,
    private prisma: PrismaService,
    private readonly paginationService: PaginationService,
    private readonly encryptionService: EncryptionService,
    private readonly cacheService: CacheService,
  ) {}

  async create(
    products: RCreateProductDto[],
    images: Array<Express.Multer.File>,
    source: Source = 'Request',
    // db: TxClient | PrismaService = this.prisma,   // <‑‑ acepta cliente de contexto
  ): Promise<ProductServiceResponseType> {
    // Arreglo para almacenar las claves de archivos subidos a S3 para poder revertir en caso de fallo.
    const s3UploadedFiles: string[] = [];
    const createdProducts: Array<{ productId: string; imageUrl: string }> = [];

    // Verificar que exista una relación 1:1 entre archivos y nuevos productos.
    if (images.length !== products.length) {
      throw new BadRequestException(
        'The number of files must match the number of new products.',
      );
    }
    // 1.Prisma Transaction
    try {
      // TODO: Esto tengo que investigarlo luego
      // // Si el llamador ya abrió transacción => la reutilizamos
      // const trx = 'transaction' in db ? await db : (db as TxClient);
      // return trx.$transaction(async (tx) => {

      return this.prisma.$transaction(
        async (tx) => {
          // 2. Create products
          for (const [index, product] of products.entries()) {
            // Validar existencia de relaciones: categoría, proveedor y punto de venta.
            const category = await tx.products_categories.findUnique({
              where: { name: product.category_name },
            });
            if (!category) {
              throw new BadRequestException(
                `Category ${product.category_name} not found.`,
              );
            }
            const provider = await tx.providers.findUnique({
              where: { name: product.provider_name },
            });
            if (!provider) {
              throw new BadRequestException(
                `Provider ${product.provider_name} not found.`,
              );
            }
            const pos = await tx.points_of_sales.findUnique({
              where: { name: product.pos_name },
            });
            if (!pos) {
              throw new BadRequestException(
                `Point of Sale ${product.pos_name} not found.`,
              );
            }

            let productData: Record<string, string> = {};

            try {
              productData = await tx.products.create({
                data: {
                  branch: product.branch,
                  model: product.model,
                  description: product.description,
                  purchase_price: product.purchase_price,
                  stock_quantity: product.stock_quantity,
                  amount: product.amount,
                  purchase_date: product.purchase_date,
                  category: {
                    connect: {
                      name: product.category_name,
                    },
                  },
                  provider: {
                    connect: {
                      name: product.provider_name,
                    },
                  },
                  points_of_sales: {
                    connect: {
                      name: product.pos_name,
                    },
                  },
                },
                select: {
                  product_id: true,
                },
              });
            } catch (error) {
              if (error instanceof BadRequestException) {
                throw error;
              }

              console.error('ERROR WHILE CREATING PRODUCT: ', error);
              throw new InternalServerErrorException(
                'Error while creating product in database. Check the logs.',
              );
            }

            const encryptedFileName = this.encryptionService.encrypt(
              images[index].originalname,
            );
            const mimeType = images[index].mimetype;

            const s3UploadResult = await this.media
              .processAndUpload(
                images[index].buffer,
                encryptedFileName,
                mimeType,
              )
              .catch((err) => {
                throw new InternalServerErrorException(
                  `Error processing and uploading image for product ${productData.product_id}: ${err.message}`,
                );
              });

            if (!s3UploadResult) {
              throw new InternalServerErrorException(
                `Error uploading image for product ${productData.product_id}`,
              );
            }

            // Registrar la clave de los archivos para un posible rollback.
            s3UploadedFiles.push(s3UploadResult.originalKey);
            s3UploadedFiles.push(s3UploadResult.thumbKey);

            try {
              await tx.products_images.create({
                data: {
                  id: productData.product_id,
                  image_original_key: s3UploadResult.originalKey,
                  image_thumb_key: s3UploadResult.thumbKey,
                },
              });
            } catch (error) {
              console.error(
                'ERROR AL VINCULAR IMAGEN CON PRODUCTO EN BD: ',
                error,
              );
              throw new InternalServerErrorException(
                'Error while associating image with product in database. Check the logs.',
              );
            }
            // Obtener la URL firmada para la imagen y agregarla al arreglo de respuesta.
            const thumbUrl = await this.s3Service.getObjectSignedUrl(
              s3UploadResult.thumbKey,
            );
            createdProducts.push({
              productId: productData.product_id,
              imageUrl: thumbUrl,
            });
          }

          await this.invalidateProductsListCache();

          // 3. Return response
          // Si el origen es 'Service', retornar la respuesta con los datos de los productos creados y las claves de S3.
          if (source && source === 'Service') {
            return {
              data: {
                createdProducts,
                s3UploadedFiles, // Esto se retorna para que en el servicio que llama al metodo se pueda hacer un rollback manual de archivos subidos al S3 en caso de error.
              },
            };
          }

          // Si no se especifica el origen, retornar la respuesta con los datos de los productos creados y las URLs firmadas de las imágenes.
          return {
            message: 'Request processed successfully.',
            data: createdProducts,
          };
        },
        {
          timeout: 30000, // Increase timeout to 30 seconds
          maxWait: 35000, // Maximum time to wait for transaction to start
          isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted, // Optional: specify isolation level
        },
      );
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
      if (error.message && error.message.includes('upload')) {
        throw new InternalServerErrorException({
          errorType: 'FILE_STORAGE',
          message: error.message,
          failedOperations: [],
        });
      }
      throw new InternalServerErrorException({
        errorType: 'DATABASE',
        message: error.message,
        failedOperations: [],
      });
    }
  }

  async findAll(queryParams: QueryParamsDto) {
    interface Filters {
      contains: string;
      mode: string;
    }

    const {
      query,
      limit = 10,
      page = 1,
      minStock,
      minPrice,
      maxPrice,
    } = queryParams;

    //Construir la clave de caché
    const cacheKey = CACHE_KEYS.PRODUCTS_LIST(
      page,
      limit,
      query,
      minStock,
      minPrice,
      maxPrice,
    );
    //Intentar obtener de la caché
    try {
      const cachedProducts =
        await this.cacheService.get<FindAllProductsResult>(cacheKey);
      if (cachedProducts) {
        this.logger.log(
          `Returning paged Products Categories list from cache for key: ${cacheKey}`,
        );
        return cachedProducts;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing the cache for the key: ${cacheKey}: `,
        error,
      );
    }

    let filters: Array<Record<string, Filters>> = [];

    if (query) {
      filters = [
        { branch: { contains: query, mode: 'insensitive' } },
        { model: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { category_name: { contains: query, mode: 'insensitive' } },
        { provider_name: { contains: query, mode: 'insensitive' } },
        { pos_name: { contains: query, mode: 'insensitive' } },
      ];
    }
    const where: Prisma.ProductsWhereInput = {
      AND: [
        query ? { OR: filters } : {},
        minStock ? { stock_quantity: { gte: minStock } } : {},
        minPrice ? { purchase_price: { gte: minPrice } } : {},
        maxPrice ? { purchase_price: { lte: maxPrice } } : {},
      ],
    };
    try {
      const raw = await this.prisma.products.findMany({
        where,
        select: {
          product_id: true,
          branch: true,
          model: true,
          description: true,
          purchase_price: true,
          stock_quantity: true,
          amount: true,
          purchase_date: true,
          category_name: true,
          provider_name: true,
          pos_name: true,
          created_at: true,
          last_update: true,
          deleted_at: true,
          img: true,
        },
        orderBy: { created_at: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      });

      const result: ProductListItemsDto[] = await Promise.all(
        raw.map((p) => mapProductToDto(p, this.s3Service)),
      );

      const total = await this.prisma.products.count({ where });
      const meta: MetaType = this.paginationService.getPaginationMeta(
        page,
        limit,
        total,
      );

      //Guardar en caché antes de retornar
      await this.cacheService.setWithLogMessage(
        cacheKey,
        { total, result, meta },
        CACHE_TTL.EIGHT_HOURS,
        'Products list',
      );

      return {
        total,
        result,
        meta,
      };
    } catch (error) {
      console.error('ERROR AL TRAER LISTA DE LOS PRODUCTOS DE BD: ', error);
      throw new InternalServerErrorException(
        'Unespected error. Check the logs',
      );
    }
  }

  async findOne(uuid: string) {
    const cacheKey = CACHE_KEYS.PRODUCT_BY_ID(uuid);

    try {
      const cachedProduct =
        await this.cacheService.get<FindOneProductsResult>(cacheKey);
      if (cachedProduct) {
        this.logger.log(`Returning product from cache for product ID: ${uuid}`);
        return cachedProduct;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing cache for product ID ${uuid}: `,
        error,
      );
    }

    try {
      const product = await this.prisma.products.findFirst({
        select: {
          product_id: true,
          branch: true,
          model: true,
          description: true,
          purchase_price: true,
          stock_quantity: true,
          amount: true,
          purchase_date: true,
          category_name: true,
          provider_name: true,
          pos_name: true,
          created_at: true,
          last_update: true,
          img: true,
        },
        where: {
          product_id: uuid,
        },
      });

      if (!product) {
        throw new NotFoundException('Product not found with the provided id.');
      }

      const imagesUrls: Array<OriginalImagesUrls> = [];

      if (product.img.length > 0) {
        for (const img of product.img) {
          const imageOriginalSizelUrl = await this.s3Service.getObjectSignedUrl(
            img.image_original_key,
          );
          imagesUrls.push({
            imageOriginalSizeName: img.image_original_key,
            imageOriginalSizelUrl,
          });
        }
      }

      const productDetailCurated: FindOneProductsResult = {
        product_id: product.product_id,
        branch: product.branch,
        model: product.model,
        description: product.description,
        purchase_price: Number(product.purchase_price),
        stock_quantity: product.stock_quantity,
        amount: Number(product.amount),
        purchase_date: product.purchase_date,
        category_name: product.category_name,
        provider_name: product.provider_name,
        pos_name: product.pos_name,
        created_at: product.created_at,
        last_update: product.last_update,
        imagesUrls,
      };

      await this.cacheService.setWithLogMessage(
        cacheKey,
        productDetailCurated,
        CACHE_TTL.EIGHT_HOURS,
        'Product details',
      );

      return productDetailCurated;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unespected error.');
    }
  }

  async update(
    uuid: string,
    updateProductDto?: UpdateProductDto,
    files?: Array<Express.Multer.File>,
    deletedImages?: DeletedImagesDto[],
  ) {
    const uploadedFiles: string[] = [];

    try {
      // Verifica que el usuario proporciona un uuid de un producto existente en BD
      const existingProduct = await this.prisma.products.findFirst({
        where: {
          product_id: uuid,
        },
      });

      if (!existingProduct) {
        throw new NotFoundException(`Product with id ${uuid} not found.`);
      }

      return await this.prisma.$transaction(
        async (tx) => {
          // Verifica que el usuario proporciona datos para actualizar
          if (updateProductDto && Object.keys(updateProductDto).length > 0) {
            try {
              await tx.products.update({
                where: {
                  product_id: uuid,
                },
                data: updateProductDto,
              });
            } catch (error) {
              console.error(error);
              if (error instanceof Prisma.PrismaClientKnownRequestError) {
                // Handle specific Prisma errors
                if (error.code === 'P2025') {
                  // Handle missing record
                  throw new BadRequestException(
                    'Error while updating product in database: No Point of Sales, Provider or Product Category was found with that name.',
                  );
                } else {
                  throw new InternalServerErrorException(
                    'Error while updating product in database. Check the logs.',
                  );
                }
              }
              throw new InternalServerErrorException(
                'Unespected error while updating product in database. Check the logs.',
              );
            }
          }
          // Verifica si el usuario proporciona un array de imagenes para eliminar
          if (deletedImages && deletedImages.length > 0) {
            try {
              await Promise.all(
                deletedImages.map(async (imageName) => {
                  const imagesEliminated = await tx.products_images.deleteMany({
                    where: {
                      AND: [
                        {
                          id: uuid,
                        },
                        {
                          image_original_key: imageName.imageOriginalSizeName,
                        },
                      ],
                    },
                  });
                  if (imagesEliminated.count === 0) {
                    throw new InternalServerErrorException(
                      'Error while deleting images from database. Check the logs.',
                    );
                  }
                  const S3DeleteResponse = await this.s3Service.deleteFile(
                    imageName.imageOriginalSizeName,
                  );
                  console.log(
                    'Respuesta del comando de eliminar foto del S3: ',
                    S3DeleteResponse,
                  );
                  if (!S3DeleteResponse) {
                    throw new InternalServerErrorException(
                      `Error while deleting image from S3 Service: "${imageName}".`,
                    );
                  }
                }),
              );
            } catch (error) {
              console.error(error);
              if (error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new InternalServerErrorException(
                  'Error while deleting images from database. Check the logs.',
                );
              }
              if (error instanceof InternalServerErrorException) {
                throw error;
              }
              throw new InternalServerErrorException(
                'Unespected error while deleting images from database. Check the logs.',
              );
            }
          }

          // Verifica si el usuario proporciona un array de imagenes para agragarle al producto
          if (files && files.length > 0) {
            try {
              await Promise.all(
                files.map(async (file) => {
                  const encryptedFileName = this.encryptionService.encrypt(
                    file.originalname,
                  );
                  const mimeType = file.mimetype;
                  const s3UploadResult = await this.media
                    .processAndUpload(file.buffer, encryptedFileName, mimeType)
                    .catch((err) => {
                      throw new InternalServerErrorException(
                        `Error processing and uploading image for product ${existingProduct.product_id}: ${err.message}`,
                      );
                    });

                  if (!s3UploadResult) {
                    throw new InternalServerErrorException(
                      'Error while uploading product image to S3 Service.',
                    );
                  }

                  await tx.products_images.create({
                    data: {
                      id: uuid,
                      image_original_key: s3UploadResult.originalKey,
                      image_thumb_key: s3UploadResult.thumbKey,
                    },
                  });

                  uploadedFiles.push(s3UploadResult.originalKey);
                  uploadedFiles.push(s3UploadResult.thumbKey);
                }),
              );
            } catch (error) {
              console.error(error);
              if (error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new InternalServerErrorException(
                  'Error while creating image name in database. Check the logs.',
                );
              }
              throw error;
            }
          }

          await this.invalidateProductsCacheById(uuid);
          await this.invalidateProductsListCache();

          return true;
        },
        {
          timeout: 30000, // Increase timeout to 30 seconds
          maxWait: 35000, // Maximum time to wait for transaction to start
          isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted, // Optional: specify isolation level
        },
      );
    } catch (error) {
      if (error instanceof NotFoundException) throw error;

      console.error('Error while updating product. Transaction failed:', error);
      // Rollback manual de archivos S3 en caso de error.
      for (const key of uploadedFiles) {
        try {
          const deleteResponse = await this.s3Service.deleteFile(key);
          if (!deleteResponse)
            console.error(`Failed to rollback S3 file ${key}:`);
        } catch (s3Error) {
          console.error(`Failed to rollback S3 file ${key}:`, s3Error);
        }
      }
      throw new InternalServerErrorException('Database transaction failed');
    }
  }

  async remove(uuid: string[]) {
    try {
      return this.prisma.$transaction(
        async (tx) => {
          await Promise.all(
            uuid.map(async (id) => {
              const existingProduct = await tx.products.findFirst({
                where: {
                  product_id: id,
                },
                include: {
                  img: true,
                },
              });

              if (!existingProduct) {
                throw new NotFoundException(
                  `Product not found with the provided id: ${id}.`,
                );
              }

              if (existingProduct.img.length > 0) {
                await Promise.all(
                  existingProduct.img.map(async (image) => {
                    const S3DeleteOriginalResponse =
                      await this.s3Service.deleteFile(image.image_original_key);
                    const S3DeleteThumbResponse =
                      await this.s3Service.deleteFile(image.image_thumb_key);
                    if (!S3DeleteOriginalResponse) {
                      throw new InternalServerErrorException(
                        `Error while deleting original size image from S3 Service: "${image.image_original_key}".`,
                      );
                    }
                    if (!S3DeleteThumbResponse) {
                      throw new InternalServerErrorException(
                        `Error while deleting thumb size image from S3 Service: "${image.image_thumb_key}".`,
                      );
                    }
                  }),
                );
              }
              try {
                await tx.products.delete({
                  where: {
                    product_id: id,
                  },
                });
              } catch (error) {
                if (error.code === 'P2003') {
                  throw new BadRequestException(
                    `The product '${id}' cannot be eliminated because there is another entity associated with it.`,
                  );
                }
              }
            }),
          );

          await Promise.all(
            uuid.map(async (id) => {
              await this.invalidateProductsCacheById(id);
            }),
          );

          await this.invalidateProductsListCache();

          return true;
        },
        {
          timeout: 30000, // Increase timeout to 30 seconds
          maxWait: 35000, // Maximum time to wait for transaction to start
          isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted, // Optional: specify isolation level
        },
      );
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof InternalServerErrorException) {
        throw error;
      }
      if (error instanceof BadRequestException) {
        throw error;
      }

      console.error(error);
      throw new InternalServerErrorException(
        'Unerspected error while proccessing the request. Check the logs.',
      );
    }
  }

  //TODO: Implementar soft delete

  async invalidateProductsCacheById(uuid: string) {
    const cacheKeyIndividual = CACHE_KEYS.PRODUCT_BY_ID(uuid);
    try {
      const deleteResult = await this.cacheService.del(cacheKeyIndividual);
      if (!deleteResult) {
        this.logger.log(`Individual cache not found for Products ID: ${uuid}`);
        return;
      }
      this.logger.log(`Individual cache invalidated for Products ID: ${uuid}`);
    } catch (error) {
      this.logger.error(
        `Error invalidating individual cache for Products ID ${uuid}: `,
        error,
      );
    }
  }

  async invalidateProductsListCache() {
    await this.cacheService.invalidateListCacheByPattern(
      'products:list',
      'Products',
    );
  }
}
