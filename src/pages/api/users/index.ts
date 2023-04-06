import { getHttpUsers } from "lib/users";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getHttpUsers(req);
  res.status(200).json(response);
}
