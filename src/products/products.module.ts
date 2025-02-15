import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [MulterModule.register({storage: memoryStorage()}), PrismaModule, CommonModule],
})
export class ProductsModule {}
