/**
 * Breadcrumb hygiene shared by lib/metadata.ts (path-derived crumbs) and the two components that
 * take hand-written item lists (components/BreadcrumbSchema.tsx, components/Breadcrumb.tsx).
 *
 * Measured 2026-09-18 across all 261 sitemap URLs: 52 crumb links pointed at hub paths that have
 * no page.tsx and answer 404 (/accreditation/, /research/, /academics/details-of-academic-programs/ ...)
 * and 99 "Home" crumbs lacked the trailing slash this trailingSlash:true site 308-redirects to.
 * A breadcrumb is the first structured data Google reads on a page; a 404 inside it is a broken
 * link in the markup itself.
 *
 * Kept dependency-free so the client-side Breadcrumb component can import it without dragging
 * lib/metadata (and collegeFacts) into the browser bundle.
 */
export const SITE_ORIGIN = 'https://dental.jkkn.ac.in';

/** Hub paths that exist only as URL segments. Add a path here until it gets a page.tsx. */
export const NON_PAGE_PATHS = new Set<string>([
  '/accreditation',
  '/accreditation/nirf',
  '/accreditation/nirf/nirf-2024',
  '/accreditation/nirf/nirf-2025',
  '/accreditation/nirf/nirf-2026',
  '/research',
  '/academics/details-of-academic-programs',
  '/academics/statutes-pertaining-to-academic-departments',
  '/academics/courses',
  '/academics/faculty-achievements',
  '/academics/capability-enhancement-program',
  '/about/approvals-and-affiliation',
  '/about/accreditation-ranking-status',
  '/admissions/equitable-opportunity-for-sedg-group',
  '/admissions/fee-refund-policy',
  '/committee/anti-ragging-committee',
  '/committee/placement-cell-cdc',
  '/committee/student-council',
  '/committee/ncc',
  '/facilities/hostel',
  '/alumni',
  '/blog/campus',
]);

/** Old paths that 301/308 to a different URL - a crumb must name the final URL. */
export const PATH_ALIASES: Record<string, string> = {
  '/admission': '/admissions',
  '/bds': '/academics/details-of-academic-programs/bds',
  '/mds': '/academics/details-of-academic-programs/mds',
  '/fee-structure': '/fees-structure',
  '/contact-us': '/contact',
  '/administration': '/our-management',
};

/** Path of an absolute or relative URL on this site, without trailing slash ('' for the homepage). */
export function sitePath(url: string): string {
  const p = url.startsWith(SITE_ORIGIN) ? url.slice(SITE_ORIGIN.length) : url;
  const clean = p.split('#')[0].split('?')[0].replace(/\/+$/, '');
  return PATH_ALIASES[clean] ?? clean;
}

/** Absolute, trailing-slashed URL for a site path. */
export function siteUrl(path: string): string {
  const p = sitePath(path);
  return `${SITE_ORIGIN}${p}/`;
}

export type CrumbItem = { name: string; url: string };

/**
 * Drop intermediate crumbs that would link to a non-page, normalise every URL to its final
 * trailing-slash form, and renumber positions. The last crumb is always kept (it is this page).
 */
export function cleanCrumbs(items: CrumbItem[]): CrumbItem[] {
  return items
    .filter((item, i) => {
      if (i === items.length - 1) return true;
      if (!item.url.startsWith(SITE_ORIGIN) && !item.url.startsWith('/')) return true; // external (jkkn.ac.in)
      return !NON_PAGE_PATHS.has(sitePath(item.url));
    })
    .map((item) => ({
      name: item.name,
      url: item.url.startsWith(SITE_ORIGIN) || item.url.startsWith('/') ? siteUrl(item.url) : item.url,
    }));
}
