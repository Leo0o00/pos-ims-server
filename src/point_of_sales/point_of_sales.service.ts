import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {  Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePointOfSaleDto } from './dto/update-point_of_sale.dto';
import { CreatePointOfSaleDto } from './dto/create-point_of_sale.dto';
import { PaginationService } from 'src/common/pagination/pagination.service';

@Injectable()
export class PointOfSalesService {
  constructor(
    private prisma: PrismaService,
    
    private readonly paginationService: PaginationService,
  ) { }

  async create(data: CreatePointOfSaleDto) {
    
    try {
      const existingPos = await this.prisma.points_of_sales.findFirst({
        where: {
          name: data.name,
        },
      });
      if (existingPos) {
        throw new BadRequestException('A point of sales already exists under that name.');
      }

      const pos_created = await this.prisma.points_of_sales.create({
        data,
      });
      return {
        message: "Point of sales created successfully",
        pos_created
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
      const result = await this.prisma.points_of_sales.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });

      const total = await this.prisma.points_of_sales.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);
  
      return {
        total,
        result,
        meta
        
      };
      
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Unespected error.')
    }
  }


  async update(updatePointOfSaleDto: UpdatePointOfSaleDto){
    
    try {
      const existingPos = await this.prisma.points_of_sales.findFirst({
        where: {
          point_of_sales_id: updatePointOfSaleDto.point_of_sales_id,
        },
      });
  
      if (!existingPos) {
        throw new NotFoundException('Point of sales not found with the provided id.');
      }
  
      const updatedPos = await this.prisma.points_of_sales.update({
        where: {
          point_of_sales_id: existingPos.point_of_sales_id,
        },
        data: updatePointOfSaleDto,
      });
  
      return {
        message: "Point of sales updated successfully",
        data: updatedPos
      }
      
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            throw new BadRequestException('A point of sales already exists with that name.');
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
      console.log(existingPos)
  
      if (!existingPos) {
        throw new NotFoundException('Point of sales not found with the provided id.');
      }
      await this.prisma.points_of_sales.delete({
        where: {
          point_of_sales_id: id,
        },
      });

      return {
        message: 'Point of sales deleted successfully.'
      }
      
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unexpected error.')
    }
  }
}
