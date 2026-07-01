/*
  Warnings:

  - Added the required column `date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `demo` to the `Participation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Participation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lien` to the `Participation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Participation" ADD COLUMN     "demo" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "lien" TEXT NOT NULL;
