import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { PointOfSalesService } from './point_of_sales.service';
import { CreatePointOfSaleDto } from './dto/create-point_of_sale.dto';
import { UpdatePointOfSaleDto } from './dto/update-point_of_sale.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('point-of-sales')
export class PointOfSalesController {
  constructor(private readonly pointOfSalesService: PointOfSalesService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async create(@Body() createPointOfSaleDto: CreatePointOfSaleDto) {
    const result = await this.pointOfSalesService.create(createPointOfSaleDto);
    return {
      message: 'Point of sales created successfully',
      result,
    };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findAll(@Query() paginationData: PaginationDto) {
    const { total, result, meta } = await this.pointOfSalesService.findAll(
      paginationData.page,
      paginationData.limit,
    );
    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Point of sales retrieved successfully.',
    };
  }

  @Patch()
  @Roles(UserRole.ADMIN)
  async update(@Body() updatePointOfSaleDto: UpdatePointOfSaleDto) {
    const result = await this.pointOfSalesService.update(updatePointOfSaleDto);

    return {
      message: 'Point of sales updated successfully',
      data: result,
    };
  }

  @Delete()
  @Roles(UserRole.ADMIN)
  async remove(@Body() updatePointOfSaleDto: UpdatePointOfSaleDto) {
    await this.pointOfSalesService.remove(
      updatePointOfSaleDto.point_of_sales_id,
    );

    return {
      message: 'Point of sales deleted successfully',
    };
  }
}
