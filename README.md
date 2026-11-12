## What this template includes

- Next.js with App Router
- TypeScript
- Tailwind CSS
- node-postgres (`pg`)
- Vitest
- Biome
- Basic code stubs and examples

<br />

## How to use this template

### Create a new project

`create-next-app` has an optional `--example` flag that will bootstrap a new project based on an existing GitHub repository. To create a new project from this template, replace "app-name" and run the following command:

```
pnpm create next-app app-name --use-pnpm --example https://github.com/mqunell/nextjs-template
```

### Set up Postgres

For ease of use and getting started quickly, these are the steps for using a cloud host:

1. Configure an empty database with a provider like [Neon](https://neon.com/)
2. Create a `.env` file with the Postgres pooled connection string

   ```
   POSTGRES_URL=
   ```

3. Optional: Run the included database migration. _If you do this, don't forget to drop the `users` and `migrations` tables later on._

   ```
   pnpm db:migrate
   ```

### Handle code stubs

These files should be updated, replaced, or removed, depending on your needs:

General
- `public/favicon.ico`
- `src/app/layout.tsx` title and description
- `src/app/page.tsx` page content
- `src/app/page.test.tsx` page tests
- `package.json` scripts
- `README.md`

Database
- `src/db/queries.ts`
- `src/db/migrations/001-create-users-table.sql`
- `src/types/user.ts`

API mocking
- `src/testing/mocks/handlers.ts`

<br />

## VS Code Plugins

Some plugins that are specifically relevant to this template include:

- Biome
- SQL Formatter (or alternative)
- Tailwind CSS IntelliSense
- Tailwind Fold
- Vitest

<br />


## Deployment

[Vercel](https://vercel.com/) makes deploying Next.js applications very easy. Follow the steps to create a new project, which include connecting to a GitHub repository and entering environment variables, to host the app online.
