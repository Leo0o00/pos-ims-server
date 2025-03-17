import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString, Length, Matches, MaxLength, MinLength } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CreateEmployeeDto {
    
    
  @IsNotEmpty({ message: "The employee CID field is required." })
  @IsString({message: 'The employee CID must be a string.'})
  @Length(11, 11, { message: 'The employee CID must be 11 characters long.' })
  @Matches(/^[0-9]+$/, { message: 'The employee CID must contain only numbers.' })    
  readonly CID: string;
  
  @IsString({ message: 'The employee first name field must be a string.' })
  @Length(1, 45, { message: 'The employee first name must be between 1 and 45 characters.' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({message: "The employee first name field is required."})
  readonly first_name: string;
  
  @IsString({ message: 'The employee last name field must be a string.' })
  @Length(1, 45, { message: 'The employee last name must be between 1 and 45 characters.' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({message: "The employee last name field is required."})
  readonly last_name: string;
    
  @IsString({ message: 'The employee address field must be a string.' })
  @Length(1, 100, { message: 'The employee address must be between 1 and 100 characters.' })
  @Transform(({ value }) => value.trim())
  @IsNotEmpty({ message: "The employee address field is required." })
  readonly address: string;

  @IsString({ message: 'The phone number must be a text string.' })
   // Regex para formato internacional E.164
  @Matches(/^\+\d{0,3}\s\d{1,13}$/, { 
      message: 'El número de teléfono debe ser válido (ej: +123 4567890)',
  })
  @MinLength(11, { message: 'The phone number must be at least $constraint1 characters long.' })
  @MaxLength(45, { message: 'The phone number must be at most $constraint1 characters long.' })
  readonly phone_number: string;


  @IsString({
        message: 'Point of sales name must be a string.'
  })
  @Length(3, 45, {
      message: 'Point of sales name must be between 3 and 45 characters.',
  })
  @IsNotEmpty({message: "Point of sales name field is required."})
  readonly pos_name: string;

  // TODO: Ver luego como puedo validar que el salario pueda ser cero
  @Type(() => Number)
  @IsNotEmpty({ message: 'Amount field is required.' })
  @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2}, {message: 'Amount dont allow decimal places.'})
  @IsPositive({message: 'Amount must be a positive number.'})
  readonly salary_amount: number;
  
  @IsDateString({
      strict: true,
      strictSeparator: true,
  },
  { message: 'The purchase date must be in ISO 8601 UTC format (e.g.: 2024-10-05T23:37:27Z).' })
  @IsNotEmpty({ message: 'The purchase date is required.' })
  readonly payment_date: string;


  

}
