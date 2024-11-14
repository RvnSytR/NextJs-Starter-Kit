import Link from "next/link";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/layout/auth";
import { ValidateSession } from "@/server/action";

import { copyrightLabel } from "@/components/content";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Login Page",
};

export default async function Page() {
  if (await ValidateSession()) redirect("/protected-route");

  return (
    <main className="container flex min-h-dvh items-center justify-center">
      <Card className="w-full md:w-2/4 lg:w-1/3">
        <CardHeader>
          <CardTitle className="mb-2 text-center">
            <Link href="/">Project Title</Link>
          </CardTitle>
          <CardDescription className="text-center">
            Hold up! 🔒 Who goes there? 🕵️‍♂️ Only logged-in members can enter the
            protected routes. So pop in your email and password below, and you
            good to go 🛤️
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-4">
          <Separator />

          <LoginForm />

          <Separator className="mt-2" />
        </CardContent>

        <CardFooter>
          <small className="mx-auto text-center">{copyrightLabel}</small>
        </CardFooter>
      </Card>
    </main>
  );
}
