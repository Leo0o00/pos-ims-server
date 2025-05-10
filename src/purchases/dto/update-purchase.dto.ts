import { Type } from 'class-transformer';
import {
  IsString,
  IsOptional,
  IsPositive,
  IsNumber,
  IsDateString,
  IsArray,
  ValidateNested,
} from 'class-validator';

// export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) { }

class UpdatedExistingProductDto {
  @IsString() product_id!: string;
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  product_quantity?: number;
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  product_unit_price?: number;
}

class DeletedProductDto {
  @IsString() product_id!: string;
  @IsPositive() @IsNumber() @Type(() => Number) product_quantity!: number; //stock to revert
}

export class UpdatePurchaseDto {
  @IsOptional() @IsDateString() purchase_date?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdatedExistingProductDto)
  updatedProducts?: UpdatedExistingProductDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeletedProductDto)
  deletedProducts?: DeletedProductDto[];
}
