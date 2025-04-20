import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import { S3Service } from '../s3/s3.service';

@Injectable()
export class MediaService {
    constructor(private readonly s3: S3Service) {}

    async processAndUpload(
        buffer: Buffer,
        originalName: string,
        mime: string,
    ): Promise<{ originalKey: string; thumbKey: string } | false> {
        const originalKey = `${originalName}.orig`;
        const thumbKey = `${originalName}.thumb`;
        
        // 1.Original redimensionado (máx 2000px)
        const originalResized = await sharp(buffer)
        .resize({ width: 2000, height: 2000, fit: 'inside' })
        .toBuffer();
        
        // 2.Miniatura 300px
        const thumbnail = await sharp(buffer)
        .resize({ width: 300, height: 300, fit: 'inside' })
        .toBuffer();
        
        let originalRezizedUploadSuccess: boolean = false;
        let thumbnailUploadSuccess: boolean = false;

        await Promise.all([
            this.s3.uploadFile(originalResized, originalKey, mime).then((res) => originalRezizedUploadSuccess = res),
            this.s3.uploadFile(thumbnail, thumbKey, mime).then((res) => thumbnailUploadSuccess = res),
        ]).catch((err) => {
            console.error(err);
            throw new Error('Error while uploading files to S3 Service.');
        });
        
        if (!originalRezizedUploadSuccess || !thumbnailUploadSuccess) { 
            console.error('Error while uploading files to S3 Service.');

            if (originalRezizedUploadSuccess) await this.s3.deleteFile(originalKey);
            if (thumbnailUploadSuccess) await this.s3.deleteFile(thumbKey);


            return false;
        }
        
        
        return { originalKey, thumbKey };
    }
}
