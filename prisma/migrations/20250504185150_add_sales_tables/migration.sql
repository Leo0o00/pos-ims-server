/*
  Warnings:

  - You are about to drop the column `discount_percent` on the `Products_sales` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products_sales" DROP COLUMN "discount_percent",
ALTER COLUMN "total_price" SET DATA TYPE DECIMAL(14,2);

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "quantity",
ADD COLUMN     "delete_at" TIMESTAMP(6),
ALTER COLUMN "total_amount" SET DEFAULT 0,
ALTER COLUMN "total_amount" SET DATA TYPE DECIMAL(14,2);

-- CreateIndex
CREATE INDEX "Sales_employee_cid_idx" ON "Sales"("employee_cid");
