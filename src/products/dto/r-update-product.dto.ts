import { IsArray, IsOptional, IsString, ValidateIf, ValidateNested } from "class-validator";
import { UpdateProductDto } from "./update-product.dto";
import { Type } from "class-transformer";

export class RUpdateProductDto{
    
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

    @IsOptional()
    @ValidateNested({
        message: 'Invalid Existing Products object.'
    })
    @Type(() => UpdateProductDto)
    updatedProductProperties?: UpdateProductDto;

    @IsOptional()
    @ValidateIf(o => o.deletedImages || o.deletedImages.length > 0)
    @IsArray({ message: 'Deleted images field must be an array of images.' })
    @IsString({
        each: true,
        message: 'Each deleted images name must be a text string.'
    })
    deletedImages?: string[];
}