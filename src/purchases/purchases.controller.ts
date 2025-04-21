import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpStatus, ParseFilePipeBuilder, UploadedFiles, Query, ParseUUIDPipe } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MAX_FILE_SIZE } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';
import { QueryParamsDto } from 'src/common/dto/query-params.dto';

@Controller('purchases')
export class PurchasesController {
  constructor(
    private readonly purchasesService: PurchasesService,
    private readonly productsService: ProductsService
  ) { }


  // noinspection TypeScriptValidateTypes
  /**
   * Endpoint para crear un registro de compra que incluye productos existentes y nuevos.
   * Se espera un body validado con CreatePurchaseDto y archivos (imágenes) en un orden 1:1 con newProducts.
   */
  @Post()
  @UseInterceptors(FilesInterceptor(
    'newProductImages',
    25,) // Numero maximo de imagenes que pueden ser enviadas en la request
  )
  async create(
    @UploadedFiles(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ })
        .addMaxSizeValidator({maxSize: MAX_FILE_SIZE}) // Tamaño maximo de archivo 2MB
        .build({
          fileIsRequired: false,
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    ) newProductImages: Array<Express.Multer.File>,
    @Body() createPurchaseDto: CreatePurchaseDto) {
    
    const result = await this.purchasesService.create(
      createPurchaseDto,
      newProductImages
    );
    return result;
  }

  @Get()
  async findAll(@Query() queryParams: QueryParamsDto) {
    return this.purchasesService.findAll(queryParams);
  }

  @Get(':uuid')
  async findOne(@Param('uuid', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  uuid: string) {
    return this.purchasesService.findOne(uuid);
  }

  /**
   * Modifica parcialmente un registro de compra:
   *  • Cambiar fecha
   *  • Ajustar cantidades / precios de productos existentes
   *  • Eliminar productos de la compra
   */
  @Patch(':uuid')
  async update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ) {
    return this.purchasesService.update(uuid, updatePurchaseDto);
  }

  /** Elimina la compra y revierte el stock de los productos asociados */
  @Delete(':uuid')
  async remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.purchasesService.remove(uuid);
  }
}
