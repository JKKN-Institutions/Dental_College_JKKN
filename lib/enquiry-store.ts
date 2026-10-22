// Browser memory for the homepage enquiry popup. Kept apart from the components so the form and
// the modal can both import it without importing each other.

/** Set after a CRM-accepted submit, so the homepage popup stops interrupting this visitor. */
export const ENQUIRY_DONE_KEY = "dental_enquiry_done"

/** Local date (YYYY-MM-DD) the homepage popup last opened: it opens at most once a day per visitor. */
export const POPUP_SHOWN_KEY = "dental_popup_shown_on"

// localStorage throws in some private windows and when site data is blocked. A popup rule must
// never take the page down with it, so every access is wrapped.
export function readStore(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStore(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* storage unavailable — behave as a first visit */
  }
}
