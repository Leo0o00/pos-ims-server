import { OmitType, PartialType } from "@nestjs/mapped-types";
import { RCreateProductDto } from "./r-create-product.dto";

// To validate before storing in database.
export class CreateProductDto extends PartialType(OmitType(RCreateProductDto, ['image'] as const)) {
    img: string;
}
