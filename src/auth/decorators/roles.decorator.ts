import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@prisma/client'; // O tu enum local si lo tienes

export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
