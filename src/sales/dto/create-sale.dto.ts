import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  Length,
  Matches,
  Max,
  // MinLength, // Ya no se usa para el array 'products'
  ValidateNested,
  ArrayMinSize, // Importa ArrayMinSize
} from 'class-validator';
import { Type } from 'class-transformer';

class SoldProductDto {
  @IsNotEmpty({ message: 'Product ID cannot be empty.' })
  @IsString({ message: 'Product ID must be a text string.' })
  @IsUUID('all', { message: 'The product ID must be a valid UUID.' })
  product_id!: string;

  @Type(() => Number) // Asegura la transformación a número antes de validar
  @IsNotEmpty({ message: 'The quantity cannot be empty.' })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 0,
    },
    { message: 'The quantity must be an integer.' },
  )
  @IsPositive({ message: 'The quantity must be a positive number.' })
  quantity!: number;

  @Type(() => Number) // Asegura la transformación a número antes de validar
  @IsNotEmpty({ message: 'The unit price cannot be empty.' })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: 2,
    },
    {
      message:
        'The unit price must be a number with a maximum of 2 decimal places.',
    },
  )
  @IsPositive({ message: 'The unit price must be a positive number.' })
  @Max(99999999.99, {
    message: 'The unit price exceeds the maximum allowed value.',
  })
  unit_price!: number;
}

export class CreateSaleDto {
  @IsNotEmpty({ message: "'The employee's CID cannot be empty.'" })
  @IsString({ message: "Employee's CID must be a text string." })
  @Length(11, 11, {
    message: "The employee's CID must be exactly 11 characters.",
  })
  @Matches(/^[0-9]+$/, {
    message: "The employee's CID must contain only numbers.",
  })
  employee_cid!: string;

  @IsNotEmpty({ message: 'The date of the sale cannot be empty.' })
  @IsDateString(
    {
      strict: true,
      // strictSeparator: true, // Considera si necesitas que el separador sea estrictamente '-' o si 'T' es aceptable. ISO8601 permite 'T'.
    },
    {
      message:
        'The date of the sale must be a date in valid ISO 8601 format (e.g. YYYYY-MM-DD or YYYYY-MM-DDTHH:mm:ssZ).',
    },
  )
  sale_date!: string;

  @IsNotEmpty({
    message: 'The product list cannot be empty as a property.',
  }) // Significa que la propiedad 'products' debe existir y no ser null/undefined.
  @IsArray({ message: 'The products must be an array.' })
  @ArrayMinSize(1, {
    message: 'At least one product must be added to the sale.',
  })
  @ValidateNested({ each: true }) // Valida cada objeto SoldProductDto dentro del array
  @Type(() => SoldProductDto)
  products!: SoldProductDto[];
}
