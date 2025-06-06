import { Inject, Injectable, Logger } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

interface CacheServiceInterface {
  get<T>(key: string): Promise<T | null>;

  getWithLogMessage<T>(key: string, serviceCaller: string): Promise<T | null>;

  set<T>(key: string, value: any, ttl?: number): Promise<T>;

  setWithLogMessage<T>(
    key: string,
    value: any,
    ttl?: number,
    serviceCaller?: string,
  ): Promise<T | null>;

  del(key: string): Promise<boolean>;

  mdel(key: string[]): Promise<boolean>;

  // delByPattern(key: string): Promise<any>;

  /**
   * Invalida todas las cachés cuyas keys coincidan con el patron del parametro.
   * Esta es una estrategia simple. Para sistemas grandes, considera invalidaciones más granulares
   * o basadas en tags si tu solución de caché lo permite.
   */
  invalidateListCacheByPattern(
    keysPattern: string, // Patrón para claves de empleados paginados
    serviceCaller: string,
  ): Promise<void>;
}

@Injectable()
export class CacheService implements CacheServiceInterface {
  private logger = new Logger(CacheService.name);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getWithLogMessage<T>(
    key: string,
    serviceCaller: string,
  ): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  async setWithLogMessage<T>(
    key: string,
    value: T,
    ttl?: number,
    serviceCaller = '',
  ): Promise<T | null> {
    try {
      const cacheResult: T = await this.cacheManager.set(key, value, ttl);
      this.logger.log(`${serviceCaller} result cached for the key: ${key}`);
      return cacheResult;
    } catch (error) {
      this.logger.error(`Error while caching for ${key}: `, error);
      return null;
    }
  }

  async get<T>(key: string): Promise<T | null> {
    return await this.cacheManager.get<T>(key);
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<T> {
    return await this.cacheManager.set<T>(key, value, ttl);
  }

  async del(key: string): Promise<boolean> {
    return await this.cacheManager.del(key);
  }

  async mdel(key: string[]): Promise<boolean> {
    return await this.cacheManager.mdel(key);
  }

  // TODO: Implementar esto luego si hiciera falta
  // async delByPattern(key: string): Promise<any> {}

  /**
   * Invalida todas las cachés cuyas keys coincidan con el patron del parametro.
   * Esta es una estrategia simple. Para sistemas grandes, considera invalidaciones más granulares
   * o basadas en tags si tu solución de caché lo permite.
   */
  async invalidateListCacheByPattern(
    keysPattern: string, // Patrón para claves de empleados paginados
    serviceCaller: string,
  ) {
    this.logger.log(
      `Attempting to invalidate ${serviceCaller} listing caches...`,
    );
    try {
      const keysToDelete: string[] = [];

      // @ts-ignore
      for await (const [key] of this.cacheManager.stores[1].iterator()) {
        const KEY: string = key;
        if (KEY.startsWith(keysPattern, 0)) {
          keysToDelete.push(KEY);
        }
      }

      if (keysToDelete.length > 0) {
        await this.mdel(keysToDelete).then((value) => {
          if (value) {
            this.logger.log(
              `${keysToDelete.length} keys invalidated using pattern: ${keysPattern}`,
            );
          } else {
            this.logger.error(
              `Not all keys matching the pattern “${keysPattern}” could be invalidated from the cache!!!`,
            );
          }
        });
      }
    } catch (error) {
      this.logger.error(
        `General error when trying to invalidate the ${serviceCaller} listing cache:`,
        error,
      );
    }
  }
}
