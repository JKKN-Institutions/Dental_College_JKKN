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

export const collegeFacts = {
  // === ESTABLISHMENT & HISTORY ===
  foundedYear: 1987,
  collegeAge: new Date().getFullYear() - 1987, // Auto-calculates current age
  trustName: "J.K.K. Nattraja Educational Institutions",
  trustFoundedYear: 1969,
  trustAge: new Date().getFullYear() - 1969, // Auto-calculates trust age

  // === ACADEMIC PROGRAMS ===
  // IMPORTANT: Verify these numbers with current DCI permission letters
  bdsSeatCount: 100,
  mdsSeatCount: 18, // Total MDS seats across all specializations

  // MDS Specializations (as per DCI approval)
  mdsSpecialisations: 5,
  mdsSpecialisationsList: [
    { name: "Periodontics", seats: 4 },
    { name: "Orthodontics and Dentofacial Orthopedics", seats: 4 },
    { name: "Prosthodontics Crown and Bridge", seats: 4 },
    { name: "Conservative Dentistry and Endodontics", seats: 3 },
    { name: "Oral Medicine and Radiology", seats: 3 }
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
    departments: 9
  }
};

// Helper functions for formatted display
export const getCollegeAgeText = () => `${collegeFacts.collegeAge}+ Years`;
export const getTrustAgeText = () => `${collegeFacts.trustAge}+ Years`;
export const getMDSSeatsText = () => `${collegeFacts.mdsSeatCount} MDS Seats`;
export const getBDSSeatsText = () => `${collegeFacts.bdsSeatCount} BDS Seats`;
export const getSpecializationsText = () => `${collegeFacts.mdsSpecialisations} PG Specialisations`;
export const getHospitalCapacityText = () => `${collegeFacts.dentalChairs}+ Dental Chairs & ${collegeFacts.hospitalBeds}+ Hospital Beds`;
export const getFormattedPhone = () => collegeFacts.phone;
export const getFormattedAddress = () => collegeFacts.address.full;

// Export default for easy importing
export default collegeFacts;
