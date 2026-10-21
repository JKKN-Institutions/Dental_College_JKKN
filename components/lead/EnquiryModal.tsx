// Homepage enquiry modal — the D1/D2/D3 fixes of the 2026-10-12 homepage form audit.
//
// WHY A MODAL AND NOT A LINK. On the homepage every Apply button opened jkkn.ai in a new tab,
// where the visitor met 6 boxes and a 7-college list. GA4 + CRM, 2026-07-29..10-09: at most
// 17% of the users who clicked Apply became a lead. This modal shows the same 3-box
// DentalEnquiryForm the site already runs on 10 pages, and that form posts into the SAME
// jkkn.ai form (jkkn-admission-2026) — so the lead lands in the same CRM list, just without
// the trip to another site.
//
// WHY NOT AN IFRAME OF THE jkkn.ai PAGE. jkkn.ai answers with X-Frame-Options: SAMEORIGIN
// (checked 2026-10-16), so the browser refuses to show it inside this site.
//
// SCOPE. The provider is mounted on the homepage only. Outside it, useEnquiryModal() returns
// null and every EnquiryButton falls back to its normal jkkn.ai link — the other ~40 pages
// that share the Header keep behaving exactly as before.

"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import DentalEnquiryForm from "@/components/lead/DentalEnquiryForm"
import { sendGaEvent } from "@/lib/ga-event"

type OpenOptions = { withPoster?: boolean }
type EnquiryModalApi = { openEnquiry: (sourcePage: string, options?: OpenOptions) => void }
type OpenState = { sourcePage: string; withPoster: boolean }

const EnquiryModalContext = createContext<EnquiryModalApi | null>(null)

/** null outside the homepage — callers must fall back to their ordinary link. */
export function useEnquiryModal() {
  return useContext(EnquiryModalContext)
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<OpenState | null>(null)

  const openEnquiry = useCallback((source: string, options?: OpenOptions) => {
    // Only where the modal was opened from — no name, no phone.
    sendGaEvent("enquiry_open", { source_page: source, page_path: window.location.pathname })
    setOpen({ sourcePage: source, withPoster: !!options?.withPoster })
  }, [])

  const close = useCallback(() => setOpen(null), [])
  const api = useMemo(() => ({ openEnquiry }), [openEnquiry])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, close])

  return (
    <EnquiryModalContext.Provider value={api}>
      {children}
      {open && <EnquiryDialog sourcePage={open.sourcePage} withPoster={open.withPoster} onClose={close} />}
    </EnquiryModalContext.Provider>
  )
}

// The backdrop does NOT close the dialog: on a phone a thumb near the edge would throw away a
// half-typed form. Close = the 44 px X button or Escape.
//
// withPoster (the homepage popup, user's choice 2026-10-16: "poster + form rendume ore popup la"):
// phone = small poster beside the heading, form below, so the Get a Call Back button still sits
// inside one screen; md and up = poster on the left, form on the right. The poster is no longer a
// link to jkkn.ai — a tap on it moves the cursor into the Name box instead, so the tap that used to
// open another site now starts this form.
function EnquiryDialog({
  sourcePage,
  withPoster,
  onClose,
}: {
  sourcePage: string
  withPoster: boolean
  onClose: () => void
}) {
  const focusForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const box = e.currentTarget.closest("[role=dialog]")?.querySelector<HTMLInputElement>("input[name=name]")
    box?.focus()
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-dialog-title"
        className={`relative w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b6d41] p-5 sm:p-6 shadow-2xl ${
          withPoster ? "max-w-sm md:max-w-3xl" : "max-w-sm lg:max-w-md"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div
          className={
            withPoster
              ? "grid grid-cols-[124px_minmax(0,1fr)] gap-x-4 gap-y-4 md:grid-cols-[300px_minmax(0,1fr)] md:gap-x-6 md:items-center"
              : ""
          }
        >
          {withPoster && (
            <button
              type="button"
              onClick={focusForm}
              aria-label="Fill the enquiry form"
              className="col-start-1 row-start-1 md:row-span-2 self-start md:self-center block rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/dental-pop-up-poster.webp"
                alt="JKKN Dental College Admission 2026"
                width={500}
                height={700}
                className="w-full h-auto"
                sizes="(max-width: 768px) 124px, 300px"
              />
            </button>
          )}

          <div className={withPoster ? "col-start-2 row-start-1 self-center md:self-end" : ""}>
            <p id="enquiry-dialog-title" className={`text-lg font-bold leading-snug text-white ${withPoster ? "pr-10 md:pr-12" : "pr-12"}`}>
              Get BDS / MDS fee and admission details
            </p>
            <p className={`mt-1 text-sm text-white/80 ${withPoster ? "" : "mb-4"}`}>
              Fill 3 details. Our admission team will call you within 24 hours.
            </p>
          </div>

          <div className={withPoster ? "col-span-2 md:col-span-1 md:col-start-2 md:row-start-2 md:self-start" : ""}>
            <DentalEnquiryForm sourcePage={sourcePage} compact />
          </div>
        </div>
      </div>
    </div>
  )
}
