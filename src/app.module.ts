import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PointOfSalesModule } from './point_of_sales/point_of_sales.module';
import { CommonModule } from './common/common.module';
import { ProvidersModule } from './providers/providers.module';
import { ProductCategoriesModule } from './product_categories/product_categories.module';
import { ProductsModule } from './products/products.module';
import { EmployeesModule } from './employees/employees.module';
import { PurchasesModule } from './purchases/purchases.module';
import { SalesModule } from './sales/sales.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import jwtConfig from './config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [jwtConfig],
      cache: true,
    }),
    CommonModule,
    PointOfSalesModule,
    ProvidersModule,
    ProductCategoriesModule,
    ProductsModule,
    EmployeesModule,
    PurchasesModule,
    SalesModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
