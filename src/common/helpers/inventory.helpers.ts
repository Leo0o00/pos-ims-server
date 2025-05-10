import { NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { TxClient } from 'src/prisma/types/txclient.type';

export class InventoryHelpers {
  /**
   * Ajusta el stock del producto asegurando que nunca sea negativo y actualiza el campo amount del producto con la nueva cantidad.
   *
   * @param tx          Cliente transaccional
   * @param productId   Id del producto
   * @param delta       Delta a aplicar al stock (puede ser negativo)
   */
  async _applyStockDelta(
    tx: TxClient,
    productId: string,
    delta: number,
    clampZero: boolean = false,
  ) {
    const product = await tx.products.findUnique({
      where: { product_id: productId },
      select: { stock_quantity: true, purchase_price: true },
    });
    if (!product) throw new NotFoundException(`Product ${productId} not found`);

    const newQty = product.stock_quantity + delta;
    if (newQty < 0) {
      if (clampZero) {
        await tx.products.update({
          where: { product_id: productId },
          data: { stock_quantity: 0, amount: 0 },
        });
      }
      throw new BadRequestException(
        `Insufficient stock to apply delta ${delta} on product ${productId}.`,
      );
    }
    await tx.products.update({
      where: { product_id: productId },
      data: {
        stock_quantity: newQty,
        amount: newQty * Number(product.purchase_price),
      },
    });
  }

  /**
   * Sincroniza fecha de compra, precio y amount del producto cuando la nueva
   * fecha es más reciente que la que posee el propio producto.
   *
   * @param tx          Cliente transaccional
   * @param productId   Id del producto
   * @param newDate     Nueva fecha de compra de la Purchase
   * @param unitPrice   Precio unitario registrado en products_purchases (posible valor actualizado)
   * @param logger      Logger para registrar la actualización
   */
  async _syncProductMeta(
    tx: TxClient,
    productId: string,
    newDate: Date,
    unitPrice: number,
    logger: Logger,
  ) {
    const prod = await tx.products.findUnique({
      where: { product_id: productId },
      select: {
        purchase_date: true,
        purchase_price: true,
        stock_quantity: true,
      },
    });

    /* Solo actualizamos si la nueva fecha es posterior */
    if (prod && newDate > prod.purchase_date) {
      const newAmount = new Prisma.Decimal(prod.stock_quantity).mul(
        new Prisma.Decimal(unitPrice),
      );

      await tx.products.update({
        where: { product_id: productId },
        data: {
          purchase_date: newDate,
          purchase_price: new Prisma.Decimal(unitPrice),
          amount: newAmount,
        },
      });
      logger.debug(
        `Producto ${productId} actualizado → fecha:${newDate.toISOString()} price:${unitPrice}`,
      );
    }
  }

  /**
   * Recalcula el total de una venta.
   *
   * @param tx      Cliente transaccional
   * @param saleId  Id de la venta
   */
  async _recalcTotal(tx: TxClient, saleId: string): Promise<void> {
    const aggregate = await tx.products_sales.aggregate({
      where: { sale_id: saleId },
      _sum: { total_price: true },
    });
    await tx.sales.update({
      where: { sales_id: saleId },
      data: { total_amount: aggregate._sum.total_price ?? 0 },
    });
  }
}
