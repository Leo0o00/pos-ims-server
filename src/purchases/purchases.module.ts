import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { ProductsModule } from 'src/products/products.module';
import { CommonModule } from 'src/common/common.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService],
  imports: [ProductsModule,PrismaModule, CommonModule]
})
export class PurchasesModule {}
