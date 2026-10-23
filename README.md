# NPtodo AI

Dark, responsive AI task manager built with Next.js, Supabase, and the OpenAI API.

## Features
- Supabase email/password authentication and per-user task storage
- Create, edit, complete, and delete tasks
- AI scheduling with review-first and automatic modes
- Calendar-style task agenda and progress metrics
- Browser reminders while the app is open
- Installable PWA shell

## Setup (Windows 11)
1. Install Node.js LTS from https://nodejs.org/.
2. Create a Supabase project at https://supabase.com/.
3. Run `supabase/schema.sql` in the Supabase SQL Editor.
4. Copy `.env.example` to `.env.local` and add your Supabase URL, Supabase publishable key, and OpenAI API key.
5. Run `npm install` and `npm run dev`.
6. Open http://localhost:3000.

Keep `.env.local` private. Never expose `OPENAI_API_KEY` in browser code. OpenAI API usage may cost money independently of a ChatGPT subscription.

This is a starter project; run `npm run build` and review security, timezone handling, and notifications before production deployment.