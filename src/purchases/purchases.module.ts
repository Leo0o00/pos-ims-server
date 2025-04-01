import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService],
  imports: [ProductsModule]
})
export class PurchasesModule {}
