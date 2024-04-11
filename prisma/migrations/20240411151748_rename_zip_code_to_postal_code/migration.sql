/*
  Warnings:

  - You are about to drop the column `zipCode` on the `Contractor` table. All the data in the column will be lost.
  - Made the column `postalCode` on table `Client` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `postalCode` to the `Contractor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "postalCode" SET NOT NULL;

-- AlterTable
ALTER TABLE "Contractor" DROP COLUMN "zipCode",
ADD COLUMN     "postalCode" TEXT NOT NULL;
