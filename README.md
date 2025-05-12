# Devlos Shop

Refer to the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt.

---

## Local Development Setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example`. Populate it with values from your Supabase project:  
   [Supabase Project Services Guide](https://supabase.com/docs/guides/local-development/cli/getting-started#access-your-projects-services)

3. Install the [Supabase CLI](https://supabase.com/docs/guides/local-development)

4. Start Supabase locally:

   ```bash
   supabase start
   ```

   > If using `npm`, run with `npx supabase <command>`

5. Run the development server:

   ```bash
   npm run dev
   ```

6. To stop the local Supabase service:

   ```bash
   supabase stop
   ```

---

## Supabase Development

For an in-depth guide, visit [Supabase Local Dev](https://supabase.com/docs/guides/local-development/overview)

- Seed data is auto-populated via Supabase seed files  
  [Seeding Overview](https://supabase.com/docs/guides/local-development/overview#add-sample-data)

---

## Supabase Workflow

1. **Stop the database:**

   ```bash
   supabase stop
   ```

2. **Make schema changes**

3. **Generate a migration file:**

   ```bash
   supabase db diff -f <migration_name>
   ```

4. **Start database and apply migrations:**

   ```bash
   supabase start && supabase migration up
   ```

5. **Optionally reset local DB and re-seed:**

   ```bash
   supabase db reset
   ```

6. **Regenerate types:**

   ```bash
   supabase gen types --lang=typescript --local > types/database.types.ts
   ```

7. **Push local changes to remote:**

   ```bash
   supabase db push
   ```

8. **Push code changes:**

   ```bash
   git push
   ```

---

## Supabase Commands Reference

```bash
supabase db pull
```

- Pull remote DB changes before making local modifications (skip if no remote changes)

```bash
supabase migration up
```

- Apply the latest migrations to your local DB

```bash
supabase db reset
```

- Reset your local DB and re-seed

```bash
supabase db push
```

- Push local schema changes to remote DB

```bash
supabase db diff -f <migration_name>
```

- Create migration based on current schema diff
