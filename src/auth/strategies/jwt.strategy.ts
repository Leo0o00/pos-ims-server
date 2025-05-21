import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import { User as PrismaUser } from '@prisma/client';

export interface JwtPayload {
  sub: string; // user_id
  email: string;
  roles: string[]; // o UserRole[]
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService, // Opcional: para re-validar el usuario en cada request
  ) {
    const jwtSecret = configService.get<string>('jwt.secret');

    if (!jwtSecret) {
      throw new Error('JWT_SECRET must be defined in environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: JwtPayload): Promise<Omit<PrismaUser, 'password'>> {
    // Passport construye el objeto user basado en lo que retornamos aquí
    // y lo adjunta a Request (req.user)
    const user = await this.usersService.findOne(payload.sub); // findOne ya maneja soft-delete y NotFound
    if (!user || !user.is_active) {
      // Verifica si el usuario (aún) existe y está activo
      throw new UnauthorizedException(
        'User not found, inactive or invalid token.',
      );
    }
    return user; // Este 'result' será 'req.user' en los controladores
  }
}
