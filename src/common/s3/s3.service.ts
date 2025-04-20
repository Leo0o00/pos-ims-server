import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const SIGNED_URL_EXPIRATION_TIME = 300;


@Injectable()
export class S3Service {
  private readonly bucketName: string | undefined;
  private readonly bucketRegion: string | undefined;
  private readonly accessKey: string | undefined;
  private readonly secretAccess_key: string | undefined;
  private s3Client;

  
  
  
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    this.bucketName = this.configService.get<string>('AWS_BUCKET_NAME');
    this.bucketRegion = this.configService.get<string>('AWS_BUCKET_REGION')
    this.accessKey = this.configService.get<string>('AWS_ACCESS_KEY')
    this.secretAccess_key = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');
    
    if(!this.bucketName || !this.accessKey || !this.bucketRegion || !this.secretAccess_key) throw new Error('AWS S3 service credentials are not configured.')
      
      this.s3Client = new S3Client({
        region: this.bucketRegion,
        credentials: {
          accessKeyId: this.accessKey,
          secretAccessKey: this.secretAccess_key
        }
      })
    
  }

  async uploadFile(fileBuffer: Buffer, fileName: string, mimetype: string) {
    
    const uploadParams = {
      Bucket: this.bucketName,
      Body: fileBuffer,
      Key: fileName,
      ContentType: mimetype
    }
    
    const uploadResponse: {
      '$metadata': {
          httpStatusCode: number,
          requestId: string,
          extendedRequestId: string,
          cfId: undefined,
          attempts: number,
          totalRetryDelay: number
        },
          ETag: string,
          ChecksumCRC32: string,
          ChecksumType: string,
          ServerSideEncryption: string
        } = await this.s3Client.send(new PutObjectCommand(uploadParams));
    
    if (uploadResponse.$metadata.httpStatusCode === 200) return true;
    return false;
  }

  async getObjectSignedUrl(key: string) {
    const params = {
      Bucket: this.bucketName,
      Key: key
    }
    // https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(this.s3Client, command, { expiresIn: SIGNED_URL_EXPIRATION_TIME });
  
    return url
    
  }
  
  async deleteFile(fileName: string) {
    const deleteParams = {
      Bucket: this.bucketName,
      Key: fileName,
    }

    // TODO: Comprobar cual es la verdadera estructura de la respuesta del comando delete
    // { // DeleteObjectOutput
    //   DeleteMarker: true || false,
    //   VersionId: "STRING_VALUE",
    //   RequestCharged: "requester",
    // }
    
    const deleteResponse: {
      '$metadata': {
        httpStatusCode: number,
        requestId: string,
        extendedRequestId: string,
        cfId: undefined,
        attempts: number,
        totalRetryDelay: number
      }
    } = await this.s3Client.send(new DeleteObjectCommand(deleteParams));
    console.log("DELETE RESPONSE: ",deleteResponse);


    if (deleteResponse.$metadata.httpStatusCode === 204) return true;
    return false;
    
}
}
