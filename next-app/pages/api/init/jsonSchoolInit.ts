// import { promises as fs } from 'fs';
// import path from 'path';

import { NextApiRequest, NextApiResponse } from 'next';

// import { NextApiRequest, NextApiResponse } from 'next';
// import { parse } from 'papaparse';
// import stripBom from 'strip-bom';

import elementary_school from 'data/school/baseData/elementary_school.json';
import high_school from 'data/school/baseData/high_school.json';
import middle_school from 'data/school/baseData/middle_school.json';
import remainder_school from 'data/school/baseData/remainder_school.json';
import special_school from 'data/school/baseData/special_school.json';
import prisma from 'utils/prisma';

interface ISchoolItem {
  ATPT_OFCDC_ORG_NM?: string;
  ATPT_OFCDC_ORG_CODE?: string;
  JU_ORG_NM?: string;
  JU_ORG_CODE?: string;
  ADRCD_NM?: string;
  ADRCD_CD?: string;
  LCTN_SC_CODE?: string;
  SCHUL_CODE?: string;
  SCHUL_NM?: string;
  SCHUL_KND_SC_CODE?: string;
  FOND_SC_CODE?: string;
  HS_KND_SC_NM?: string;
  BNHH_YN?: string;
  SCHUL_FOND_TYP_CODE?: string;
  DGHT_SC_CODE?: string;
  FOAS_MEMRD?: string;
  FOND_YMD?: string;
  ADRCD_ID?: string;
  ADRES_BRKDN?: string;
  DTLAD_BRKDN?: string;
  ZIP_CODE?: string;
  SCHUL_RDNZC?: string;
  SCHUL_RDNMA?: string;
  SCHUL_RDNDA?: string;
  LTTUD?: string;
  LGTUD?: string;
  USER_TELNO?: string;
  USER_TELNO_SW?: string;
  USER_TELNO_GA?: string;
  PERC_FAXNO?: string;
  HMPG_ADRES?: string;
  COEDU_SC_CODE?: string;
}

export interface ISchoolList {
  list?: ISchoolItem[];
}

const schools: ISchoolList[] = [
  elementary_school,
  middle_school,
  high_school,
  special_school,
  remainder_school,
];

const findArticleID = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await schools.map(async (school) => {
    if (school.list === undefined) {
      return {};
    }
    // const createResult = await prisma.school.createMany({ data: school.list });

    const createResult = await school.list.map(async (item) => {
      try {
        return await prisma.school.create({ data: item });
      } catch (error) {
        console.log(error);

        return {};
      }
    });
    return createResult;
  });

  return res.status(200).json(result);
};

const createArticle = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200);
};

const updateArticle = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200);
};

const deleteArticle = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200);
};

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return findArticleID(req, res);

    case 'POST':
      return createArticle(req, res);

    case 'PUT':
      return updateArticle(req, res);

    case 'DELETE':
      return deleteArticle(req, res);

    default:
      return res.status(404);
  }
};

export default handle;
