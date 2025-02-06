import query from "@/util/query";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryString = `CREATE TABLE IF NOT EXISTS goals (
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
    )`;
  await query({ queryString, req, res, startLog: "Creating table goals" });
}
