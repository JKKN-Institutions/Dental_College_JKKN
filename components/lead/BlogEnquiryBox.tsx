// Enquiry box inside a blog post (Dental Step 2 of the 10,300-lead plan, 2026-11-02).
// Placed by lib/blog-inline-cta.ts. The same white card + compact 3-box form as the homepage hero and
// the contact / fee pages, with BDS pre-selected. No fee figure here on purpose: the BDS fee table on
// /fees-structure/ is the one place that number lives, so the box links to it instead of repeating it.
// The title is not a heading, so the article's own H2 outline (and its table of contents) stays as written.

import Link from "next/link"
import DentalEnquiryForm from "@/components/lead/DentalEnquiryForm"
import { DEFAULT_PROGRAMME_BY_PAGE } from "@/lib/dental-programmes"

export default function BlogEnquiryBox({ sourcePage }: { sourcePage: string }) {
  return (
    <aside
      aria-label="BDS management quota enquiry"
      className="my-10 max-w-xl mx-auto rounded-[20px] bg-white border border-[#d4f1e4] shadow-[0_18px_40px_rgba(3,40,22,0.35)] p-5 sm:p-6 lg:p-7"
    >
      <div className="mb-4">
        <div className="text-xl lg:text-2xl font-bold text-[#032816] leading-snug">Missed the government-college cutoff?</div>
        <div className="mt-2 text-base text-[#374151] leading-relaxed">
          Ask our admission team about BDS management quota at JKKN Dental College: the fee, the seats and the
          counselling steps.{" "}
          <Link href="/fees-structure/" className="font-semibold text-[#0b6d41] underline">
            See the BDS fee table
          </Link>
          .
        </div>
      </div>
      <DentalEnquiryForm sourcePage={sourcePage} defaultProgrammeId={DEFAULT_PROGRAMME_BY_PAGE["bds"]} compact bare />
    </aside>
  )
}
