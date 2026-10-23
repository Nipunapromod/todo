create extension if not exists pgcrypto;
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 240),
  category text not null default 'Personal',
  priority text not null default 'medium' check (priority in ('low','medium','high')),
  due_date date,
  duration_minutes integer not null default 30 check (duration_minutes between 5 and 1440),
  completed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists tasks_user_due_date_idx on public.tasks(user_id,due_date);
alter table public.tasks enable row level security;
drop policy if exists "Users can read their tasks" on public.tasks;
create policy "Users can read their tasks" on public.tasks for select to authenticated using ((select auth.uid())=user_id);
drop policy if exists "Users can add their tasks" on public.tasks;
create policy "Users can add their tasks" on public.tasks for insert to authenticated with check ((select auth.uid())=user_id);
drop policy if exists "Users can update their tasks" on public.tasks;
create policy "Users can update their tasks" on public.tasks for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
drop policy if exists "Users can delete their tasks" on public.tasks;
create policy "Users can delete their tasks" on public.tasks for delete to authenticated using ((select auth.uid())=user_id);
