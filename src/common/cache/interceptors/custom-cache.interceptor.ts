import { ExecutionContext, Injectable } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Request } from 'express';

@Injectable()
export class EmployeesCacheInterceptor extends CacheInterceptor {
  trackBy(context: ExecutionContext): string | undefined {
    const req = context.switchToHttp().getRequest<Request>();

    /* Item view  */
    if (req.method === 'GET' && req.params['uuid']) {
      return `employees:item:${req.params['uuid']}`;
    }

    /* List view with pagination + search */
    if (req.method === 'GET' && req.route.path === '/') {
      const { page = 1, limit = 10, query = 'none' } = req.query;
      return `employees:list:${page}:${limit}:${query}`;
    }
    return undefined; // fallback to default key
  }
}
