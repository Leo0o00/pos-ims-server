import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { SimpleApiResponse } from 'src/common/dto/simpleApiResponse';
import { EmployeesResponseDto } from './dto/employees-response.dto';

@Controller('employees')
// @UseInterceptors(HttpCacheInterceptor)
// @CacheTTL(600000)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Roles(UserRole.ADMIN)
  @ApiCreatedResponse({
    description: 'Employee created successfully.',
    type: SimpleApiResponse,
  })
  @ApiBadRequestResponse({
    description:
      '"There is not exist a point of sales with than name." or "Employee already exists with that CID or phone number."',
  })
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<SimpleApiResponse> {
    await this.employeesService.create(createEmployeeDto);

    return {
      message: 'Employee created successfully.',
    };
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOkResponse({
    description: 'Employees retrieved successfully.',
    type: EmployeesResponseDto,
  })
  async findAll(
    @Req() req,
    @Query() paginationDto: PaginationDto,
  ): Promise<EmployeesResponseDto> {
    console.log(req);
    const { total, result, meta } = await this.employeesService.findAll(
      paginationDto.page,
      paginationDto.limit,
    );

    return {
      data: {
        total,
        result,
        meta,
      },
      message: 'Employees retrieved successfully.',
    };
  }

  @Get(':uuid')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async findOne(
    @Req() req,
    @Param(
      'uuid',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    uuid: string,
  ) {
    console.log(req);
    const result = await this.employeesService.findOne(uuid);
    return {
      data: result,
      message: 'Employee details retrieved successfully.',
    };
  }

  // TODO: Implementar un metodo que devuelva las ventas por id de empleado
  // @Get(':uuid/sales')
  // @Roles(UserRole.ADMIN, UserRole.MANAGER)
  // async findSalesByEmployeeId(
  //   @Req() req,
  //   @Param(
  //     'uuid',
  //     new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
  //   )
  //   uuid: string,
  // ) {
  //   console.log(req);
  //   const result = await this.employeesService.findSalesByEmployeeId(uuid);
  //   return {
  //     data: result,
  //     message: 'Employee details retrieved successfully.',
  //   };
  // }

  @Patch(':uuid')
  @Roles(UserRole.ADMIN)
  async update(
    @Param(
      'uuid',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    uuid: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const result = await this.employeesService.update(uuid, updateEmployeeDto);

    return {
      data: result,
      message: 'Employee updated successfully.',
    };
  }

  @Delete(':uuid')
  @Roles(UserRole.ADMIN)
  async remove(
    @Param(
      'uuid',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    uuid: string,
  ) {
    await this.employeesService.remove(uuid);

    return {
      message: 'Employee deleted successfully.',
    };
  }
}
