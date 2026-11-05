// Blog inline enquiry box - where the CMS HTML is cut. Pure functions only.
import { describe, expect, it } from "vitest"
import { BLOG_INLINE_CTA, blockTagsBalanced, courseForSlug, inlineCtaFor, splitBeforeNthH2 } from "./blog-inline-cta"

const BODY =
  '<h2 id="1-a">1. What score</h2><p>Answer one.</p><table><tr><td>x</td></tr></table>' +
  '<h2 id="2-b">2. Category-wise</h2><p>Two.</p><h2 id="3-c">3. Govt vs private</h2><p>Three.</p>'

describe("splitBeforeNthH2", () => {
  it("cuts just before the 2nd <h2> and loses nothing", () => {
    const parts = splitBeforeNthH2(BODY, 2)
    expect(parts).not.toBeNull()
    expect(parts!.before.endsWith("</table>")).toBe(true)
    expect(parts!.after.startsWith('<h2 id="2-b">')).toBe(true)
    expect(parts!.before + parts!.after).toBe(BODY)
  })

  it("can cut before the 3rd <h2>", () => {
    expect(splitBeforeNthH2(BODY, 3)!.after.startsWith('<h2 id="3-c">')).toBe(true)
  })

  it("matches upper-case tags with attributes", () => {
    const html = "<H2>One</H2><p>a</p><H2 class=\"x\">Two</H2>"
    expect(splitBeforeNthH2(html, 2)!.after).toBe('<H2 class="x">Two</H2>')
  })

  it("returns null when there is no Nth <h2>, for n below 2, or for empty html", () => {
    expect(splitBeforeNthH2(BODY, 4)).toBeNull()
    expect(splitBeforeNthH2(BODY, 1)).toBeNull()
    expect(splitBeforeNthH2("", 2)).toBeNull()
  })

  it("does not take <header> or escaped text for an <h2>", () => {
    const html = "<header>h</header><h2>One</h2><p>&lt;h2&gt; in text</p><h2>Two</h2>"
    expect(splitBeforeNthH2(html, 2)!.after).toBe("<h2>Two</h2>")
  })

  it("refuses a cut that would leave a block element open", () => {
    const wrapped = "<div class=\"wrap\"><h2>One</h2><p>a</p><h2>Two</h2><p>b</p></div>"
    expect(splitBeforeNthH2(wrapped, 2)).toBeNull()
  })
})

describe("blockTagsBalanced", () => {
  it("does not confuse <pre> or <path> with <p>", () => {
    expect(blockTagsBalanced("<pre>code</pre><svg><path d=\"M0\"/></svg><p>x</p>")).toBe(true)
  })
  it("sees an unclosed list", () => {
    expect(blockTagsBalanced("<ul><li>a</li>")).toBe(false)
  })
})

describe("inlineCtaFor", () => {
  const slug = Object.keys(BLOG_INLINE_CTA)[0]

  it("gives every other post the default box before its 2nd <h2> (2026-11-05)", () => {
    const cta = inlineCtaFor("some-other-post", BODY)!
    expect(cta.before! + cta.after!).toBe(BODY)
    expect(cta.after!.startsWith('<h2 id="2-b">')).toBe(true)
    expect(cta.sourcePage).toBe("blog-some-other-post")
    expect(cta.variant).toBe("general")
    expect(cta.programmeKey).toBeNull()
  })

  it("is null only when there is no slug", () => {
    expect(inlineCtaFor("", BODY)).toBeNull()
  })

  it("keeps the NEET post's own wording and BDS", () => {
    const cta = inlineCtaFor(slug, BODY)!
    expect(cta.variant).toBe("neet-bds")
    expect(cta.programmeKey).toBe("bds")
  })

  it("keeps the source tag short", () => {
    const long = "a-very-long-post-slug-about-dental-colleges-in-tamil-nadu-and-more"
    const cta = inlineCtaFor(long, BODY)!
    expect(cta.sourcePage.length).toBeLessThanOrEqual(45)
    expect(cta.sourcePage.endsWith("-")).toBe(false)
  })

  it("splits a configured post and tags the source page", () => {
    const cta = inlineCtaFor(slug, BODY)!
    expect(cta.sourcePage).toBe(BLOG_INLINE_CTA[slug].sourcePage)
    expect(cta.before! + cta.after!).toBe(BODY)
  })

  it("falls back to no split (box after the post) when the cut is unsafe", () => {
    const cta = inlineCtaFor(slug, "<div><h2>One</h2><h2>Two</h2></div>")!
    expect(cta.before).toBeNull()
    expect(cta.after).toBeNull()
  })
})

describe("courseForSlug", () => {
  it("reads BDS, MDS and the MDS speciality from the slug", () => {
    expect(courseForSlug("bds-fees-in-tamil-nadu")).toEqual({ variant: "bds", programmeKey: "bds" })
    expect(courseForSlug("mds-seats-tamil-nadu")).toEqual({ variant: "mds", programmeKey: null })
    expect(courseForSlug("scope-of-mds-periodontics")).toEqual({ variant: "mds", programmeKey: "mds-periodontics" })
    expect(courseForSlug("mds-prosthodontics-career")).toEqual({ variant: "mds", programmeKey: "mds-prosthodontics" })
    expect(courseForSlug("mds-orthodontics-fees")).toEqual({ variant: "mds", programmeKey: "mds-orthodontics" })
    expect(courseForSlug("mds-conservative-dentistry-guide")).toEqual({ variant: "mds", programmeKey: "mds-conservative" })
    expect(courseForSlug("mds-oral-medicine-radiology")).toEqual({ variant: "mds", programmeKey: "mds-oral-medicine" })
  })
  it("does not take a word that only contains bds / mds", () => {
    expect(courseForSlug("cmdsx-bdsa-post").variant).toBe("general")
  })
  it("leaves a post about both, or neither, to the reader", () => {
    expect(courseForSlug("bds-vs-mds")).toEqual({ variant: "general", programmeKey: null })
    expect(courseForSlug("where-the-official-dental-college-list-comes-from")).toEqual({ variant: "general", programmeKey: null })
  })
})
