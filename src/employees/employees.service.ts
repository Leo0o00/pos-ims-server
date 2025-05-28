import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationService } from 'src/common/pagination/pagination.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class EmployeesService {
  constructor(
    private prisma: PrismaService,
    private readonly paginationService: PaginationService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
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
    await this.cacheService.del('/api/employees/');
    return true;
  }

  async findAll(page = 1, limit = 10) {
    try {
      const result = await this.prisma.employees.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });
      const total = await this.prisma.employees.count();
      const meta = this.paginationService.getPaginationMeta(page, limit, total);

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

      return {
        employee_id: existingEmployee.employee_id,
        CID: existingEmployee.CID,
        first_name: existingEmployee.first_name,
        last_name: existingEmployee.last_name,
        address: existingEmployee.address,
        phone_number: existingEmployee.phone_number,
        img: existingEmployee.img,
        pos_name: existingEmployee.pos_name,
        salary_amount: existingEmployee.salary?.amount,
        payment_date: existingEmployee.salary?.date,
        created_at: existingEmployee.created_at,
        last_update: existingEmployee.last_update,
      };
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
      return {
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

      this.prisma.$transaction(async (tx) => {
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
}
