import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Public } from './decorators/public.decorator';
import { AuthenticatedUser } from './decorators/user.decorator'; // Decorador para obtener el usuario
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto'; // Asumiendo que CreateUserDto es para registro
import { UserResponseDto } from '../users/dto/user.response.dto';
import { User as PrismaUser, UserRole } from '@prisma/client';
import { Roles } from './decorators/roles.decorator';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor) // Para que UserResponseDto funcione
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService, // Si la registración se maneja aquí
  ) {}

  @Public() // Marca este endpoint como público
  @UseGuards(LocalAuthGuard) // Activa la LocalStrategy
  @Post('login')
  @HttpCode(HttpStatus.OK)
  // async login(@Request() req: { user: Omit<PrismaUser, 'password'> }) {
  async login(@Request() req: { user: Omit<PrismaUser, 'password'> }) {
    // req.user es poblado por LocalStrategy
    return this.authService.login(req.user as PrismaUser); // Pasa el usuario completo (con roles, etc.)
  }

  // Solo el administrador puede registrar usuarios
  @Post('register')
  @Roles(UserRole.ADMIN)
  async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    // Podrías asignar un rol por defecto aquí si es necesario
    // ej: createUserDto.roles = [UserRole.CASHIER];
    const user = await this.usersService.create(createUserDto); // Usa el servicio de usuarios existente
    return new UserResponseDto(user);
  }

  @Get('profile')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.CASHIER)
  getProfile(@AuthenticatedUser() user: Omit<PrismaUser, 'password'>) {
    // Usa el decorador AuthenticatedUser
    // 'user' ya no contiene la contraseña gracias a JwtStrategy y UserResponseDto (si se usara para devolver)
    return new UserResponseDto(user); // Devuelve el usuario logueado (ya filtrado en JwtStrategy)
  }

  // Opcional: Endpoint para refrescar token
  // @UseGuards(JwtAuthGuard)
  // @Post('refresh-token')
  // async refreshToken(@AuthenticatedUser() user: Omit<PrismaUser, 'password'>) {
  //   return this.authService.login(user as PrismaUser); // Re-firma un nuevo token
  // }
}
