import { mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

// declaring enum in database
export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  phoneNumber: varchar("phone_number", { length: 256 }),
});
