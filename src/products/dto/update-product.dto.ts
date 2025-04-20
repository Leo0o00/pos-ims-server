import { PartialType } from '@nestjs/mapped-types';
import { RCreateProductDto } from './r-create-product.dto';

export class UpdateProductDto extends PartialType(RCreateProductDto) {}
