// src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseInterceptors,
  ClassSerializerInterceptor, // Para que UserResponseDto funcione bien con @Exclude/@Expose
  HttpCode,
  HttpStatus,
  NotFoundException,
  SerializeOptions,
  // Query // Para paginación si la implementas
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user.response.dto'; // Importa el DTO de respuesta

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor) // Aplica el interceptor para transformar respuestas
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @SerializeOptions({ type: UserResponseDto })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.usersService.create(createUserDto);
    return new UserResponseDto(user); // Transforma a UserResponseDto
  }

  @SerializeOptions({ type: UserResponseDto })
  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserResponseDto(user));
  }

  @SerializeOptions({ type: UserResponseDto })
  @Get(':user_id')
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
  async update(
    @Param('user_id', ParseUUIDPipe) user_id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.update(user_id, updateUserDto);
    return new UserResponseDto(user);
  }

  @Delete(':user_id')
  @HttpCode(HttpStatus.NO_CONTENT) // O devuelve un mensaje
  async remove(
    @Param('user_id', ParseUUIDPipe) user_id: string,
  ): Promise<{ message: string }> {
    //Promise<void> si es 204
    return this.usersService.remove(user_id);
    // return; // si HttpCode es 204 y el servicio no devuelve nada útil
  }
}
