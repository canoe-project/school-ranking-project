/*
  Warnings:

  - A unique constraint covering the columns `[SCHUL_CODE]` on the table `School` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `School_SCHUL_CODE_key` ON `School`(`SCHUL_CODE`);
