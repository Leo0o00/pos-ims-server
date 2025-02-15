import { PartialType } from '@nestjs/mapped-types';
import { CreateProductCategoryDto } from './create-product_category.dto';
import { IsString, IsUUID } from 'class-validator';

export class UpdateProductCategoryDto extends PartialType(CreateProductCategoryDto) {
    @IsString({
        message: 'Product category id must be a text string.'
    })
    @IsUUID('all', {
        message: 'Product category id must be a valid UUID.'
    })
    products_categories_id: string
}
