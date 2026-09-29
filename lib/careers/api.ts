import 'server-only';
import { cache } from 'react';
import { CAREERS_API, CAREERS_REVALIDATE_SECONDS } from './config';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import type { PublicJob } from './types';

const TIMEOUT_MS = 8000;

function dentalInstitutionId(): string | undefined {
  return process.env.JKKN_DENTAL_INSTITUTION_ID?.trim() || undefined;
}

export interface DentalJobsResult {
  jobs: PublicJob[];
  /** false when the API could not be reached or config is missing — show a fallback notice. */
  available: boolean;
}

/** Open jobs for JKKN Dental College only. Never throws (safe for build + sitemap). */
export async function getDentalJobs(): Promise<DentalJobsResult> {
  const institutionId = dentalInstitutionId();
  if (!institutionId) {
    console.error('[careers] JKKN_DENTAL_INSTITUTION_ID is not set — showing no jobs');
    return { jobs: [], available: false };
  }
  try {
    const res = await fetch(`${CAREERS_API}/jobs?institution_id=${encodeURIComponent(institutionId)}`, {
      next: { revalidate: CAREERS_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { jobs: filterInstitutionJobs(await res.json(), institutionId), available: true };
  } catch (error) {
    console.error('[careers] failed to load jobs:', error);
    return { jobs: [], available: false };
  }
}

/**
 * One dental job, or null when the id is invalid, the job is closed, or it belongs
 * to another institution. Throws on server/network errors so ISR keeps the stale page.
 */
export const getDentalJob = cache(async (jobId: string): Promise<PublicJob | null> => {
  const institutionId = dentalInstitutionId();
  if (!institutionId || !isUuid(jobId)) return null;
  const res = await fetch(`${CAREERS_API}/jobs/${jobId}`, {
    next: { revalidate: CAREERS_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`[careers] job ${jobId}: HTTP ${res.status}`);
  return pickInstitutionJob(await res.json(), institutionId);
});
