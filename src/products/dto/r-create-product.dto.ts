import {
    IsString,
    IsNumber,
    IsNotEmpty,
    IsPositive,
    Max,
    IsDateString,
    MaxLength,
    MinLength,
} from 'class-validator';
import { Type } from 'class-transformer'; // Necesario para validar objetos anidados

export class RCreateProductDto {
    @IsString({
        message: 'The branch must be a text string.'
    })
    @MinLength(1, {
            message: 'The branch field must be at least $constraint1 characters long.'
        })
    @MaxLength(45, {
            message: 'The branch field must be at most $constraint1 characters long.'
        })
    @IsNotEmpty({
        message: 'The branch is required.'
    })
    branch: string;

    @IsString({
        message: 'The model must be a text string.'
    })
    @MinLength(1, {
            message: 'The model field must be at least $constraint1 characters long.'
        })
    @MaxLength(45, {
            message: 'The model field must be at most $constraint1 characters long.'
        })
    @IsNotEmpty({
        message: 'The model is required.'
    })
    model: string;

    @IsString({
        message: 'The description must be a text string.'
    })
    @MinLength(1, {
            message: 'The description field must be at least $constraint1 characters long.'
        })
    @MaxLength(255, {
            message: 'The description field must be at most $constraint1 characters long.'
        })
    @IsNotEmpty({
        message: 'The description is required.'
    })
    description: string;

    
    @Type(() => Number)
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 2
    }, {
        message: 'The purchase price must be a number with up to two decimal places.'
    })
    @IsNotEmpty({
        message: 'The purchase price is required.'
    })
    @IsPositive({
        message: 'The purchase price must be a positive number.'
    })
    @Max(99999999.99, {
        message: 'The purchase price must be less than or equal to 99999999.99.'
    })
    purchase_price: number;

    @Type(() => Number)
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0
    })
    @IsNotEmpty({
        message: 'The stock quantity is required.'
    })
    @IsPositive({
        message: 'The stock quantity must be a positive number.'
    })
    stock_quantity: number;
    
    @Type(() => Number)
    @IsNotEmpty({ message: 'Amount field is required.' })
    @IsNumber({allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2}, {message: 'Amount dont allow decimal places.'})
    @IsPositive({message: 'Amount must be a positive number.'})  
    amount: number;

    @IsDateString({
        strict: true,
        strictSeparator: true,
    },
    {
        message: 'The purchase date must be in ISO 8601 UTC format (e.g.: 2024-10-05T23:37:27Z).'
    })
    @IsNotEmpty({
        message: 'The purchase date is required.'
    })
    purchase_date: string;

    @IsString({
        message: 'The category name must be a text string.'
    })
    @MinLength(1, {
            message: 'The category name field must be at least $constraint1 characters long.'
        })
    @MaxLength(45, {
            message: 'The category name field must be at most $constraint1 characters long.'
        })
    @IsNotEmpty({
        message: 'The category name is required.'
    })
    category_name: string;

    @IsString({
        message: 'The provider name must be a text string.'
    })
    @MinLength(1, {
            message: 'The provider name field must be at least $constraint1 characters long.'
        })
    @MaxLength(45, {
            message: 'The provider name field must be at most $constraint1 characters long.'
        })
    @IsNotEmpty({
        message: 'The provider name is required.'
    })
    provider_name: string;

    @IsString({
        message: 'The point of sales name must be a text string.'
    })
    @MinLength(1, {
            message: 'The point of sales field must be at least $constraint1 characters long.'
        })
    @MaxLength(45, {
            message: 'The point of sales field must be at most $constraint1 characters long.'
        })
    @IsNotEmpty({
        message: 'The point of sales name is required.'
    })
    pos_name: string;

    // @IsObject({message: 'Image field must be an object.'})
    // @ValidateNested() // Validates the nested object
    // @IsNotEmpty({
    //     message: 'Image field is required.'
    // })
    // @Type(() => ProductImageDto) // Transforms the object to the class ProductImageDto
    // image: ProductImageDto;
}