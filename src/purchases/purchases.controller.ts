import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, HttpStatus, ParseFilePipeBuilder, UploadedFiles } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MAX_FILE_SIZE } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';

@Controller('purchases')
export class PurchasesController {
  constructor(
    private readonly purchasesService: PurchasesService,
    private readonly productsService: ProductsService
  ) { }

  @Post()
  @UseInterceptors(FilesInterceptor(
    'newProductImages',
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
    @Body() createPurchaseDto: CreatePurchaseDto) {
    
    
    
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  async findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchasesService.update(+id, updatePurchaseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.purchasesService.remove(+id);
  }
}
