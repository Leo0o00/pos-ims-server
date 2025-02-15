import { Module } from '@nestjs/common';
import { PointOfSalesService } from './point_of_sales.service';
import { PointOfSalesController } from './point_of_sales.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [PointOfSalesController],
  providers: [PointOfSalesService],
  imports: [PrismaModule, CommonModule]
})
export class PointOfSalesModule {}
