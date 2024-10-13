import pg from "pg";
import { PG_PORT, PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD } from "./config.js";

export const pool = new pg.Pool({
  port: PG_PORT,
  host: PG_HOST,
  database: PG_DATABASE,
  user: PG_USER,
  password: PG_PASSWORD,
});

pool.on("connect", () => {
  console.log("Database connected");
});
