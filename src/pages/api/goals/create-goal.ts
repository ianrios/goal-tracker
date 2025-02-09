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
  const columnKeys = Object.keys(goal);
  const columns = columnKeys.reduce(
    (a, c) => (a.length === 0 ? c : `${a}, ${c}`),
    ""
  );
  // const columns = `id, createdAt, updatedAt, completedAt, archivedAt, deletedAt, deadline, header, body, bucket`;
  const value = columnKeys.reduce(
    (a, c) =>
      a.length === 0
        ? `'${goal[c as keyof Goal]}'`
        : `${a}, '${goal[c as keyof Goal]}'`,
    ""
  );
  // const values = `'${goal.id}', '${goal.createdAt}', '${goal.updatedAt}', '${goal.completedAt}', '${goal.archivedAt}', '${goal.deletedAt}', '${goal.deadline}', '${goal.header}', '${goal.body}', '${goal.bucket}'`;
  const queryString = `INSERT INTO ${goalsTable.name} (${columns}) VALUES (${value})`;
  const result = await query({ queryString, startLog: "Inserting new goal" });

  res.status(200).json(result);
}

export async function insertMany(goals: Goal[], res: NextApiResponse) {
  /*
  insert into table_name (user_id, subservice_id) values
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 1);

  */
  const columnKeys = Object.keys(goal);
  const columns = columnKeys.reduce(
    (a, c) => (a.length === 0 ? c : `${a}, ${c}`),
    ""
  );
  const values = goals.reduce((a, goal) => {
    const value = columnKeys.reduce(
      (a, c) =>
        a.length === 0
          ? `'${goal[c as keyof Goal]}'`
          : `${a}, '${goal[c as keyof Goal]}'`,
      ""
    );
    return a.length === 0 ? `(${value})` : `${a}, (${value})`;
  }, "");

  const queryString = `INSERT INTO ${goalsTable.name} (${columns}) VALUES ${values}`;

  // const queryString = `INSERT INTO ${goalsTable.name} (id, createdAt, updatedAt, completedAt, archivedAt, deletedAt, deadline, header, body, bucket) values ('${goal.id}', '${goal.createdAt}', '${goal.updatedAt}', '${goal.completedAt}', '${goal.archivedAt}', '${goal.deletedAt}', '${goal.deadline}', '${goal.header}', '${goal.body}', '${goal.bucket}')`;
  const result = await query({ queryString, startLog: "Inserting new goal" });

  res.status(200).json(result);
}
