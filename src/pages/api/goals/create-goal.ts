import query from "@/util/query";
import { NextApiRequest, NextApiResponse } from "next";
import { goalsTable } from "./schema";
import { Goal } from "@/app/lib/definitions";

function adaptGoal(req: NextApiRequest): Goal {
  const adaptedGoal: Goal = {
    id: req.body.id,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
    completedAt: req.body.completedAt,
    archivedAt: req.body.archivedAt,
    deletedAt: req.body.deletedAt,
    deadline: req.body.deadline,
    header: req.body.header,
    body: req.body.body,
    bucket: req.body.bucket,
  };
  return adaptedGoal;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const goal: Goal = adaptGoal(req.body);
  await insertOne(goal, res);
}

export async function insertOne(goal: Goal, res: NextApiResponse) {
  const queryString = `INSERT INTO ${goalsTable.name} (id, createdAt, updatedAt, completedAt, archivedAt, deletedAt, deadline, header, body, bucket) values ('${goal.id}', '${goal.createdAt}', '${goal.updatedAt}', '${goal.completedAt}', '${goal.archivedAt}', '${goal.deletedAt}', '${goal.deadline}', '${goal.header}', '${goal.body}', '${goal.bucket}')`;
  const result = await query({ queryString, startLog: "Inserting new goal" });

  res.status(200).json(result);
}
