/*
  Warnings:

  - Added the required column `ATPT_OFCDC_ORG_NM` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `School` ADD COLUMN `ATPT_OFCDC_ORG_NM` VARCHAR(191) NOT NULL;
