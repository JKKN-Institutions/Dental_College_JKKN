// GENERATED FILE - do not hand-edit. Regenerate from the official PDF.
//
// Source: The Tamil Nadu Dr. M.G.R. Medical University, "Sanctioned intake for the academic
// year 2025-2026 in (Government and Self Financing) dental colleges in MDS degree course".
// https://www.tnmgrmu.ac.in/wp-content/uploads/2026/06/MDS-SeatMatrix-2025-2026.pdf
// Downloaded and parsed 2026-08-22. Every one of the 19 rows' nine speciality figures was
// checked against the printed row total: 19 of 19 agree.
//
// SCOPE, AND IT MATTERS: this matrix covers only the colleges AFFILIATED to TN Dr M.G.R.
// Medical University. Deemed-to-be universities - Saveetha, SRM, Sri Ramachandra, Meenakshi
// Ammal, Sathyabama, Bharath, VMRF and similar - award their own degrees and are not in the
// university's matrix. Any figure presented as "all of Tamil Nadu" must say so, or it is wrong.

export interface TnMdsCollege {
  code: string;
  name: string;
  location: string;
  kind: 'Government' | 'Self-financing';
  seats: {
    prosthodontics: number; periodontology: number; omfs: number;
    conservative: number; orthodontics: number; oralPathology: number;
    publicHealth: number; pedodontics: number; oralMedicine: number;
  };
  total: number;
}

export const TN_MDS_SOURCE = {
  authority: 'The Tamil Nadu Dr. M.G.R. Medical University',
  document: 'Sanctioned intake for the academic year 2025-2026 - MDS degree course',
  url: 'https://www.tnmgrmu.ac.in/wp-content/uploads/2026/06/MDS-SeatMatrix-2025-2026.pdf',
  academicYear: '2025-2026',
  retrieved: '2026-08-22',
  scopeNote:
    'Covers colleges affiliated to The Tamil Nadu Dr. M.G.R. Medical University. ' +
    'Deemed-to-be universities award their own degrees and are not included in this matrix.',
} as const;

export const TN_MDS_SPECIALITIES = [
  { key: 'prosthodontics', label: 'Prosthodontics and Crown & Bridge', seats: 63 },
  { key: 'periodontology', label: 'Periodontology', seats: 57 },
  { key: 'omfs', label: 'Oral & Maxillofacial Surgery', seats: 55 },
  { key: 'conservative', label: 'Conservative Dentistry and Endodontics', seats: 74 },
  { key: 'orthodontics', label: 'Orthodontics and Dentofacial Orthopaedics', seats: 72 },
  { key: 'oralPathology', label: 'Oral and Maxillofacial Pathology and Oral Microbiology', seats: 32 },
  { key: 'publicHealth', label: 'Public Health Dentistry', seats: 18 },
  { key: 'pedodontics', label: 'Pediatric & Preventive Dentistry', seats: 34 },
  { key: 'oralMedicine', label: 'Oral Medicine & Radiology', seats: 30 }
] as const;

export const TN_MDS_COLLEGES: TnMdsCollege[] = [
  { code: '20', name: 'Tamil Nadu Government Dental College and Hospital', location: 'Chennai', kind: 'Government', seats: { prosthodontics: 6, periodontology: 6, omfs: 6, conservative: 6, orthodontics: 6, oralPathology: 4, publicHealth: 3, pedodontics: 0, oralMedicine: 5 }, total: 42 },
  { code: '949', name: 'Government Dental College & Hospital', location: 'Cuddalore', kind: 'Government', seats: { prosthodontics: 4, periodontology: 6, omfs: 6, conservative: 4, orthodontics: 6, oralPathology: 3, publicHealth: 0, pedodontics: 5, oralMedicine: 3 }, total: 37 },
  { code: '22', name: 'J.K.K. Natarajah Dental College & Hospital (JKKN)', location: 'Komarapalayam', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 2, omfs: 0, conservative: 5, orthodontics: 5, oralPathology: 0, publicHealth: 0, pedodontics: 0, oralMedicine: 3 }, total: 18 },
  { code: '23', name: 'Ragas Dental College & Hospital', location: 'Uthandi, Chennai', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 3, conservative: 3, orthodontics: 3, oralPathology: 3, publicHealth: 3, pedodontics: 2, oralMedicine: 3 }, total: 26 },
  { code: '26', name: 'Rajas Dental College & Hospital', location: 'Kavalkinaru, Tirunelveli', kind: 'Self-financing', seats: { prosthodontics: 2, periodontology: 0, omfs: 2, conservative: 2, orthodontics: 0, oralPathology: 0, publicHealth: 0, pedodontics: 0, oralMedicine: 0 }, total: 6 },
  { code: '196', name: 'K.S.R. Institute of Dental Science & Research', location: 'Tiruchengode, Namakkal', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 0, conservative: 3, orthodontics: 3, oralPathology: 3, publicHealth: 0, pedodontics: 2, oralMedicine: 3 }, total: 20 },
  { code: '197', name: 'Adhiparasakthi Dental College and Hospital', location: '', kind: 'Self-financing', seats: { prosthodontics: 5, periodontology: 5, omfs: 5, conservative: 5, orthodontics: 5, oralPathology: 2, publicHealth: 0, pedodontics: 3, oralMedicine: 0 }, total: 30 },
  { code: '203', name: 'Sree Mookambika Institute of Dental Sciences', location: 'Kulasekharam, Kanyakumari', kind: 'Self-financing', seats: { prosthodontics: 2, periodontology: 2, omfs: 2, conservative: 2, orthodontics: 2, oralPathology: 3, publicHealth: 0, pedodontics: 0, oralMedicine: 3 }, total: 16 },
  { code: '204', name: 'Sri Ramakrishna Dental College & Hospital', location: 'Coimbatore', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 2, conservative: 3, orthodontics: 2, oralPathology: 0, publicHealth: 0, pedodontics: 0, oralMedicine: 0 }, total: 13 },
  { code: '265', name: 'Vivekanandha Dental College for Women', location: 'Elayampalayam, Tiruchengode', kind: 'Self-financing', seats: { prosthodontics: 2, periodontology: 3, omfs: 3, conservative: 6, orthodontics: 5, oralPathology: 3, publicHealth: 2, pedodontics: 3, oralMedicine: 2 }, total: 29 },
  { code: '266', name: 'C.S.I. College of Dental Sciences and Research', location: 'Madurai', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 3, conservative: 3, orthodontics: 3, oralPathology: 3, publicHealth: 0, pedodontics: 0, oralMedicine: 0 }, total: 18 },
  { code: '267', name: 'Chettinad Dental College and Research Institute', location: 'Padur, Kancheepuram', kind: 'Self-financing', seats: { prosthodontics: 5, periodontology: 3, omfs: 5, conservative: 6, orthodontics: 6, oralPathology: 2, publicHealth: 3, pedodontics: 6, oralMedicine: 2 }, total: 38 },
  { code: '268', name: 'Madha Dental College and Hospital', location: 'Kundrathur, Chennai', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 3, conservative: 3, orthodontics: 3, oralPathology: 2, publicHealth: 2, pedodontics: 3, oralMedicine: 2 }, total: 24 },
  { code: '269', name: 'Best Dental Science College', location: 'Madurai', kind: 'Self-financing', seats: { prosthodontics: 0, periodontology: 2, omfs: 2, conservative: 2, orthodontics: 2, oralPathology: 2, publicHealth: 3, pedodontics: 0, oralMedicine: 2 }, total: 15 },
  { code: '270', name: 'Sri Venkateswara Dental College and Hospital', location: 'Thalambur, Chennai', kind: 'Self-financing', seats: { prosthodontics: 5, periodontology: 5, omfs: 0, conservative: 6, orthodontics: 6, oralPathology: 0, publicHealth: 0, pedodontics: 3, oralMedicine: 0 }, total: 25 },
  { code: '271', name: 'Priyadarshini Dental College & Hospital', location: 'Pandur, Thiruvallur', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 3, conservative: 3, orthodontics: 3, oralPathology: 0, publicHealth: 0, pedodontics: 3, oralMedicine: 0 }, total: 18 },
  { code: '272', name: 'Karpaga Vinayaga Institute of Dental Sciences', location: 'Chinna Kolambakkam, Kancheepuram', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 2, omfs: 3, conservative: 3, orthodontics: 3, oralPathology: 2, publicHealth: 2, pedodontics: 2, oralMedicine: 2 }, total: 22 },
  { code: '273', name: 'Tagore Dental College and Hospital', location: 'Vandalur, Chennai', kind: 'Self-financing', seats: { prosthodontics: 5, periodontology: 0, omfs: 5, conservative: 6, orthodontics: 6, oralPathology: 0, publicHealth: 0, pedodontics: 0, oralMedicine: 0 }, total: 22 },
  { code: '274', name: 'R.V.S. Dental College and Hospital', location: 'Sulur, Coimbatore', kind: 'Self-financing', seats: { prosthodontics: 3, periodontology: 3, omfs: 2, conservative: 3, orthodontics: 3, oralPathology: 0, publicHealth: 0, pedodontics: 2, oralMedicine: 0 }, total: 16 }
];

export const TN_MDS_TOTALS = {
  colleges: 19,
  governmentColleges: 2,
  selfFinancingColleges: 17,
  seats: 435,
  governmentSeats: 79,
  selfFinancingSeats: 356,
  specialities: 9,
} as const;

export const JKKN_MDS_CODE = '22';
