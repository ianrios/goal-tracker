import pool from "@/app/lib/db";

interface QueryParams {
  queryString: string;
  startLog?: string;
  errorLog?: string;
}

export default async function query({
  queryString,
  startLog = "attempting query",
  errorLog = "failed query",
}: QueryParams) {
  const client = await pool.connect();
  try {
    console.log(startLog);
    const result = await client.query(queryString);
    return result;
  } catch (error) {
    console.error(errorLog, error);
  } finally {
    client.release();
  }
}
