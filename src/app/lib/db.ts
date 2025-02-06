import { Pool } from "pg";
import {
  DB_DATABASE,
  DB_HOSTNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./constants";

const pool = new Pool({
  user: DB_USERNAME,
  host: DB_HOSTNAME,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export default pool;
