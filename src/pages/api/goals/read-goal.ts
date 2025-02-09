import query from "@/util/query";
import { NextApiRequest, NextApiResponse } from "next";
import { goalsTable } from "./schema";
import { Goal } from "@/app/lib/definitions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const goals = await getAll();

  res.status(200).json(goals);
}

export async function getAll(): Promise<Goal[]> {
  const queryString = `SELECT * FROM ${goalsTable.name};`;
  const goals = await query({
    queryString,
    startLog: "selecting all goals from the goals table",
  });

  return goals;
}
