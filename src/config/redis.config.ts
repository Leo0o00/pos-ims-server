import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT!) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  ttl: Number(process.env.REDIS_CACHE_TTL!) || 300, // Default TTL: 5 minutos
  // Puedes añadir más opciones aquí si es necesario
  // db: parseInt(process.env.REDIS_DB) || 0,
}));
