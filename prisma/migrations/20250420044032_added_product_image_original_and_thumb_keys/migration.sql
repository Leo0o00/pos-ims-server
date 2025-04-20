/*
  Warnings:

  - You are about to drop the column `image_name` on the `Products_images` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[image_original_key]` on the table `Products_images` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[image_thumb_key]` on the table `Products_images` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image_original_key` to the `Products_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_thumb_key` to the `Products_images` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Products_images_image_name_key";

-- AlterTable
ALTER TABLE "Products_images" DROP COLUMN "image_name",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image_original_key" VARCHAR NOT NULL,
ADD COLUMN     "image_thumb_key" VARCHAR NOT NULL,
ADD COLUMN     "last_update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Products_images_image_original_key_key" ON "Products_images"("image_original_key");

-- CreateIndex
CREATE UNIQUE INDEX "Products_images_image_thumb_key_key" ON "Products_images"("image_thumb_key");
