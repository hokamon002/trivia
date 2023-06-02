import { drizzle as db } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { env } from "@/env.mjs";
import * as schema from "@/db/schema";

// create the connection
const connection = connect({
  url: env.DATABASE_URL,
});

const drizzle = db(connection, { schema });
export default drizzle;
