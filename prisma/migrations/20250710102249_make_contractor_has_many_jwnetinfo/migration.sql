/*
  Warnings:

  - A unique constraint covering the columns `[ediKey]` on the table `JwnetInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "JwnetInformation_contractorId_key";

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_ediKey_key" ON "JwnetInformation"("ediKey");
