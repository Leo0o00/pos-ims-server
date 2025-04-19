import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RCreateProductDto } from './dto/r-create-product.dto';
import { S3Service } from '../common/s3/s3.service';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from '../common/pagination/pagination.service';
import { EncryptionService } from 'src/common/encryption/encryption.service';
import * as sharp from 'sharp';
import { Prisma } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryParamsDto } from '../common/dto/query-params.dto';


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
}

type RequestFromControllerResponse = {
    message: string;
    data: {
        productId: string;
        imageUrl: string;
    }[];
}

type ProductServiceResponseType = RequestFromAntotherServiceResponse | RequestFromControllerResponse;

@Injectable()
export class ProductsService {
  constructor(
    private readonly s3Service: S3Service,
    private prisma: PrismaService,
    private readonly paginationService: PaginationService,
    private readonly encryptionService: EncryptionService,
    
    
  ) {
  }
  
  
  async create(products: RCreateProductDto[], images: Array<Express.Multer.File>, source?: Source): Promise<ProductServiceResponseType> {
    
    // Arreglo para almacenar las claves de archivos subidos a S3 para poder revertir en caso de fallo.
    const s3UploadedFiles: string[] = [];
    const createdProducts: Array<{ productId: string; imageUrl: string }> = [];
    
    // Verificar que exista una relación 1:1 entre archivos y nuevos productos.
    if (images.length !== products.length) {
      throw new BadRequestException(
        'The number of files must match the number of new products.'
      );
    }
    // 1.Prisma Transaction
    try {
      return this.prisma.$transaction(async (tx) => {
        
        // 2. Create products
        for (const [index, product] of products.entries()) {
          // Validar existencia de relaciones: categoría, proveedor y punto de venta.
          const category = await tx.products_categories.findUnique({
            where: { name: product.category_name },
          });
          if (!category) {
            throw new BadRequestException(
              `Category ${product.category_name} not found.`
            );
          }
          const provider = await tx.providers.findUnique({
            where: { name: product.provider_name },
          });
          if (!provider) {
            throw new BadRequestException(
            `Provider ${product.provider_name} not found.`
          );
        }
        const pos = await tx.points_of_sales.findUnique({
          where: { name: product.pos_name },
        });
        if (!pos) {
          throw new BadRequestException(
            `Point of Sale ${product.pos_name} not found.`
          );
        }
        
        let productData: Record <string, string> = {};
        
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
              }
            },
            select: {
              product_id: true
            }
          })
          
        } catch (error) {
          if (error instanceof BadRequestException) {
            throw error;
          }
          
          console.error('ERROR WHILE CREATING PRODUCT: ', error);
          throw new InternalServerErrorException('Error while creating product in database. Check the logs.');
            
        }
        

        const encryptedFileName = this.encryptionService.encrypt(images[index].originalname);
        const mimeType = images[index].mimetype;
        const fileSharpened = await sharp(images[index].buffer)
        .resize({height: 2000, width: 2000, fit: 'inside'})
        .toBuffer();
        
        
        const s3UploadResult = await this.s3Service.uploadFile(
          fileSharpened,
          encryptedFileName,
          mimeType);
        
        if (!s3UploadResult) {
          throw new InternalServerErrorException(`Error uploading image for product ${productData.product_id}`
          );
        }

        // Registrar la clave del archivo para un posible rollback.
        s3UploadedFiles.push(encryptedFileName);
        
        try {
          await tx.products_images.create({
            data: { id: productData.product_id, image_name: encryptedFileName }
          })
        } catch (error) {
          
          console.error('ERROR AL VINCULAR IMAGEN CON PRODUCTO EN BD: ', error);
          throw new InternalServerErrorException('Error while associating image with product in database. Check the logs.');
          
        }
        // Obtener la URL firmada para la imagen y agregarla al arreglo de respuesta.
        const imageUrl = await this.s3Service.getObjectSignedUrl(
          encryptedFileName
        );
        createdProducts.push({
          productId: productData.product_id,
          imageUrl,
        });
      }    
      // 3. Return response
      // Si el origen es 'Service', retornar la respuesta con los datos de los productos creados y las claves de S3.
      if (source && source === 'Service') {
        return {
          data: {
            createdProducts,
            s3UploadedFiles

          }
          
        };
      }

      // // Si el origen es 'Request', retornar la respuesta con los datos de los productos creados y las URLs firmadas de las imágenes.
      // if (source && source === 'Request') {
      //   return {
      //     message: 'Request processed successfully.',
      //     data: createdProducts,
      //   };
      // }
      
      // Si no se especifica el origen, retornar la respuesta con los datos de los productos creados y las URLs firmadas de las imágenes.
      return {
        message: 'Request processed successfully.',
        data: createdProducts,
      };
      
      },
      {
        timeout: 30000, // Increase timeout to 30 seconds
        maxWait: 35000, // Maximum time to wait for transaction to start
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted // Optional: specify isolation level
      }
      )
    
  } catch (error) {
    // Rollback manual de archivos S3 en caso de error.
    for (const key of s3UploadedFiles) {
      try {
        await this.s3Service.deleteFile(key);
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

    const { query, limit = 10, page = 1} = queryParams;
    let filters: Array<Record<string, Filters>> = []
    
    if (query) {
      filters = [
        { branch: { contains: query, mode: 'insensitive' } },
        { model: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { category_name: { contains: query, mode: 'insensitive' } },
        { provider_name: { contains: query, mode: 'insensitive' } },
        { pos_name: { contains: query, mode: 'insensitive' } },
  
      ]
      
    }
    const where = query ? { OR: filters } : {};

    try {
      const result = await this.prisma.products.findMany({
        where,
        include: {
          img: { 
            select: {
              image_name: true
            },
            take: 1
          }
        },
        orderBy: {
          created_at: 'desc'
        },
        skip: (page - 1) * limit,
        take: limit,
      });

      for (const product of result) {
        
        if (product.img.length > 0) {
          const imageUrl = await this.s3Service.getObjectSignedUrl(product.img[0].image_name);
          product.img[0].image_name = imageUrl;
        }

      }

      const total = query ? result.length : await this.prisma.products.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);
      
      
      return {
        total,
        result,
        meta,
      };
  
    } catch (error) {
      console.error('ERROR AL TRAER LISTA DE LOS PRODUCTOS DE BD: ', error);
      throw new InternalServerErrorException('Unespected error. Check the logs')
    }
}

  async findOne(uuid: string) {
    try {
      const product = await this.prisma.products.findFirst({
        where: {
          product_id: uuid
        },
      })
      
      
      if(!product) {
        throw new BadRequestException('Product not found with the provided id.')
      }

      const images = await this.prisma.products_images.findMany({
        where: {
          id: product.product_id
        },
        // select: {
        //   image_name: true
        // }
      })
      console.log(images);
      
      const imagesUrls: {imageName: string, url: string}[] = [];
      
      
      if (images.length > 0) {
        for (const img of images) {
          const url = await this.s3Service.getObjectSignedUrl(img.image_name);
          imagesUrls.push({imageName: img.image_name, url});
        }
      }

      return {
        product_id: product.product_id,
        branch: product.branch,
        model: product.model,
        description: product.description,
        purchase_price: product.purchase_price,
        stock_quantity: product.stock_quantity,
        amount: product.amount,
        purchase_date: product.purchase_date,
        category_name: product.category_name,
        provider_name: product.provider_name,
        pos_name: product.pos_name,
        created_at: product.created_at,
        last_update: product.last_update,
        imagesUrls
      };
      
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unespected error.');
    }


  }

  async update(uuid: string, updateProductDto?: UpdateProductDto, files?: Array<Express.Multer.File>, deletedImages?: string[]) {
    
    try {
      // Verifica que el usuario proporciona un uuid de un producto existente en BD
      const existingProduct = await this.prisma.products.findFirst({
        where: {
          product_id: uuid
        },
      })

      if(!existingProduct) {
        throw new BadRequestException(`Product with id ${uuid} not found.`);
        
      }
    
      
      return await this.prisma.$transaction(async (tx) => {
        // Verifica que el usuario proporciona datos para actualizar
        if (updateProductDto && Object.keys(updateProductDto).length > 0) { 

          try {
            await tx.products.update({
              where: {
                product_id: uuid
              },
              data: updateProductDto
            })
          } catch (error) {
            console.error(error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              // Handle specific Prisma errors
              if (error.code === 'P2025') {
                // Handle missing record
                throw new BadRequestException('Error while updating product in database: No Point of Sales, Provider or Product Category was found with that name.');
                
              } else {
                throw new InternalServerErrorException('Error while updating product in database. Check the logs.');
              }
            }
            throw new InternalServerErrorException('Unespected error while updating product in database. Check the logs.');
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
                          image_name: imageName
                        }
                      ]
                    }
                  });
                  if (imagesEliminated.count === 0) {
                    throw new InternalServerErrorException('Error while deleting images from database. Check the logs.');
                  }
                  const S3DeleteResponse = await this.s3Service.deleteFile(imageName);
                  console.log('Respuesta del comando de eliminar foto del S3: ', S3DeleteResponse);
                  if (!S3DeleteResponse) {
                    throw new InternalServerErrorException(`Error while deleting image from S3 Service: "${imageName}".`);
                  }
                })
              )
            } catch (error) {
              console.error(error);
              if (error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new InternalServerErrorException('Error while deleting images from database. Check the logs.')
              }
              if (error instanceof InternalServerErrorException) { 
                throw error;
              }
              throw new InternalServerErrorException('Unespected error while deleting images from database. Check the logs.')
            }
        }
  
        // Verifica si el usuario proporciona un array de imagenes para agragarle al producto
        if (files && files.length > 0) {
  
          try {
            await Promise.all(
  
              
              files.map(async (file) => {
                const encryptedFileName = this.encryptionService.encrypt(file.originalname);
                const mimeType = file.mimetype;
                const fileSharpened = await sharp(file.buffer)
                .resize({ height: 2000, width: 2000, fit: 'inside' })
                .toBuffer();
                
                const s3UploadResult = await this.s3Service.uploadFile(fileSharpened, encryptedFileName, mimeType);
                if (!s3UploadResult) {
                  throw new InternalServerErrorException('Error while uploading product image to S3 Service.');
                };
                
                await tx.products_images.create({
                  data: {
                    id: uuid,
                    image_name: encryptedFileName,
                  }
                });
                
              })
            )
            
          } catch (error) {
            console.error(error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new InternalServerErrorException('Error while creating image name in database. Check the logs.')
            }
            throw error;
          }
        }
  
        return {
          message: 'Product updated successfully.',
          product_id: uuid
        }
  
      },
        {
          timeout: 30000, // Increase timeout to 30 seconds
          maxWait: 35000, // Maximum time to wait for transaction to start
          isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted // Optional: specify isolation level
        }
      )
      
        } catch (error) {
        console.error('Transaction failed:', error);
        throw new InternalServerErrorException('Database transaction failed');
      }
      
  
    }
        

  async remove(uuid: string[]) {
    try {
      
      return this.prisma.$transaction(async (tx) => {

        await Promise.all(
          uuid.map(async (id) => {
            const existingProduct = await tx.products.findFirst({
              where: {
                product_id: id,
              },
            });

            if (!existingProduct) {
              throw new NotFoundException(`Product not found with the provided id: ${id}.`);
            }

            const images = await tx.products_images.findMany({
              where: {
                id: id,
              },
            });

            if (images.length > 0) {
              await Promise.all(
                images.map(async (image) => {
                  const S3DeleteResponse = await this.s3Service.deleteFile(image.image_name);
                  if (!S3DeleteResponse) {
                    throw new InternalServerErrorException(`Error while deleting image from S3 Service: "${image.image_name}".`);
                  }
                })
              );
            }

            // await tx.products_images.deleteMany({
            //   where: {
            //     id: id,
            //   },
            // });

            await tx.products.delete({
              where: {
                product_id: id,
              },
            });
          })
        );

        return {
          message: 'Products deleted successfully.',
        };
      },
        {
          timeout: 30000, // Increase timeout to 30 seconds
          maxWait: 35000, // Maximum time to wait for transaction to start
          isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted // Optional: specify isolation level
        }
     )


    } catch (error) {
      if (error instanceof NotFoundException) { 
        throw error;
      }
      if (error instanceof InternalServerErrorException) { 
        throw error;
      }
      
      console.error(error);
      throw new InternalServerErrorException('Unerspected error while proccessing the request. Check the logs.')
    }
    
  }
}
