import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PointOfSalesModule } from './point_of_sales/point_of_sales.module';
import { CommonModule } from './common/common.module';
import { ProvidersModule } from './providers/providers.module';
import { ProductCategoriesModule } from './product_categories/product_categories.module';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    cache: true,
  }),CommonModule, PointOfSalesModule,  ProvidersModule, ProductCategoriesModule, ProductsModule, EmployeesModule, PurchasesModule],
})
export class AppModule {}
