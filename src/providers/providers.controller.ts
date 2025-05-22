import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() createProviderDto: CreateProviderDto) {
    await this.providersService.create(createProviderDto);

    return {
      message: 'Provider created successfully',
    };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findAll(@Query() paginationDto: PaginationDto) {
    const { total, result, meta } = await this.providersService.findAll(
      paginationDto.page,
      paginationDto.limit,
    );

    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Provider retrieved successfully',
    };
  }

  @Patch()
  @Roles(UserRole.ADMIN)
  async update(@Body() updateProviderDto: UpdateProviderDto) {
    const result = await this.providersService.update(updateProviderDto);

    return {
      data: result,
      message: 'Provider updated successfully',
    };
  }

  @Delete()
  @Roles(UserRole.ADMIN)
  async remove(@Body() updateProviderDto: UpdateProviderDto) {
    await this.providersService.remove(updateProviderDto.provider_id);

    return {
      message: 'Provider deleted successfully',
    };
  }
}
