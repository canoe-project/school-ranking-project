-- DropIndex
DROP INDEX `School_SCHUL_CODE_SCHUL_NM_idx` ON `School`;

-- CreateIndex
CREATE FULLTEXT INDEX `School_SCHUL_NM_idx` ON `School`(`SCHUL_NM`);

-- CreateIndex
CREATE FULLTEXT INDEX `School_SCHUL_CODE_idx` ON `School`(`SCHUL_CODE`);
