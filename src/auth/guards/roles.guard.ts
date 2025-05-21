import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserRole, User as PrismaUser } from '@prisma/client'; // O tu enum local

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // Si no se especifican roles, se permite el acceso (asumiendo que JwtAuthGuard ya pasó)
    }
    const { user } = context.switchToHttp().getRequest<{ user: PrismaUser }>(); // Obtiene el usuario de la request (adjuntado por JwtStrategy)

    if (!user || !user.roles) {
      return false; // No hay usuario o no tiene roles definidos
    }

    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
