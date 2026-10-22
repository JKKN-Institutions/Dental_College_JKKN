// Floating WhatsApp button, every page (user's choice 2026-10-21: keep the bottom bar as it is and
// add this instead). The old FloatingWhatsApp component is, despite its name, a scroll-to-top
// button; GA4 2026-08-21..10-20 (India) counted 5 users who tapped WhatsApp against 56 who tapped
// Call, because the only WhatsApp link was small text under the form.
//
// The number is the admission line, +91 93458 55001 - the user confirmed on 2026-10-21 that
// WhatsApp messages to it get a reply. ConversionTracking counts the tap as whatsapp_click
// because it is a wa.me link; nothing extra is sent from here.
//
// Sits above the scroll-to-top button (bottom-24 on phones, bottom-8 from lg) so the two never
// overlap, and clear of the mobile bottom bar.

"use client"

import { usePathname } from "next/navigation"

const WHATSAPP_NUMBER = "919345855001"
const PREFILL = "Hi, BDS / MDS fee and seat details venum."

// This page already carries its own sticky Call + WhatsApp bar.
const HIDE_ON = ["/dental-surgery-assistant-course"]

export default function WhatsAppButton() {
  const pathname = usePathname() ?? ""
  if (HIDE_ON.some((p) => pathname.startsWith(p))) return null

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the admission team on WhatsApp"
      className="fixed bottom-36 right-4 md:right-6 lg:bottom-28 lg:right-8 z-50 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 lg:h-8 lg:w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A13 13 0 0 0 16.04 29C23.2 29 29.04 23.17 29.04 16S23.2 3 16.04 3Zm0 23.8c-2 0-3.95-.54-5.65-1.55l-.4-.24-3.97 1.04 1.06-3.86-.26-.4A10.76 10.76 0 0 1 5.24 16c0-5.95 4.85-10.79 10.8-10.79 5.95 0 10.79 4.84 10.79 10.79 0 5.96-4.84 10.8-10.79 10.8Zm5.92-8.08c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.65.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  )
}
