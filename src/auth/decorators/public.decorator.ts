import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
/**
 * Decorador para marcar un controlador o ruta como pública.
 * Las rutas públicas no requieren autenticación.
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
