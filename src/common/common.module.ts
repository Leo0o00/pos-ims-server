import { Logger, Module } from '@nestjs/common';
import { PaginationService } from './pagination/pagination.service';
import { S3Service } from './s3/s3.service';
import { EncryptionService } from './encryption/encryption.service';
import { MediaService } from './media/media.service';
import { InventoryHelpers } from './helpers/inventory.helpers';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheableMemory, Keyv } from 'cacheable';
import { createKeyv } from '@keyv/redis';
import { CacheService } from './cache/cache.service';

@Module({
  providers: [
    PaginationService,
    S3Service,
    EncryptionService,
    MediaService,
    InventoryHelpers,
    CacheService,
  ],
  exports: [
    PaginationService,
    S3Service,
    EncryptionService,
    MediaService,
    InventoryHelpers,
    CacheService,
  ],
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const logger = new Logger('CacheModule'); // Logger para feedback
        const redisOptions = configService.get('redis');

        logger.log(
          `Conectando a Redis con host: ${redisOptions.host}, port: ${redisOptions.port}`,
        );

        return {
          stores: [
            new Keyv({
              store: new CacheableMemory({ ttl: 60000, lruSize: 5000 }),
            }),
            createKeyv(`${redisOptions.host}://localhost:${redisOptions.port}`),
          ],
          ttl: configService.get<number>('REDIS_CACHE_TTL'),
        };
      },
    }),
  ],
})
export class CommonModule {}
