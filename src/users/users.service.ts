// src/users/users.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt'; // Cambiado a bcryptjs para evitar problemas de compatibilidad
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  private readonly SALT_ROUNDS = 10; // Cambiar a un valor más seguro en producción
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const { email, password, employee_id, ...userData } = createUserDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException(`The email: '${email}' is already in use.`);
    }

    if (employee_id) {
      const employee = await this.prisma.employees.findUnique({
        where: { employee_id },
      });
      if (!employee) {
        throw new BadRequestException(
          `Employee whit ID: '${employee_id}' not found.`,
        );
      }
      // Opcional: verificar que este empleado no esté ya vinculado a otro usuario
      const userWithEmployee = await this.prisma.user.findUnique({
        where: { employee_id },
      });
      if (userWithEmployee) {
        throw new ConflictException(
          `The employee whit ID: '${employee_id}' is already assigned to another user.`,
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, this.SALT_ROUNDS);

    try {
      const user = await this.prisma.user.create({
        data: {
          ...userData,
          email,
          password: hashedPassword,
          employee_id: employee_id || null, // Asegura que sea null si no se provee
        },
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...result } = user; // Excluir contraseña del resultado
      return result;
    } catch (error) {
      // Manejar otros errores de Prisma, ej. P2002 para campos únicos si no es email
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // Unique constraint failed
          throw new ConflictException(
            'Uniqueness error when creating the user. Verify the data.',
          );
        }
      }
      throw new InternalServerErrorException('Error creating the user.');
    }
  }

  async findAll(): Promise<Omit<User, 'password'>[]> {
    const users = await this.prisma.user.findMany({
      include: {
        employee: { select: { first_name: true, last_name: true, CID: true } },
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return users.map(({ password, ...user }) => user);
  }

  async findOne(user_id: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { user_id },
      include: { employee: true },
    });
    if (!user) {
      throw new NotFoundException(`User with ID '${user_id}' not found.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  async findByEmailForAuth(email: string): Promise<User | null> {
    // Este método será útil para el módulo de autenticación
    // No excluye la contraseña porque el servicio de autenticación la necesitará para comparar
    return this.prisma.user.findUnique({
      where: { email, /*deleted_at: null,*/ is_active: true }, // El middleware de soft-delete ya filtra por deleted_at: null
      // Considera is_active para login
    });
  }

  async update(
    user_id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<Omit<User, 'password'>> {
    const { password, email, employee_id, ...userDataToUpdate } = updateUserDto;

    // Verifica que el usuario exista
    const existingUser = await this.prisma.user.findUnique({
      where: { user_id },
    });
    if (!existingUser) {
      throw new NotFoundException(`User with ID '${user_id}' not found.`);
    }

    if (email && email !== existingUser.email) {
      const userWithNewEmail = await this.prisma.user.findUnique({
        where: { email },
      });
      if (userWithNewEmail) {
        throw new ConflictException(
          `The email '${email}' is already in use by another user.`,
        );
      }
    }

    if (employee_id && employee_id !== existingUser.employee_id) {
      const employee = await this.prisma.employees.findUnique({
        where: { employee_id },
      });
      if (!employee) {
        throw new BadRequestException(
          `Employee with ID '${employee_id}' not found.`,
        );
      }
      const userWithEmployee = await this.prisma.user.findUnique({
        where: { employee_id },
      });
      if (userWithEmployee && userWithEmployee.user_id !== user_id) {
        throw new ConflictException(
          `The employee with ID '${employee_id}' is already assigned to another user.`,
        );
      }
    }

    const data: Prisma.UserUncheckedUpdateInput = { ...userDataToUpdate };

    if (password) {
      data.password = await bcrypt.hash(password, this.SALT_ROUNDS);
    }
    if (email) {
      data.email = email;
    }
    if (employee_id !== undefined) {
      // Permite desvincular enviando null o vincular con nuevo ID
      data.employee_id = employee_id;
    }

    try {
      const updatedUser = await this.prisma.user.update({
        where: { user_id },
        data,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...result } = updatedUser;
      return result;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // Unique constraint failed
          throw new ConflictException(
            'Data conflict when updating the user (e.g. duplicate email).',
          );
        }
        if (error.code === 'P2025') {
          // Record to update not found
          throw new NotFoundException(
            `User with ID '${user_id}' not found for update.`,
          );
        }
      }
      throw new InternalServerErrorException('Error updating the user.');
    }
  }

  async remove(user_id: string): Promise<{ message: string }> {
    // Verifica que el usuario exista (el middleware de soft-delete ayuda aquí)
    const user = await this.prisma.user.findUnique({ where: { user_id } });
    if (!user) {
      throw new NotFoundException(`User with ID '${user_id}' not found.`);
    }

    // El middleware de soft-delete se encargará de la lógica
    await this.prisma.user.delete({ where: { user_id } });
    return { message: `User with ID '${user_id}' deleted (soft delete).` };
  }
}
