import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { RCreateProductDto } from "./r-create-product.dto";

export class BulkCreateProductDto{
  @IsArray({ message: 'An array of products is required.' })
  @ValidateNested({ each: true })
  @Type(() => RCreateProductDto)
  products: RCreateProductDto[];
}