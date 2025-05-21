import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductCategoriesService } from './product_categories.service';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('product-categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() createProductCategoryDto: CreateProductCategoryDto) {
    await this.productCategoriesService.create(createProductCategoryDto);

    return { message: 'Product category created successfully.' };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findAll(@Query() paginationDto: PaginationDto) {
    const { total, result, meta } = await this.productCategoriesService.findAll(
      paginationDto.page,
      paginationDto.limit,
    );

    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Product categories retrieved successfully.',
    };
  }

  @Patch()
  @Roles(UserRole.ADMIN)
  async update(@Body() updateProductCategoryDto: UpdateProductCategoryDto) {
    const result = await this.productCategoriesService.update(
      updateProductCategoryDto,
    );

    return {
      data: result,
      message: 'Product category updated successfully.',
    };
  }

  @Delete()
  @Roles(UserRole.ADMIN)
  async remove(@Body() updateProductCategoryDto: UpdateProductCategoryDto) {
    await this.productCategoriesService.remove(
      updateProductCategoryDto.products_categories_id,
    );

    return {
      message: 'Product category deleted successfully.',
    };
  }
}
