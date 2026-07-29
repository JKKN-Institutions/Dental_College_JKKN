-- =====================================================================
-- Blog draft preview — shareable secret link
-- Run this once in the Supabase SQL editor.
-- Safe to re-run: every statement uses IF NOT EXISTS / OR REPLACE.
--
-- What it does:
--   1. Adds a per-post secret `preview_token` to public.blogs
--   2. Adds a SECURITY DEFINER function that returns ONE blog row only
--      when the caller knows that row's token — this is what lets a
--      logged-out person open /blog/preview/<id>/?token=<secret>
--      without weakening the RLS policies on public.blogs.
-- =====================================================================

-- ── 1. Secret token column ───────────────────────────────────────────
alter table public.blogs
  add column if not exists preview_token uuid not null default gen_random_uuid();

-- Backfill any row that somehow ended up without one
update public.blogs
   set preview_token = gen_random_uuid()
 where preview_token is null;

-- Unique so the token alone identifies at most one post (and indexes the lookup)
create unique index if not exists blogs_preview_token_key
  on public.blogs (preview_token);

comment on column public.blogs.preview_token is
  'Per-post secret used by /blog/preview/<id>/?token=<token>. Anyone holding this token can read the post (draft included) through get_blog_preview(). Rotate with: update public.blogs set preview_token = gen_random_uuid() where id = ''<post-id>'';';

-- ── 2. Token-gated read function ─────────────────────────────────────
-- SECURITY DEFINER = runs as the function owner, so it bypasses RLS.
-- It is safe because it returns nothing unless the exact token matches.
create or replace function public.get_blog_preview(p_id text, p_token text)
returns setof public.blogs
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_token uuid;
begin
  -- Malformed token → return zero rows instead of raising a cast error
  begin
    v_token := p_token::uuid;
  exception when others then
    return;
  end;

  return query
    select b.*
      from public.blogs b
     where b.preview_token = v_token
       and b.id::text = p_id;
end;
$$;

comment on function public.get_blog_preview(text, text) is
  'Returns a single blog row (draft or published) only when p_token matches that row''s preview_token. Used by the public draft-preview link.';

-- Only expose the token-gated function, never a blanket grant
revoke all on function public.get_blog_preview(text, text) from public;
grant execute on function public.get_blog_preview(text, text) to anon, authenticated;
