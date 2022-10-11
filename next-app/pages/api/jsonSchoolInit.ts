// import { promises as fs } from 'fs';
// import path from 'path';

import { School } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

// import { NextApiRequest, NextApiResponse } from 'next';
// import { parse } from 'papaparse';
// import stripBom from 'strip-bom';

import elementary_school from 'data/school/elementary_school.json';
import high_school from 'data/school/high_school.json';
import middle_school from 'data/school/middle_school.json';
import remainder_school from 'data/school/remainder_school.json';
import special_school from 'data/school/special_school.json';
import prisma from 'utils/prisma';

export interface ISchoolList {
  list?: School[];
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
    const createResult = await prisma.school.createMany({ data: school.list });
    console.log(createResult);
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
