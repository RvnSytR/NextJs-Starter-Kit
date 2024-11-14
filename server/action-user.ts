"use server";

import { revalidatePath } from "next/cache";
import { LoginHandler } from "@/app/login/sign";

import { state } from "@/lib/db/state";
import { Role, user } from "@/lib/db/schema";

export async function Check(email: string, password: string) {
  const [res] = await state.user.check.execute({
    email: email,
    password: password,
  });

  if (!res) throw new Error("Email atau Password Salah!");
  if (res.role == "pending") {
    throw new Error(
      "Akun Anda masih dalam antrian persetujuan. Harap tunggu konfirmasi dari admin.",
    );
  } else {
    await LoginHandler(email, password);
    return res.username;
  }
}

export async function Regis(data: typeof user.$inferInsert) {
  const { email, password, username } = data;
  const [check] = await state.user.getByEmail.execute({ email: email });

  if (check) throw new Error("Email sudah terdaftar!");
  else {
    await state.user.insert.execute({
      email: email,
      password: password,
      username: username,
    });
  }
}

export async function Approve(role: Exclude<Role, "pending">, id: string) {
  await state.user.updateRole(role).execute({ id_user: id });
  revalidatePath("/account");
}

export async function Delete(id: string) {
  await state.user.delete.execute({ id_user: id });
  revalidatePath("/account");
}
