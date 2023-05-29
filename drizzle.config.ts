import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/db/schema.ts",
  connectionString:
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
