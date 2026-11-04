import { describe, expect, it } from "vitest"
import {
  gateIntentForHref,
  isGateNumber,
  isUngatedPath,
  numberAtOffset,
  pageTag,
  programmeForPath,
  telUrlFor,
  whatsappGateUrl,
} from "@/lib/call-gate"

describe("numberAtOffset (plain-text numbers)", () => {
  const text = "For admission call +91 93458 55001 or the hospital on 93458 55002 today."
  it("finds the number a tap lands on, in any of its written forms", () => {
    expect(numberAtOffset(text, text.indexOf("93458 55001") + 3)).toBe("9345855001")
    expect(numberAtOffset(text, text.indexOf("+91"))).toBe("9345855001")
    expect(numberAtOffset(text, text.indexOf("55002"))).toBe("9345855002")
    expect(numberAtOffset("Call 9345855001 now", 7)).toBe("9345855001")
  })
  it("returns null off the number, and for years or short numbers", () => {
    expect(numberAtOffset(text, 2)).toBeNull()
    expect(numberAtOffset("Established in 1987, 100 BDS seats", 16)).toBeNull()
  })
  it("only the admission number is gated", () => {
    expect(isGateNumber("9345855001")).toBe(true)
    expect(isGateNumber("9345855002")).toBe(false)
    expect(telUrlFor("9345855002")).toBe("tel:+919345855002")
  })
})

describe("gateIntentForHref", () => {
  it("gates every way the site writes the admission number", () => {
    expect(gateIntentForHref("tel:+919345855001")).toBe("call")
    expect(gateIntentForHref("tel:+91 93458 55001")).toBe("call")
    expect(gateIntentForHref("tel: +91 93458 55001")).toBe("call")
    expect(gateIntentForHref("tel:9345855001")).toBe("call")
    expect(gateIntentForHref("https://wa.me/919345855001")).toBe("whatsapp")
    expect(gateIntentForHref("https://wa.me/919345855001?text=Hi%2C%20BDS")).toBe("whatsapp")
    expect(gateIntentForHref("https://api.whatsapp.com/send?phone=919345855001&text=hi")).toBe("whatsapp")
  })

  it("leaves the hospital, finance and every other link alone", () => {
    expect(gateIntentForHref("tel:+919345855002")).toBeNull() // Hospital & Patient Care
    expect(gateIntentForHref("tel:+919788285818")).toBeNull() // finance officer
    expect(gateIntentForHref("https://wa.me/919943353353")).toBeNull()
    expect(gateIntentForHref("https://www.jkkn.ai/apply/jkkn-admission-2026")).toBeNull()
    expect(gateIntentForHref("mailto:admissions@jkkn.ac.in")).toBeNull()
    expect(gateIntentForHref("/contact/")).toBeNull()
  })
})

describe("isUngatedPath", () => {
  it("keeps careers and the DSA course page direct", () => {
    expect(isUngatedPath("/careers/")).toBe(true)
    expect(isUngatedPath("/careers/1b810e2e-dbc5-4a0b-bae3-fd7c76bfe241/")).toBe(true)
    expect(isUngatedPath("/dental-surgery-assistant-course/")).toBe(true)
    expect(isUngatedPath("/contact/")).toBe(false)
    expect(isUngatedPath("/")).toBe(false)
    expect(isUngatedPath("/careers-fair-2026/")).toBe(false)
    expect(isUngatedPath("/admin/blogs/edit/42/")).toBe(true)
    expect(isUngatedPath("/administration/")).toBe(false)
  })
})

describe("programmeForPath", () => {
  it("pre-selects the course of a course page and nothing elsewhere", () => {
    expect(programmeForPath("/academics/details-of-academic-programs/bds/")).toBe("aea1e367-65ad-442d-9b11-ab0277d93a83")
    expect(programmeForPath("/admissions/bds/")).toBe("aea1e367-65ad-442d-9b11-ab0277d93a83")
    expect(programmeForPath("/academics/details-of-academic-programs/mds/periodontics/")).toBe("628081aa-6b5a-422c-bf09-f99d8720f816")
    expect(programmeForPath("/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics/")).toBe(
      "2806fbc8-9848-4a96-b57e-dfeac11768ca"
    )
    expect(programmeForPath("/academics/details-of-academic-programs/mds/oral-medicine/")).toBe("3805d017-1f0e-458d-a384-3721e0a9db54")
    expect(programmeForPath("/contact/")).toBeUndefined()
    expect(programmeForPath("/admissions/mds/")).toBeUndefined()
  })
})

describe("whatsappGateUrl", () => {
  it("types the course and a page reference, never a name or phone", () => {
    const url = whatsappGateUrl("aea1e367-65ad-442d-9b11-ab0277d93a83", "/contact/")
    expect(url.startsWith("https://wa.me/919345855001?text=")).toBe(true)
    expect(decodeURIComponent(url.split("?text=")[1])).toBe("Hi, BDS admission details venum. Ref: WEB-DENTAL-contact")
    const mds = whatsappGateUrl("628081aa-6b5a-422c-bf09-f99d8720f816", "/")
    expect(decodeURIComponent(mds.split("?text=")[1])).toBe("Hi, MDS Periodontics admission details venum. Ref: WEB-DENTAL-home")
  })

  it("keeps the page tag short", () => {
    expect(pageTag("/")).toBe("-home")
    expect(pageTag("/admissions/bds/")).toBe("-admissions-bds")
  })
})
