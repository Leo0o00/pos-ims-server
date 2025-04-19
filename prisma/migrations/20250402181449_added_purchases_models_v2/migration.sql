/*
  Warnings:

  - You are about to drop the column `product_total_invested` on the `Products_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `pruduct_quantity` on the `Products_purchases` table. All the data in the column will be lost.
  - You are about to drop the column `total_invested` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `total_quantity_products` on the `Purchases` table. All the data in the column will be lost.
  - Added the required column `last_update` to the `Products_purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_quantity` to the `Products_purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products_purchases" DROP COLUMN "product_total_invested",
DROP COLUMN "pruduct_quantity",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_update" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "product_quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "total_invested",
DROP COLUMN "total_quantity_products";
