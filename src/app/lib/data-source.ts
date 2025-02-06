import "reflect-metadata";
import { DataSource } from "typeorm";
import { SubGoal } from "../entity/sub-goal";
import { Goal } from "../entity/goal";
import {
  DB_DATABASE,
  DB_HOSTNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
} from "./constants";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOSTNAME,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Goal, SubGoal],
  migrations: [],
  subscribers: [],
});
