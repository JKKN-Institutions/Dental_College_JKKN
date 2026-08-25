// GENERATED FILE - do not hand-edit. Regenerate from the official PDF.
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, sanctioned BDS intake for the academic
// year 2025-2026.
// https://www.tnmgrmu.ac.in/wp-content/uploads/2026/06/BDS-SeatMatrix-2025-2026.pdf
// Downloaded and parsed 2026-08-25.
//
// SCOPE, AND THE PAGE MUST SAY IT: this matrix covers only the colleges AFFILIATED to TN Dr
// M.G.R. Medical University. Deemed-to-be universities - Saveetha, SRM, Sri Ramachandra,
// Meenakshi Ammal, Sathyabama, Bharath, VMRF and similar - award their own degrees and are not
// in it. A figure presented as "every dental college in Tamil Nadu" without that caveat is
// wrong, and the pages that currently outrank us all publish exactly that kind of bare total.

export interface TnBdsCollege {
  code: string;
  name: string;
  location: string;
  kind: 'Government' | 'Self-financing';
  minority: boolean;
  intake: number;
}

export const TN_BDS_SOURCE = {
  authority: 'The Tamil Nadu Dr. M.G.R. Medical University',
  document: 'Sanctioned BDS intake for the academic year 2025-2026',
  url: 'https://www.tnmgrmu.ac.in/wp-content/uploads/2026/06/BDS-SeatMatrix-2025-2026.pdf',
  academicYear: '2025-2026',
  retrieved: '2026-08-25',
  scopeNote:
    'Covers colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University. ' +
    'Deemed-to-be universities award their own degrees and are not included in this matrix.',
} as const;

export const TN_BDS_COLLEGES: TnBdsCollege[] = [
  { code: '020', name: 'Tamil Nadu Government Dental College', location: 'Chennai', kind: 'Government', minority: false, intake: 100 },
  { code: '949', name: 'Government Dental College & Hospital', location: 'Cuddalore', kind: 'Government', minority: false, intake: 100 },
  { code: '988', name: 'Government Dental College', location: 'Pudukottai', kind: 'Government', minority: false, intake: 50 },
  { code: '022', name: 'J.K.K. Nataraja Dental College & Hospital (JKKN)', location: 'Komarapalayam, Namakkal', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '023', name: 'Ragas Dental College & Hospital', location: 'Uthandi, Chennai', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '026', name: 'Rajas Dental College & Hospital', location: 'Kavalkinaru, Tirunelveli', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '196', name: 'K.S.R. Institute of Dental Science & Research', location: 'Tiruchengode, Namakkal', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '197', name: 'Adhiparasakthi Dental College and Hospital', location: 'Melmaruvathur', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '203', name: 'Sree Mookambika Institute of Dental Sciences', location: 'Kulasekharam, Kanyakumari', kind: 'Self-financing', minority: true, intake: 50 },
  { code: '204', name: 'Sri Ramakrishna Dental College & Hospital', location: 'Coimbatore', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '265', name: 'Vivekanandha Dental College for Women', location: 'Elayampalayam, Tiruchengode', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '266', name: 'C.S.I. College of Dental Sciences and Research', location: 'Madurai', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '267', name: 'Chettinad Dental College and Research Institute', location: 'Padur, Kancheepuram', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '268', name: 'Madha Dental College and Hospital', location: 'Kundrathur, Chennai', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '269', name: 'Best Dental Science College', location: 'Madurai', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '270', name: 'Sri Venkateswara Dental College and Hospital', location: 'Thalambur, Chennai', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '271', name: 'Priyadarshini Dental College and Hospital', location: 'Pandur, Thiruvallur', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '272', name: 'Karpaga Vinayaga Institute of Dental Sciences', location: 'Chinna Kolambakkam, Kancheepuram', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '273', name: 'Tagore Dental College and Hospital', location: 'Vandalur, Chennai', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '274', name: 'R.V.S. Dental College and Hospital', location: 'Sulur, Coimbatore', kind: 'Self-financing', minority: false, intake: 100 },
  { code: '501', name: 'Asan Memorial Dental College & Hospital', location: 'Chengalpattu', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '943', name: 'Dhanalakshmi Srinivasan Dental College', location: 'Siruvachur, Perambalur', kind: 'Self-financing', minority: true, intake: 100 },
  { code: '967', name: 'Nandha Dental College & Hospital', location: 'Erode', kind: 'Self-financing', minority: false, intake: 100 }
];

export const TN_BDS_TOTALS = {
  colleges: 23,
  governmentColleges: 3,
  selfFinancingColleges: 20,
  minorityColleges: 8,
  seats: 2200,
  governmentSeats: 250,
  selfFinancingSeats: 1950,
} as const;

export const JKKN_BDS_CODE = '022';
