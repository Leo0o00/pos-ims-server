-- AlterTable
ALTER TABLE "Employees" ADD COLUMN     "deleted_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "deleted_at" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "Purchases" ADD COLUMN     "deleted_at" TIMESTAMP(6);
