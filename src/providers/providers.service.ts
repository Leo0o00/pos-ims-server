import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class ProvidersService {
  constructor(
    private prisma: PrismaService,

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
    try {
      const result = await this.prisma.providers.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const total = await this.prisma.providers.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);

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

      const updatedProv = await this.prisma.providers.update({
        where: {
          provider_id: updateProviderDto.provider_id,
        },
        data: updateProviderDto,
      });

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
