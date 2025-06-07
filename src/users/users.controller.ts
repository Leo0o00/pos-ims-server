// src/users/users.controller.ts
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  SerializeOptions,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user.response.dto'; // Importa el DTO de respuesta
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { FindAllUsersQueryParamsDto } from './dto/find-all-users-query-params.dto';
import { FindAllUsersResponseDto } from './dto/find-all-users-response.dto';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor) // Aplica el interceptor para transformar respuestas
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @SerializeOptions({ type: UserResponseDto })
  @Post()
  @Roles(UserRole.ADMIN) // Solo ADMINS pueden crear usuarios
  @UseGuards(RolesGuard) // Aplica el RolesGuard específicamente aquí (o a nivel de controlador)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.usersService.create(createUserDto);
    return new UserResponseDto(user); // Transforma a UserResponseDto
  }

  @SerializeOptions({ type: UserResponseDto })
  @Get()
  @Roles(UserRole.ADMIN)
  async findAll(
    @Query() paginationDto: FindAllUsersQueryParamsDto,
  ): Promise<{ data: FindAllUsersResponseDto; message: string }> {
    const { total, result, meta } =
      await this.usersService.findAll(paginationDto);
    const users: UserResponseDto[] = result.map(
      (user) => new UserResponseDto(user),
    );

    return {
      data: {
        total,
        result: users,
        meta,
      },
      message: 'Users list retrieved successfully.',
    };
  }

  @SerializeOptions({ type: UserResponseDto })
  @Get(':user_id')
  @Roles(UserRole.ADMIN)
  async findOne(
    @Param('user_id', ParseUUIDPipe) user_id: string,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.findOne(user_id);
    if (!user) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }
    return new UserResponseDto(user);
  }

  @SerializeOptions({ type: UserResponseDto })
  @Patch(':user_id')
  @Roles(UserRole.ADMIN)
  async update(
    @Param('user_id', ParseUUIDPipe) user_id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.update(user_id, updateUserDto);
    return new UserResponseDto(user);
  }

  @Delete(':user_id')
  @HttpCode(HttpStatus.NO_CONTENT) // O devuelve un mensaje
  @Roles(UserRole.ADMIN)
  async remove(
    @Param('user_id', ParseUUIDPipe) user_id: string,
  ): Promise<{ message: string }> {
    //Promise<void> si es 204
    return this.usersService.remove(user_id);
    // return; // si HttpCode es 204 y el servicio no devuelve nada útil
  }
}
