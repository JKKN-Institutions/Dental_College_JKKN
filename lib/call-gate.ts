// Call / WhatsApp form gate (user's choice 2026-11-03, Dental test before the other colleges).
//
// WHY. Every Call and WhatsApp button on the site points at ONE number, +91 93458 55001, and a
// tap on it left no trace in the CRM: GA4 counted the tap (phone_click / whatsapp_click) but a tap
// carries no phone number, so no call or chat could be tied to a website visit. With the gate, a
// tap opens the 3-box enquiry form first; its button ("Call Counsellor" / "Chat on WhatsApp")
// sends the lead to the CRM AND opens the dialer / WhatsApp in the same tap. So every gated
// contact has a CRM "website" lead created a moment before it.
//
// User's choices, 2026-11-03: every 93458 55001 button is gated (Main Office card included), the
// form is a must (no skip link), the line answers 24 hours (no office-time message), the visitor
// picks BDS or an MDS course (the CRM holds only these 6 Dental programmes), careers pages and the
// Dental Surgery Assistant page are left alone (job seekers; DSA is not a CRM programme). The
// hospital line 93458 55002 and the finance officer's number never match, so they stay direct.
//
// Plain module: no React, no server code - the modal, the form and the tests all import it.

import { DENTAL_PROGRAMMES } from "@/lib/dental-programmes"

export type GateIntent = "call" | "whatsapp"

export const GATE_PHONE = "+919345855001"
export const GATE_PHONE_DISPLAY = "+91 93458 55001"
const GATE_DIGITS = "9345855001"

/** Paths where a tap must reach the number directly. */
const UNGATED_PATH_PREFIXES = ["/careers", "/dental-surgery-assistant-course"]

export function isUngatedPath(pathname: string): boolean {
  const p = pathname.toLowerCase()
  return UNGATED_PATH_PREFIXES.some((prefix) => p === prefix || p.startsWith(`${prefix}/`))
}

/**
 * Which gate a link belongs to, or null for any other link.
 * tel: links match when their digits end in the admission number (so "tel:+91 93458 55001",
 * "tel:9345855001" and "tel: +91 93458 55001" all count, and 55002 does not).
 * WhatsApp links match wa.me/<number> and api.whatsapp.com/send?phone=<number>.
 */
export function gateIntentForHref(rawHref: string): GateIntent | null {
  const href = rawHref.trim().toLowerCase()
  if (href.startsWith("tel:")) {
    const digits = href.slice(4).replace(/\D/g, "")
    return digits.endsWith(GATE_DIGITS) ? "call" : null
  }
  const wa = href.match(/^https?:\/\/(?:wa\.me\/(\d+)|(?:api|web)\.whatsapp\.com\/send\/?\?(?:.*&)?phone=(\d+))/)
  if (wa) {
    const digits = wa[1] ?? wa[2] ?? ""
    return digits.endsWith(GATE_DIGITS) ? "whatsapp" : null
  }
  return null
}

/** Short page tag for the CRM source and the WhatsApp reference, e.g. "-contact" or "-home". */
export function pageTag(pathname: string): string {
  return pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
}

/** Pre-selects the course on a course page, so a BDS page opens on BDS. */
export function programmeForPath(pathname: string): string | undefined {
  const p = pathname.toLowerCase()
  const find = (word: string) => DENTAL_PROGRAMMES.find((x) => x.label.toLowerCase().includes(word))?.id
  if (p.includes("periodontics")) return find("periodontics")
  if (p.includes("prosthodontics")) return find("prosthodontics")
  if (p.includes("orthodontics")) return find("orthodontics")
  if (p.includes("conservative") || p.includes("endodontics")) return find("conservative")
  if (p.includes("oral-medicine")) return find("oral medicine")
  if (/(^|\/)bds(\/|-|$)/.test(p)) return find("bds")
  return undefined
}

/** "BDS" or "MDS Periodontics" - the course as a parent would type it. */
function courseShort(programmeId: string): string {
  const label = DENTAL_PROGRAMMES.find((x) => x.id === programmeId)?.label ?? ""
  const [head, tail] = label.split(" — ")
  if (!head) return "BDS / MDS"
  return head === "MDS" && tail ? `MDS ${tail}` : head
}

/**
 * WhatsApp link with the course and a page reference typed into the box.
 * No name and no phone in it, ever: a link like this can end up in analytics or logs.
 */
export function whatsappGateUrl(programmeId: string, pathname: string): string {
  const ref = pageTag(pathname).replace(/^-/, "").replace(/[^a-z0-9-]/gi, "").slice(0, 30) || "home"
  const text = `Hi, ${courseShort(programmeId)} admission details venum. Ref: WEB-DENTAL-${ref}`
  return `https://wa.me/${GATE_PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`
}

export const telGateUrl = `tel:${GATE_PHONE}`
