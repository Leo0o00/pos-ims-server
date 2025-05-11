import { Exclude, Expose, Type } from 'class-transformer';
import { UserRole } from '@prisma/client';
import { EmployeeBasicInfoDto } from 'src/employees/dto/employee-basic-info.dto';

export class UserResponseDto {
  @Expose()
  user_id!: string;

  @Expose()
  email!: string;

  @Expose()
  first_name!: string;

  @Expose()
  last_name!: string;

  @Expose()
  roles!: UserRole[];

  @Expose()
  is_active!: boolean;

  @Expose()
  @Type(() => String) // Asegura que DateTime se serialice como string ISO
  created_at!: Date;

  @Expose()
  @Type(() => String)
  last_update!: Date;

  @Exclude() // Nunca exponer la contraseña
  password!: string;

  @Expose()
  employee_id?: string | null; // Puede ser null

  @Expose()
  @Type(() => EmployeeBasicInfoDto)
  employee?: EmployeeBasicInfoDto;

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
