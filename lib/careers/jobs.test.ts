import { describe, expect, it } from 'vitest';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import { DENTAL_ID, PHARMACY_ID, makeJob } from './test-fixtures';

const dental = makeJob();
const pharmacy = makeJob({
  id: '11111111-1111-4111-8111-111111111111',
  institution: { id: PHARMACY_ID, name: 'JKKN College of Pharmacy' },
});

describe('isUuid', () => {
  it('accepts a uuid and rejects other strings', () => {
    expect(isUuid(DENTAL_ID)).toBe(true);
    expect(isUuid('not-a-uuid')).toBe(false);
    expect(isUuid('../../admin')).toBe(false);
  });
});

describe('filterInstitutionJobs', () => {
  it('keeps only jobs of the given institution', () => {
    expect(filterInstitutionJobs({ data: [dental, pharmacy] }, DENTAL_ID)).toEqual([dental]);
  });

  it('fails closed when the institution id is missing', () => {
    expect(filterInstitutionJobs({ data: [dental, pharmacy] }, undefined)).toEqual([]);
  });

  it('returns [] for malformed payloads', () => {
    expect(filterInstitutionJobs(null, DENTAL_ID)).toEqual([]);
    expect(filterInstitutionJobs({ data: 'oops' }, DENTAL_ID)).toEqual([]);
    expect(filterInstitutionJobs({ error: 'boom' }, DENTAL_ID)).toEqual([]);
  });

  it('drops entries that are not valid jobs', () => {
    const broken = { id: 'x', institution: { id: DENTAL_ID } };
    expect(filterInstitutionJobs({ data: [broken, dental] }, DENTAL_ID)).toEqual([dental]);
  });
});

describe('pickInstitutionJob', () => {
  it('returns the job when it belongs to the institution', () => {
    expect(pickInstitutionJob({ data: dental }, DENTAL_ID)).toEqual(dental);
  });

  it('rejects another institution\'s job', () => {
    expect(pickInstitutionJob({ data: pharmacy }, DENTAL_ID)).toBeNull();
  });

  it('fails closed without an institution id or with a bad payload', () => {
    expect(pickInstitutionJob({ data: dental }, undefined)).toBeNull();
    expect(pickInstitutionJob({ error: 'Job not found.' }, DENTAL_ID)).toBeNull();
  });
});
