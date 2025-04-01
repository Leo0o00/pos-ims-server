import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { RCreateProductDto } from "src/products/dto/r-create-product.dto";

export class ExistingProductsDto extends PickType(RCreateProductDto, ['purchase_price', 'stock_quantity'] as const){

    @IsNotEmpty({
        message: 'Product id is required.'
    })
    @IsString({
        message: 'Product id must be a text string.'
    })
    @IsUUID('all', {
        message: 'Product id must be a valid UUID.'
    })
    readonly product_id: string;
}