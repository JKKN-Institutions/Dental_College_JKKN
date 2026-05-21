/**
 * Thin typed wrapper around the MyJKKN platform API.
 *
 * Endpoint family used: /api/api-management/staff
 *   - Bearer auth via `Authorization: Bearer <key>` (key needs `read` scope)
 *   - Supports ?all=true, ?institution_id=..., ?role_key=..., ?is_active=true, etc.
 *   - Response envelope: { data: MyJKKNStaff[], metadata: {...} }
 *
 * Env vars required (in .env.local):
 *   JKKN_API_BASE_URL          e.g. https://www.jkkn.ai/api
 *   JKKN_API_KEY               e.g. jk_xxx_yyy   (must have read scope)
 *   JKKN_DENTAL_INSTITUTION_ID e.g. e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5
 */

export interface MyJKKNCategoryEmbed {
  id: string;
  category_name: string;
  is_teaching: boolean;
  shows_extended_profile: boolean;
}

export interface MyJKKNInstitutionEmbed {
  id: string;
  name: string;
  counselling_code?: string;
}

export interface MyJKKNDepartmentEmbed {
  id: string;
  department_name: string;
}

export interface MyJKKNRoleEmbed {
  id: string;
  role_key: string;
  role_name: string;
  description: string | null;
  is_system_role: boolean;
}

export interface MyJKKNStaff {
  // Identity
  id: string;
  staff_id: string | null;
  first_name: string;
  last_name: string;

  // Demographics
  gender?: string | null;
  date_of_birth?: string | null;
  marital_status?: string | null;
  blood_group?: string | null;

  // Contact
  email?: string | null;
  institution_email?: string | null;
  phone?: string | null;

  // Address
  profile_picture?: string | null;
  address?: string | null;
  state?: string | null;
  district?: string | null;
  pincode?: string | null;

  // Employment
  date_of_joining?: string | null;
  designation?: string | null;
  role_type?: string | null;
  role_key?: string | null;
  category_id?: string | null;
  institution_id?: string | null;
  department_id?: string | null;
  is_active: boolean;
  login_enabled?: boolean | null;

  // Extended profile (only meaningful when has_extended_profile=true)
  has_extended_profile?: boolean;
  slug?: string | null;
  status?: 'draft' | 'published' | null;
  display_order?: number | null;
  experience_years?: number | null;
  research_papers?: number | null;
  phd_scholars?: number | null;
  awards_won?: number | null;
  pg_dissertations_guided?: number | null;
  ug_projects_guided?: number | null;
  qualification_summary?: string | null;
  professional_summary?: string | null;
  mentoring_description?: string | null;
  google_scholar_url?: string | null;
  researchgate_url?: string | null;
  orcid_url?: string | null;
  badges?: unknown[];
  qualifications?: unknown[];
  specialisations?: unknown[];
  experience_entries?: unknown[];
  research_focus_areas?: unknown[];
  publications?: unknown[];
  funded_projects?: unknown[];
  certifications?: unknown[];
  awards?: unknown[];
  memberships?: unknown[];
  phd_scholars_list?: unknown[];
  faqs?: unknown[];
  achievements?: unknown[];

  // Embeds
  category?: MyJKKNCategoryEmbed | null;
  institution?: MyJKKNInstitutionEmbed | null;
  department?: MyJKKNDepartmentEmbed | null;
  role?: MyJKKNRoleEmbed | null;

  // Audit
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  profile_id?: string | null;

  [extra: string]: unknown;
}

export interface MyJKKNListResponse<T> {
  data: T[];
  metadata: {
    total: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    returned: number;
    all?: boolean;
  };
}

export class JkknApiError extends Error {
  readonly status: number;
  readonly body: string;
  constructor(status: number, body: string) {
    super(`MyJKKN API ${status}: ${body.slice(0, 200)}`);
    this.status = status;
    this.body = body;
  }
}

function envOrThrow(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function jkknGet<T>(path: string, query?: Record<string, string>): Promise<T> {
  const base = envOrThrow('JKKN_API_BASE_URL').replace(/\/$/, '');
  const key = envOrThrow('JKKN_API_KEY');
  const url = new URL(base + path);
  if (query) {
    for (const [k, v] of Object.entries(query)) url.searchParams.set(k, v);
  }
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${key}`,
      Accept: 'application/json',
    },
    cache: 'no-store',
    redirect: 'follow',
  });
  const text = await res.text();
  if (!res.ok) throw new JkknApiError(res.status, text);
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new JkknApiError(res.status, `Non-JSON response: ${text.slice(0, 200)}`);
  }
}

/**
 * Fetch ALL staff for the dental institution (no pagination).
 * Returns active rows only — inactive staff are not synced.
 */
export async function fetchDentalStaff(): Promise<MyJKKNStaff[]> {
  const institutionId = envOrThrow('JKKN_DENTAL_INSTITUTION_ID');
  const envelope = await jkknGet<MyJKKNListResponse<MyJKKNStaff>>(
    '/api-management/staff',
    {
      institution_id: institutionId,
      is_active: 'true',
      all: 'true',
    },
  );
  return envelope.data ?? [];
}
