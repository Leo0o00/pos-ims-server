import { IsArray, IsOptional, ValidateNested } from "class-validator";
import { ExistingProductsDto } from "./existing-products.dto";
import { NewProductsDto } from "./new-products.dto";
import { Type } from "class-transformer";
import { PickType } from "@nestjs/mapped-types";
import { RCreateProductDto } from "src/products/dto/r-create-product.dto";

export class CreatePurchaseDto extends PickType(RCreateProductDto, ['purchase_date'] as const){
    
    @IsOptional()
    @IsArray({ message: 'This field is required to contain an array of existing products.' })
    @ValidateNested({
        each: true,
        message: 'Invalid Existing Products object.'
    })
    @Type(() => ExistingProductsDto)
    readonly existingProducts?: ExistingProductsDto[];

    @IsOptional()
    @IsArray({ message: 'This field is required to contain an array of new products.' })
    @ValidateNested({
        each: true,
        message: 'Invalid New Products object.'
    })
    @Type(() => NewProductsDto)
    readonly newProducts?: NewProductsDto[];
    
}
