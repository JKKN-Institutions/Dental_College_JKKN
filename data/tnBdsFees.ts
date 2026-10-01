// BDS fees in Tamil Nadu as published by the State, not by any college.
//
// Source: Government of Tamil Nadu, Selection Committee (Directorate of Medical Education and
// Research), "Prospectus for admission to MBBS / BDS degree courses ... 2025-2026 session",
// G.O.(D) No.601, Health and Family Welfare Department, dated 05-06-2025. Read 2026-09-30.
//   p.53  - Government Quota fee, all self-financing dental colleges: Rs 2,50,000 a year,
//           "as fixed by the Fee Committee".
//   p.53  - Government dental colleges, amount paid at allotment: Rs 16,073 (OC/BC/BCM/MBC),
//           Rs 12,073 (SC/SCA/ST).
//   p.146 - Seat split in self-financing colleges: non-minority 65:35, minority 50:50
//           (Government : Management). JKKN is a minority institution (TNMGRMU seat matrix).
//
// This is the 2025-26 prospectus - the latest one published. Say "2025-26" wherever the figure
// is shown; a 2026-27 revision is notified at counselling and must replace it here first.
// Management Quota fees differ by college; publish only JKKN's own (see the fee-structure page).

export const TN_BDS_FEES = {
  source: {
    authority: 'Selection Committee, Directorate of Medical Education and Research, Government of Tamil Nadu',
    document: 'Prospectus for admission to MBBS / BDS degree courses, 2025-2026 session',
    order: 'G.O.(D) No.601, Health and Family Welfare Department, dated 05-06-2025',
    url: 'https://tnmedicalselection.net/archives/21052026022251051.pdf',
    session: '2025-26',
    retrieved: '2026-09-30',
  },
  governmentQuotaSelfFinancing: 250000,
  governmentCollegeAllotment: { general: 16073, scSt: 12073 },
  seatSplit: { nonMinority: '65:35', minority: '50:50' },
} as const;
