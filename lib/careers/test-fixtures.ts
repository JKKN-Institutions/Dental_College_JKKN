import type { PublicJob } from './types';

export const DENTAL_ID = 'e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5';
export const PHARMACY_ID = '5736d86f-5dab-4b7f-9aa1-b3bb1a2dd334';

export function makeJob(overrides: Partial<PublicJob> = {}): PublicJob {
  return {
    id: 'dff7f886-0000-4000-8000-000000000001',
    job_code: null,
    title: 'PROF - DCH - PERIODONTICS',
    role_category: 'teaching_faculty',
    job_type: 'full_time',
    description: '<p>Role summary</p>',
    institution: { id: DENTAL_ID, name: 'JKKN Dental College and Hospital' },
    department: { id: 'dept-1', name: 'Periodontics' },
    city: 'Komarapalayam',
    state: 'Tamil Nadu',
    country: 'India',
    education_level: 'masters',
    min_experience_years: 10,
    max_experience_years: null,
    qualifications: [],
    skills: [],
    positions_open: 1,
    posted_at: null,
    closes_at: null,
    salary: null,
    ...overrides,
  };
}
