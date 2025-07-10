/*
  Warnings:

  - A unique constraint covering the columns `[clientId,siteId]` on the table `JwnetInformation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "JwnetInformation_clientId_key";

-- DropIndex
DROP INDEX "JwnetInformation_siteId_key";

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_clientId_siteId_key" ON "JwnetInformation"("clientId", "siteId");
