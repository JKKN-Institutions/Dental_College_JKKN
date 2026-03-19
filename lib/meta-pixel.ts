// Meta Pixel event tracking helpers for admission lead generation

export const trackMetaEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
}

// Admission-specific event helpers
export const trackAdmissionEvents = {
  // User views a course page (BDS, MDS, specialization)
  viewContent: (courseName: string) =>
    trackMetaEvent('ViewContent', {
      content_name: courseName,
      content_category: 'Admission',
    }),

  // User clicks "Apply Now", "Enquire Now", or any admission CTA
  lead: (source: string) =>
    trackMetaEvent('Lead', {
      content_name: `Admission Enquiry - ${source}`,
      content_category: 'Admission',
    }),

  // User submits admission/contact/enquiry form
  completeRegistration: (courseName: string) =>
    trackMetaEvent('CompleteRegistration', {
      content_name: courseName,
      content_category: 'Admission',
    }),

  // User clicks phone number or WhatsApp
  contact: () =>
    trackMetaEvent('Contact'),

  // User downloads prospectus, brochure, or syllabus
  download: (documentName: string) =>
    trackMetaEvent('Lead', {
      content_name: `Download - ${documentName}`,
      content_category: 'Download',
    }),
}
