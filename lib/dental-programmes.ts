// DEP-34 — the CRM programme list for JKKN Dental College and Hospital.
//
// WHY THIS IS ITS OWN FILE AND NOT PART OF THE SERVER ACTION.
// A Next.js `'use server'` module may only export async functions. On the Arts build this array
// sat inside the action file, the build stripped it, and the page died at prerender with
// `TypeError: j.map is not a function` — while `tsc --noEmit` reported zero errors. Measured
// 2026-08-16. Plain data stays out of 'use server' files.
//
// Verified live against GET https://www.jkkn.ai/api/public/forms/jkkn-admission-2026 on
// 2026-08-16: these are exactly the 6 rows the CRM holds for this institution — none missing,
// none extra, none dead. Every name is distinct, so nothing here is a guess. Only the Arts list
// carries duplicate names, and only Arts needed an assumption.

export const DENTAL_INSTITUTION_ID = "e8fbe8aa-c44e-41aa-a44b-39dab2c8b9a5"

export type DentalProgramme = { id: string; label: string }

// BDS first: it is the undergraduate entry point and the one a school-leaver searches for.
export const DENTAL_PROGRAMMES: ReadonlyArray<DentalProgramme> = [
  { id: "aea1e367-65ad-442d-9b11-ab0277d93a83", label: "BDS — Bachelor of Dental Surgery" },
  { id: "628081aa-6b5a-422c-bf09-f99d8720f816", label: "MDS — Periodontics" },
  { id: "22e425e7-f159-4b89-8d59-901dc32f96c6", label: "MDS — Prosthodontics" },
  { id: "d3d87793-fb87-4be3-8a37-93b2d02fd0e7", label: "MDS — Orthodontics" },
  { id: "2806fbc8-9848-4a96-b57e-dfeac11768ca", label: "MDS — Conservative Dentistry and Endodontics" },
  { id: "3805d017-1f0e-458d-a384-3721e0a9db54", label: "MDS — Oral Medicine and Radiology" },
]

export const VALID_DENTAL_PROGRAMME_IDS: ReadonlySet<string> = new Set(
  DENTAL_PROGRAMMES.map((p) => p.id)
)

// Pre-selects the dropdown on a BDS page so a school-leaver does not have to pick BDS again.
// MDS is deliberately absent: the CRM holds five MDS specialisations and there is no correct
// default, so an MDS page opens on "Select a Programme" and the applicant chooses. Guessing one
// files the lead under a specialisation nobody asked for — the same rule applied to nursing's
// five M.Sc rows and pharmacy's six M.Pharm rows.
export const DEFAULT_PROGRAMME_BY_PAGE: Readonly<Record<string, string>> = {
  bds: "aea1e367-65ad-442d-9b11-ab0277d93a83",
}
