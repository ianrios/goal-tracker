import query from "@/util/query";
import { NextApiRequest, NextApiResponse } from "next";
import { goalsTable } from "./schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryString = `CREATE TABLE IF NOT EXISTS ${goalsTable.name} (
      id SERIAL PRIMARY KEY,
      createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
      updatedAt TIMESTAMP,
      completedAt TIMESTAMP,
      archivedAt TIMESTAMP,
      deletedAt TIMESTAMP,
      deadline TIMESTAMP,
      header TEXT NOT NULL,
      body TEXT NOT NULL,
      bucket TEXT NOT NULL
    );`;
  const table = await query({
    queryString,
    startLog: "Creating table goals",
    errorLog: "Error creating table goals:",
  });

  res.status(200).json(table);
}
