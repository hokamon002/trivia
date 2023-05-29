import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/db/schema.ts",
  connectionString:
    'mysql://vnzlacsskvaqfnzkg3g6:pscale_pw_sNAAd9oeJfdWlae3gUvm99j6QTKlxn2MXCVBLS2D4CJ@aws.connect.psdb.cloud/trivia?ssl={"rejectUnauthorized":true}',
  // connectionString: process.env.DATABASE_URL,
} satisfies Config;
