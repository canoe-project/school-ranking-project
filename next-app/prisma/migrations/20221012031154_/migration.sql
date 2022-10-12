/*
  Warnings:

  - A unique constraint covering the columns `[SCHUL_NM]` on the table `School` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `School_SCHUL_CODE_key` ON `School`;

-- CreateIndex
CREATE UNIQUE INDEX `School_SCHUL_NM_key` ON `School`(`SCHUL_NM`);
