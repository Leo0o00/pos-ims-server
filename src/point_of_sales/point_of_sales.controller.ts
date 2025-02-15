import { Controller, Get, Post, Body, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { PointOfSalesService } from './point_of_sales.service';
import { CreatePointOfSaleDto } from './dto/create-point_of_sale.dto';
import { UpdatePointOfSaleDto } from './dto/update-point_of_sale.dto';

@Controller('point-of-sales')
export class PointOfSalesController {
  constructor(private readonly pointOfSalesService: PointOfSalesService) {}

  @Post()
  async create(@Body() createPointOfSaleDto: CreatePointOfSaleDto) {
    
    return await this.pointOfSalesService.create(createPointOfSaleDto);
    
  }

  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number, @Query('limit', ParseIntPipe) limit: number) {
    
    return await this.pointOfSalesService.findAll(page, limit);
    
  }

  @Patch()
  async update(@Body() updatePointOfSaleDto: UpdatePointOfSaleDto) {
    
    return await this.pointOfSalesService.update(updatePointOfSaleDto);
    
  }

  @Delete()
  async remove(@Body() updatePointOfSaleDto: UpdatePointOfSaleDto) {
    
    
    
    return await this.pointOfSalesService.remove(updatePointOfSaleDto.point_of_sales_id);
      
    
  }
}
