import query from "@/util/query";
import { NextApiRequest, NextApiResponse } from "next";
import { goalsTable } from "./schema";
import { Goal } from "@/app/lib/definitions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await getAll(res);
}

export async function getAll(res: NextApiResponse): Promise<Goal[]> {
  const queryString = `SELECT * FROM ${goalsTable.name}`;
  const goals = await query({
    queryString,
    res,
    startLog: "selecting all goals from the goals table",
  });

  return goals;
}
