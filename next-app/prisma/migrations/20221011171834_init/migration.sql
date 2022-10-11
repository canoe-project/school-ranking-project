-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` VARCHAR(191) NULL,
    `access_token` VARCHAR(191) NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` VARCHAR(191) NULL,
    `session_state` VARCHAR(191) NULL,
    `oauth_token_secret` VARCHAR(191) NULL,
    `oauth_token` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `School` (
    `SCHUL_RDNMA` VARCHAR(191) NOT NULL,
    `SCHUL_FOND_TYP_CODE` VARCHAR(191) NOT NULL,
    `FOAS_MEMRD` VARCHAR(191) NOT NULL,
    `DGHT_SC_CODE` VARCHAR(191) NOT NULL,
    `FOND_SC_CODE` VARCHAR(191) NOT NULL,
    `USER_TELNO_SW` VARCHAR(191) NOT NULL,
    `LTTUD` VARCHAR(191) NOT NULL,
    `ZIP_CODE` VARCHAR(191) NOT NULL,
    `SCHUL_KND_SC_CODE` VARCHAR(191) NOT NULL,
    `LGTUD` VARCHAR(191) NOT NULL,
    `SCHUL_RDNZC` VARCHAR(191) NOT NULL,
    `DTLAD_BRKDN` VARCHAR(191) NOT NULL,
    `USER_TELNO` VARCHAR(191) NOT NULL,
    `ADRCD_NM` VARCHAR(191) NOT NULL,
    `COEDU_SC_CODE` VARCHAR(191) NOT NULL,
    `PERC_FAXNO` VARCHAR(191) NOT NULL,
    `JU_ORG_NM` VARCHAR(191) NOT NULL,
    `ATPT_OFCDC_ORG_NM` VARCHAR(191) NOT NULL,
    `JU_ORG_CODE` VARCHAR(191) NOT NULL,
    `USER_TELNO_GA` VARCHAR(191) NOT NULL,
    `HMPG_ADRES` VARCHAR(191) NOT NULL,
    `ADRES_BRKDN` VARCHAR(191) NOT NULL,
    `SCHUL_CODE` VARCHAR(191) NOT NULL,
    `FOND_YMD` VARCHAR(191) NOT NULL,
    `ATPT_OFCDC_ORG_CODE` VARCHAR(191) NOT NULL,
    `LCTN_SC_CODE` VARCHAR(191) NOT NULL,
    `ADRCD_CD` VARCHAR(191) NOT NULL,
    `ADRCD_ID` VARCHAR(191) NOT NULL,
    `SCHUL_RDNDA` VARCHAR(191) NOT NULL,
    `BNHH_YN` VARCHAR(191) NOT NULL,
    `SCHUL_NM` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `School_SCHUL_CODE_key`(`SCHUL_CODE`),
    PRIMARY KEY (`SCHUL_CODE`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
