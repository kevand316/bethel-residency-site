-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/dorqtterkztyqfnxwxoo/sql/new

create table contacts (
  id          uuid        default gen_random_uuid() primary key,
  name        text        not null,
  email       text        not null,
  phone       text,
  type        text        not null default 'general',
  message     text        not null,
  created_at  timestamptz default now()
);

-- Enable Row Level Security
alter table contacts enable row level security;

-- Allow anyone to submit the contact form (insert only — no read access for anon)
create policy "Allow public inserts"
  on contacts for insert
  to anon
  with check (true);
