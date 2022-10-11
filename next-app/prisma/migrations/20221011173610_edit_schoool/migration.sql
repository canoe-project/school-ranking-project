/*
  Warnings:

  - You are about to drop the column `ATPT_OFCDC_ORG_NM` on the `School` table. All the data in the column will be lost.
  - Added the required column `HS_KND_SC_NM` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `School` DROP COLUMN `ATPT_OFCDC_ORG_NM`,
    ADD COLUMN `HS_KND_SC_NM` VARCHAR(191) NOT NULL;
