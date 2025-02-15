import { OmitType, PartialType } from '@nestjs/mapped-types';
import { RCreateProductDto } from './r-create-product.dto';

export class UpdateProductDto extends PartialType(OmitType(RCreateProductDto, ['image'] as const) ) {}
