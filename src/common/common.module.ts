import { Module } from '@nestjs/common';
import { PaginationService } from './pagination/pagination.service';
import { S3Service } from './s3/s3.service';
import { EncryptionService } from './encryption/encryption.service';
import { MediaService } from './media/media.service';

@Module({
  providers: [PaginationService, S3Service, EncryptionService, MediaService],
  exports: [PaginationService, S3Service, EncryptionService, MediaService],
})
export class CommonModule {}
