// src/users/users.service.ts
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt'; // Cambiado a bcryptjs para evitar problemas de compatibilidad
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, User } from '@prisma/client';
import {
  CACHE_KEYS,
  CACHE_TTL,
} from '../common/cache/constants/cache.constants';
import { CacheService } from 'src/common/cache/cache.service';
import { FindAllUsersQueryParamsDto } from './dto/find-all-users-query-params.dto';
import { MetaType } from '../common/types/meta.type';
import { PaginationService } from '../common/pagination/pagination.service';

type UsersList = User[];

type FindAllUsersQuery = {
  total: number;
  result: Omit<User, 'password'>[];
  meta: MetaType;
};

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  private readonly SALT_ROUNDS = 10; // Cambiar a un valor más seguro en producción
  constructor(
    private readonly prisma: PrismaService,
    private readonly cacheService: CacheService,
    private readonly paginationService: PaginationService,
  ) {}

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

      // Invalidación de caché después de crear
      await this.invalidateUsersListCache();

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

  async findAll(
    queryParams: FindAllUsersQueryParamsDto,
  ): Promise<FindAllUsersQuery> {
    interface Filters {
      contains: string;
      mode: string;
    }

    const { query, limit = 10, page = 1 } = queryParams;

    //Construir la clave de caché
    const cacheKey = CACHE_KEYS.USERS_LIST(page, limit, query);
    //Intentar obtener de la caché
    try {
      const cachedUsers =
        await this.cacheService.get<FindAllUsersQuery>(cacheKey);
      if (cachedUsers) {
        // const {total, result, meta} = cachedUsers;
        this.logger.log(
          `Returning paged Users list from cache for key: ${cacheKey}`,
        );
        return cachedUsers;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing the cache for the key: ${cacheKey}: `,
        error,
      );
    }

    let filters: Array<Record<string, Filters>> = [];

    if (query) {
      filters = [
        { email: { contains: query, mode: 'insensitive' } },
        { first_name: { contains: query, mode: 'insensitive' } },
        { last_name: { contains: query, mode: 'insensitive' } },
      ];
    }
    const where: Prisma.UserWhereInput = {
      AND: [query ? { OR: filters } : {}],
    };

    const users = await this.prisma.user.findMany({
      where,
      include: {
        employee: { select: { first_name: true, last_name: true, CID: true } },
      },
    });

    console.log('USERS LIST: ', users);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const usersWithoutPasswordList = users.map(({ password, ...user }) => user);

    /* total global con filtros */
    const total = await this.prisma.user.count({ where });
    const meta: MetaType = this.paginationService.getPaginationMeta(
      page,
      limit,
      total,
    );

    //Guardar en caché antes de retornar
    await this.cacheService.setWithLogMessage<FindAllUsersQuery>(
      cacheKey,
      { total, result: usersWithoutPasswordList, meta },
      CACHE_TTL.EIGHT_HOURS,
      'Users List',
    );

    return { total, result: usersWithoutPasswordList, meta };
  }

  async findOne(user_id: string): Promise<Omit<User, 'password'> | null> {
    const cacheKey = CACHE_KEYS.USERS_BY_ID(user_id);

    try {
      const cachedUser = await this.cacheService.get<User>(cacheKey);
      if (cachedUser) {
        this.logger.log(`Returning user from cache for user ID: ${user_id}`);
        return cachedUser;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing cache for user ID ${user_id}: `,
        error,
      );
    }

    const user = await this.prisma.user.findUnique({
      where: { user_id },
      include: { employee: true },
    });
    if (!user) {
      throw new NotFoundException(`User with ID '${user_id}' not found.`);
    }

    if (user) {
      await this.cacheService.setWithLogMessage(
        cacheKey,
        user,
        CACHE_TTL.EIGHT_HOURS,
        'User details',
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  async findByEmailForAuth(email: string): Promise<User | null> {
    // Este método será útil para el módulo de autenticación
    // No excluye la contraseña porque el servicio de autenticación la necesitará para comparar

    const cacheKey = CACHE_KEYS.USERS_BY_EMAIL(email);

    try {
      const cachedUser = await this.cacheService.get<User>(cacheKey);
      if (cachedUser) {
        this.logger.log(`Returning user from cache for user Email: ${email}`);
        return cachedUser;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing cache for user Email ${email}: `,
        error,
      );
    }

    const userDetails = await this.prisma.user.findUnique({
      where: { email, /*deleted_at: null,*/ is_active: true }, // El middleware de soft-delete ya filtra por deleted_at: null
      // Considera is_active para login
    });

    if (userDetails) {
      await this.cacheService.setWithLogMessage(
        cacheKey,
        userDetails,
        CACHE_TTL.EIGHT_HOURS,
        'User details',
      );
    }

    return userDetails;
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

      // Invalidación de caché después de actualizar
      await this.invalidateUserCacheById(user_id);
      await this.invalidateUserCacheByEmail(updatedUser.email);
      await this.invalidateUsersListCache();

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
    const deleteResult = await this.prisma.user.delete({ where: { user_id } });

    // Invalidación de caché después de eliminar
    await this.invalidateUserCacheById(user_id);
    await this.invalidateUserCacheByEmail(deleteResult.email);
    await this.invalidateUsersListCache();

    return { message: `User with ID '${user_id}' deleted (soft delete).` };
  }

  async invalidateUserCacheById(uuid: string) {
    const cacheKeyIndividual = CACHE_KEYS.USERS_BY_ID(uuid);
    try {
      const deleteResult = await this.cacheService.del(cacheKeyIndividual);
      if (!deleteResult) {
        this.logger.log(`Individual cache not found for User ID: ${uuid}`);
        return;
      }
      this.logger.log(`Individual cache invalidated for User ID: ${uuid}`);
    } catch (error) {
      this.logger.error(
        `Error invalidating individual cache for User ID ${uuid}: `,
        error,
      );
    }
  }

  async invalidateUserCacheByEmail(email: string) {
    const cacheKeyIndividual = CACHE_KEYS.USERS_BY_EMAIL(email);
    try {
      const deleteResult = await this.cacheService.del(cacheKeyIndividual);
      if (!deleteResult) {
        this.logger.log(`Individual cache not found for User Email: ${email}`);
        return;
      }
      this.logger.log(`Individual cache invalidated for User Email: ${email}`);
    } catch (error) {
      this.logger.error(
        `Error invalidating individual cache for User Email ${email}: `,
        error,
      );
    }
  }

  async invalidateUsersListCache() {
    await this.cacheService.invalidateListCacheByPattern('users:list', 'User');
  }
}
