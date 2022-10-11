import { promises as fs } from 'fs';
import path from 'path';

import { School } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { parse } from 'papaparse';
import stripBom from 'strip-bom';

import prisma from 'utils/prisma';

const findArticleID = async (req: NextApiRequest, res: NextApiResponse) => {
  const postsDirectory = path.join(process.cwd(), 'data/schoolData.csv');
  const file = await fs.readFile(postsDirectory, 'utf8');

  const csv: { data: School[] } = parse(stripBom(file), { header: true });
  // const createMany = csv.data.map(async (d: School) => {
  //   await prisma.school.create({ data: d });
  // });
  await prisma.school.createMany({ data: csv.data });

  res.status(200).json({ posts: {} });
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
