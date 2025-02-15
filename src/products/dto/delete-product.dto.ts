import { IsArray, IsUUID } from "class-validator";

export class DeleteProductDto {
    @IsUUID('all', {
        each: true,
        message: 'Each product id must be a valid UUID.'
    })
    @IsArray({ message: 'Products ids must be an array of UUIDs.' })
    productsIds: string[]
}