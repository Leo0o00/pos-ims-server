import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtPayload } from './strategies/jwt.strategy';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByEmailForAuth(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user; // Devuelve el usuario completo (con contraseña) para que LocalStrategy lo procese
    }
    return null;
  }

  async login(user: User) {
    // Recibe el usuario completo desde LocalStrategy (sin password) o directamente el objeto User
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, deleted_at, ...userPayloadData } = user; // Quita campos sensibles antes de crear payload

    const payload: JwtPayload = {
      sub: userPayloadData.user_id,
      email: userPayloadData.email,
      roles: userPayloadData.roles, // Asegúrate que 'roles' exista en tu objeto 'user'
      // firstName: userPayloadData.first_name, // Puedes añadir más datos si son útiles y no sensibles
    };

    this.logger.log(
      `Generando token para usuario: ${user.email} con roles ${user.roles}`,
    );
    return {
      access_token: this.jwtService.sign(payload),
      user: userPayloadData, // Devuelve datos del usuario (sin contraseña)
    };
  }

  // Opcional: Si manejas el registro aquí
  // async register(createUserDto: CreateUserDto) { ... }
}
