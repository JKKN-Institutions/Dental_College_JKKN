/**
 * SINGLE SOURCE OF TRUTH - College Facts
 *
 * This file contains all verified factual information about JKKN Dental College.
 * All numbers referenced across the website should come from this file to ensure
 * consistency and prevent AI search engines from finding contradictions.
 *
 * IMPORTANT: When updating any facts, verify with official documents:
 * - Seat counts → DCI permission letters
 * - Established years → Trust/College registration documents
 * - Hospital capacity → Infrastructure reports
 * - Contact info → Official letterhead
 */

import { TN_MDS_COLLEGES, JKKN_MDS_CODE } from './tnMdsSeatMatrix';

// The MDS per-speciality seats are DERIVED, not typed in. Until 2026-08-28 this file listed
// Periodontics 4, Orthodontics 4, Prosthodontics 4 and Conservative 3 - four of the five wrong
// against the university's own sanctioned intake - and the error was invisible because the five
// still summed to 18. /admissions/ renders this list as "Periodontics (4)", so a wrong number
// here reaches a live page. A-13 corrected the speciality pages on 2026-08-24 and missed this
// file; deriving removes the class of mistake instead of correcting one instance of it.
const _jkknMdsRow = TN_MDS_COLLEGES.find((c) => c.code === JKKN_MDS_CODE);
if (!_jkknMdsRow) {
  // Fail the build loudly. A silent fallback would put invented seat counts on a live page.
  throw new Error(
    'collegeFacts: JKKN row (code ' + JKKN_MDS_CODE + ') not found in tnMdsSeatMatrix - regenerate the matrix'
  );
}
const JKKN_MDS = _jkknMdsRow.seats;

export const collegeFacts = {
  // === ESTABLISHMENT & HISTORY ===
  foundedYear: 1987,
  collegeAge: new Date().getFullYear() - 1987, // Auto-calculates current age
  trustName: "J.K.K. Nattraja Educational Institutions",
  trustFoundedYear: 1952,
  trustAge: new Date().getFullYear() - 1952, // Auto-calculates trust age

  // === ACADEMIC PROGRAMS ===
  // IMPORTANT: Verify these numbers with current DCI permission letters
  bdsSeatCount: 100,
  mdsSeatCount: _jkknMdsRow.total, // from the university matrix, not typed in

  // MDS Specializations - names are ours, SEATS come from the TN Dr M.G.R. sanctioned intake
  mdsSpecialisations: 5,
  mdsSpecialisationsList: [
    { name: "Periodontics", seats: JKKN_MDS.periodontology },
    { name: "Orthodontics and Dentofacial Orthopedics", seats: JKKN_MDS.orthodontics },
    { name: "Prosthodontics Crown and Bridge", seats: JKKN_MDS.prosthodontics },
    { name: "Conservative Dentistry and Endodontics", seats: JKKN_MDS.conservative },
    { name: "Oral Medicine and Radiology", seats: JKKN_MDS.oralMedicine }
  ],

  // Total departments (academic + clinical)
  totalDepartments: 9,
  departmentsList: [
    "Periodontics",
    "Orthodontics and Dentofacial Orthopedics",
    "Prosthodontics Crown and Bridge",
    "Conservative Dentistry and Endodontics",
    "Oral Medicine and Radiology",
    "Oral and Maxillofacial Surgery",
    "Pediatric and Preventive Dentistry",
    "Oral Pathology and Microbiology",
    "Public Health Dentistry"
  ],

  // === INFRASTRUCTURE ===
  dentalChairs: 200, // Number of dental chairs in hospital
  hospitalBeds: 100, // Note: Beds and chairs are different!
  dailyPatients: 500, // Average daily patient footfall

  // === PLACEMENTS ===
  placementRate: 92, // Percentage placement assistance
  alumniCount: 3000, // Total alumni worldwide
  publications: 50, // Research publications
  partnerships: 25, // Industry & academic partnerships

  // === ADMISSIONS ===
  currentAdmissionYear: '2026-27',
  admissionProcess: 'NEET-Based',

  // === AFFILIATIONS ===
  affiliatedUniversity: "The Tamil Nadu Dr. M.G.R. Medical University, Chennai",
  recognizedBy: "Dental Council of India (DCI)",
  approvedBy: "Government of Tamil Nadu",

  // === CONTACT INFORMATION ===
  phone: '+91 93458 55001',
  email: 'dental@jkkn.ac.in',
  website: 'https://dental.jkkn.ac.in',
  address: {
    full: 'Natarajapuram, NH-544 (Salem To Coimbatore National Highway), Komarapalayam, Namakkal District, Tamil Nadu - 638183',
    shortAddress: 'Komarapalayam, Namakkal District',
    state: 'Tamil Nadu',
    pincode: '638183',
    highway: 'NH-544 (Salem To Coimbatore National Highway)'
  },

  // === ACCREDITATION ===
  naacGrade: 'A', // Update as per latest NAAC certificate
  naacScore: 0, // Update with actual NAAC score (e.g., 3.01)
  naacYear: 0, // Year of NAAC accreditation

  // === CAMPUS ===
  campusArea: '', // e.g., "25 acres" - verify from documents
  hostelCapacity: {
    boys: 0, // Update with actual capacity
    girls: 0  // Update with actual capacity
  },

  // === ADDITIONAL INFO ===
  libraryBooks: 0, // Total library collection - verify
  facultyCount: 0, // Total faculty members - verify
  studentStrength: 0, // Current student enrollment - verify

  // === QUICK STATS FOR HOMEPAGE ===
  quickStats: {
    yearsOfExcellence: new Date().getFullYear() - 1987,
    totalSeats: 100 + 18, // BDS + MDS
    specializations: 5,
    departments: 9,
    dailyPatients: 500,
    placementRate: 92,
    alumniCount: 3000,
    publications: 50,
    partnerships: 25
  }
};

// Helper functions for formatted display
export const getCollegeAgeText = () => `${collegeFacts.collegeAge}+ Years`;
export const getTrustAgeText = () => `${collegeFacts.trustAge}+ Years`;
export const getMDSSeatsText = () => `${collegeFacts.mdsSeatCount} MDS Seats`;
export const getBDSSeatsText = () => `${collegeFacts.bdsSeatCount} BDS Seats`;
export const getSpecializationsText = () => `${collegeFacts.mdsSpecialisations} PG Specialisations`;
export const getHospitalCapacityText = () => `${collegeFacts.dentalChairs}+ Dental Chairs & ${collegeFacts.hospitalBeds}+ Hospital Beds`;
export const getDailyPatientsText = () => `${collegeFacts.dailyPatients}+ Daily Patients`;
export const getPlacementRateText = () => `${collegeFacts.placementRate}% Placement`;
export const getAlumniCountText = () => `${collegeFacts.alumniCount}+ Alumni`;
export const getFormattedPhone = () => collegeFacts.phone;
export const getFormattedAddress = () => collegeFacts.address.full;

// Export default for easy importing
export default collegeFacts;
