-- CreateEnum
CREATE TYPE "ContractItem" AS ENUM ('msw', 'industrialWaste');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('transportation', 'treatment');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "displayName" TEXT,
    "avatarUrl" TEXT,
    "role" TEXT DEFAULT 'user',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "entityType" TEXT,
    "isPrefixEntityType" BOOLEAN,
    "name" TEXT NOT NULL,
    "representativeTitle" TEXT,
    "representativeName" TEXT,
    "tradeName" TEXT,
    "postalCode" TEXT NOT NULL,
    "prefecture" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "entityType" TEXT,
    "isPrefixEntityType" BOOLEAN,
    "name" TEXT NOT NULL,
    "representativeTitle" TEXT,
    "representativeName" TEXT,
    "tradeName" TEXT,
    "postalCode" TEXT NOT NULL,
    "prefecture" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Site" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "clientId" INTEGER,
    "contractorId" INTEGER,
    "name" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "prefecture" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prefecture" (
    "id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Prefecture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipality" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "prefectureId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MswLicense" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "contractorId" INTEGER NOT NULL,
    "municipalityId" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "expirationDate" DATE NOT NULL,
    "licenseUrl" TEXT NOT NULL,

    CONSTRAINT "MswLicense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IndustrialWasteCategory" (
    "id" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "IndustrialWasteCategory_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "contractorId" INTEGER NOT NULL,
    "contractItem" "ContractItem" NOT NULL,
    "contractType" "ContractType" NOT NULL,
    "endDate" DATE NOT NULL,
    "isAutoRenew" BOOLEAN NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "_IndustrialWasteCategoryToIndustrialWasteLicense" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IndustrialWasteCategoryToIndustrialWasteLicense_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ContractToSite" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContractToSite_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Prefecture_code_key" ON "Prefecture"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Municipality_code_key" ON "Municipality"("code");

-- CreateIndex
CREATE UNIQUE INDEX "MswLicense_contractorId_municipalityId_type_key" ON "MswLicense"("contractorId", "municipalityId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "IndustrialWasteCategory_code_key" ON "IndustrialWasteCategory"("code");

-- CreateIndex
CREATE UNIQUE INDEX "IndustrialWasteLicense_issuingAuthority_typeCode_authorityC_key" ON "IndustrialWasteLicense"("issuingAuthority", "typeCode", "authorityCode", "contractorCode");

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_jwnetId_key" ON "JwnetInformation"("jwnetId");

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_ediKey_key" ON "JwnetInformation"("ediKey");

-- CreateIndex
CREATE UNIQUE INDEX "JwnetInformation_clientId_siteId_key" ON "JwnetInformation"("clientId", "siteId");

-- CreateIndex
CREATE INDEX "_IndustrialWasteCategoryToIndustrialWasteLicense_B_index" ON "_IndustrialWasteCategoryToIndustrialWasteLicense"("B");

-- CreateIndex
CREATE INDEX "_ContractToSite_B_index" ON "_ContractToSite"("B");

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Municipality" ADD CONSTRAINT "Municipality_prefectureId_fkey" FOREIGN KEY ("prefectureId") REFERENCES "Prefecture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MswLicense" ADD CONSTRAINT "MswLicense_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MswLicense" ADD CONSTRAINT "MswLicense_municipalityId_fkey" FOREIGN KEY ("municipalityId") REFERENCES "Municipality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IndustrialWasteLicense" ADD CONSTRAINT "IndustrialWasteLicense_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JwnetInformation" ADD CONSTRAINT "JwnetInformation_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JwnetInformation" ADD CONSTRAINT "JwnetInformation_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JwnetInformation" ADD CONSTRAINT "JwnetInformation_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "Site"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustrialWasteCategoryToIndustrialWasteLicense" ADD CONSTRAINT "_IndustrialWasteCategoryToIndustrialWasteLicense_A_fkey" FOREIGN KEY ("A") REFERENCES "IndustrialWasteCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustrialWasteCategoryToIndustrialWasteLicense" ADD CONSTRAINT "_IndustrialWasteCategoryToIndustrialWasteLicense_B_fkey" FOREIGN KEY ("B") REFERENCES "IndustrialWasteLicense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractToSite" ADD CONSTRAINT "_ContractToSite_A_fkey" FOREIGN KEY ("A") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractToSite" ADD CONSTRAINT "_ContractToSite_B_fkey" FOREIGN KEY ("B") REFERENCES "Site"("id") ON DELETE CASCADE ON UPDATE CASCADE;
