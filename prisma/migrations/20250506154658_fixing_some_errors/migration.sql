/*
  Warnings:

  - Added the required column `last_update` to the `Products_sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products_sales" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_update" TIMESTAMP(3) NOT NULL;
