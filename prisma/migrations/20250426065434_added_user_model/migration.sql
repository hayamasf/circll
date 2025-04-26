-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "displayName" TEXT,
    "avatarUrl" TEXT,
    "role" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IndustrialWasteContractToSite" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IndustrialWasteContractToSite_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_IndustrialWasteContractToSite_B_index" ON "_IndustrialWasteContractToSite"("B");

-- AddForeignKey
ALTER TABLE "_IndustrialWasteContractToSite" ADD CONSTRAINT "_IndustrialWasteContractToSite_A_fkey" FOREIGN KEY ("A") REFERENCES "IndustrialWasteContract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndustrialWasteContractToSite" ADD CONSTRAINT "_IndustrialWasteContractToSite_B_fkey" FOREIGN KEY ("B") REFERENCES "Site"("id") ON DELETE CASCADE ON UPDATE CASCADE;
