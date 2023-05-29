import { drizzle as db } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import { env } from "@/env.mjs";

// create the connection
const connection = connect({
  url: env.DB_URL,
});

const drizzle = db(connection);
export default drizzle;
