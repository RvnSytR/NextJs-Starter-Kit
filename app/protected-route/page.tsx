import { CustomButton } from "@/components/global/custom-button";
import { ThemeToggle } from "@/components/global/theme-provider";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-y-4">
      <p>Whoa, welcome to the Protected Route! 🔐</p>

      <p>
        This area is for authenticated eyes only you&apos;re in the right place
        if you&apos;re signed in! 🎫
      </p>

      <ThemeToggle />

      <p>{JSON.stringify(session)}</p>

      <CustomButton customType="logout" variant="outline">
        Want to log out? ✨ Click here ✨ to take a break!
      </CustomButton>
    </div>
  );
}
