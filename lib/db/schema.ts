import {
  mysqlTable,
  varchar,
  char,
  mysqlEnum,
  timestamp,
} from "drizzle-orm/mysql-core";

const role = ["user", "admin", "pending"] as const;

//#region // *Tables
const user = mysqlTable("user", {
  id_user: char("id_user", { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  role: mysqlEnum("role", role).notNull().default("pending"),
  log: timestamp("log").notNull().defaultNow(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
//#endregion

//#region // * Types
type Role = (typeof role)[number];

type UserCredentials = Omit<typeof user.$inferSelect, "password">;
//#endregion

export type { Role, UserCredentials };
export { user };
