## Package Install Guide (NPM)

### Sharp

```
npm i sharp
```

### Tailwind Animated

```sh
npm install -D tailwindcss-animated
```

#### Config

```
@/tailwind.config.ts

plugins: [require("tailwindcss-animated")],
```

---

### Prettier

```sh
npm i prettier
```

#### Prettier Plugin Tailwind CSS

```sh
npm i prettier-plugin-tailwindcss
```

#### Config

```sh
@/.prettierrc

{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

Format and Check All Files with Prettier

```sh
npx prettier . --write
npx prettier . --check
```

---

### ShadCN

```sh
npx shadcn@latest init
```

#### Adding Component

```sh
npx shadcn@latest add
```

#### Next Themes

```sh
npm install next-themes
```

#### Theme Provider

```
@/components/theme-provider.tsx

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

---

### Drizzle ORM

```sh
npm i drizzle-orm mysql2 dotenv
npm i -D drizzle-kit tsx
```

#### Drizzle Zod

```sh
npm i drizzle-zod
```

---

### S3 (AWS SDK)

```
npm i @aws-sdk/client-s3
npm i @aws-sdk/s3-request-presigner
```

---

## Environment

```sh
@/.env

MYSQL_HOST=host
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=db_starter

AUTH_SECRET=secretkey

NEVA_ACCESS_KEY=nevaaccesskey
NEVA_SECRET_KEY=necasecretkey
NEVA_BUCKET_NAME=nevabucketname
NEVA_S3_ENDPOINT=nevas3endpoint
```

---

### Auth JS

```
npm install next-auth@beta
```

#### Config

```
@/lib/auth.ts

import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

```
@/app/api/auth/[...nextauth]/route.ts

export { GET, POST } from "@/lib/auth";
export const runtime = "edge";
```

---

## Testing App

### Page Component

```
@/app/testing/page.tsx

export default function TestingPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-y-4">
      <p>TestingPage</p>
    </div>
  );
}
```

### Route

```
@/app/testing/route/route.ts

/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { state } from "@/lib/db/state";

export async function GET() {
  const email = "2021110073@students.uigm.ac.id";
  const email2 = "ravenskytd17@gmail.com";

  try {
    const res = new Promise((resolve) =>
      setTimeout(() => {
        resolve("Hello From Promises Response");
      }, 1000),
    );

    return NextResponse.json(await res);
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
```
