import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePointOfSaleDto } from './dto/update-point_of_sale.dto';
import { CreatePointOfSaleDto } from './dto/create-point_of_sale.dto';
import { PaginationService } from 'src/common/pagination/pagination.service';
import {
  CACHE_KEYS,
  CACHE_TTL,
} from '../common/cache/constants/cache.constants';
import { CacheService } from '../common/cache/cache.service';
import { MetaType } from '../common/types/meta.type';

type PointOfSaleQueryResult = {
  point_of_sales_id: string;
  name: string;
  address: string;
  img: string | null;
  created_at: Date;
  last_update: Date;
};

type PointOfSaleList = PointOfSaleQueryResult[];

type FindAllPointOfSaleResult = {
  result: PointOfSaleList;
  total: number;
  meta: MetaType;
};

@Injectable()
export class PointOfSalesService {
  private logger = new Logger(PointOfSalesService.name);
  constructor(
    private prisma: PrismaService,
    private readonly cacheService: CacheService,
    private readonly paginationService: PaginationService,
  ) {}

  async create(data: CreatePointOfSaleDto) {
    try {
      const existingPos = await this.prisma.points_of_sales.findFirst({
        where: {
          name: data.name,
        },
      });
      if (existingPos) {
        throw new BadRequestException(
          'A point of sales already exists under that name.',
        );
      }

      await this.prisma.points_of_sales.create({
        data,
      });

      await this.invalidatePointOfSalesListCache();

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
    const cacheKey = CACHE_KEYS.POINT_OF_SALES_LIST(page, limit);
    //Intentar obtener de la caché
    try {
      const cachedEmployees =
        await this.cacheService.get<FindAllPointOfSaleResult>(cacheKey);
      if (cachedEmployees) {
        this.logger.log(
          `Returning paged Point of Sales list from cache for key: ${cacheKey}`,
        );
        return cachedEmployees;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing the cache for the key: ${cacheKey}: `,
        error,
      );
    }

    try {
      const result: PointOfSaleList =
        await this.prisma.points_of_sales.findMany({
          skip: (page - 1) * limit,
          take: limit,
        });

      const total: number = await this.prisma.points_of_sales.count();
      const meta: MetaType = this.paginationService.getPaginationMeta(
        page,
        limit,
        total,
      );

      //Guardar en caché antes de retornar
      await this.cacheService.setWithLogMessage(
        cacheKey,
        { total, result, meta },
        CACHE_TTL.EIGHT_HOURS,
        'Point of Sales List',
      );

      return {
        total,
        result,
        meta,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Unespected error.');
    }
  }

  async update(updatePointOfSaleDto: UpdatePointOfSaleDto) {
    try {
      const existingPos = await this.prisma.points_of_sales.findFirst({
        where: {
          point_of_sales_id: updatePointOfSaleDto.point_of_sales_id,
        },
      });

      if (!existingPos) {
        throw new NotFoundException(
          'Point of sales not found with the provided id.',
        );
      }

      const updatedPos = await this.prisma.points_of_sales.update({
        where: {
          point_of_sales_id: existingPos.point_of_sales_id,
        },
        data: updatePointOfSaleDto,
      });

      // await this.invalidatePointOfSalesCacheById(
      //   updatePointOfSaleDto.point_of_sales_id,
      // );
      await this.invalidatePointOfSalesListCache();

      return updatedPos;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException(
              'A point of sales already exists with that name.',
            );
        }
      } else {
        error.message = 'An error occurred while updating the point of sales.';
      }

      console.log(error);
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: string) {
    try {
      const existingPos = await this.prisma.points_of_sales.findFirst({
        where: {
          point_of_sales_id: id,
        },
      });
      console.log(existingPos);

      if (!existingPos) {
        throw new NotFoundException(
          'Point of sales not found with the provided id.',
        );
      }
      await this.prisma.points_of_sales.delete({
        where: {
          point_of_sales_id: id,
        },
      });

      // await this.invalidatePointOfSalesCacheById(id);
      await this.invalidatePointOfSalesListCache();

      return true;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }

  async invalidatePointOfSalesCacheById(uuid: string) {
    const cacheKeyIndividual = CACHE_KEYS.POINT_OF_SALES_BY_ID(uuid);
    try {
      const deleteResult = await this.cacheService.del(cacheKeyIndividual);
      if (!deleteResult) {
        this.logger.log(
          `Individual cache not found for Point of Sales ID: ${uuid}`,
        );
        return;
      }
      this.logger.log(
        `Individual cache invalidated for Point of Sales ID: ${uuid}`,
      );
    } catch (error) {
      this.logger.error(
        `Error invalidating individual cache for Point of Sales ID ${uuid}: `,
        error,
      );
    }
  }

  async invalidatePointOfSalesListCache() {
    await this.cacheService.invalidateListCacheByPattern(
      'point_of_sales:list',
      'Point of Sales',
    );
  }
}
