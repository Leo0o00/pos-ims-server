import { OmitType } from "@nestjs/mapped-types";
import { RCreateProductDto } from "src/products/dto/r-create-product.dto";

export class NewProductsDto extends OmitType(RCreateProductDto, ['purchase_date', 'amount'] as const) {
}