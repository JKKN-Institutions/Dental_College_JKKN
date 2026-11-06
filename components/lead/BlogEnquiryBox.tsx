// Enquiry box inside a blog post (Dental Step 2 of the 10,300-lead plan, 2026-11-02).
// Placed by lib/blog-inline-cta.ts. The same white card + compact 3-box form as the homepage hero and
// the contact / fee pages. No fee figure here on purpose: the fee table on /fees-structure/ is the one
// place that number lives, so the box links to it instead of repeating it.
// The title is not a heading, so the article's own H2 outline (and its table of contents) stays as written.
//
// 2026-11-05 (lead options 1 + 2): one box for every blog post, the static guides and the top of the
// BDS page. `variant` picks the wording; `programmeKey` the pre-selected course (null = reader picks).
// With no props beyond sourcePage it renders exactly what the NEET cutoff post showed before.
//
// 2026-11-06 (lead options round 2, #5 + #11): the "counselling" wording, placed right after the
// college / seat tables on the BDS and MDS list pages (their only form sat 7.8-12.8 phone screens
// down). It invites a counselling or cut-off question and promises nothing: no "we will send you the
// dates" line, because no one has agreed to send alerts.

import Link from "next/link"
import DentalEnquiryForm from "@/components/lead/DentalEnquiryForm"
import { DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/dental-programmes"
import type { BoxVariant } from "@/lib/blog-inline-cta"

const COPY: Record<BoxVariant, { label: string; title: string; text: string; link: string }> = {
  "neet-bds": {
    label: "BDS management quota enquiry",
    title: "Missed the government-college cutoff?",
    text:
      "Ask our admission team about BDS management quota at JKKN Dental College: the fee, the seats and the counselling steps.",
    link: "See the BDS fee table",
  },
  bds: {
    label: "BDS admission enquiry",
    title: "Get BDS Fee & Admission Details",
    text: "Fill your details, then call or WhatsApp our admission team right away.",
    link: "See the BDS fee table",
  },
  mds: {
    label: "MDS admission enquiry",
    title: "Get MDS Fee & Admission Details",
    text: "Fill your details, then call or WhatsApp our admission team right away.",
    link: "See the MDS fee table",
  },
  general: {
    label: "BDS and MDS admission enquiry",
    title: "Get BDS / MDS Fee & Admission Details",
    text: "Fill your details, then call or WhatsApp our admission team right away.",
    link: "See the fee table",
  },
  counselling: {
    label: "Counselling and admission enquiry",
    title: "Counselling or cut-off doubt?",
    text:
      "Ask our admission team on call or WhatsApp about JKKN Dental College: the fee, the seats and the counselling steps.",
    link: "See the fee table",
  },
}

type Props = {
  /** Tags the lead in the CRM as utm_campaign dental-<sourcePage>. */
  sourcePage: string
  variant?: BoxVariant
  /** Key of DEFAULT_PROGRAMME_BY_PAGE; null = no course pre-selected. Default: BDS. */
  programmeKey?: string | null
}

export default function BlogEnquiryBox({ sourcePage, variant = "neet-bds", programmeKey = "bds" }: Props) {
  const copy = COPY[variant]
  const programmeId = programmeKey ? DEFAULT_PROGRAMME_BY_PAGE[programmeKey] : undefined
  return (
    <aside
      aria-label={copy.label}
      className="my-10 max-w-xl mx-auto rounded-[20px] bg-white border border-[#d4f1e4] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-5 sm:p-6 lg:p-7"
    >
      <div className="mb-4">
        <div className="text-xl lg:text-2xl font-bold text-[#032816] leading-snug">{copy.title}</div>
        <div className="mt-2 text-base text-[#374151] leading-relaxed">
          {copy.text}{" "}
          <Link href="/fees-structure/" className="font-semibold text-[#0b6d41] underline">
            {copy.link}
          </Link>
          .
        </div>
      </div>
      <DentalEnquiryForm sourcePage={sourcePage} defaultProgrammeId={programmeId} compact bare />
    </aside>
  )
}
