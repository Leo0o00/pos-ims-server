import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { softDeleteMiddleware } from 'prisma/soft-delete.middleware';
// import { PrismaClient } from './generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    //Aplica el middleware de soft delete
    this.$use(softDeleteMiddleware);
    console.log('Soft delete middleware applied to Prisma Client.');
  }
  // Opcional: para cerrar la conexión adecuadamente cuando la app se cierra
  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
