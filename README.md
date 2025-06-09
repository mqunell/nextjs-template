## What this template includes

- App Router
- TypeScript
- Tailwind CSS
- node-postgres (`pg`)
- Vitest
- ESLint, Prettier, and some plugins
- Basic code stubs and examples

<br />

## How to use this template

`create-next-app` has an optional `--example` flag that will bootstrap a new project based on an existing GitHub repository. To create a new project from this template, run the following command:

```
pnpm create next-app name-goes-here --use-pnpm --example https://github.com/mqunell/nextjs-template
```

<br />

## Additional setup instructions and usage notes

### Postgres

1. Set up the Supabase project
2. Create a `.env` file with the various config settings
   ```
   POSTGRES_PASS=
   POSTGRES_USER=
   POSTGRES_HOST=
   POSTGRES_PORT=
   POSTGRES_DB=
   ```
   > The port should be a number, but automatically becomes a string when stored as an environment variable. That's okay in this template because it gets casted to a number when used for the database connection.

### Deployment

[Vercel](https://vercel.com/) is recommended for deploying Next.js applications. Simply follow the steps, which include connecting to a GitHub repository and entering environment variables, to host the app online.

### VS Code Plugins

Some plugins that are specifically relevant to this template include:

- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Tailwind Fold
- Vitest
