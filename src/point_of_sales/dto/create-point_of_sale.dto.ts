import { IsString, Length } from "class-validator";

export class CreatePointOfSaleDto {
    @IsString({
        message: 'Point of sales name must be a string.'
    })
    @Length(3, 45, {
        message: 'name must be between 3 and 45 characters.',
    })
    name: string;

    @IsString({
        message: 'address must be a string.'
    })
    @Length(5, 100, {
        message: 'address must be between 5 and 45 characters.',
    })
    address: string;

    // @IsString({
    //     message: 'img must be a string'
    // })
    // img?: string;
}
