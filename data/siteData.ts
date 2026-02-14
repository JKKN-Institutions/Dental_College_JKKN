// TypeScript interfaces for navigation structure
export interface SubmenuItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}

// Helper function to convert string arrays to proper submenu format
function createSubmenuItems(parentHref: string, items: (string | SubmenuItem)[]): SubmenuItem[] {
  return items.map((item) => {
    if (typeof item === 'string') {
      const slug = item.toLowerCase().replace(/[()\/]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      return {
        label: item,
        href: `${parentHref}/${slug}`,
      };
    }
    return item;
  });
}

// Navigation menu configuration - Top Row
export const topMenuItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    submenu: [
      { label: "OUR INSTITUTIONS", href: "/about/our-institutions" },
      { label: "VISION AND MISSION", href: "/about/vision-and-mission" },
      { label: "ACT & STATUTES", href: "/pdf/acts-and-statutes.pdf"},
      { label: "INSTITUTIONAL DEVELOPMENT PLAN", href: "/about/institutional-development-plan" },
      {
        label: "APPROVALS AND AFFILIATION",
        href: "/about/approvals-and-affiliation",
        submenu: [
          { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS – BDS", href: "/pdf/university-provisional-affiliation-letters-bds.pdf" },
          { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS -MDS", href: "/pdf/university-provisional-affiliation-letters-mds.pdf" },
          { label: "DCI PERMISSION LETTER-BDS", href: "/pdf/DCI-Permission-letter-bds.pdf" },
          { label: "DCI PERMISSION LETTER-MDS", href: "/pdf/DCI-Permission-letter-mds.pdf" }
        ]
      },
      {
        label: "ACCREDITATION RANKING STATUS",
        href: "/accreditation-ranking-status",
        submenu: [
          { label: "NAAC", href: "/pdf/NAAC.pdf" }
        ]
      },
      { label: "ANNUAL REPORT", href: "/pdf/ANNUAL-REPORT.pdf" },
      { label: "ANNUAL ACCOUNT STATEMENT", href: "/pdf/ANNUAL-ACCOUNTS-STATEMENT.pdf" }
    ]
  },
  {
    label: "ADMINISTRATION",
    href: "/administration",
    submenu: [
      { label: "OUR TRUST", href: "/our-trust" },
      { label: "OUR MANAGEMENT", href: "our-management" },
      { label: "PRINCIPAL'S MESSAGE", href: "/administration/principals-message" },
      { label: "FINANCE OFFICER", href: "/administration/finance-officer" },
      { label: "GOVERNING BODY", href: "/administration/governing-body" },
      { label: "ACADEMIC COUNCIL", href: "/administration/academic-council" },
      { label: "INTERNAL COMPLIANTS COMMITTEE", href: "/pdf/Internal-Compliance-committee.pdf" },
      { label: "ACADEMIC LEADERSHIP", href: "/pdf/Academic-Leadership.pdf" }
    ]
  },
  {
    label: "ACADEMICS",
    href: "/academics",
    submenu: [
      {
        label: "DETAILS OF ACADEMIC PROGRAMS",
        href: "/academics/details-of-academic-programs",
        submenu: [
          { label: "BDS", href: "/academics/details-of-academic-programs/bds" },
          {
            label: "MDS",
            href: "/academics/details-of-academic-programs/mds",
            submenu: [
              { label: "PERIODONTICS", href: "/academics/details-of-academic-programs/mds/periodontics" },
              { label: "ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS", href: "/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics" },
              { label: "PROSTHODONTICS CROWN AND BRIDGE", href: "/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge" },
              { label: "CONSERVATIVE DENTISTRY AND ENDODONTICS", href: "/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics" },
              { label: "ORAL MEDICINE AND RADIOLOGY", href: "/academics/details-of-academic-programs/mds/oral-medicine" }
            ]
          }
        ]
      },
      {
        label: "ACADEMIC CALENDAR",
        href: "/academics/academic-calendar",
        submenu: [
          { label: "ACADEMIC CALENDAR 2023-2024 & 2024-2025", href: "/academic-calendar-2023-2024-2024-2025" },
          { label: "ACADEMIC CALENDAR 2022-2023", href: "/academic-calendar-2022-2023" },
          { label: "ACADEMIC CALENDAR 2021-2022", href: "/academic-calendar-2021-2022" },
          { label: "ACADEMIC CALENDAR 2020-2021", href: "/academic-calendar-2020-2021" },
          { label: "ACADEMIC CALENDAR 2019-2020", href: "/academic-calendar-2019-2020" },
          { label: "ACADEMIC CALENDAR 2018-2019", href: "/academic-calendar-2018-2019" }
        ]
      },
      {
        label: "STATUTES & PERTAINING TO ACADEMIC DEPARTMENTS",
        href: "/academics/statutes-pertaining-to-academic-departments",
        submenu: [
          { label: "BDS SYLLABUS", href: "/pdf/BDS-syllabus.pdf" },
          { label: "MDS - PROSTHODONTICS SYLLABUS", href: "/pdf/MDS-%20PROSTHODONTICS-syllabus.pdf" },
          { label: "MDS - PERIODONTICS SYLLABUS", href: "/pdf/MDS-PERIODONTICS-Syllabus.pdf" },
          { label: "MDS - ORTHODONTICS SYLLABUS", href: "/pdf/MDS-ORTHODONTICS-Syllabus.pdf" },
          { label: "MDS - ORAL MEDICINE AND RADIOLOGY SYLLABUS", href: "/pdf/MDS-ORAL-MEDICINE-AND-RADIOLOGY-SYLLABUS.pdf" },
          { label: "MDS - CONSERVATIVE DENTISTRY AND ENDODONTICS SYLLABUS", href: "/pdf/CONSERVATIVE-DENTISTRY-AND-ENDODONTICS-Syllabus.pdf" }
        ]
      },
      { label: "MENTOR-MENTEE PROGRAM", href: "/academics/mentor-mentee-program" },
      { label: "ACADEMIC ATTRIBUTES", href: "/pdf/Academic-Attributes.pdf" },
      { label: "LEARNING OUTCOMES", href: "/academics/learning-outcomes" },
      { label: "STUDENT-CENTRIC TEACHING METHODS", href: "/academics/student-centric-teaching-methods" },
      {
        label: "COURSES",
        href: "/academics/courses",
        submenu: [
          { label: "ADD-ON COURSES", href: "/academics/courses/add-on-courses" },
          { label: "VALUE ADDED COURSES", href: "/pdf/value-added-course.pdf" },
          { label: "CROSS-CUTTING-ISSUES", href: "/pdf/cross-cutting-issues.pdf" }
        ]
      },
      { label: "CAPABILITY ENHANCEMENT PROGRAM", href: "/academics/capability-enhancement-program" },
      { label: "CURRICULUM FEEDBACK", href: "/academics/curriculum-feedback" },
      {
        label: "FACULTY ACHIEVEMENTS",
        href: "/academics/faculty-achievements",
        submenu: [
          { label: "FDP ATTENDED", href: "/academics/faculty-achievements/fdp-attended" },
          { label: "WEBINAR/CONFERENCES ATTENDED", href: "/academics/faculty-achievements/webinar-conferences-attended" }
        ]
      }
    ]
  },
  {
    label: "ACCREDITATION",
    href: "/accreditation",
    submenu: [
      { label: "NAAC", href: "/accreditation/naac" },
      {
        label: "NIRF",
        href: "/accreditation/nirf",
        submenu: [
          {
            label: "NIRF-2024",
            href: "/accreditation/nirf/nirf-2024",
            submenu: [
              { label: "DENTAL", href: "/pdf/NIRF-2024-Dental.pdf" }
            ]
          },
          {
            label: "NIRF-2025",
            href: "/accreditation/nirf/nirf-2025",
            submenu: [
              { label: "OVERALL", href: "/pdf/NIRF-2025-OVERALL.pdf" },
              { label: "DENTAL", href: "/pdf/NIRF-2025-Dental.pdf" },
              { label: "INNOVATION", href: "/pdf/NIRF-2025-Innovation.pdf" },
              { label: "SDG INSTITUTION", href: "/pdf/NIRF-2025-SDG-INSTITUTIONS.pdf" }
            ]
          }
        ]
      }
    ]
  },
  {
    label: "ADMISSION & FEE",
    href: "/admission",
    submenu: [
      { label: "PROSPECTUS", href: "/pdf/Prospectus.pdf" },
      { label: "FEE REFUND POLICY", href: "/admission/fee-refund-policy" },
      { label: "SCHOLARSHIP POLICY FOR DENTAL COLLEGE", href: "/admission/scholarship-policy-for-dental-college" },
      { label: "ADMISSION CRITERIA", href: "/admission/admission-criteria" },
      { label: "EQUITABLE OPPORTUNITY FOR SEDG GROUP", href: "/admission/equitable-opportunity-for-sedg-group" }
    ]
  },
  {
    label: "RESEARCH",
    href: "/research",
    submenu: [
      { label: "RESEARCH & DEVELOPMENT (R&D) CELL", href: "/research/research-development-rd-cell" },
      { label: "INSTITUTION'S INNOVATION COUNCIL ( IIC )", href: "/research/institutions-innovation-council-iic" },
      { label: "RESEARCH PROPOSAL AND CONSENT FORMS", href: "/research/research-proposal-and-consent-forms" },
      { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/research/institutional-ethical-committee" },
      { label: "INCUBATION CENTER", href: "/research/incubation-center" },
      { label: "START-UP", href: "/research/start-up" },
      { label: "MOU (Memorandum of Understanding)", href: "/research/mou-memorandum-of-understanding" },
      { label: "COLLABORATION", href: "/research/collaboration" },
      { label: "PUBLICATION", href: "/pdf/Publication-TEMPLATE.pdf" }
    ]
  },
  { label: "IQAC", href: "/iqac" },
];

// Navigation menu configuration - Bottom Row
export const bottomMenuItems: NavItem[] = [
  {
    label: "COMMITTEE",
    href: "/committee",
    submenu: [
      { label: "STUDENT COUNCIL", href: "/committee/student-council" },
      { label: "INSTITUTION'S INNOVATION COUNCIL ( IIC )", href: "/research/institutions-innovation-council-iic" },
      { label: "INTERNAL COMPLIANTS COMMITTEE (ICC)", href: "/pdf/Internal-Compliance-committee.pdf" },
      { label: "STUDENT GRIEVANCE REDRESSAL COMMITTEE (SGRC)", href: "/pdf/Student-Grievance-residencial-committee.pdf" },
      { label: "PLACEMENT CELL / CDC", href: "/committee/placement-cell-cdc" },
      { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/institutional-ethical-committee" },
      { label: "ANTI-RAGGING COMMITTEE", href: "/committee/anti-ragging-committee" },
      { label: "SEDG CELL", href: "/committee/sedg-cell" },
      { label: "DISCIPLINARY COMMITTEE", href: "/committee/disciplinary-committee" },
      { label: "DENTAL EDUCATION DEPARTMENT", href: "/committee/dental-education-department" },
      { label: "MENTORING COMMITTEE", href: "/committee/mentoring-committee" },
      { label: "PHYSICAL INFRASTRUCTURE AND PURCHASE & MAINTENANCE COMMITTEE", href: "/committee/physical-infrastructure-and-purchase-maintenance-committee" },
      { label: "EXAMINATION COMMITTEE", href: "/committee/examination-committee" },
      { label: "HOSTEL ADVISORY & WELFARE COMMITTEE", href: "/committee/hostel-advisory-&-welfare-committee" },
      { label: "LIBRARY AND LEARNING RESOURCES COMMITTEE", href: "/committee/library-and-learning-resources-committee" },
      { label: "FINANCE COMMITTEE", href: "/committee/finance-committee" },
      { label: "STUDENT WELFARE COMMITTEE", href: "/committee/student-welfare-committee" },
      { label: "PHYSICAL EDUCATION & EXTRA CURRUCULAR ACTIVITIES COMMITTEE", href: "/committee/physical-education-&-extra-currucular-activities-committee" },
      { label: "PATIENT WELFARE COMMITTEE", href: "/committee/patient-welfare-committee" },
      { label: "NCC/NSS", href: "/committee/ncc/nss" },
      { label: "INTERNATIONAL STUDENT CELL COMMITTEE", href: "/committee/international-student-cell-committee" }
    ]
  },
  { label: "ALUMNI", href: "/alumni" },
  {
    label: "MANDATORY DISCLOSURES",
    href: "/mandatory-disclosures",
    submenu: [
      { label: "GUIDELINES ON PUBLIC DISCLOSURE BY HEIS", href: "/pdf/Guidelines-on-Public-Disclosure-by-HEIs-MD.pdf" },
      { label: "LETTER OF UNDERTAKING", href: "/pdf/Letter-of-Undertaking-MD.pdf" }
    ]
  },
  {
    label: "FACILITIES",
    href: "/facilities",
    submenu: [
      { label: "ACCESSIBILITY & INCLUSION AT JKKNDCH", href: "/facilities/accessibility-&-inclusion-at-jkkndch" },
      { label: "LIBRARY", href: "/facilities/library" },
      { label: "OUTREACH REQUEST", href: "https://outreach.dental.jkkn.ac.in/" },
      { label: "LABS", href: "/facilities/labs" },
      { label: "FOOD COURT", href: "/facilities/food-court" },
      {
        label: "HOSTEL",
        href: "/facilities/hostel",
        submenu: [
          { label: "Boys Hostel", href: "/facilities/hostel/boys-hostel" },
          { label: "Girls Hostel", href: "/facilities/hostel/girls-hostel" }
        ]
      },
      { label: "TRANSPORT", href: "/facilities/transport" },
      { label: "SEMINAR HALL", href: "/facilities/seminar-hall" },
      { label: "SPORTS CLUB", href: "/facilities/sports-club" },
      { label: "AUDITORIUM", href: "/facilities/auditorium" },
      { label: "BANK & POST OFFICE", href: "/facilities/bank-&-post-office" },
      { label: "DIGITAL CLASS ROOM", href: "/facilities/digital-class-room" },
      { label: "HEALTH FACILITIES", href: "/facilities/health-facilities" },
      { label: "WI-FI CAMPUS", href: "/facilities/wi-fi-campus" },
      { label: "AMBULANCE SERVICES", href: "/facilities/ambulance-services" },
      { label: "PRIVACY POLICY", href: "/facilities/privacy-policy" },
      { label: "BARRIER FREE ENVIRONMENT", href: "/pdf/Barrier-free-environment.pdf" }
    ]
  },
  {
    label: "INFORMATION CENTER",
    href: "/information-center",
    submenu: [
      { label: "RIGHT TO INFORMATION (RTI)", href: "/information-center/right-to-information-rti" },
      { label: "CAREERS", href: "/information-center/careers" }
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "OTHERS",
    href: "/others",
    submenu: [
      { label: "PATIENT SAFETY MANUAL", href: "/pdf/PATIENT-SAFETY-MANUAL.pdf" },
      { label: "OUTREACH", href: "https://outreach.dental.jkkn.ac.in/" }
    ]
  },
  { label: "CONTACT", href: "/contact" },
];

// Combined menu for mobile
export const navigationMenu: NavItem[] = [...topMenuItems, ...bottomMenuItems];

// Note: The Header component has special handling for certain menu labels:
// - 'OTHERS', 'COMMITTEE', 'RESEARCH' menus will align to the right
// - Nested submenus for these items will open to the left instead of right
//
// You can modify these behaviors in the Header.tsx component if needed.
