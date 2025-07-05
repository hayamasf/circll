-- DropForeignKey
ALTER TABLE "Site" DROP CONSTRAINT "Site_clientId_fkey";

-- AlterTable
ALTER TABLE "Site" ADD COLUMN     "contractorId" INTEGER,
ALTER COLUMN "clientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_contractorId_fkey" FOREIGN KEY ("contractorId") REFERENCES "Contractor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
