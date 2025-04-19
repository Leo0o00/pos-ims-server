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
import { QueryParamsDto } from '../common/dto/query-params.dto';

export const MAX_FILE_SIZE = 2 * 1024 * 1024;

@Controller('products')
export class ProductsController {
  
  constructor(
    private readonly productsService: ProductsService,
    private readonly s3Service: S3Service
  ) {}

  // noinspection TypeScriptValidateTypes
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
  async findAll(@Query() queryParams: QueryParamsDto) {
    return await this.productsService.findAll(queryParams);
  }

  @Get(':uuid')
  async findOne(
    @Param('uuid', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    uuid: string
  ) {
    return await this.productsService.findOne(uuid);
  }

  // noinspection TypeScriptValidateTypes
  @Patch(':uuid')
  @UseInterceptors(
    FilesInterceptor(
      'newProductImages',
      10,
      {
        // TODO: Revisar en el repo de busboy las propiedades del objeto limits y asi implementar un limite en las request
      }
      
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
    ) newProductImages: Array<Express.Multer.File>) {
    
    // Verifica que el usuario proporciona datos para actualizar
    if (Object.keys(updateProductDto).length === 0 && newProductImages.length === 0 && (!updateProductDto.deletedImages || updateProductDto.deletedImages.length === 0)) {
      return 'No data provided for update';
    }
    
    return await this.productsService.update(uuid, updateProductDto.updatedProductProperties, newProductImages, updateProductDto.deletedImages);
  }

  @Delete()
  async remove(@Body() body: DeleteProductDto) {
    return await this.productsService.remove(body.productsIds);
  }
}
