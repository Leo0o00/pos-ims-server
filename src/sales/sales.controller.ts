import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SalesQueryDto } from 'src/common/dto/sales-query.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() createSaleDto: CreateSaleDto) {
    const result = await this.salesService.create(createSaleDto);
    return { message: 'Sale record created successfully.', sales_id: result };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findAll(@Query() query: SalesQueryDto) {
    const { total, result, meta } = await this.salesService.findAll(query);
    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Sales records retrieved successfully.',
    };
  }

  @Get(':uuid')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findOne(
    @Param(
      'uuid',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    uuid: string,
  ) {
    const result = await this.salesService.findOne(uuid);
    return {
      data: result,
      message: 'Sale record details retrieved successfully.',
    };
  }

  @Patch(':uuid')
  @Roles(UserRole.ADMIN)
  async update(
    @Param('uuid', ParseUUIDPipe) uuid: string,
    @Body() updateSaleDto: UpdateSaleDto,
  ) {
    const result = await this.salesService.update(uuid, updateSaleDto);
    return { message: 'Sale updated', sales_id: result };
  }

  @Delete(':uuid')
  @Roles(UserRole.ADMIN)
  async remove(@Param('uuid', ParseUUIDPipe) uuid: string) {
    await this.salesService.remove(uuid);
    return { message: 'Sale record soft-deleted.' };
  }

  @Post('restore/:uuid')
  @Roles(UserRole.ADMIN)
  async restore(@Param('uuid', ParseUUIDPipe) uuid: string) {
    const result = await this.salesService.restore(uuid);
    return { message: 'Sale record restored successfully.', sales_id: result };
  }
}
