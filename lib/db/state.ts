import { db } from "./config";
import { user as userSchema, Role } from "./schema";
import { eq, sql } from "drizzle-orm";

const getUserParam = {
  id_user: userSchema.id_user,
  email: userSchema.email,
  username: userSchema.username,
  role: userSchema.role,
  log: userSchema.log,
  createdAt: userSchema.createdAt,
};

const user = {
  insert: db
    .insert(userSchema)
    .values({
      email: sql.placeholder("email"),
      password: sql.placeholder("password"),
      username: sql.placeholder("username"),
    })
    .prepare(),

  check: db
    .select({ username: userSchema.username, role: userSchema.role })
    .from(userSchema)
    .where(
      sql`${userSchema.email} = ${sql.placeholder("email")} and ${userSchema.password} = ${sql.placeholder("password")}`,
    )
    .prepare(),

  getAll: db.select(getUserParam).from(userSchema).prepare(),

  getByid_user: db
    .select(getUserParam)
    .from(userSchema)
    .where(sql`${userSchema.id_user} = ${sql.placeholder("id_user")}`)
    .prepare(),

  getByEmail: db
    .select(getUserParam)
    .from(userSchema)
    .where(sql`${userSchema.email} = ${sql.placeholder("email")}`)
    .prepare(),

  getEqEmail: db
    .select(getUserParam)
    .from(userSchema)
    .where(eq(userSchema.email, sql.placeholder("email")))
    .prepare(),

  updateLog: db
    .update(userSchema)
    .set({ log: sql`NOW()` })
    .where(eq(userSchema.id_user, sql.placeholder("id_user")))
    .prepare(),

  updatePassword: (id_user: string, newPass: string) =>
    db
      .update(userSchema)
      .set({ password: newPass })
      .where(eq(userSchema.id_user, id_user))
      .prepare(),

  updateProfile: (id_user: string, username: string) =>
    db
      .update(userSchema)
      .set({ username: username })
      .where(eq(userSchema.id_user, id_user))
      .prepare(),

  updateRole: (role: Exclude<Role, "pending">) =>
    db
      .update(userSchema)
      .set({ role: role })
      .where(eq(userSchema.id_user, sql.placeholder("id_user")))
      .prepare(),

  delete: db
    .delete(userSchema)
    .where(eq(userSchema.id_user, sql.placeholder("id_user")))
    .prepare(),
};

export const state = {
  user,
};