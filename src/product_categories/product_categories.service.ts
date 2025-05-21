import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class ProductCategoriesService {
  constructor(
    private prisma: PrismaService,
    private readonly paginationService: PaginationService,
  ) {}

  async create(data: CreateProductCategoryDto) {
    try {
      const existingProductCategory =
        await this.prisma.products_categories.findFirst({
          where: {
            name: data.name,
          },
        });
      if (existingProductCategory) {
        throw new BadRequestException('Product category already exists.');
      }
      await this.prisma.products_categories.create({
        data,
      });

      return true;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }

  async findAll(page = 1, limit = 10) {
    try {
      const result = await this.prisma.products_categories.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const total = await this.prisma.products_categories.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);

      return {
        total,
        result,
        meta,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }

  async update(updateProductCategoryDto: UpdateProductCategoryDto) {
    try {
      const existingProductCategory =
        await this.prisma.products_categories.findFirst({
          where: {
            products_categories_id:
              updateProductCategoryDto.products_categories_id,
          },
        });

      if (!existingProductCategory) {
        throw new NotFoundException(
          'Product category not found with the provided id.',
        );
      }

      const existingProductCategoryName =
        await this.prisma.products_categories.findFirst({
          where: {
            name: updateProductCategoryDto.name,
          },
        });

      if (existingProductCategoryName) {
        throw new BadRequestException(
          'Product category already exists with that name.',
        );
      }

      const updatedProductCategory =
        await this.prisma.products_categories.update({
          where: {
            products_categories_id:
              updateProductCategoryDto.products_categories_id,
          },
          data: updateProductCategoryDto,
        });

      return updatedProductCategory;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      if (error instanceof BadRequestException) {
        throw error;
      }

      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }

  async remove(id: string) {
    try {
      const existingProductCategory =
        await this.prisma.products_categories.findFirst({
          where: {
            products_categories_id: id,
          },
        });

      if (!existingProductCategory) {
        throw new NotFoundException(
          'Product category not found with the provided id.',
        );
      }

      await this.prisma.products_categories.delete({
        where: {
          products_categories_id: id,
        },
      });

      return true;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }
}
