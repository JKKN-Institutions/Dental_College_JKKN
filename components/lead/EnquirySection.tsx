// The 3-box enquiry form as a page section (marketing audit L3, 2026-10-21). The 2026-10-21 scan
// of 342 pages found the form on the rival-list pages but not on the pages a parent reads while
// deciding: the 11 city pages, placements, testimonials, gallery, hostel and the AI campus page.
// One component so every one of them shows the same section, tagged by its own sourcePage.

import DentalEnquiryForm from "@/components/lead/DentalEnquiryForm"

type Props = {
  /** Tags the lead in the CRM as utm_campaign dental-<sourcePage>. */
  sourcePage: string
  heading?: string
  subheading?: string
  /** Pre-selected programme id (see lib/dental-programmes.ts). */
  programmeId?: string
}

export default function EnquirySection({
  sourcePage,
  heading = "Get BDS / MDS Fee & Admission Details",
  subheading = "Leave your details and our admission team will contact you within 24 hours.",
  programmeId,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-[#0b6d41] to-[#0f8f56] py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-white/80 text-center text-sm mb-8">{subheading}</p>
        <DentalEnquiryForm sourcePage={sourcePage} defaultProgrammeId={programmeId} />
      </div>
    </section>
  )
}
