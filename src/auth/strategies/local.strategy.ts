import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from '@prisma/client';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' }); // Le decimos a passport que use 'email' como username
  }

  // async validate(email: string, pass: string): Promise<Omit<User, 'password'>> {
  async validate(email: string, pass: string): Promise<Omit<User, 'password'>> {
    const user = await this.authService.validateUser(email, pass);
    if (!user) {
      throw new UnauthorizedException('Wrong credentials.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user; // Passport espera que devolvamos el usuario sin la contraseña
    return result;
  }
}
