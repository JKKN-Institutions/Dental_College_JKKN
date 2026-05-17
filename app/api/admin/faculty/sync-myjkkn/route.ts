import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import { fetchDentalStaff, JkknApiError, type MyJKKNStaff } from '@/lib/jkkn-api';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Authoritative allow-list: the dental college's curated faculty roster.
 * Only staff whose institution_email (or email) matches one of these will
 * sync — even if MyJKKN has other rows marked published.
 *
 * To add a new person: ensure they exist in MyJKKN with status='published',
 * then add their email here. The order doesn't matter; lookup is O(1).
 *
 * 49 emails = 46 from the dental college roster + 3 recovered by name-match
 * (DR. EZHILARASI A.V.S, MISS. NANDHINI P, Dr. SRUTHI SRIVAISNAVI S.N).
 */
const ALLOWED_EMAILS = new Set<string>([
  'dhineshkumar.c@jkkn.ac.in',
  'dentalprincipal@jkkn.ac.in',
  'ezhilarasi@jkkn.ac.in',
  'indhumathi_s@jkkn.ac.in',
  'jayaprakash@jkkn.ac.in',
  'jothilakshmi.rs@jkkn.ac.in',
  'jvkarunakaran@jkkn.ac.in',
  'nivethitha.m@jkkn.ac.in',
  'dhivya_r@jkkn.ac.in',
  'saravanakumar@jkkn.ac.in',
  'swarnam@jkkn.ac.in',
  'kumaran_v@jkkn.ac.in',
  'drvenkateshpraveen@jkkn.ac.in',
  'bhavanandhini@jkkn.ac.in',
  'chandrika.velu@gmail.com',
  'dakshina.j@jkkn.ac.in',
  'drerdeepak@jkkn.ac.in',
  'jasmineangel.j@jkkn.ac.in',
  'karthikeyan_p@jkkn.ac.in',
  'maryvinolajenifer@jkkn.ac.in',
  'muthukumaran.lr@jkkn.ac.in',
  'jagadesan.n@jkkn.ac.in',
  'poojaashri@jkkn.ac.in',
  'ravikisshore@jkkn.ac.in',
  'shruthi.v@jkkn.ac.in',
  'hodpedodontics@jkkn.ac.in',
  'yoka@jkkn.ac.in',
  'chrissusanabraham@jkkn.ac.in',
  'saisadan.d@jkkn.ac.in',
  'gokulapriya_s@jkkn.ac.in',
  'jenifersindhiya.j@jkkn.ac.in',
  'praveena.k@jkkn.ac.in',
  'sumithradevi@jkkn.ac.in',
  'sakthisaranyadevi.k@jkkn.ac.in',
  'thankamaniammal@jkkn.ac.in',
  'kalaranjeni.n@jkkn.ac.in',
  'mmprem4884@gmail.com',
  'meenapriya@jkkn.ac.in',
  'sasikumar.pk@jkkn.ac.in',
  'nandhini_p@jkkn.ac.in',
  'hodorthodontics@jkkn.ac.in',
  'sruthi.srivaisnavi@jkkn.ac.in',
  'santhosh.s@jkkn.ac.in',
  'vinodthangaswamy@jkkn.ac.in',
  'shanmathee.k@jkkn.ac.in',
  'hodoralpathology@jkkn.ac.in',
  'drtheinmozhi@jkkn.ac.in',
  'vijaythiyagarajan.j@jkkn.ac.in',
  'selvakumar@jkkn.ac.in',
]);

// NOTE: a dental-dept safety net used to live here, but the email allow-list
// above is now the authoritative source of truth — adding a second gate just
// blocked legitimate faculty whose MyJKKN dept is mis-set (e.g. Dr Saravana
// Kumar is in MyJKKN's general "Pediatrics" dept, not a dental one). If a
// person is in ALLOWED_EMAILS we trust the curation and sync them regardless
// of their MyJKKN department assignment.

type SkipReason =
  | 'not_in_allow_list'
  | 'status_not_published'
  | 'missing_email'
  | 'missing_name';

interface SyncStats {
  fetched: number;
  eligible: number;
  created: number;
  updated: number;
  deactivated: number;
  skipped: Record<SkipReason, number>;
  errors: string[];
  // Reverse check: emails in the allow-list that we never matched against MyJKKN this run.
  missing_from_myjkkn: string[];
}

function emptyStats(): SyncStats {
  return {
    fetched: 0,
    eligible: 0,
    created: 0,
    updated: 0,
    deactivated: 0,
    skipped: {
      not_in_allow_list: 0,
      status_not_published: 0,
      missing_email: 0,
      missing_name: 0,
    },
    errors: [],
    missing_from_myjkkn: [],
  };
}

function buildName(s: MyJKKNStaff): string {
  return [s.first_name, s.last_name].filter(Boolean).join(' ').trim();
}

function preferredEmail(s: MyJKKNStaff): string | null {
  return s.institution_email?.trim() || s.email?.trim() || null;
}

function classify(s: MyJKKNStaff): SkipReason | null {
  const email = preferredEmail(s);
  if (!email) return 'missing_email';
  if (!ALLOWED_EMAILS.has(email.toLowerCase())) return 'not_in_allow_list';
  if (s.status !== 'published') return 'status_not_published';
  if (!buildName(s)) return 'missing_name';
  return null;
}

export async function POST() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const collegeId = await getAdminCollegeId();

  let remote: MyJKKNStaff[];
  try {
    remote = await fetchDentalStaff();
  } catch (err) {
    if (err instanceof JkknApiError) {
      return NextResponse.json(
        {
          error: `MyJKKN API returned HTTP ${err.status}. ${err.status === 401 ? 'API key may lack read scope.' : err.status === 403 ? 'API key lacks staff:read permission.' : 'See detail.'}`,
          detail: err.body,
        },
        { status: 502 },
      );
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error fetching MyJKKN' },
      { status: 500 },
    );
  }

  const stats = emptyStats();
  stats.fetched = remote.length;
  const now = new Date().toISOString();
  const matchedEmails = new Set<string>();
  const matchedStaffIds = new Set<string>();

  for (const s of remote) {
    const skip = classify(s);
    if (skip) {
      stats.skipped[skip]++;
      continue;
    }
    stats.eligible++;

    const name = buildName(s);
    const email = preferredEmail(s)!;
    matchedEmails.add(email.toLowerCase());
    matchedStaffIds.add(s.id);
    const designation = (s.designation ?? '').trim();
    const departmentName = s.department?.department_name ?? '';

    // Basic identity columns only. Marketing/JSONB content owned by admin panel
    // is never overwritten. `is_active: true` is included so that re-publishing
    // someone in MyJKKN re-activates the local row after a prior deactivation.
    const basic = {
      college_id: collegeId,
      name,
      designation,
      department: departmentName,
      email,
      photo_url: s.profile_picture?.trim() || '',
      experience_years: typeof s.experience_years === 'number' ? s.experience_years : 0,
      role: s.role?.role_key ?? s.role_key ?? null,
      myjkkn_staff_id: s.id,
      myjkkn_department_id: s.department_id ?? null,
      myjkkn_updated_at: s.updated_at ?? null,
      last_synced_at: now,
      source: 'myjkkn' as const,
      is_active: true,
      updated_at: now,
    };

    // Match by myjkkn_staff_id first, then fall back to email so we attach
    // to legacy/manually-added rows on the first sync.
    const byId = await supabase
      .from('faculty')
      .select('id')
      .eq('myjkkn_staff_id', s.id)
      .maybeSingle();

    let existingId: string | null = byId.data?.id ?? null;

    if (!existingId) {
      const byEmail = await supabase
        .from('faculty')
        .select('id')
        .eq('college_id', collegeId)
        .eq('email', email)
        .maybeSingle();
      existingId = byEmail.data?.id ?? null;
    }

    if (existingId) {
      const { error } = await supabase.from('faculty').update(basic).eq('id', existingId);
      if (error) stats.errors.push(`Update ${s.id} (${name}): ${error.message}`);
      else stats.updated++;
    } else {
      const { error } = await supabase.from('faculty').insert({
        id: crypto.randomUUID(),
        display_order: 0,
        created_at: now,
        ...basic,
      });
      if (error) stats.errors.push(`Insert ${s.id} (${name}): ${error.message}`);
      else stats.created++;
    }
  }

  // Reverse-check: which allow-listed emails never appeared in this run?
  for (const allowed of ALLOWED_EMAILS) {
    if (!matchedEmails.has(allowed)) stats.missing_from_myjkkn.push(allowed);
  }

  // Deactivate any local MyJKKN row whose staff_id was NOT matched this run —
  // i.e. the person was unpublished, deleted, or removed from the allow-list.
  // This is what keeps the public /faculty page in sync with MyJKKN's active
  // roster without an admin having to flip is_active manually.
  const { data: existing, error: existingErr } = await supabase
    .from('faculty')
    .select('id, myjkkn_staff_id')
    .eq('college_id', collegeId)
    .eq('source', 'myjkkn')
    .eq('is_active', true);

  if (existingErr) {
    stats.errors.push(`Deactivation scan failed: ${existingErr.message}`);
  } else if (existing && existing.length > 0) {
    const toDeactivate = existing
      .filter((row) => !row.myjkkn_staff_id || !matchedStaffIds.has(row.myjkkn_staff_id))
      .map((row) => row.id);

    if (toDeactivate.length > 0) {
      const { error: deactErr } = await supabase
        .from('faculty')
        .update({ is_active: false, updated_at: now })
        .in('id', toDeactivate);
      if (deactErr) stats.errors.push(`Deactivation update failed: ${deactErr.message}`);
      else stats.deactivated = toDeactivate.length;
    }
  }

  return NextResponse.json({ ok: true, ...stats });
}
