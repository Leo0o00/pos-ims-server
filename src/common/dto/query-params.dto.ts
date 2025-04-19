import { Transform } from "class-transformer";
import { IsOptional, IsString, Length } from "class-validator";
import { PaginationDto } from './pagination.dto';

export class QueryParamsDto extends PaginationDto{

    @IsOptional()
    @IsString()
    @Length(1, 255, { message: 'Query must be between 1 and 255 characters.' })
    @Transform(({ value }) => value.trim())
    readonly query?: string;



}

