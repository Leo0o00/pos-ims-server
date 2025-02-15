import { Controller, Get, Post, Body, Patch, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  async create(@Body() createProviderDto: CreateProviderDto) {
    return await this.providersService.create(createProviderDto);
  }

  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number, @Query('limit', ParseIntPipe) limit: number) {
    return await this.providersService.findAll(page, limit);
  }

  @Patch()
  async update(@Body() updateProviderDto: UpdateProviderDto) {
    return await this.providersService.update(updateProviderDto);
  }

  @Delete()
  async remove(@Body() updateProviderDto: UpdateProviderDto) {
    return await this.providersService.remove(updateProviderDto.provider_id);
  }
}
