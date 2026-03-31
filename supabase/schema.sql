create extension if not exists pgcrypto;

create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  content text not null,
  rating integer not null check (rating between 1 and 5),
  created_at timestamptz not null default now()
);

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.feedback enable row level security;
alter table public.contact_submissions enable row level security;

drop policy if exists "public read feedback" on public.feedback;
create policy "public read feedback"
on public.feedback
for select
to anon, authenticated
using (true);

drop policy if exists "public insert feedback" on public.feedback;
create policy "public insert feedback"
on public.feedback
for insert
to anon, authenticated
with check (true);

drop policy if exists "service role full access feedback" on public.feedback;
create policy "service role full access feedback"
on public.feedback
for all
to service_role
using (true)
with check (true);

drop policy if exists "public insert contact submissions" on public.contact_submissions;
create policy "public insert contact submissions"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);

drop policy if exists "service role full access contact submissions" on public.contact_submissions;
create policy "service role full access contact submissions"
on public.contact_submissions
for all
to service_role
using (true)
with check (true);
