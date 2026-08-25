// GENERATED FILE - do not hand-edit. Regenerate with scripts/gen_tn_mds_fees.py.
//
// Every figure below is parsed out of the Tamil Nadu Selection Committee's own MDS prospectuses
// and asserted at generation time. Nothing here is typed by hand, because the table this replaced
// was: it published Rs 50,000 - Rs 1,00,000 as the government MDS tuition when the prospectus says
// Rs 30,000, and its prose claimed private fees reach "Rs 52 lakh annually" against its own
// table's Rs 18,00,000 maximum.
//
// WHAT THE GOVERNMENT DOES NOT PUBLISH IS ITSELF THE ANSWER. Both prospectuses set exactly ONE
// tuition amount - for Government Institutions. For every self-financing seat, government quota
// and management/NRI alike, they say the tuition is "as prescribed by the COMMITTEE ON FIXATION
// OF FEES IN RESPECT OF SELF-FINANCING PROFESSIONAL COLLEGES" and print no figure. The generator
// asserts that those clauses carry no rupee amount, so this file can never quietly acquire one.
//
// Sources, both downloaded 2026-08-25:
//   GQ  https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2026/07/22/gvt_12072026233050.pdf
//       Prospectus 2026-2027, Government Dental Colleges and Government seats in Self-Financing
//       Dental Colleges. As per G.O.(D) No.665, Health and Family Welfare (MCA-1), 05.06.2026.
//   MQ  https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2026/07/22/mngt_12072026232949.pdf
//       Prospectus 2026-2027, Management Quota including NRI of Self-Financing Dental Colleges.
//       As per G.O.(D) No.663, same department, 05.06.2026.

export interface TnMdsFeeRow {
  id: string;
  category: string;
  seatCategory: string;
  /** Annual tuition. Official only where tuitionIsOfficial is true. */
  tuitionPerYear: string;
  tuitionIsOfficial: boolean;
  securityDeposit: string;
  applicationFee: string;
  registrationFee: string;
  clause: string;
}

export const TN_MDS_FEE_SOURCE = {
  authority: 'Selection Committee, Directorate of Medical Education & Research, Government of Tamil Nadu',
  academicYear: '2026-2027',
  retrieved: '2026-08-25',
  site: 'www.tnmedicalselection.net',
  gq: {
    label: 'MDS Prospectus 2026-2027 (Government Quota)',
    order: 'G.O.(D) No.665, Health and Family Welfare (MCA-1) Department, dated 05.06.2026',
    url: 'https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2026/07/22/gvt_12072026233050.pdf',
  },
  mq: {
    label: 'MDS Prospectus 2026-2027 (Management Quota, incl. NRI)',
    order: 'G.O.(D) No.663, Health and Family Welfare (MCA-1) Department, dated 05.06.2026',
    url: 'https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2026/07/22/mngt_12072026232949.pdf',
  },
  committee: 'Committee on Fixation of Fees in respect of Self-Financing Professional Colleges',
} as const;

export const TN_MDS_FEES: TnMdsFeeRow[] = [
  {
    id: 'government',
    category: 'Government Dental Colleges',
    seatCategory: 'Merit (NEET MDS), state counselling',
    tuitionPerYear: '₹30,000',
    tuitionIsOfficial: true,
    securityDeposit: '₹30,000',
    applicationFee: '₹3,000',
    registrationFee: '₹1000',
    clause: 'GQ prospectus, clauses 35(a), 3(i) and 2',
  },
  {
    id: 'sf-government-quota',
    category: 'Self-Financing — Government Quota',
    seatCategory: 'Merit (NEET MDS), state counselling',
    tuitionPerYear: 'As prescribed by the Committee on Fixation of Fees',
    tuitionIsOfficial: false,
    securityDeposit: '₹1,00,000',
    applicationFee: '₹3,000',
    registrationFee: '₹1000',
    clause: 'GQ prospectus, clauses 35(b)(i), 3(ii) and 2',
  },
  {
    id: 'sf-management-quota',
    category: 'Self-Financing — Management Quota, incl. NRI',
    seatCategory: 'Management and NRI',
    tuitionPerYear: 'As prescribed by the Committee on Fixation of Fees',
    tuitionIsOfficial: false,
    securityDeposit: '₹2,00,000',
    applicationFee: '₹5,000',
    registrationFee: '₹1000',
    clause: 'MQ prospectus, clauses 35(a)(i), 3 and 2',
  }
];
