-- CreateTable
CREATE TABLE `SchoolNice` (
    `id` VARCHAR(191) NOT NULL,
    `ATPT_OFCDC_SC_CODE` VARCHAR(191) NOT NULL,
    `ATPT_OFCDC_SC_NM` VARCHAR(191) NOT NULL,
    `SD_SCHUL_CODE` VARCHAR(191) NOT NULL,
    `SCHUL_NM` VARCHAR(191) NOT NULL,
    `ENG_SCHUL_NM` VARCHAR(191) NOT NULL,
    `SCHUL_KND_SC_NM` VARCHAR(191) NOT NULL,
    `LCTN_SC_NM` VARCHAR(191) NOT NULL,
    `JU_ORG_NM` VARCHAR(191) NOT NULL,
    `FOND_SC_NM` VARCHAR(191) NOT NULL,
    `ORG_RDNZC` VARCHAR(191) NOT NULL,
    `ORG_RDNMA` VARCHAR(191) NOT NULL,
    `ORG_RDNDA` VARCHAR(191) NOT NULL,
    `ORG_TELNO` VARCHAR(191) NOT NULL,
    `HMPG_ADRES` VARCHAR(191) NOT NULL,
    `COEDU_SC_NM` VARCHAR(191) NOT NULL,
    `ORG_FAXNO` VARCHAR(191) NOT NULL,
    `HS_SC_NM` VARCHAR(191) NOT NULL,
    `INDST_SPECL_CCCCL_EXST_YN` VARCHAR(191) NOT NULL,
    `HS_GNRL_BUSNS_SC_NM` VARCHAR(191) NOT NULL,
    `SPCLY_PURPS_HS_ORD_NM` VARCHAR(191) NOT NULL,
    `ENE_BFE_SEHF_SC_NM` VARCHAR(191) NOT NULL,
    `DGHT_SC_NM` VARCHAR(191) NOT NULL,
    `FOND_YMD` VARCHAR(191) NOT NULL,
    `FOAS_MEMRD` VARCHAR(191) NOT NULL,
    `LOAD_DTM` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE FULLTEXT INDEX `School_ATPT_OFCDC_ORG_NM_idx` ON `School`(`ATPT_OFCDC_ORG_NM`);
