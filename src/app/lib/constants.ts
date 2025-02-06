import { env } from "process";

export const DB_USERNAME = env.DB_USERNAME;
export const DB_HOSTNAME = env.DB_HOSTNAME;
export const DB_DATABASE = env.DB_DATABASE;
export const DB_PASSWORD = env.DB_PASSWORD;
export const DB_PORT = Number(env.DB_PORT);
