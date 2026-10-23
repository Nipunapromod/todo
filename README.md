# NPtodo AI

A responsive dark-mode task manager starter built with Next.js, Supabase Auth/Postgres, and the OpenAI Responses API.

## Included
- Add, complete, and delete tasks, categories, priorities, and estimates
- Supabase email/password sign-up and sign-in
- AI daily-plan suggestions through a server-side API route
- Progress snapshot and estimated remaining focus time
- PWA manifest, icon, and basic offline app-shell fallback
- Supabase Row Level Security policies

## Run on Windows 11
1. Install Node.js LTS and open this repository in VS Code.
2. Create a Supabase project at https://supabase.com/.
3. In Supabase SQL Editor, run `supabase/schema.sql`.
4. Copy `.env.example` to `.env.local`.
5. Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` from your Supabase project.
6. Create an OpenAI API key in the OpenAI developer platform and set `OPENAI_API_KEY` and optionally `OPENAI_MODEL=gpt-4.1-mini` in `.env.local`.
7. In the repository folder, run:

   ```powershell
   npm install
   npm run dev
   ```

8. Open http://localhost:3000. If email confirmation is enabled, confirm your account. Add localhost to Supabase Auth's allowed redirect URLs.

## Deploy
Import this repository into Vercel and configure the same environment variables in project settings. Add the deployed HTTPS URL to Supabase Auth's allowed redirect URLs.

## Security and scope notes
- Never commit `.env.local`; never expose `OPENAI_API_KEY` to browser code.
- OpenAI API usage is billed separately from a ChatGPT subscription. Configure usage limits before testing.
- AI plans are suggestions and should be reviewed.
- The current AI endpoint requires a signed-in Supabase session. Add server-side rate limiting and request-size limits before production.
- Browser reminders/background push, recurring schedules, editing tasks, and full offline task syncing are not implemented in this starter.
- This project has not yet been verified with a complete production build. Run `npm install` and `npm run build` locally and resolve any errors before deploying.
