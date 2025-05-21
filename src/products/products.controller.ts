import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { BulkCreateProductDto } from './dto/bulk-create-product.dto';
import { S3Service } from 'src/common/s3/s3.service';
import { RUpdateProductDto } from './dto/r-update-product.dto';
import { DeleteProductDto } from './dto/delete-product.dto';
import { QueryParamsDto } from '../common/dto/query-params.dto';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

export const MAX_FILE_SIZE = 2 * 1024 * 1024;

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly s3Service: S3Service,
  ) {}

  // noinspection TypeScriptValidateTypes
  @Post()
  @Roles(UserRole.ADMIN)
  @UseInterceptors(FilesInterceptor('images', 25))
  async create(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ })
        .addMaxSizeValidator({ maxSize: MAX_FILE_SIZE })
        .build({
          fileIsRequired: true,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    files: Array<Express.Multer.File>,
    @Body() body: BulkCreateProductDto,
  ) {
    return await this.productsService.create(body.products, files);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findAll(@Query() queryParams: QueryParamsDto) {
    const { total, result, meta } =
      await this.productsService.findAll(queryParams);

    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Products retrieved successfully.',
    };
  }

  @Get(':uuid')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findOne(
    @Param(
      'uuid',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    uuid: string,
  ) {
    const result = await this.productsService.findOne(uuid);
    return {
      data: result,
      message: 'Product details retrieved successfully.',
    };
  }

  // noinspection TypeScriptValidateTypes
  @Patch(':uuid')
  @Roles(UserRole.ADMIN)
  @UseInterceptors(
    FilesInterceptor('newProductImages', 10, {
      // TODO: Revisar en el repo de busboy las propiedades del objeto limits y asi implementar un limite en las request
    }),
  )
  async update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateProductDto: RUpdateProductDto,
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ })
        .addMaxSizeValidator({ maxSize: MAX_FILE_SIZE })
        .build({
          fileIsRequired: false,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    newProductImages: Array<Express.Multer.File>,
  ) {
    // Verifica que el usuario proporciona datos para actualizar
    if (
      Object.keys(updateProductDto).length === 0 &&
      newProductImages.length === 0 &&
      (!updateProductDto.deletedImages ||
        updateProductDto.deletedImages.length === 0)
    ) {
      return 'No data provided for update';
    }

    await this.productsService.update(
      uuid,
      updateProductDto.updatedProductProperties,
      newProductImages,
      updateProductDto.deletedImages,
    );

    return {
      message: 'Product updated successfully.',
      data: {
        product_id: uuid,
      },
    };
  }

  @Delete()
  @Roles(UserRole.ADMIN)
  async remove(@Body() body: DeleteProductDto) {
    await this.productsService.remove(body.productsIds);

    return {
      message: 'Products deleted successfully.',
    };
  }
}
