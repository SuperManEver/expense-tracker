## Expense Tracker

App helps track your personal expenses

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Create a migration after data schema has changed and sync it with Database

```
npx prisma migrate dev --name init
```

Seed database with common categories

```
npx prisma db seed
```
