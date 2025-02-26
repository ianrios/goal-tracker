import query from "@/util/query";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryString = `
    CREATE TABLE IF NOT EXISTS sub_goals (
      id SERIAL PRIMARY KEY,
      createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
      updatedAt TIMESTAMP,
      parent_goal_id SERIAL NOT NULL,
      child_goal_id SERIAL NOT NULL
    );`;

  const result = await query({
    queryString,
    startLog: "Creating table sub_goals",
  });

  res.status(200).json(result);
}
