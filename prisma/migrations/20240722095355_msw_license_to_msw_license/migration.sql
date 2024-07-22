/*
  Warnings:

  - You are about to drop the `mswLicense` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mswLicense";

-- CreateTable
CREATE TABLE "MswLicense" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "updatedBy" TEXT,
    "contractorId" INTEGER NOT NULL,
    "prefectureId" INTEGER NOT NULL,
    "municipalityId" INTEGER NOT NULL,
    "type" INTEGER NOT NULL,
    "expirationDate" DATE NOT NULL,
    "licenseUrl" TEXT NOT NULL,

    CONSTRAINT "MswLicense_pkey" PRIMARY KEY ("id")
);
