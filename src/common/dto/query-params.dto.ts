import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { PaginationDto } from './pagination.dto';

export class QueryParamsDto extends PaginationDto {
  @IsOptional()
  @IsString()
  @Length(0, 255, { message: 'Query must be between 1 and 255 characters.' })
  @Transform(({ value }) => value.trim())
  readonly query?: string;

  @IsOptional()
  @IsInt({ message: 'minStock must be an integer.' })
  @Min(0, { message: 'minStock must be greater than or equal to 0.' })
  minStock?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 2,
  })
  @Min(0, { message: 'minPrice must be greater than or equal to 0.' })
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 2,
  })
  @Min(0, { message: 'maxPrice must be greater than or equal to 0.' })
  maxPrice?: number;
}
