// This is an example of to protect an API route
import type { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth/next';

import { authOptions } from './[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return res.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    });
  }

  return res.send({
    error: 'You must be signed in to view the protected content on this page.',
  });
}