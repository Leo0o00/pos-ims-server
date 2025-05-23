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
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MAX_FILE_SIZE } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';
import { QueryParamsDto } from 'src/common/dto/query-params.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('purchases')
export class PurchasesController {
  constructor(
    private readonly purchasesService: PurchasesService,
    private readonly productsService: ProductsService,
  ) {}

  // noinspection TypeScriptValidateTypes
  /**
   * Endpoint para crear un registro de compra que incluye productos existentes y nuevos.
   * Se espera un body validado con CreatePurchaseDto y archivos (imágenes) en un orden 1:1 con newProducts.
   */
  @Post()
  @Roles(UserRole.ADMIN)
  @UseInterceptors(
    FilesInterceptor('newProductImages', 25), // Numero maximo de imagenes que pueden ser enviadas en la request
  )
  async create(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ })
        .addMaxSizeValidator({ maxSize: MAX_FILE_SIZE }) // Tamaño maximo de archivo 2MB
        .build({
          fileIsRequired: false,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    newProductImages: Array<Express.Multer.File>,
    @Body() createPurchaseDto: CreatePurchaseDto,
  ) {
    const result = await this.purchasesService.create(
      createPurchaseDto,
      newProductImages,
    );
    return {
      message: 'Purchase successfully created!',
      purchase_id: result.purchaseId,
    };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findAll(@Query() queryParams: QueryParamsDto) {
    const { total, result, meta } =
      await this.purchasesService.findAll(queryParams);
    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Purchases retrieved successfully',
    };
  }

  @Get(':uuid')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findOne(
    @Param(
      'uuid',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    uuid: string,
  ) {
    const result = await this.purchasesService.findOne(uuid);
    return {
      data: result,
      message: 'Purchase details retrieved successfully',
    };
  }

  /**
   * Modifica parcialmente un registro de compra:
   *  • Cambiar fecha
   *  • Ajustar cantidades / precios de productos existentes
   *  • Eliminar productos de la compra
   */
  @Patch(':uuid')
  @Roles(UserRole.ADMIN)
  async update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    const result = await this.purchasesService.update(uuid, updatePurchaseDto);
    return {
      data: result,
      message: 'Purchase successfully updated!',
    };
  }

  /** Elimina la compra y revierte el stock de los productos asociados */
  @Delete(':uuid')
  @Roles(UserRole.ADMIN)
  async remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    await this.purchasesService.remove(uuid);

    return { message: 'Purchase deleted successfully.' };
  }
}
