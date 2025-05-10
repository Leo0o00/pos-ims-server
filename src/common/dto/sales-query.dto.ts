import { IsOptional, IsDateString, IsNumber, IsBoolean } from 'class-validator';
import { QueryParamsDto } from './query-params.dto';
import { Type } from 'class-transformer';

export class SalesQueryDto extends QueryParamsDto {
  @IsOptional() @IsDateString() dateFrom?: string;
  @IsOptional() @IsDateString() dateTo?: string;
  @Type(() => Number) @IsOptional() @IsNumber() minTotal?: number;
  @Type(() => Number) @IsOptional() @IsNumber() maxTotal?: number;
  @IsOptional() @IsBoolean() includeDeleted?: boolean;
}
