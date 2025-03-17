import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { RCreateProductDto } from './dto/r-create-product.dto';
import { S3Service } from '../common/s3/s3.service';
import { PrismaService } from '../prisma/prisma.service';
import { PaginationService } from '../common/pagination/pagination.service';
import { EncryptionService } from 'src/common/encryption/encryption.service';
import * as sharp from 'sharp';
import { Prisma } from '@prisma/client';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly s3Service: S3Service,
    private prisma: PrismaService,
    private readonly paginationService: PaginationService,
    private readonly encryptionService: EncryptionService

  ) {}


  async create(products: RCreateProductDto[], images: Array<Express.Multer.File>) {

    // 1.Prisma Transaction
    return this.prisma.$transaction(async (tx) => {
      const createdProductsIndex: number[] = [];
      const uncreatedProductsIndex: {index: number, errorMessage: string}[] = [];

      // 2. Create products
      for (const [index, product] of products.entries()) {
        let productData: { product_id: string} | null = null;
        
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
          console.error(error);
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Handle specific Prisma errors
            if (error.code === 'P2002') {
            // Handle unique constraint violation
            uncreatedProductsIndex.push({index: index, errorMessage: 'Error while creating product in database: Unique contraint violation.'});
            continue;
            } else if (error.code === 'P2025') {
              // Handle missing record
              uncreatedProductsIndex.push({index: index, errorMessage: 'Error while creating product in database: No Point of Sales, Provider or Product Category was found with that name.'});
              continue;
            } else {
              // Handle other Prisma errors
              uncreatedProductsIndex.push({index: index, errorMessage: 'Error while creating product in database.'});
              continue;
            }
          }
            
        }
        
        if(!productData) {
          continue;
        }

        const encryptedName = this.encryptionService.encrypt(images[index].originalname);
        const mimeType = images[index].mimetype;
        const fileSharpened = await sharp(images[index].buffer)
        .resize({height: 2000, width: 2000, fit: 'inside'})
        .toBuffer();
        
        
        const s3Result = await this.s3Service.uploadFile(fileSharpened, encryptedName, mimeType);
        if (!s3Result) {
          uncreatedProductsIndex.push({index: index, errorMessage: 'Error while uploading product image to S3 Service.'});
          continue;
        }

        try {
          await tx.products_images.create({
            data: { image_name: encryptedName, id: productData.product_id}
          })
        } catch (error) {
          console.error(error);
          uncreatedProductsIndex.push({ index: index, errorMessage: 'Error while associating the product with its image in database.' });
          continue;
        }
        
        console.log(`Producto con el index: ${index} creado exitosamente.`)
        createdProductsIndex.push(index);
      }
      return {
        message: 'Request processed successfully.',
        data: {
          created: createdProductsIndex,
          uncreated: uncreatedProductsIndex,
        }
      };
    },
      {
        timeout: 30000, // Increase timeout to 30 seconds
        maxWait: 35000, // Maximum time to wait for transaction to start
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted // Optional: specify isolation level
      }
    )
 
  }

  async findAll(page = 1, limit = 10) {
    try {
      const result = await this.prisma.products.findMany({
        orderBy: {
          created_at: 'desc'
        },
        skip: (page - 1) * limit,
        take: limit,
      });
      const total = await this.prisma.products.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);
      
      
      return {
        total,
        result,
        meta,
      };
  
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Unespected error.')
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

  async update(uuid: string, updateProductDto: UpdateProductDto, deletedImages: string[], files: Array<Express.Multer.File>) {
    
    try {
      
    

    return await this.prisma.$transaction(async (tx) => {

      const existingProduct = await this.prisma.products.findFirst({
        where: {
          product_id: uuid
        },
      })

      if(!existingProduct) {
        throw new BadRequestException('Product not found with the provided id.');
        
      }
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

      try {
        if (deletedImages.length > 0) {
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
          }
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

      if (files.length > 0) {

        try {
          await Promise.all(

            
            files.map(async (file) => {
              const encryptedName = this.encryptionService.encrypt(file.originalname);
              const mimeType = file.mimetype;
              const fileSharpened = await sharp(file.buffer)
              .resize({ height: 2000, width: 2000, fit: 'inside' })
              .toBuffer();
              
              const s3Result = await this.s3Service.uploadFile(fileSharpened, encryptedName, mimeType);
              if (!s3Result) {
                throw new InternalServerErrorException('Error while uploading product image to S3 Service.');
              };
              
              await tx.products_images.create({
                data: {
                  id: uuid,
                  image_name: encryptedName,
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
