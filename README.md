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

## Supabase Auth

We support three authentication methods:

- **Email**
- **Google OAuth**
- **Discord OAuth**

### Email Auth Flow

- Users signing in or signing up via email are redirected back to the originally requested page (i.e., the route that required authentication).
- Supabase handles magic link verification via email.

### OAuth Flow (Google, Discord)

- When using an OAuth provider:
  1. The user is first redirected to `/confirm`.
  2. After session confirmation, they are redirected to the originally intended route.
  3. Supabase automatically handles OAuth redirects via configured **Redirect URLs**.

### Middleware Behavior

- A route middleware is set up to **redirect authenticated users away from `/login` and `/signup`** to the home page (`/`).
- This prevents signed-in users from accessing auth routes unnecessarily.

### Redirect URLs

- Once OAuth is completed with the provider, the flow returns to Supabase.
- Supabase then redirects the user to one of the configured URLs set under: **Supabase → Authentication → URL Configuration**

## OAuth Setup Summary

To enable an OAuth provider like Google or Discord in Supabase:

1. **Register a new OAuth App** with the provider:

- Google: [Google Developer Console](https://console.developers.google.com)
- Discord: [Discord Developer Portal](https://discord.com/developers/applications)

2. **Configure the Authorized Redirect URL**:

- Supabase provides this URL for each environment.
- Example: `https://<project_id>.supabase.co/auth/v1/callback`
- Add this to the provider's app settings.

3. **Obtain the Client ID and Secret** from the provider.

4. **Configure the provider in Supabase**:

- Go to: `Authentication → Sign In / Providers → Auth Providers`
- Enable the desired provider and paste the client ID and secret.

5. **Local Development**:

- Add the client ID and secret to your `supabase/config.toml` file:

  ```toml
  [auth.external.google]
  client_id = "<your-client-id>"
  secret = "<your-client-secret>"

  [auth.external.discord]
  client_id = "<your-client-id>"
  secret = "<your-client-secret>"
  ```
