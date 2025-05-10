import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { CommonModule } from 'src/common/common.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  imports: [CommonModule, PrismaModule],
})
export class SalesModule {}
