import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '@prisma/client';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CacheTTL } from '@nestjs/common/cache';

@Controller('metrics')
@UseInterceptors(CacheInterceptor)
@CacheTTL(300000)
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async listMetrics() {
    const result = await this.metricsService.listMetrics();
    return {
      message: 'Metrics retrieved successfully.',
      data: result,
    };
  }
}
