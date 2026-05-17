-- =====================================================================
-- Add MyJKKN sync tracking columns to the faculty table
-- Run this once in the Supabase SQL editor before enabling the sync button.
-- Safe to re-run: every statement uses IF NOT EXISTS.
-- =====================================================================

alter table public.faculty
  add column if not exists source                text         not null default 'manual',
  add column if not exists myjkkn_staff_id       uuid,
  add column if not exists myjkkn_department_id  uuid,
  add column if not exists role                  text,
  add column if not exists last_synced_at        timestamptz,
  add column if not exists myjkkn_updated_at     timestamptz;

-- Constrain `source` to known values
do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'faculty_source_check'
  ) then
    alter table public.faculty
      add constraint faculty_source_check
      check (source in ('manual', 'myjkkn'));
  end if;
end$$;

-- One MyJKKN staff row maps to at most one local faculty row
create unique index if not exists faculty_myjkkn_staff_id_key
  on public.faculty (myjkkn_staff_id)
  where myjkkn_staff_id is not null;

-- Fast lookup during sync
create index if not exists faculty_source_idx
  on public.faculty (source);

comment on column public.faculty.source is
  'Where this row originated. ''manual'' = added via admin panel, ''myjkkn'' = synced from MyJKKN API.';
comment on column public.faculty.myjkkn_staff_id is
  'MyJKKN /api/staff record id. Used as conflict key for upserts.';
comment on column public.faculty.role is
  'MyJKKN role (e.g. Principal, HOD, Faculty). Distinct from `designation`.';
comment on column public.faculty.last_synced_at is
  'When the sync route last touched this row.';
