import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductCategoryDto } from './dto/create-product_category.dto';
import { UpdateProductCategoryDto } from './dto/update-product_category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';
import {
  CACHE_KEYS,
  CACHE_TTL,
} from '../common/cache/constants/cache.constants';
import { CacheService } from '../common/cache/cache.service';
import { MetaType } from '../common/types/meta.type';

type ProductsCategoryQueryResult = {
  products_categories_id: string;
  name: string;
  created_at: Date;
  last_update: Date;
};

type ProductsCategoryList = ProductsCategoryQueryResult[];

type FindAllProductsCategoriesResult = {
  result: ProductsCategoryList;
  total: number;
  meta: MetaType;
};

@Injectable()
export class ProductCategoriesService {
  private logger = new Logger(ProductCategoriesService.name);

  constructor(
    private prisma: PrismaService,
    private readonly cacheService: CacheService,
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

      await this.invalidateProductsCategoriesListCache();

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
    //Construir la clave de caché
    const cacheKey = CACHE_KEYS.PRODUCTS_CATEGORIES_LIST(page, limit);
    //Intentar obtener de la caché
    try {
      const cachedProductsCategories =
        await this.cacheService.get<FindAllProductsCategoriesResult>(cacheKey);
      if (cachedProductsCategories) {
        this.logger.log(
          `Returning paged Products Categories list from cache for key: ${cacheKey}`,
        );
        return cachedProductsCategories;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing the cache for the key: ${cacheKey}: `,
        error,
      );
    }

    try {
      const result: ProductsCategoryList =
        await this.prisma.products_categories.findMany({
          skip: (page - 1) * limit,
          take: limit,
        });
      const total = await this.prisma.products_categories.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);

      //Guardar en caché antes de retornar
      await this.cacheService.setWithLogMessage(
        cacheKey,
        { total, result, meta },
        CACHE_TTL.EIGHT_HOURS,
        'Products Categories list',
      );

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

      await this.invalidateProductsCategoriesListCache();

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

      await this.invalidateProductsCategoriesListCache();

      return true;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }

  async invalidateProductsCategoriesCacheById(uuid: string) {
    const cacheKeyIndividual = CACHE_KEYS.PRODUCTS_CATEGORIES_BY_ID(uuid);
    try {
      const deleteResult = await this.cacheService.del(cacheKeyIndividual);
      if (!deleteResult) {
        this.logger.log(
          `Individual cache not found for Products Categories ID: ${uuid}`,
        );
        return;
      }
      this.logger.log(
        `Individual cache invalidated for Products Categories ID: ${uuid}`,
      );
    } catch (error) {
      this.logger.error(
        `Error invalidating individual cache for Products Categories ID ${uuid}: `,
        error,
      );
    }
  }

  async invalidateProductsCategoriesListCache() {
    await this.cacheService.invalidateListCacheByPattern(
      'products_categories:list',
      'Products Categories',
    );
  }
}
