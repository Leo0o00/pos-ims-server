export class ProductListItemsDto {
    product_id: string;
    branch: string;
    model: string;
    description: string;
    purchase_price: number;
    stock_quantity: number;
    amount: number;
    purchase_date: string;
    category_name: string;
    provider_name: string;
    pos_name: string;
    created_at: string;
    last_update: string;
    imageUrl?: string;
}