import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query, ParseUUIDPipe, HttpStatus } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number) {
    return this.employeesService.findAll(page, limit);
  }

  @Get(':uuid')
  async findOne(
    @Param('uuid', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) uuid: string
  ) {
    return this.employeesService.findOne(uuid);
  }

  @Patch(':uuid')
  async update(
    @Param('uuid', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) uuid: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(uuid, updateEmployeeDto);
  }

  @Delete(':uuid')
  async remove(@Param('uuid', new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) uuid: string) {
    return this.employeesService.remove(uuid);
  }
}
