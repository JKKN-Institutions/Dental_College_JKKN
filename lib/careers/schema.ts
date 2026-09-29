import { organizationInfo } from '@/lib/metadata';
import type { PublicJob } from './types';

const EMPLOYMENT_TYPES: Record<string, string> = {
  full_time: 'FULL_TIME',
  part_time: 'PART_TIME',
  contract: 'CONTRACTOR',
  internship: 'INTERN',
  freelance: 'CONTRACTOR',
};

const SALARY_UNITS: Record<string, string> = {
  per_hour: 'HOUR',
  per_day: 'DAY',
  per_week: 'WEEK',
  per_month: 'MONTH',
  per_year: 'YEAR',
};

/** JSON for a <script type="application/ld+json">, with `<` escaped so data cannot close the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * schema.org JobPosting for Google Jobs. Returns null when posted_at is missing,
 * because datePosted is a required property.
 */
export function buildJobPostingSchema(
  job: PublicJob,
  pageUrl: string,
  descriptionHtml: string,
): Record<string, unknown> | null {
  if (!job.posted_at) return null;
  const { address } = organizationInfo;
  const salary = job.salary;
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: descriptionHtml || job.title,
    identifier: { '@type': 'PropertyValue', name: organizationInfo.name, value: job.job_code ?? job.id },
    datePosted: job.posted_at,
    ...(job.closes_at ? { validThrough: job.closes_at } : {}),
    employmentType: EMPLOYMENT_TYPES[job.job_type] ?? 'OTHER',
    hiringOrganization: {
      '@type': 'Organization',
      name: organizationInfo.name,
      sameAs: organizationInfo.url,
      logo: organizationInfo.logo,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: address.streetAddress,
        addressLocality: job.city ?? address.addressLocality,
        addressRegion: job.state ?? address.addressRegion,
        postalCode: address.postalCode,
        addressCountry: address.addressCountry,
      },
    },
    directApply: true,
    url: pageUrl,
    ...(salary && (salary.min != null || salary.max != null)
      ? {
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: salary.currency || 'INR',
            value: {
              '@type': 'QuantitativeValue',
              ...(salary.min != null ? { minValue: salary.min } : {}),
              ...(salary.max != null ? { maxValue: salary.max } : {}),
              unitText: SALARY_UNITS[salary.duration] ?? 'MONTH',
            },
          },
        }
      : {}),
  };
}
