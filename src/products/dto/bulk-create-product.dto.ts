import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { RCreateProductDto } from "./r-create-product.dto";

export class BulkCreateProductDto{
  @IsArray({ message: 'Se requiere un array de productos' })
  @ValidateNested({ each: true })
  @Type(() => RCreateProductDto)
  products: RCreateProductDto[];
}