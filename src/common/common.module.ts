import { Module } from '@nestjs/common';
import { PaginationService } from './pagination/pagination.service';
import { S3Service } from './s3/s3.service';
import { EncryptionService } from './encryption/encryption.service';

@Module({
  providers: [PaginationService, S3Service, EncryptionService],
  exports: [PaginationService, S3Service, EncryptionService]
})
export class CommonModule {}
