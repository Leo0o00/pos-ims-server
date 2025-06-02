import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { CACHE_KEYS, CACHE_TTL } from '../common/constants/cache.constants';
import { CacheService } from '../common/cache/cache.service';
import { MetaType } from '../common/types/meta.type';

type EmployeesQueryResult = {
  address: string;
  img: string | null;
  created_at: Date;
  last_update: Date;
  employee_id: string;
  CID: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  pos_name: string;
  deleted_at: Date | null;
};

type EmployeeList = EmployeesQueryResult[];

type FindAllEmployeeResult = {
  result: EmployeeList;
  total: number;
  meta: MetaType;
};

type EmployeeDetail = {
  employee_id: string;
  CID: string;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string | null;
  img: string | null;
  pos_name: string;
  salary_amount: number | undefined;
  payment_date: Date | undefined;
  created_at: Date;
  last_update: Date;
};

@Injectable()
export class EmployeesService {
  private readonly logger = new Logger(EmployeesService.name);

  constructor(
    private prisma: PrismaService,
    private readonly paginationService: PaginationService,
    private readonly cacheService: CacheService,
  ) {}

  async create(data: CreateEmployeeDto) {
    try {
      const validPos = await this.prisma.points_of_sales.findFirst({
        where: {
          name: data.pos_name,
        },
      });

      if (!validPos) {
        throw new BadRequestException(
          'There is not exist a point of sales with than name.',
        );
      }

      const existingEmployee = await this.prisma.employees.findFirst({
        where: {
          OR: [{ CID: data.CID }, { phone_number: data.phone_number }],
        },
      });
      if (existingEmployee) {
        throw new BadRequestException(
          'Employee already exists with that CID or phone number.',
        );
      }

      await this.prisma.employees.create({
        data: {
          CID: data.CID,
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          phone_number: data.phone_number,
          pos_name: data.pos_name,
          salary: {
            create: {
              amount: data.salary_amount,
              date: data.payment_date,
            },
          },
        },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException(
        'Unexpected error while creating employee.',
      );
    }
    // Invalidación de caché después de crear
    await this.invalidateEmployeesListCache(); // Método para invalidar cachés de listas

    return true;
  }

  async findAll(page = 1, limit = 10) {
    //Construir la clave de caché
    const cacheKey = CACHE_KEYS.EMPLOYEES_LIST(page, limit);
    //Intentar obtener de la caché
    try {
      const cachedEmployees =
        await this.cacheService.get<FindAllEmployeeResult>(cacheKey);
      if (cachedEmployees) {
        this.logger.log(
          `Returning paged employees from cache for key: ${cacheKey}`,
        );
        return cachedEmployees;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing the cache for the key: ${cacheKey}: `,
        error,
      );
    }

    //Si no está en caché (cache miss), obtener de la BD
    // this.logger.log(
    //   `Cache miss para empleados paginados con clave: ${cacheKey}. Obteniendo de BD.`,
    // );

    try {
      const result: EmployeeList = await this.prisma.employees.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const total = await this.prisma.employees.count();
      const meta: MetaType = this.paginationService.getPaginationMeta(
        page,
        limit,
        total,
      );

      //Guardar en caché antes de retornar
      try {
        await this.cacheService.set(
          cacheKey,
          { total, result, meta },
          CACHE_TTL.EIGHT_HOURS,
        );
        this.logger.log(`Paged employees cached for the key: ${cacheKey}`);
      } catch (error) {
        this.logger.error(`Error while caching for $ key{cacheKey}: `, error);
      }

      return {
        total,
        result,
        meta,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Unespected error.');
    }
  }

  async findOne(uuid: string) {
    const cacheKey = CACHE_KEYS.EMPLOYEES_BY_ID(uuid);

    try {
      const cachedEmployee =
        await this.cacheService.get<EmployeeDetail>(cacheKey);
      if (cachedEmployee) {
        this.logger.log(
          `Returning employee from cache for employee ID: ${uuid}`,
        );
        return cachedEmployee;
      }
    } catch (error) {
      this.logger.error(
        `Error accessing cache for employee ID ${uuid}: `,
        error,
      );
    }

    // this.logger.log(`Cache miss para empleado ID: ${uuid}. Obteniendo de BD.`);

    try {
      const existingEmployee = await this.prisma.employees.findFirst({
        where: {
          employee_id: uuid,
        },
        include: {
          salary: true,
        },
      });

      if (!existingEmployee) {
        throw new NotFoundException('Employee not found with the provided id.');
      }

      const curatedEmployeeResult: EmployeeDetail = {
        employee_id: existingEmployee.employee_id,
        CID: existingEmployee.CID,
        first_name: existingEmployee.first_name,
        last_name: existingEmployee.last_name,
        address: existingEmployee.address,
        phone_number: existingEmployee.phone_number,
        img: existingEmployee.img,
        pos_name: existingEmployee.pos_name,
        salary_amount: Number(existingEmployee.salary?.amount),
        payment_date: existingEmployee.salary?.date,
        created_at: existingEmployee.created_at,
        last_update: existingEmployee.last_update,
      };

      try {
        await this.cacheService.set(
          cacheKey,
          curatedEmployeeResult,
          CACHE_TTL.EIGHT_HOURS,
        ); // Ejemplo: TTL de 1 hora
        this.logger.log(`Employee ID: ${uuid} cached.`);
      } catch (error) {
        this.logger.error(`Error caching for employee ID ${uuid}: `, error);
      }

      return curatedEmployeeResult;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException('Unespected error.');
    }
  }

  async update(uuid: string, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const existingEmployee = await this.prisma.employees.findFirst({
        where: {
          employee_id: uuid,
        },
        include: {
          salary: true,
        },
      });
      if (!existingEmployee) {
        throw new NotFoundException('Employee not found with the provided id.');
      }

      if (updateEmployeeDto.pos_name) {
        const validPos = await this.prisma.points_of_sales.findFirst({
          where: {
            name: updateEmployeeDto.pos_name,
          },
        });
        if (!validPos) {
          throw new BadRequestException(
            'There is not exist a point of sales with than name.',
          );
        }
      }

      if (updateEmployeeDto.CID || updateEmployeeDto.phone_number) {
        const employeeWithExistingPhoneNumberOrCID =
          await this.prisma.employees.findFirst({
            where: {
              OR: [
                { CID: updateEmployeeDto.CID },
                { phone_number: updateEmployeeDto.phone_number },
              ],
            },
          });
        if (employeeWithExistingPhoneNumberOrCID) {
          throw new BadRequestException(
            'Employee already exists with that CID or phone number.',
          );
        }
      }

      const updatedEmployee = await this.prisma.employees.update({
        where: {
          employee_id: uuid,
        },
        include: {
          salary: true,
        },
        data: {
          CID: updateEmployeeDto.CID,
          first_name: updateEmployeeDto.first_name,
          last_name: updateEmployeeDto.last_name,
          address: updateEmployeeDto.address,
          phone_number: updateEmployeeDto.phone_number,
          pos_name: updateEmployeeDto.pos_name,
          salary: {
            update: {
              amount: updateEmployeeDto.salary_amount,
              date: updateEmployeeDto.payment_date,
            },
          },
        },
      });

      const curatedEmployeeResult = {
        employee_id: updatedEmployee.employee_id,
        CID: updatedEmployee.CID,
        first_name: updatedEmployee.first_name,
        last_name: updatedEmployee.last_name,
        address: updatedEmployee.address,
        phone_number: updatedEmployee.phone_number,
        img: updatedEmployee.img,
        pos_name: updatedEmployee.pos_name,
        salary_amount: updatedEmployee.salary?.amount,
        payment_date: updatedEmployee.salary?.date,
        created_at: updatedEmployee.created_at,
        last_update: updatedEmployee.last_update,
      };

      // Invalidación de caché después de actualizar
      await this.invalidateEmployeesCacheById(uuid);

      await this.invalidateEmployeesListCache();

      return curatedEmployeeResult;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      if (error instanceof NotFoundException) {
        throw error;
      }

      console.error(error);
      throw new InternalServerErrorException(
        'Unespected error while updating employee.',
      );
    }
  }

  async remove(uuid: string) {
    try {
      const existingEmployee = await this.prisma.employees.findFirst({
        where: {
          employee_id: uuid,
        },
        include: {
          salary: true,
        },
      });

      if (!existingEmployee) {
        throw new NotFoundException('Employee not found with the provided id.');
      }

      await this.prisma.$transaction(async (tx) => {
        await tx.salary.delete({
          where: {
            employee_cid: existingEmployee.CID,
          },
        });
        await tx.employees.delete({
          where: {
            employee_id: uuid,
          },
        });
      });

      // Invalidación de caché después de eliminar
      await this.invalidateEmployeesCacheById(uuid);

      await this.invalidateEmployeesListCache();

      return true;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(error);
      throw new InternalServerErrorException(
        'Unexpected error while deleting employee.',
      );
    }
  }

  async invalidateEmployeesCacheById(uuid: string) {
    const cacheKeyIndividual = CACHE_KEYS.EMPLOYEES_BY_ID(uuid);
    try {
      await this.cacheService.del(cacheKeyIndividual);
      this.logger.log(`Caché individual invalidada para empleado ID: ${uuid}`);
    } catch (error) {
      this.logger.error(
        `Error al invalidar caché individual para empleado ID ${uuid}: `,
        error,
      );
    }
  }

  async invalidateEmployeesListCache() {
    await this.cacheService.invalidateListCacheByPattern(
      'employees:list',
      'Employee',
    );
  }
}
