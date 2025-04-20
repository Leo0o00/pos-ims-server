import { IsArray, IsOptional, ValidateIf, ValidateNested } from "class-validator";
import { UpdateProductDto } from "./update-product.dto";
import { Type } from "class-transformer";
import { DeletedImagesDto } from "./deleted-images.dto";

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
        message: 'Invalid Existing Product object.'
    })
    @Type(() => UpdateProductDto)
    updatedProductProperties?: UpdateProductDto;

    @IsOptional()
    @Type(() => DeletedImagesDto)
    @ValidateIf(o => o.deletedImages != undefined && o.deletedImages.length > 0)
    @ValidateNested({each: true })
    @IsArray({ message: 'Deleted images field must be an array.' })
    deletedImages?: DeletedImagesDto[];
}