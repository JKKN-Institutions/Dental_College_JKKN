export const siteContent = {
  // Header Navigation
  navigation: {
    logo: "JKKN",
    topMenuItems: [
      { label: "HOME", href: "/" },
      {
        label: "ABOUT",
        href: "/about",
        submenu: [
          { label: "OUR INSTITUTIONS", href: "/about/our-institutions" },
          { label: "VISION AND MISSION", href: "/about/vision-and-mission" },
          { label: "ACT & STATUTES", href: "/about/act-statutes" },
          { label: "INSTITUTIONAL DEVELOPMENT PLAN", href: "/about/institutional-development-plan" },
          {
            label: "APPROVALS AND AFFILIATION",
            href: "/about/approvals-and-affiliation",
            submenu: [
              { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS – BDS", href: "/about/approvals-and-affiliation/affiliation-bds" },
              { label: "UNIVERSITY PROVISIONAL AFFILIATION LETTERS -MDS", href: "/about/approvals-and-affiliation/affiliation-mds" },
              { label: "DCI PERMISSION LETTER-BDS", href: "/about/approvals-and-affiliation/dci-bds" },
              { label: "DCI PERMISSION LETTER-MDS", href: "/about/approvals-and-affiliation/dci-mds" }
            ]
          },
          {
            label: "ACCREDITATION RANKING STATUS",
            href: "/about/accreditation-ranking-status",
            submenu: [
              { label: "NAAC", href: "/about/accreditation-ranking-status/naac" }
            ]
          },
          { label: "ANNUAL REPORT", href: "/about/annual-report" },
          { label: "ANNUAL ACCOUNT STATEMENT", href: "/about/annual-account-statement" }
        ]
      },
      {
        label: "ADMINISTRATION",
        href: "/administration",
        submenu: [
          { label: "OUR TRUST", href: "/administration/our-trust" },
          { label: "OUR MANAGEMENT", href: "/administration/our-management" },
          { label: "PRINCIPAL'S MESSAGE", href: "/administration/principals-message" },
          { label: "FINANCE OFFICER", href: "/administration/finance-officer" },
          { label: "GOVERNING BODY", href: "/administration/governing-body" },
          { label: "ACADEMIC COUNCIL", href: "/administration/academic-council" },
          { label: "INTERNAL COMPLIANTS COMMITTEE", href: "/administration/internal-compliants-committee" },
          { label: "ACADEMIC LEADERSHIP", href: "/administration/academic-leadership" }
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
                  "PERIODONTICS",
                  "ORTHODONTICS AND DENTOFACIAL ORTHOPEDICS",
                  "PROSTHODONTICS CROWN AND BRIDGE",
                  "CONSERVATIVE DENTISTRY AND ENDODONTICS",
                  "ORAL MEDICINE"
                ]
              }
            ]
          },
          {
            label: "ACADEMIC CALENDAR",
            href: "/academics/academic-calendar",
            submenu: [
              "ACADEMIC CALENDAR 2023-2024 & 2024-2025",
              "ACADEMIC CALENDAR 2022-2023",
              "ACADEMIC CALENDAR 2021-2022",
              "ACADEMIC CALENDAR 2020-2021",
              "ACADEMIC CALENDAR 2019-2020",
              "ACADEMIC CALENDAR 2018-2019"
            ]
          },
          { label: "STATUTES & PERTAINING TO ACADEMIC DEPARTMENTS", href: "/academics/statutes-pertaining-to-academic-departments" },
          {
            label: "DEPARTMENTS",
            href: "/academics/departments",
            submenu: [
              "PEDIATRIC AND PREVENTIVE DENTISTRY",
              "ORAL MEDICINE DIAGNOSIS AND RADIOLOGY",
              "ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS",
              "PERIODONTICS AND IMPLANT DENTISTRY",
              "PROSTHODONTICS CROWN AND BRIDGE",
              "CONSERVATIVE DENTISTRY AND ENDODONTICS",
              "ORAL AND MAXILLOFACIAL SURGERY",
              "PUBLIC HEALTH DENTISTRY",
              "ORAL PATHOLOGY AND MICROBIOLOGY"
            ]
          },
          { label: "MENTOR-MENTEE PROGRAM", href: "/academics/mentor-mentee-program" },
          { label: "ACADEMIC ATTRIBUTES", href: "/academics/academic-attributes" },
          { label: "LEARNING OUTCOMES", href: "/academics/learning-outcomes" },
          { label: "STUDENT-CENTRIC TEACHING METHODS", href: "/academics/student-centric-teaching-methods" },
          {
            label: "COURSES",
            href: "/academics/courses",
            submenu: [
              { label: "ADD-ON COURSES", href: "/academics/courses/add-on-courses" },
              { label: "VALUE ADDED COURSES", href: "/academics/courses/value-added-courses" },
              { label: "CROSS-CUTTING-ISSUES", href: "/academics/courses/cross-cutting-issues" }
            ]
          },
          { label: "CAPABILITY ENHANCEMENT PROGRAM", href: "/academics/capability-enhancement-program" },
          { label: "CAREER COUNSELLING", href: "/academics/career-counselling" },
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
                  { label: "DENTAL", href: "/accreditation/nirf/nirf-2024/dental" },
                  { label: "INNOVATION", href: "/accreditation/nirf/nirf-2024/innovation" }
                ]
              },
              {
                label: "NIRF-2025",
                href: "/accreditation/nirf/nirf-2025",
                submenu: [
                  { label: "OVERALL", href: "/accreditation/nirf/nirf-2025/overall" },
                  { label: "DENTAL", href: "/accreditation/nirf/nirf-2025/dental" },
                  { label: "INNOVATION", href: "/accreditation/nirf/nirf-2025/innovation" },
                  {
                    label: "SDG INSTITUTION",
                    href: "/accreditation/nirf/nirf-2025/sdg-institution",
                    submenu: [
                      { label: "NIRF-2025 SDG", href: "/accreditation/nirf/nirf-2025/sdg-institution/nirf-2025-sdg" }
                    ]
                  }
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
          { label: "PROSPECTUS", href: "/admission/prospectus" },
          {
            label: "ADMISSION PROCESS & GUIDELINES",
            href: "/admission/admission-process-guidelines",
            submenu: [
              { label: "ADMISSION CRITERION IN OTHERS", href: "/admission/admission-process-guidelines/admission-criterion-in-others" }
            ]
          },
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
          { label: "RESEARCH AND DISSERTATION", href: "/research/research-and-dissertation" },
          { label: "INSTITUTION'S INNOVATION COUNCIL ( IIC )", href: "/research/institutions-innovation-council-iic" },
          { label: "RESEARCH PROPOSAL AND CONSENT FORMS", href: "/research/research-proposal-and-consent-forms" },
          { label: "INSTITUTIONAL ETHICAL COMMITTEE", href: "/research/institutional-ethical-committee" },
          { label: "INCUBATION CENTER", href: "/research/incubation-center" },
          { label: "START-UP", href: "/research/start-up" },
          { label: "MOU (Memorandum of Understanding)", href: "/research/mou-memorandum-of-understanding" },
          { label: "COLLABORATION", href: "/research/collaboration" },
          {
            label: "PUBLICATION",
            href: "/research/publication",
            submenu: [
              { label: "Research Publications", href: "/research/publication/research-publications" },
              { label: "Journal Articles", href: "/research/publication/journal-articles" },
              { label: "Conference Papers", href: "/research/publication/conference-papers" }
            ]
          }
        ]
      },
      { label: "IQAC", href: "/iqac" },
    ],
    bottomMenuItems: [
      {
        label: "COMMITTEE",
        href: "/committee",
        submenu: [
          "STUDENT COUNCIL",
          "INSTITUTION'S INNOVATION COUNCIL ( IIC )",
          "INTERNAL COMPLIANTS COMMITTEE (ICC)",
          "STUDENT GRIEVANCE REDRESSAL COMMITTEE (SGRC)",
          "PLACEMENT CELL / CDC",
          "INSTITUTIONAL ETHICAL COMMITTEE",
          "ANTI-RAGGING COMMITTEE",
          "SEDG CELL",
          "DISCIPLINARY COMMITTEE",
          "DENTAL EDUCATION DEPARTMENT",
          "MENTORING COMMITTEE",
          "PHYSICAL INFRASTRUCTURE AND PURCHASE & MAINTENANCE COMMITTEE",
          "EXAMINATION COMMITTEE",
          "HOSTEL ADVISORY & WELFARE COMMITTEE",
          "LIBRARY AND LEARNING RESOURCES COMMITTEE",
          "FINANCE COMMITTEE",
          "STUDENT WELFARE COMMITTEE",
          "PHYSICAL EDUCATION & EXTRA CURRUCULAR ACTIVITIES COMMITTEE",
          "PATIENT WELFARE COMMITTEE",
          "NCC/NSS",
          "INTERNATIONAL STUDENT CELL COMMITTEE"
        ]
      },
      { label: "ALUMNI", href: "/alumni" },
      {
        label: "MANDATORY DISCLOSURES",
        href: "/mandatory-disclosures",
        submenu: [
          "GUIDELINES ON PUBLIC DISCLOSURE BY HEIS",
          "LETTER OF UNDERTAKING",
          "UGC PUBLIC DISCLOSURE COMPLIANCE"
        ]
      },
      {
        label: "FACILITIES",
        href: "/facilities",
        submenu: [
          "ACCESSIBILITY & INCLUSION AT JKKNDCH",
          "LIBRARY",
          "OUTREACH REQUEST",
          "LABS",
          "FOOD COURT",
          {
            label: "HOSTEL",
            href: "/facilities/hostel",
            submenu: [
              "Boys Hostel",
              "Girls Hostel"
            ]
          },
          "TRANSPORT",
          "SEMINAR HALL",
          "SPORTS CLUB",
          "AUDITORIUM",
          "BANK & POST OFFICE",
          "DIGITAL CLASS ROOM",
          "HEALTH FACILITIES",
          "WI-FI CAMPUS",
          "AMBULANCE SERVICES",
          "PRIVACY POLICY",
          "BARRIER FREE ENVIRONMENT"
        ]
      },
      {
        label: "INFORMATION CENTER",
        href: "/information-center",
        submenu: [
          "RIGHT TO INFORMATION (RTI)",
          "ANNOUNCEMENTS",
          "NEWS",
          "EVENTS",
          "CAREERS"
        ]
      },
      { label: "GALLERY", href: "/gallery" },
      {
        label: "OTHERS",
        href: "/others",
        submenu: [
          "DIGITAL CAMPUS",
          "PATIENT SAFETY MANUAL",
          "OUTREACH"
        ]
      },
      { label: "CONTACT", href: "/contact" },
    ],
  },

  // Hero Section
  hero: {
    title: "JKKN DENTAL COLLEGE & HOSPITAL",
    subtitle: "Online Admissions 2025-2026",
    buttons: [
      { label: "Online Admissions 2025-2026", href: "/admissions" },
      { label: "Academic Calendar", href: "/academic-calendar" },
    ],
    backgroundImage: "/images/college-building.jpg",
  },

  // Announcements
  announcements: [
    { text: "Admission Available", type: "important" },
  ],

  // Events Stories
  eventsStories: {
    heading: "EVENTS STORIES",
    events: [],
  },

  // Our JKKN Dental College
  ourCollege: {
    heading: "OUR JKKN DENTAL COLLEGE",
    program: {
      title: "Bachelor of Dental Surgery",
      description: "Our BDS program provides comprehensive education in dental surgery.",
      image: "/images/bds-icon.jpg",
    },
  },

  // About Section
  about: {
    heading: "ABOUT JKKN DENTAL COLLEGE & HOSPITAL",
    content: `At JKKN Dental College & Hospital, we are dedicated to providing our students with the highest quality education in dental surgery. Established in 1987, our institution is located in Komarapalayam, Tamil Nadu, affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai, and approved by the Government of Tamil Nadu and Dental Council of India.

We offer undergraduate (BDS) and postgraduate (MDS) programs, along with continuing dental education programs. Our state-of-the-art facilities, experienced faculty, and cutting-edge technology ensure that our students receive the best education and training possible.

Our curriculum emphasizes clinical excellence, research, and community service, preparing our students for successful careers in dental surgery. We also offer undergraduate and postgraduate courses to dental practitioners and provide continuing dental education.`,
  },

  // College News
  news: {
    heading: "COLLEGE NEWS",
    items: [
      {
        title: "Placement Day Celebration 2025",
        date: "June 23, 2025",
        image: "/images/news/placement-day.jpg",
      },
      {
        title: "KOMARAPALAYAM BYPASS MARATHON",
        date: "March 04, 2025",
        image: "/images/news/marathon.jpg",
      },
      {
        title: "IIC Session on Startup Planning Strategy: Legal, Compliance, and Financial Highlights",
        date: "September 22, 2024",
        image: "/images/news/iic-session.jpg",
      },
    ],
  },

  // Education Videos
  videos: {
    heading: "EDUCATION VIDEO",
    playlist: [
      {
        title: "Accordion Balloon's Baby Discovery World Video Collection",
        thumbnail: "/images/videos/video1.jpg",
      },
      {
        title: "Accordion Balloon's Baby Discovery World Adventure of Number 5 in Blue World",
        thumbnail: "/images/videos/video2.jpg",
      },
      {
        title: "JKKN Dental College Students Showcases World University Games",
        thumbnail: "/images/videos/video3.jpg",
      },
      {
        title: "Champions Unleashed: 2024 at JKKN Dental College",
        thumbnail: "/images/videos/video4.jpg",
      },
      {
        title: "Heartwarming Staff Training and Support",
        thumbnail: "/images/videos/video5.jpg",
      },
    ],
  },

  // Affiliation and Approval
  affiliations: {
    heading: "AFFILIATION AND APPROVAL",
    items: [
      {
        title: "Dr. MGR Medical University, Chennai",
        logo: "/images/affiliations/mgr-university.png",
        type: "Affiliated to",
      },
      {
        title: "Dental Council of India",
        logo: "/images/affiliations/dci.png",
        type: "Recognised by",
      },
    ],
  },

  // Life @ JKKN
  life: {
    heading: "LIFE @ JKKN",
    description: `JKKN Institutions boasts a vibrant residential campus that fosters both personal and professional growth. More than just classrooms, libraries, and labs, the campus offers an enriching environment where students can pursue passions, hone skills, and uncover new talents and interests. From academic pursuits to co-curricular engagements and extracurricular adventures, the campus is alive with opportunities and activities that make a dynamic, exciting environment for all.`,
    image: "/images/life-at-jkkn.jpg",
  },

  // Supporting Partners
  partners: {
    heading: "SUPPORTING PARTNERS",
    items: [],
  },

  // Alumni
  alumni: {
    heading: "OUR COLLEGE ALUMNI",
    items: [],
  },

  // Footer
  footer: {
    about: {
      title: "JKKN Dental College & Hospital",
      description: "Best Innovative Provided",
    },
    institutions: {
      title: "OUR INSTITUTIONS",
      links: [
        { name: "JKKN Dental College & Hospital", url: "https://dental.jkkn.ac.in" },
        { name: "JKKN College of Allied Health Sciences", url: "https://ahs.jkkn.ac.in/" },
        { name: "JKKN College of Pharmacy", url: "https://pharmacy.jkkn.ac.in/" },
        { name: "Sresakthimayeil Institute of Nursing and Research", url: "https://nursing.sresakthimayeil.jkkn.ac.in/" },
        { name: "JKKN College of Education", url: "https://edu.jkkn.ac.in/" },
        { name: "JKKN College of Arts and Science (Autonomous)", url: "https://cas.jkkn.ac.in/" },
        { name: "JKKN College of Engineering and Technology", url: "https://engg.jkkn.ac.in/" },
        { name: "JKKN Matriculation Higher Secondary School", url: "https://school.jkkn.ac.in/" },
        { name: "Nattraja Vidhyalaya", url: "https://nv.jkkn.ac.in/" },
      ],
    },
    contact: {
      title: "CONTACT US",
      phone: "+91 93458 55001",
      email: "dental@jkkn.ac.in",
      address: `JKKN Dental College & Hospital
NH-544 (Salem To Coimbatore National Highway), Komarapalayam, Namakkal District, Tamil Nadu - 638183`,
    },
    social: {
      title: "FOLLOW US",
      links: [
        { platform: "Facebook", url: "https://www.facebook.com/jkkndental/" },
        { platform: "Instagram", url: "https://www.instagram.com/jkkndental/" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/school/jkkndental/" },
        { platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL6QsTq-__HhvqQ28WcrDAwPa9jeMSK3AO" },
      ],
    },
  },
};
