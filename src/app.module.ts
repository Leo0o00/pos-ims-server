import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { MetricsModule } from './metrics/metrics.module';
import jwtConfig from './config/jwt.config';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { createKeyv, Keyv } from '@keyv/redis';
import { CacheableMemory } from 'cacheable';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [jwtConfig],
      cache: true,
    }),
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          stores: [
            new Keyv({
              store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
            }),
            createKeyv(
              `${configService.get('REDIS_HOST')}://localhost:${configService.get('REDIS_PORT')}`,
            ),
          ],
          ttl: configService.get('CACHE_TTL'),
        };
      },
      isGlobal: true,
      inject: [ConfigService],
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
    MetricsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
