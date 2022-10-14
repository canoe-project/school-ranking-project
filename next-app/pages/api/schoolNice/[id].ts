import { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'utils/prisma';

const getResult = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const whereQuery = { ...(id !== undefined && !Array.isArray(id) && { id }) };
  // const includeQuery;
  const result = await prisma.schoolNice.findUnique({
    where: whereQuery,
    // include: includeQuery,
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
      return getResult(req, res);

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
