"use client";

// Homepage popup — fix D1 of the 2026-10-12 homepage form audit.
//
// Before: a poster image that linked to jkkn.ai in a new tab. It carried 72% of the homepage's
// Apply clicks (GA4, 2026-07-24..10-11). User's choice 2026-10-16: keep the poster AND add the
// 3-box form in the same popup ("poster + form rendume ore popup la venum"). So the popup is the
// enquiry modal with the poster inside it; the lead is tagged dental-home-popup in the CRM.
//
// Once a visitor has submitted the enquiry form anywhere on this site, the popup stops.
// Without the modal provider (any page other than the homepage) the old poster is the fallback.

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useEnquiryModal } from "@/components/lead/EnquiryModal";
import { ENQUIRY_DONE_KEY, readStore } from "@/lib/enquiry-store";

export default function AdmissionPopup() {
  const modal = useEnquiryModal();
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    if (readStore(ENQUIRY_DONE_KEY)) return;

    const variant = modal ? "poster_form" : "poster";
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "popup_view", { popup_variant: variant, page_path: window.location.pathname });
    }

    if (modal) modal.openEnquiry("home-popup", { withPoster: true });
    else setShowPoster(true);
    // Runs once per page load, like the poster did. `modal` is stable for the page's lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!showPoster) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg" style={{ maxHeight: '90vh' }}>
        <button
          onClick={() => setShowPoster(false)}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <a
          href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=dental.jkkn.ac.in&utm_medium=organic&utm_campaign=components-admissionpopup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/dental-pop-up-poster.webp"
            alt="JKKN Dental College Admission 2026"
            width={500}
            height={700}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-pointer"
            priority
          />
        </a>
      </div>
    </div>
  );
}
