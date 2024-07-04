-- Create Municipality table
CREATE TABLE "Municipality" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "prefectureId" INTEGER NOT NULL,

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Municipality_prefectureId_fkey" FOREIGN KEY ("prefectureId") REFERENCES "Prefecture" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
