// npx ts-node prisma/seed.ts

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

type Prefecture = {
  id: number;
  name: string;
};

type Municipality = {
  id: number;
  prefectureId: number;
  name: string;
};

type IndustrialWasteCategories = {
  id: number;
  name: string;
};

async function main() {
  const prefectureData = fs.readFileSync(
    path.join(__dirname, "prefectures.json"),
    "utf-8",
  );
  const prefectures: Prefecture[] = JSON.parse(prefectureData);

  const industrialWasteCategoriesData = fs.readFileSync(
    path.join(__dirname, "industrialWasteCategories.json"),
    "utf-8",
  );
  const industrialWasteCategories: IndustrialWasteCategories[] = JSON.parse(
    industrialWasteCategoriesData,
  );

  const municipalitiesData = fs.readFileSync(
    path.join(__dirname, "municipalities20240101.json"),
    "utf-8",
  );
  const municipalities: Municipality[] = JSON.parse(municipalitiesData);

  for (const prefecture of prefectures) {
    await prisma.prefecture.upsert({
      where: { id: prefecture.id },
      update: {},
      create: prefecture,
    });
  }

  for (const category of industrialWasteCategories) {
    await prisma.industrialWasteCategory.upsert({
      where: { id: category.id },
      update: {},
      create: category,
    });
  }

  for (const municipality of municipalities) {
    await prisma.municipality.upsert({
      where: { id: municipality.id },
      update: {},
      create: municipality,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
