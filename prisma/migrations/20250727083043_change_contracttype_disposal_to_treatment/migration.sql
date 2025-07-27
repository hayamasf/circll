/*
  Warnings:

  - The values [disposal] on the enum `ContractType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContractType_new" AS ENUM ('transportation', 'treatment');
ALTER TABLE "IndustrialWasteContract" ALTER COLUMN "type" TYPE "ContractType_new" USING ("type"::text::"ContractType_new");
ALTER TYPE "ContractType" RENAME TO "ContractType_old";
ALTER TYPE "ContractType_new" RENAME TO "ContractType";
DROP TYPE "ContractType_old";
COMMIT;
