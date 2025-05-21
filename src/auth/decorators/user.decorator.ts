import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as PrismaUser } from '@prisma/client';

export const AuthenticatedUser = createParamDecorator(
  (
    data: keyof Omit<PrismaUser, 'password'> | undefined,
    ctx: ExecutionContext,
  ) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as Omit<PrismaUser, 'password'>; // Tipado para el usuario sin contraseña
    return data ? user?.[data] : user;
  },
);
