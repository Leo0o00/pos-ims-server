import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  private encryptionKey: string | undefined;
  private ALGORITHM = 'aes-256-cbc';
  constructor(private configService: ConfigService) {
    this.encryptionKey = this.configService.get('ENCRYPTION_KEY');
  }

  encrypt(text: string): string {
    if (!this.encryptionKey) {
      throw new Error('Encryption key is not configured');
    }

    const iv = crypto.randomBytes(16);

    // To generate a valid encryption key
    // const key = crypto.randomBytes(32).toString('base64');
    // console.log('This is my secret encryption key: ', key);
    // console.log('Mi llave actual: ', this.encryptionKey);

    const cipher = crypto.createCipheriv(
      this.ALGORITHM,
      Buffer.from(this.encryptionKey, 'base64'),
      iv,
    );
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
  }

  decrypt(text: string): string {
    const [iv, encryptedText] = text.split(':');
    if (!this.encryptionKey) {
      throw new Error('Encryption key is not configured');
    }
    const decipher = crypto.createDecipheriv(
      this.ALGORITHM,
      Buffer.from(this.encryptionKey, 'base64'),
      iv,
    );
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedText, 'hex')),
      decipher.final(),
    ]);
    return decrypted.toString();
  }
}
