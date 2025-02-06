import pool from "@/app/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await pool.connect();
  console.log({ client });
  try {
    const result = await client.query("SELECT * FROM users");
    console.log({ result });
    res.status(200).json(result.rows);
  } finally {
    client.release();
  }
}
