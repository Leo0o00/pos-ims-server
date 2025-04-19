import { IsInt, IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';

export class PaginationDto {

  @IsOptional()
  @IsPositive()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 0
  })
  @IsInt({message: 'Limit must be an integer.'})
  @Min(1, {message: 'Limit must be greater than or equal to 1.'})
  @Max(100, {message: 'Limit must be less than or equal to 100.'})
  readonly limit?: number;

  @IsOptional()
  @IsNumber({
    allowInfinity: false,
    allowNaN: false,
    maxDecimalPlaces: 0
  })
  @IsInt({message: 'Offset must be an integer.'})
  @IsPositive({message: 'Offset must be a positive number.'})
  readonly page?: number;
  

}
