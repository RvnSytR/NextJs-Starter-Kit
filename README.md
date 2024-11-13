## Package Install Guide (NPM)

### Tailwind Animated

```sh
npm install -D tailwindcss-animated
```

#### Config

```
// tailwind.config.ts
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
// .prettierrc
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
// components/theme-provider.tsx

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

---

### Auth JS

```
npm install next-auth@beta
```

#### Config

```
// lib/auth.ts
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

```
// api/auth/[...nextauth]/route.ts
export { GET, POST } from "@/lib/auth";
export const runtime = "edge";
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
MYSQL_HOST=host
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=db

AUTH_SECRET=secretkey

NEVA_ACCESS_KEY=nevaaccesskey
NEVA_SECRET_KEY=necasecretkey
NEVA_BUCKET_NAME=nevabucketname
NEVA_S3_ENDPOINT=nevas3endpoint
```
