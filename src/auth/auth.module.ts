import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Importa UsersModule para acceder a UsersService
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule, // Para acceder a UsersService
    PassportModule.register({ defaultStrategy: 'jwt' }), // Opcional: defaultStrategy
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: {
          expiresIn: configService.get<string>('jwt.signOptions.expiresIn'),
        },
      }),
    }),
    ConfigModule, // Para que JwtStrategy pueda inyectar ConfigService
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy], // Registra las estrategias
  exports: [AuthService, JwtModule], // Exporta JwtModule si otros módulos necesitan verificar/firmar tokens
})
export class AuthModule {}
