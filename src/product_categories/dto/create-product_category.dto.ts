import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductCategoryDto {
    
    @IsString({
        message: 'The product category name must be a text string.'
    })
    @MinLength(2, {
        message: 'The product category name must be at least $constraint1 characters long.'
    })
    @MaxLength(45, {
        message: 'The product category name must be at most $constraint1 characters long.'
    })
    name: string;
}
