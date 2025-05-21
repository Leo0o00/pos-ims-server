import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret:
    process.env.JWT_SECRET || 'YOUR_DEFAULT_STRONG_SECRET_KEY_HERE_CHANGE_ME', // CAMBIAR ESTO EN PRODUCCIÓN
  signOptions: {
    expiresIn: process.env.JWT_EXPIRES_IN || '1h', // Ejemplo: 1 hora, 1d, 7d
  },
}));
