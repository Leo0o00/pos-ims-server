import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { ProductsService } from './products.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { BulkCreateProductDto } from './dto/bulk-create-product.dto';
import { S3Service } from 'src/common/s3/s3.service';
import { RUpdateProductDto } from './dto/r-update-product.dto';
import { DeleteProductDto } from './dto/delete-product.dto';

export const MAX_FILE_SIZE = 2 * 1024 * 1024;

@Controller('products')
export class ProductsController {
  
  constructor(
    private readonly productsService: ProductsService,
    private readonly s3Service: S3Service
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor(
    'images',
    25,)
  )
  async create(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ })
        .addMaxSizeValidator({maxSize: MAX_FILE_SIZE})
        .build({
          fileIsRequired: true,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    ) files: Array<Express.Multer.File>,
    @Body() body: BulkCreateProductDto,
  ) {
    return await this.productsService.create(body.products, files);
  }

  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number, @Query('limit', ParseIntPipe) limit: number) {
    return await this.productsService.findAll(page, limit);
  }

  @Get(':uuid')
  async findOne(
    @Param('uuid', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    uuid: string
  ) {
    return await this.productsService.findOne(uuid);
  }

  @Patch(':uuid')
  @UseInterceptors(
    FilesInterceptor(
      'files',
      10,
      
    )
  )
  async update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateProductDto: RUpdateProductDto,
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ })
        .addMaxSizeValidator({maxSize: MAX_FILE_SIZE})
        .build({
          fileIsRequired: false,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    ) files: Array<Express.Multer.File>) {
    
    const productProperties = {
      branch: updateProductDto.branch,
        model: updateProductDto.model,
        description: updateProductDto.description,
        purchase_price: updateProductDto.purchase_price,
        stock_quantity: updateProductDto.stock_quantity,
        amount: updateProductDto.amount,
        purchase_date: updateProductDto.purchase_date,
        category_name: updateProductDto.category_name,
        provider_name: updateProductDto.provider_name,
        pos_name: updateProductDto.pos_name,
    }
    
    return await this.productsService.update(uuid, productProperties, updateProductDto.deletedImages || [], files);
  }

  @Delete()
  async remove(@Body() body: DeleteProductDto) {
    return await this.productsService.remove(body.productsIds);
  }
}
