import { Controller, Get, Post, Body, Patch, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ProductCategoriesService } from './product_categories.service';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';

@Controller('product-categories')
export class ProductCategoriesController {
  constructor(private readonly productCategoriesService: ProductCategoriesService) {}

  @Post()
  async create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    return await this.productCategoriesService.create(createProductCategoryDto);
  }

  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number, @Query('limit', ParseIntPipe) limit: number) {
    return await this.productCategoriesService.findAll(page, limit);
  }

  @Patch()
  async update(@Body() updateProductCategoryDto: UpdateProductCategoryDto) {
    return await this.productCategoriesService.update(updateProductCategoryDto);
  }

  @Delete()
  async remove(@Body() updateProductCategoryDto: UpdateProductCategoryDto) {
    return await this.productCategoriesService.remove(updateProductCategoryDto.products_categories_id);
  }
}
