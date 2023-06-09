import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/db/schema.ts",
  connectionString: process.env.DATABASE_URL_TEST,
  // connectionString: process.env.DATABASE_URL,
} satisfies Config;
