/**
 * NIRF India Rankings 2025: Dental - the Tamil Nadu institutions inside the national top 40.
 * Read from nirfindia.org on 2026-09-22 (rank, score, city exactly as published). NIRF ranks only
 * the institutions that take part, so this is NOT a list of Tamil Nadu's dental colleges and it
 * is NOT a ranking of BDS seats. JKKN is not in the 2025 top 40. The 2026 dental ranking was not
 * published on the retrieval date (the ranking page returned "Website Under Maintenance").
 */
export const NIRF_2025_DENTAL_SOURCE = {
  name: 'NIRF India Rankings 2025: Dental',
  publisher: 'Ministry of Education, Government of India',
  url: 'https://www.nirfindia.org/Rankings/2025/DentalRanking.html',
  retrieved: '2026-09-22',
  topN: 40,
} as const;

export interface NirfDentalRow {
  rank: number;
  name: string;
  city: string;
  score: number;
}

export const NIRF_2025_DENTAL_TN: readonly NirfDentalRow[] = [
  { rank: 2, name: 'Saveetha Institute of Medical and Technical Sciences', city: 'Chennai', score: 85.31 },
  { rank: 8, name: 'SRM Dental College', city: 'Chennai', score: 68.19 },
  { rank: 13, name: 'Sri Ramachandra Institute of Higher Education and Research', city: 'Chennai', score: 61.28 },
  { rank: 14, name: 'Amrita Vishwa Vidyapeetham', city: 'Coimbatore', score: 60.83 },
  { rank: 16, name: 'Meenakshi Academy of Higher Education and Research', city: 'Chennai', score: 59.92 },
  { rank: 27, name: 'Sree Balaji Dental College & Hospital', city: 'Chennai', score: 56.32 },
  { rank: 30, name: 'Dr. M. G. R. Educational and Research Institute', city: 'Chennai', score: 55.08 },
  { rank: 32, name: 'Chettinad Dental College and Research Institute', city: 'Kelambakkam', score: 54.90 },
  { rank: 39, name: 'SRM Kattankulathur Dental College', city: 'Chennai', score: 52.88 },
];
