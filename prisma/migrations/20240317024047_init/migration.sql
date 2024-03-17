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
    "title" TEXT,
    "representative" TEXT,
    "tradeName" TEXT,
    "zipCode" TEXT NOT NULL,
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
    "title" TEXT,
    "representative" TEXT,
    "tradeName" TEXT,
    "zipCode" TEXT NOT NULL,
    "prefecture" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
