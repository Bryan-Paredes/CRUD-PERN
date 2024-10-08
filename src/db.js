import pg from "pg";

export const pool = new pg.Pool({
  port: 6543,
  host: "aws-0-us-west-1.pooler.supabase.com",
  database: "postgres",
  user: "postgres.ktysznnnbtnexbtvdobi",
  password: "Pehxy9-bobqyk-mubxoq",
});

pool.on("connect", () => {
  console.log("Database connected");
});
