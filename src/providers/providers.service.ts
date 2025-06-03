import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { CacheService } from '../common/cache/cache.service';
import {
  CACHE_KEYS,
  CACHE_TTL,
} from '../common/cache/constants/cache.constants';
import { MetaType } from '../common/types/meta.type';

type ProvidersQueryResult = {
  provider_id: string;
  name: string;
  phone_number: string;
  email: string | null;
  img: string | null;
  created_at: Date;
  last_update: Date;
};

type ProvidersList = ProvidersQueryResult[];

type FindAllProvidersResult = {
  result: ProvidersList;
  total: number;
  meta: MetaType;
};

@Injectable()
export class ProvidersService {
  private readonly logger = new Logger(ProvidersService.name);

  constructor(
    private prisma: PrismaService,
    private cacheService: CacheService,
    private readonly paginationService: PaginationService,
  ) {}

  async create(data: CreateProviderDto) {
    try {
      const existingProv = await this.prisma.providers.findFirst({
        where: {
          OR: [
            { name: data.name },
            { phone_number: data.phone_number },
            { email: data.email },
          ],
        },
      });

      if (existingProv) {
        throw new BadRequestException(
          'Provider already exists with that name, phone number or email.',
        );
      }

      const provCreated = await this.prisma.providers.create({
        data,
      });

      await this.invalidateProvidersListCache();

      return {
        message: 'Provider created successfully',
        data: provCreated,
      };
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
    const cacheKey = CACHE_KEYS.PROVIDERS_LIST(page, limit);
    //Intentar obtener de la caché
    try {
      const cachedProviders =
        await this.cacheService.get<FindAllProvidersResult>(cacheKey);
      if (cachedProviders) {
        this.logger.log(
          `Returning paged Providers list from cache for key: ${cacheKey}`,
        );
        return cachedProviders;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing the cache for the key: ${cacheKey}: `,
        error,
      );
    }

    try {
      const result: ProvidersList = await this.prisma.providers.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const total: number = await this.prisma.providers.count();
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
        'Providers List',
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

  async update(updateProviderDto: UpdateProviderDto) {
    try {
      const existingProv = await this.prisma.providers.findFirst({
        where: {
          provider_id: updateProviderDto.provider_id,
        },
      });

      if (!existingProv) {
        throw new NotFoundException('Provider not found with the provided id.');
      }

      const existingUniqueProps = await this.prisma.providers.findFirst({
        where: {
          OR: [
            { name: updateProviderDto.name },
            { phone_number: updateProviderDto.phone_number },
            { email: updateProviderDto.email },
          ],
          NOT: {
            provider_id: updateProviderDto.provider_id,
          },
        },
      });
      if (existingUniqueProps) {
        throw new BadRequestException(
          'Provider already exists with that name, phone number or email.',
        );
      }

      const updatedProv: ProvidersQueryResult =
        await this.prisma.providers.update({
          where: {
            provider_id: updateProviderDto.provider_id,
          },
          data: updateProviderDto,
        });

      await this.invalidateProvidersListCache();

      return updatedProv;
    } catch (error) {
      console.error(error);
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Unexpected error.');
    }
  }
  async remove(id: string) {
    try {
      const existingProv = await this.prisma.providers.findFirst({
        where: {
          provider_id: id,
        },
      });

      if (!existingProv) {
        throw new NotFoundException('Provider not found with the provided id.');
      }

      await this.prisma.providers.delete({
        where: {
          provider_id: id,
        },
      });

      await this.invalidateProvidersListCache();

      return true;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unexpected error.');
    }
  }

  async invalidateProvidersCacheById(uuid: string) {
    const cacheKeyIndividual = CACHE_KEYS.PROVIDERS_BY_ID(uuid);
    try {
      const deleteResult = await this.cacheService.del(cacheKeyIndividual);
      if (!deleteResult) {
        this.logger.log(`Individual cache not found for Providers ID: ${uuid}`);
        return;
      }
      this.logger.log(`Individual cache invalidated for Providers ID: ${uuid}`);
    } catch (error) {
      this.logger.error(
        `Error invalidating individual cache for Providers ID ${uuid}: `,
        error,
      );
    }
  }

  async invalidateProvidersListCache() {
    await this.cacheService.invalidateListCacheByPattern(
      'providers:list',
      'Providers',
    );
  }
}
