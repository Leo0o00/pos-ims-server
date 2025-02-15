import { IsIn, IsNotEmpty, IsNumber, IsString, Matches, Max } from "class-validator";
import { IsBuffer } from "../custom validators/IsBufferValidator";

export class ProductImageDto{
    @IsString({
        message: 'The fieldname must be a text string.'
    })
    @IsNotEmpty({
        message: 'The fieldname is required.'
    })
    @IsIn(['images'], {message: 'The fieldname must be "images".'})
    fieldname: string;

    @IsString({
        message: 'The originalname must be a text string.'
    })
    @IsNotEmpty({
        message: 'The originalname is required.'
    })
    originalname: string;
    
    @IsString({
        message: 'The encoding must be a text string.'
    })
    @IsNotEmpty({
        message: 'The encoding is required.'
    })
    @IsIn(['7bit', 'base64', 'binary'], {message: 'The encoding must be one of: 7bit, base64, binary'})
    encoding: string;

    @IsString({
        message: 'The mimetype must be a text string.'
    })
    @Matches(/^image\/(jpeg|png|gif|webp)$/, { // Validate that it is an image
        message: 'The file must be a valid image(JPEG, PNG, GIF, o WEBP)',
    })
    mimetype: string;

    @IsNotEmpty({
        message: 'The buffer is required.'
    })
    @IsBuffer()
    buffer: ArrayBuffer;


    @IsNotEmpty({
        message: 'The size property is required.'
    })
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
        maxDecimalPlaces: 0
    }, {
        message: 'The size must be a number.'
    })
    @Max(5 * 1024 * 1024,
        {
            message: 'The size must be less than or equal to 5MB.'
        }
    ) // Limits the size of uploaded pictures to 5MB
    size: number;
}