-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'user';

-- CreateTable
CREATE TABLE "JwnetInformation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "jwnetId" TEXT NOT NULL,
    "ediKey" TEXT,
    "clientId" INTEGER,
    "contractorId" INTEGER,
    "siteId" INTEGER,

    CONSTRAINT "JwnetInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_jwnetId_key" ON "JwnetInformation"("jwnetId");

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_clientId_key" ON "JwnetInformation"("clientId");

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_contractorId_key" ON "JwnetInformation"("contractorId");

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_siteId_key" ON "JwnetInformation"("siteId");

-- AddForeignKey
ALTER TABLE "JwnetInformation" ADD CONSTRAINT "JwnetInformation_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JwnetInformation" ADD CONSTRAINT "JwnetInformation_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JwnetInformation" ADD CONSTRAINT "JwnetInformation_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;
