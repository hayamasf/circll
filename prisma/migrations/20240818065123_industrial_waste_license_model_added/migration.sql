/*
  Warnings:

  - A unique constraint covering the columns `[contractorId,municipalityId,type]` on the table `MswLicense` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "IndustrialWasteLicense" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "contractorId" INTEGER NOT NULL,
    "issuingAuthority" INTEGER NOT NULL,
    "typeCode" INTEGER NOT NULL,
    "authorityCode" INTEGER NOT NULL,
    "contractorCode" INTEGER NOT NULL,
    "expirationDate" DATE NOT NULL,
    "licenseUrl" TEXT NOT NULL,

    CONSTRAINT "IndustrialWasteLicense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IndustrialWasteLicenseToWasteItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "IndustrialWasteLicense_issuingAuthority_typeCode_authorityC_key" ON "IndustrialWasteLicense"("issuingAuthority", "typeCode", "authorityCode", "contractorCode");

-- CreateIndex
CREATE UNIQUE INDEX "_IndustrialWasteLicenseToWasteItem_AB_unique" ON "_IndustrialWasteLicenseToWasteItem"("A", "B");

-- CreateIndex
CREATE INDEX "_IndustrialWasteLicenseToWasteItem_B_index" ON "_IndustrialWasteLicenseToWasteItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "MswLicense_contractorId_municipalityId_type_key" ON "MswLicense"("contractorId", "municipalityId", "type");

-- AddForeignKey
ALTER TABLE "IndustrialWasteLicense" ADD CONSTRAINT "IndustrialWasteLicense_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustrialWasteLicenseToWasteItem" ADD CONSTRAINT "_IndustrialWasteLicenseToWasteItem_A_fkey" FOREIGN KEY ("A") REFERENCES "IndustrialWasteLicense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustrialWasteLicenseToWasteItem" ADD CONSTRAINT "_IndustrialWasteLicenseToWasteItem_B_fkey" FOREIGN KEY ("B") REFERENCES "WasteItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
