import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsArray,
  ArrayMinSize,
  IsEnum,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { UserRole } from '@prisma/client'; // Importa el enum generado por Prisma

export class CreateUserDto {
  @IsNotEmpty({ message: 'The email cannot be empty.' })
  @IsEmail({}, { message: 'Must be a valid email format.' })
  @MaxLength(255)
  email!: string;

  @IsNotEmpty({ message: 'The password cannot be empty.' })
  @IsString()
  @MinLength(8, { message: 'The password must be at least 8 characters long.' })
  @MaxLength(100, {
    message: 'The password cannot exceed 100 characters.',
  })
  //TODO: Añadir validaciones de complejidad de contraseña (ej. @Matches)
  password!: string;

  @IsNotEmpty({ message: 'The first name cannot be empty.' })
  @IsString()
  @MaxLength(100)
  first_name!: string;

  @IsNotEmpty({ message: 'The last name cannot be empty.' })
  @IsString()
  @MaxLength(100)
  last_name!: string;

  @IsArray({ message: 'The roles must be an array.' })
  @IsEnum(UserRole, {
    each: true,
    message: 'Each role must be a valid value of the enum UserRole.',
  })
  @ArrayMinSize(1, { message: 'At least one role must be assigned.' })
  roles!: UserRole[];

  @IsOptional()
  @IsUUID('all', { message: 'The employee ID must be a valid UUID.' })
  employee_id?: string; // Opcional, para vincular con un empleado existente
}
