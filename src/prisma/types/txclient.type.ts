import { Prisma } from '@prisma/client';
// import { Prisma } from '../generated/client/';

/**
 * Alias que representa el cliente transaccional que devuelve prisma.$transaction.
 * Así evitamos importar Prisma.TransactionClient en cada archivo.
 */
// export type TxClient = Prisma.TransactionClient;
export type TxClient = Prisma.TransactionClient;
