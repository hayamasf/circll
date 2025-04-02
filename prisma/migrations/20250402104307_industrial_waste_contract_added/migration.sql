-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('transportation', 'disposal');

-- AlterTable
ALTER TABLE "_IndustrialWasteCategoryToIndustrialWasteLicense" ADD CONSTRAINT "_IndustrialWasteCategoryToIndustrialWasteLicense_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_IndustrialWasteCategoryToIndustrialWasteLicense_AB_unique";

-- CreateTable
CREATE TABLE "IndustrialWasteContract" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "contractorId" INTEGER NOT NULL,
    "type" "ContractType" NOT NULL,
    "endDate" DATE NOT NULL,
    "isAutoRenew" BOOLEAN NOT NULL,

    CONSTRAINT "IndustrialWasteContract_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IndustrialWasteContract" ADD CONSTRAINT "IndustrialWasteContract_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustrialWasteContract" ADD CONSTRAINT "IndustrialWasteContract_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
