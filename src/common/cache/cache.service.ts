import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheService: Cache) {}

  async get(key: string): Promise<any> {
    return await this.cacheService.get(key);
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.cacheService.set(key, value, ttl);
  }

  async delete(key: string): Promise<void> {
    await this.cacheService.del(key);
  }
}
