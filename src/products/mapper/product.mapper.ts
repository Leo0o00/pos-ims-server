import { Products, Products_images } from '@prisma/client';
import { ProductListItemsDto } from '../dto/product-list-items.dto';
import { S3Service } from 'src/common/s3/s3.service';

export async function mapProductToDto(
  product: Products & { img: Products_images[] },
  s3: S3Service,
): Promise<ProductListItemsDto> {
  const dto = new ProductListItemsDto();
  Object.assign(dto, product);
  dto.created_at = product.created_at.toISOString();
  dto.last_update = product.last_update.toISOString();
  
  if (product.img.length) {
    dto.imageUrl = await s3.getObjectSignedUrl(product.img[0].image_thumb_key);
  }
  console.log("DTO", dto)
  return {
    product_id: dto.product_id,
    branch: dto.branch,
    model: dto.model,
    description: dto.description,
    purchase_price: dto.purchase_price,
    stock_quantity: dto.stock_quantity,
    amount: dto.amount,
    purchase_date: dto.purchase_date,
    category_name: dto.category_name,
    provider_name: dto.provider_name,
    pos_name: dto.pos_name,
    created_at: dto.created_at,
    last_update: dto.last_update,
    imageUrl: dto.imageUrl,
  };
}