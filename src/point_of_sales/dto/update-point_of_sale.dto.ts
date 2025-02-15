import { PartialType } from '@nestjs/mapped-types';
import { CreatePointOfSaleDto } from './create-point_of_sale.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdatePointOfSaleDto extends PartialType(CreatePointOfSaleDto) {
    @IsString({
        message: 'Product category id must be a text string.'
    })
    @IsUUID('all', {
        message: 'Point of sales id must be a valid UUID.'
    })
    point_of_sales_id: string
}
