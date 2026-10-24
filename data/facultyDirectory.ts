/**
 * Department-wise teaching staff for the /faculty/ pages.
 * Source: "TEACHING STAFF NAME LIST - 2026 NEW.xlsx" (MDS + Basic Science sheets, September 2026).
 * Only name, designation and qualification are published. Rows keep the order of the sheet
 * (Head of Department first).
 */

export type FacultyGroupId = 'mds' | 'bds';

export interface FacultyMember {
  name: string;
  designation: string;
  /** One entry per degree, e.g. "M.D.S." (year of passing is not published). */
  qualification: string[];
}

export interface FacultyDepartment {
  slug: string;
  /** Short badge shown on the hub card. */
  code: string;
  name: string;
  group: FacultyGroupId;
  members: FacultyMember[];
}

export const facultyGroups: { id: FacultyGroupId; label: string; description: string }[] = [
  {
    id: 'mds',
    label: 'MDS Departments',
    description: 'Dental specialities of the MDS programme.',
  },
  {
    id: 'bds',
    label: 'BDS Departments',
    description: 'Basic science and medical departments of the BDS programme.',
  },
];

export const facultyDepartments: FacultyDepartment[] = [
  {
    slug: "prosthodontics",
    code: "PROS",
    name: "Prosthodontics Including Dental Materials",
    group: "mds",
    members: [
      { name: "Dr. Dhanasekar B", designation: "Principal, Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. C. Dhinesh Kumar", designation: "Professor", qualification: ["M.D.S."] },
      { name: "Dr. D. Saisadan", designation: "Professor", qualification: ["M.D.S."] },
      { name: "Dr. N.Jagadesaan", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. K.Praveena", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. S.Preethi Suganya", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. T.Umamageswari", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. S.Sundhar", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Kishore Kumar", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Gowthama Raaj", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "conservative-and-endodontics",
    code: "CONS",
    name: "Conservative Dentistry and Endodontics",
    group: "mds",
    members: [
      { name: "Dr. J.V. Karunakaran", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. N. Jayaprakash", designation: "Professor", qualification: ["M.D.S."] },
      { name: "Dr. N. Ragavendran", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. Chris Susan Abraham", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. S.Mary Vinola Jenifer", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. R.P.Chandrika", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. M.M.Prem Kumar", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. T.Ganeshamoorthy", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. N.Karthikeyan", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. J.M.Harshavardhan", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Nandhini.P", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Vijayakumar. J", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Jothi Lakshmi R S", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Shruthi V", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Ravikisshore K N", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "oral-pathology",
    code: "OPATH",
    name: "Oral Pathology & Dental Anatomy",
    group: "mds",
    members: [
      { name: "Dr. T.Maheswaran", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. S. Maheshwari", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. J.Swathiraman", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "oral-surgery",
    code: "OSURG",
    name: "Oral Surgery",
    group: "mds",
    members: [
      { name: "Dr. S.Vinod Thangaswamy", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. J.Vijay Thiyagarajan", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. Hariprasath S", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. M. Venkatesh Praveen", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "periodontics",
    code: "PERIO",
    name: "Periodontics",
    group: "mds",
    members: [
      { name: "Dr. P.L.Ravishankar", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. S. Santhosh", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. R.Dhivya", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. D.Syed", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. M. Nivethitha", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. J.Jasmine Angel", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. A.S.Surya", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "paedodontics",
    code: "PEDO",
    name: "Paedodontics",
    group: "mds",
    members: [
      { name: "Dr. Yogesh Kumar T D", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. K.Saravanakumar", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. R.Rajkumar", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. T.Gayathrikumary", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. B.Kesavaraj", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. Reshaf Ismael", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "orthodontics",
    code: "ORTHO",
    name: "Orthodontics",
    group: "mds",
    members: [
      { name: "Dr. R.Ramya", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. V.Vignesh Kumar", designation: "Professor", qualification: ["M.D.S."] },
      { name: "Dr. V. Kumaran", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. S.M.Vignesh Prasad", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. K.Aishwarya", designation: "Reader", qualification: ["M.D.S."] },
      { name: "Dr. K.Thankamani Ammal", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. N.Kalaranjeni", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. E.R. Deepak", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. K.S.Sumithra Devi", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. M.Hariprasaath", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "oral-medicine-and-radiology",
    code: "OMR",
    name: "Oral Medicine and Radiology",
    group: "mds",
    members: [
      { name: "Dr. P.K.Meenapriya", designation: "Professor & HoD", qualification: ["M.D.S."] },
      { name: "Dr. G. Pranavadhyani", designation: "Professor", qualification: ["M.D.S."] },
      { name: "Dr. S.Gokulapriya", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. A.V.S.Ezhilarasi", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. K.N.Keerthana", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
      { name: "Dr. K.Sharmista Sree", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "public-health-dentistry",
    code: "PHD",
    name: "Public Health Dentistry",
    group: "mds",
    members: [
      { name: "Dr. C.Selvakumar", designation: "Reader & HoD", qualification: ["M.D.S."] },
      { name: "Dr. Yoka. T", designation: "Sr. Lecturer", qualification: ["M.D.S."] },
    ],
  },
  {
    slug: "human-anatomy",
    code: "ANAT",
    name: "Human Anatomy",
    group: "bds",
    members: [
      { name: "Dr. M. Nazer", designation: "Professor & HoD", qualification: ["B.Sc", "M.Sc", "Ph.D"] },
      { name: "Dr. B.Suresh", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. S.P.Thahin Zameer", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. G.Rajkumar", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. R.Sanchay", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "general-physiology",
    code: "PHYS",
    name: "General Physiology",
    group: "bds",
    members: [
      { name: "Dr. A. Rajeshkumar", designation: "Reader", qualification: ["B.Sc", "M.Sc", "Ph.D"] },
      { name: "Dr. B.Praticaa", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. C.Rajpraveen", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "bio-chemistry",
    code: "BIOC",
    name: "Bio-Chemistry",
    group: "bds",
    members: [
      { name: "Mr. R. Vadivelu", designation: "Reader", qualification: ["B.Sc", "M.Sc", "M Phill"] },
      { name: "Dr. S. Dhanabalan", designation: "Reader", qualification: ["B.Sc", "M.Sc", "Ph.D"] },
      { name: "Dr. S.B.Banusri", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "pharmacology",
    code: "PHAR",
    name: "Pharmacology",
    group: "bds",
    members: [
      { name: "Dr. P.Vijayalakshmi", designation: "Professor & HoD", qualification: ["B.Sc", "M.Sc", "Ph.D"] },
      { name: "Mr. Rozario Cyril", designation: "Lecturer", qualification: ["B.Sc", "M.Sc"] },
      { name: "Dr. S. Karthika", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. M.Arun Vishwaa", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "general-pathology",
    code: "PATH",
    name: "General Pathology",
    group: "bds",
    members: [
      { name: "Dr. C. Premalatha", designation: "Professor", qualification: ["MBBS", "MD"] },
      { name: "Dr. S. Renuga", designation: "Reader", qualification: ["MBBS", "MD"] },
      { name: "Dr. K.Sheela", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "microbiology",
    code: "MICRO",
    name: "Microbiology",
    group: "bds",
    members: [
      { name: "Dr. Ahluwalia Jyotica", designation: "Reader", qualification: ["MBBS", "MD"] },
      { name: "Mr. s. M. Karkuzhali", designation: "Lecturer", qualification: ["B.Sc", "M.Sc"] },
      { name: "Mr. s. T.Mullai", designation: "Lecturer", qualification: ["B.Sc", "M.Sc"] },
    ],
  },
  {
    slug: "general-medicine",
    code: "MED",
    name: "General Medicine",
    group: "bds",
    members: [
      { name: "Dr. M.Natarajan", designation: "Professor", qualification: ["MBBS", "MD"] },
      { name: "Dr. T.Ashwin", designation: "Lecturer", qualification: ["MBBS", "MD"] },
      { name: "Dr. E.Yukesh", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. S.Shalini", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "general-surgery",
    code: "SURG",
    name: "General Surgery",
    group: "bds",
    members: [
      { name: "Dr. R. Muthuswamy", designation: "Professor & HoD", qualification: ["MBBS", "MS"] },
      { name: "Dr. B. Venkatesh Babu", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. V.Varun Guhan", designation: "Lecturer", qualification: ["MBBS"] },
      { name: "Dr. R.Gokul", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
  {
    slug: "anaesthesia",
    code: "ANAES",
    name: "Anaesthesia",
    group: "bds",
    members: [
      { name: "Dr. D.Ram Kumar", designation: "Reader", qualification: ["MBBS", "MD"] },
      { name: "Dr. I.Edward Naveen", designation: "Lecturer", qualification: ["MBBS"] },
    ],
  },
];

export function getFacultyDepartment(slug: string): FacultyDepartment | undefined {
  return facultyDepartments.find((d) => d.slug === slug);
}
