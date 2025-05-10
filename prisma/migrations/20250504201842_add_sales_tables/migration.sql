/*
  Warnings:

  - You are about to drop the column `delete_at` on the `Sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "delete_at",
ADD COLUMN     "deleted_at" TIMESTAMP(6);
