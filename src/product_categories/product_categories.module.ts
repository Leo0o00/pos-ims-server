import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product_categories.service';
import { ProductCategoriesController } from './product_categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ProductCategoriesController],
  providers: [ProductCategoriesService],
  imports: [PrismaModule, CommonModule]
})
export class ProductCategoriesModule {}
