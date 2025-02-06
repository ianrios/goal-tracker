import pool from "@/app/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

interface QueryParams {
  queryString: string;
  req?: NextApiRequest;
  res: NextApiResponse;
  startLog?: string;
}

export default async function query({
  queryString,
  // req,
  res,
  startLog = "attempting query",
}: QueryParams) {
  const client = await pool.connect();

  try {
    console.log(startLog);
    await client.query(queryString);
    const result = await client.query("SELECT * FROM goals");
    console.log({ result });
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error creating table goals:", error);
    res.status(500).json({ error: "Error creating table goals" });
  } finally {
    client.release();
  }
}
