import { OmitType, PartialType } from "@nestjs/mapped-types";
import { RCreateProductDto } from "./r-create-product.dto";
import { IsArray, IsNotEmpty, IsString, IsUUID, ValidateIf } from "class-validator";

export class RUpdateProductDto extends PartialType(OmitType(RCreateProductDto, ['image'] as const) ){
    
    // @IsNotEmpty({
    //     message: 'Product id is required.'
    // })
    // @IsString({
    //     message: 'Product id must be a text string.'
    // })
    // @IsUUID('all', {
    //     message: 'Product id must be a valid UUID.'
    // })
    // product_id: string;

    @ValidateIf(o => o.deletedImages !== undefined)
    @IsArray({message: 'Deleted images field must be an array of images.'})
    @IsString({
        each: true,
        message: 'Each deleted images name must be a text string.'
    })
    deletedImages?: string[];
}