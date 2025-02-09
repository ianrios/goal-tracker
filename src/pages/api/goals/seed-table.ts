import { NextApiRequest, NextApiResponse } from "next";
import { insertOne } from "./create-goal";
import { goals } from "./data/init";
import { getAll } from "./read-goal";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const existingGoals = await getAll(res);

  if (existingGoals.length > 0) {
    //   if there are rows, do not seed
    res.status(500).json({ error: "cannot seed, data already exists" });
    return;
  }
  if (goals.length <= 0) {
    //   if there is no data, do not seed
    res.status(500).json({ error: "cannot seed, no data to seed" });
    return;
  }

  // we can seed - order does not matter, async out of order is ok, catch them all with promise all
  await Promise.all(goals.map(async (goal) => await insertOne(goal, res)));

  const newGoals = await getAll(res);

  res.status(200).json(newGoals);
}
