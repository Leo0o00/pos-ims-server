import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsArray,
  ArrayMinSize,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsUUID,
} from 'class-validator';
import { UserRole } from '@prisma/client';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail({}, { message: 'Must be a valid email format.' })
  @MaxLength(255)
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  @MaxLength(100, {
    message: 'The password cannot exceed 100 characters.',
  })
  password?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  first_name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  last_name?: string;

  @IsOptional()
  @IsArray({ message: 'Roles must be an array.' })
  @IsEnum(UserRole, {
    each: true,
    message: 'Each role must be a valid value from the UserRole enum.',
  })
  @ArrayMinSize(1, {
    message:
      'At least one role must be assigned if the roles field is provided.',
  })
  roles?: UserRole[];

  @IsOptional()
  @IsBoolean({ message: 'is_active must be a boolean value.' })
  is_active?: boolean;

  @IsOptional()
  @IsUUID('all', { message: 'The employee ID must be a valid UUID.' })
  employee_id?: string;
}
