import {
  LucideIcon,
  Home,
  GraduationCap,
  Users,
  Building,
  FileText,
  Phone,
  Award,
  ClipboardCheck,
  BookOpen,
  UsersRound,
  Info,
  Image,
  MoreHorizontal,
  // Icons for About submenus
  Building2,
  Target,
  TrendingUp,
  Scale,
  FileCheck,
  FileBadge,
  BadgeCheck,
  CalendarRange,
  Receipt,
  // Icons for Administration submenus
  Heart,
  Briefcase,
  MessageSquare,
  Landmark,
  ScrollText,
  Crown,
  ShieldAlert,
  // Icons for Academics submenus
  Stethoscope,
  SmilePlus,
  Smile,
  Activity,
  HeartPulse,
  Microscope,
  UserCheck,
  Sparkles,
  CheckSquare,
  PenTool,
  PlusCircle,
  Star,
  Layers,
  BadgePlus,
  ClipboardList,
  Presentation,
  Video,
  Calendar,
  FileSignature,
  // Icons for Accreditation submenus
  Medal,
  Trophy,
  Gauge,
  BarChart3,
  Leaf,
  // Icons for Admission submenus
  BookMarked,
  ListChecks,
  ListOrdered,
  RefreshCcw,
  Gift,
  HandHeart,
  // Icons for Research submenus
  FlaskConical,
  FileSearch,
  Lightbulb,
  FileInput,
  ShieldCheck,
  Rocket,
  Play,
  Handshake,
  Network,
  Newspaper,
  // Icons for Committee submenus
  MessageCircle,
  AlertTriangle,
  ShieldOff,
  Equal,
  Gavel,
  UserPlus,
  FileQuestion,
  Library,
  HeartHandshake,
  Cross,
  Globe,
  School,
  Wrench,
  BedDouble,
  DollarSign,
  Dumbbell,
  Flag,
  // Icons for Mandatory submenus
  BookOpenCheck,
  FileKey,
  // Icons for Facilities submenus
  Accessibility,
  ExternalLink,
  Coffee,
  Bus,
  PiggyBank,
  Ambulance,
  TreeDeciduous,
  BookCopy,
  FlaskRound,
  Hotel,
  Mic,
  Theater,
  Monitor,
  Wifi,
  Lock,
  // Icons for Info Center submenus
  Bell,
  Rss,
  CalendarDays,
  UserCircle,
  // Icons for Others submenus
  Laptop,
  FileHeart,
  Megaphone
} from 'lucide-react';

export interface SubmenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}

export interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  submenus: SubmenuItem[];
}

export interface MenuGroup {
  groupLabel: string;
  menus: MenuItem[];
}

export function GetDentalCollegePages(pathname: string): MenuGroup[] {
  return [
    {
      groupLabel: 'Home',
      menus: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          active: pathname === '/',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'About',
      menus: [
        {
          href: '/about',
          label: 'About',
          icon: Building,
          active: pathname.startsWith('/about') || pathname.startsWith('/our-'),
          submenus: [
            { href: '/about/our-institutions', label: 'Our Institutions', icon: Building2, active: pathname === '/about/our-institutions' },
            { href: '/about/vision-and-mission', label: 'Vision & Mission', icon: Target, active: pathname === '/about/vision-and-mission' },
            { href: '/about/institutional-development-plan', label: 'Development Plan', icon: TrendingUp, active: pathname === '/about/institutional-development-plan' },
            { href: '/about/act-statutes', label: 'Act & Statutes', icon: Scale, active: pathname === '/about/act-statutes' },
            { href: '/about/approvals-and-affiliation/affiliation-bds', label: 'Affiliation BDS', icon: FileCheck, active: pathname.includes('/affiliation-bds') },
            { href: '/about/approvals-and-affiliation/affiliation-mds', label: 'Affiliation MDS', icon: FileBadge, active: pathname.includes('/affiliation-mds') },
            { href: '/about/approvals-and-affiliation/dci-bds', label: 'DCI Letter BDS', icon: BadgeCheck, active: pathname.includes('/dci-bds') },
            { href: '/about/approvals-and-affiliation/dci-mds', label: 'DCI Letter MDS', icon: Award, active: pathname.includes('/dci-mds') },
            { href: '/about/accreditation-ranking-status/naac', label: 'NAAC', icon: Medal, active: pathname.includes('/naac') },
            { href: '/about/annual-report', label: 'Annual Report', icon: CalendarRange, active: pathname === '/about/annual-report' },
            { href: '/about/annual-account-statement', label: 'Annual Account', icon: Receipt, active: pathname === '/about/annual-account-statement' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Administration',
      menus: [
        {
          href: '/administration',
          label: 'Administration',
          icon: Users,
          active: pathname.startsWith('/administration') || pathname.startsWith('/our-'),
          submenus: [
            { href: '/our-trust', label: 'Our Trust', icon: Heart, active: pathname === '/our-trust' },
            { href: '/our-management', label: 'Our Management', icon: Briefcase, active: pathname === '/our-management' },
            { href: '/administration/principals-message', label: "Principal's Message", icon: MessageSquare, active: pathname === '/administration/principals-message' },
            { href: '/administration/finance-officer', label: 'Finance Officer', icon: DollarSign, active: pathname === '/administration/finance-officer' },
            { href: '/administration/governing-body', label: 'Governing Body', icon: Landmark, active: pathname === '/administration/governing-body' },
            { href: '/administration/academic-council', label: 'Academic Council', icon: ScrollText, active: pathname === '/administration/academic-council' },
            { href: '/administration/academic-leadership', label: 'Academic Leadership', icon: Crown, active: pathname === '/administration/academic-leadership' },
            { href: '/administration/internal-compliants-committee', label: 'Internal Complaints Committee', icon: ShieldAlert, active: pathname === '/administration/internal-compliants-committee' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Academics',
      menus: [
        {
          href: '/academics',
          label: 'Academics',
          icon: GraduationCap,
          active: pathname.startsWith('/academics'),
          submenus: [
            { href: '/academics/details-of-academic-programs/bds', label: 'BDS Program', icon: Stethoscope, active: pathname.includes('/bds') },
            { href: '/academics/details-of-academic-programs/mds', label: 'MDS Programs', icon: GraduationCap, active: pathname === '/academics/details-of-academic-programs/mds' },
            { href: '/academics/details-of-academic-programs/mds/periodontics', label: 'MDS Periodontics', icon: SmilePlus, active: pathname.includes('/periodontics') },
            { href: '/academics/details-of-academic-programs/mds/orthodontics-and-dentofacial-orthopedics', label: 'MDS Orthodontics', icon: Smile, active: pathname.includes('/orthodontics') },
            { href: '/academics/details-of-academic-programs/mds/prosthodontics-crown-and-bridge', label: 'MDS Prosthodontics', icon: Activity, active: pathname.includes('/prosthodontics') },
            { href: '/academics/details-of-academic-programs/mds/conservative-dentistry-and-endodontics', label: 'MDS Conservative', icon: HeartPulse, active: pathname.includes('/conservative') },
            { href: '/academics/details-of-academic-programs/mds/oral-medicine', label: 'MDS Oral Medicine', icon: Microscope, active: pathname.includes('/oral-medicine') },
            { href: '/academics/mentor-mentee-program', label: 'Mentor-Mentee', icon: UserCheck, active: pathname === '/academics/mentor-mentee-program' },
            { href: '/academics/academic-attributes', label: 'Academic Attributes', icon: Sparkles, active: pathname === '/academics/academic-attributes' },
            { href: '/academics/learning-outcomes', label: 'Learning Outcomes', icon: CheckSquare, active: pathname === '/academics/learning-outcomes' },
            { href: '/academics/student-centric-teaching-methods', label: 'Teaching Methods', icon: PenTool, active: pathname === '/academics/student-centric-teaching-methods' },
            { href: '/academics/courses/add-on-courses', label: 'Add-on Courses', icon: PlusCircle, active: pathname.includes('/add-on-courses') },
            { href: '/academics/courses/value-added-courses', label: 'Value Added Courses', icon: Star, active: pathname.includes('/value-added-courses') },
            { href: '/academics/courses/cross-cutting-issues', label: 'Cross-Cutting-Issues', icon: Layers, active: pathname.includes('/cross-cutting-issues') },
            { href: '/academics/capability-enhancement-program', label: 'Capability Enhancement', icon: BadgePlus, active: pathname.includes('/capability-enhancement') },
            { href: '/academics/curriculum-feedback', label: 'Curriculum Feedback', icon: ClipboardList, active: pathname === '/academics/curriculum-feedback' },
            { href: '/academics/faculty-achievements/fdp-attended', label: 'FDP Attended', icon: Presentation, active: pathname.includes('/fdp-attended') },
            { href: '/academics/faculty-achievements/webinar-conferences-attended', label: 'Webinar/Conferences Attended', icon: Video, active: pathname.includes('/webinar-conferences-attended') },
            { href: '/academic-calendar-2023-2024-2024-2025', label: 'Calendar 2023-2025', icon: Calendar, active: pathname === '/academic-calendar-2023-2024-2024-2025' },
            { href: '/academic-calendar-2022-2023', label: 'Calendar 2022-2023', icon: Calendar, active: pathname === '/academic-calendar-2022-2023' },
            { href: '/academic-calendar-2021-2022', label: 'Calendar 2021-2022', icon: Calendar, active: pathname === '/academic-calendar-2021-2022' },
            { href: '/academic-calendar-2020-2021', label: 'Calendar 2020-2021', icon: Calendar, active: pathname === '/academic-calendar-2020-2021' },
            { href: '/academic-calendar-2019-2020', label: 'Calendar 2019-2020', icon: Calendar, active: pathname === '/academic-calendar-2019-2020' },
            { href: '/academic-calendar-2018-2019', label: 'Calendar 2018-2019', icon: Calendar, active: pathname === '/academic-calendar-2018-2019' },
            { href: '/academics/statutes-pertaining-to-academic-departments/bds-syllabus', label: 'Syllabus of BDS', icon: FileSignature, active: pathname.includes('/bds-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-prosthodontics-syllabus', label: 'Syllabus of Prosthodontics', icon: FileSignature, active: pathname.includes('/mds-prosthodontics-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-periodontics-syllabus', label: 'Syllabus of Periodontics', icon: FileSignature, active: pathname.includes('/mds-periodontics-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-orthodontics-syllabus', label: 'Syllabus of Orthodontics', icon: FileSignature, active: pathname.includes('/mds-orthodontics-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-oral-medicine-and-radiology-syllabus', label: 'Syllabus of Oral Medicine', icon: FileSignature, active: pathname.includes('/mds-oral-medicine-and-radiology-syllabus') },
            { href: '/academics/statutes-pertaining-to-academic-departments/mds-conservative-dentistry-and-endodontics-syllabus', label: 'Syllabus of Conservative', icon: FileSignature, active: pathname.includes('/mds-conservative-dentistry-and-endodontics-syllabus') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Accreditation',
      menus: [
        {
          href: '/accreditation',
          label: 'Accreditation',
          icon: Award,
          active: pathname.startsWith('/accreditation'),
          submenus: [
            { href: '/accreditation/naac', label: 'NAAC', icon: Award, active: pathname === '/accreditation/naac' },
            { href: '/accreditation/nirf/nirf-2024/dental', label: 'NIRF 2024 - Dental', icon: Trophy, active: pathname === '/accreditation/nirf/nirf-2024/dental' },
            { href: '/accreditation/nirf/nirf-2024/innovation', label: 'NIRF 2024 - Innovation', icon: Lightbulb, active: pathname === '/accreditation/nirf/nirf-2024/innovation' },
            { href: '/accreditation/nirf/nirf-2025/overall', label: 'NIRF 2025 - Overall', icon: Gauge, active: pathname === '/accreditation/nirf/nirf-2025/overall' },
            { href: '/accreditation/nirf/nirf-2025/dental', label: 'NIRF 2025 - Dental', icon: BarChart3, active: pathname === '/accreditation/nirf/nirf-2025/dental' },
            { href: '/accreditation/nirf/nirf-2025/innovation', label: 'NIRF 2025 - Innovation', icon: Rocket, active: pathname === '/accreditation/nirf/nirf-2025/innovation' },
            { href: '/accreditation/nirf/nirf-2025/sdg-institution', label: 'NIRF 2025 - SDG Institution', icon: Leaf, active: pathname === '/accreditation/nirf/nirf-2025/sdg-institution' },
            { href: '/accreditation/nirf/nirf-2026/overall', label: 'NIRF 2026 - Overall', icon: Gauge, active: pathname === '/accreditation/nirf/nirf-2026/overall' },
            { href: '/accreditation/nirf/nirf-2026/dental', label: 'NIRF 2026 - Dental', icon: BarChart3, active: pathname === '/accreditation/nirf/nirf-2026/dental' },
            { href: '/accreditation/nirf/nirf-2026/innovation', label: 'NIRF 2026 - Innovation', icon: Rocket, active: pathname === '/accreditation/nirf/nirf-2026/innovation' },
            { href: '/accreditation/nirf/nirf-2026/sdg-institution', label: 'NIRF 2026 - SDG Institution', icon: Leaf, active: pathname === '/accreditation/nirf/nirf-2026/sdg-institution' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Admission',
      menus: [
        {
          href: '/admissions',
          label: 'Admission',
          icon: FileText,
          active: pathname.startsWith('/admissions'),
          submenus: [
            { href: '/admissions/prospectus', label: 'Prospectus', icon: BookMarked, active: pathname === '/admissions/prospectus' },
            { href: '/admissions/admission-process-guidelines/admission-criterion-in-others', label: 'Admission Criterion in Others', icon: ListChecks, active: pathname.includes('/admission-criterion-in-others') },
            { href: '/admissions/admission-criteria', label: 'Admission Criteria', icon: ListOrdered, active: pathname === '/admissions/admission-criteria' },
            { href: '/admissions/fee-refund-policy/ugc-fee-refund-policy', label: 'Fee Refund Policy', icon: RefreshCcw, active: pathname.includes('/fee-refund') },
            { href: '/admissions/scholarship-policy-for-dental-college', label: 'Scholarship Policy', icon: Gift, active: pathname === '/admissions/scholarship-policy-for-dental-college' },
            { href: '/admissions/equitable-opportunity-for-sedg-group/equitable-opportunity-for-sedgs', label: 'SEDG Opportunity', icon: HandHeart, active: pathname.includes('/sedg') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Research',
      menus: [
        {
          href: '/research',
          label: 'Research',
          icon: BookOpen,
          active: pathname.startsWith('/research'),
          submenus: [
            { href: '/research/research-development-rd-cell', label: 'R&D Cell', icon: FlaskConical, active: pathname.includes('/research-development') },
            { href: '/research/research-and-dissertation', label: 'Research & Dissertation', icon: FileSearch, active: pathname === '/research/research-and-dissertation' },
            { href: '/research/institutions-innovation-council-iic', label: 'IIC', icon: Lightbulb, active: pathname.includes('/institutions-innovation') },
            { href: '/research/research-proposal-and-consent-forms', label: 'Research Proposal & Consent Forms', icon: FileInput, active: pathname.includes('/research-proposal-and-consent-forms') },
            { href: '/research/institutional-ethical-committee', label: 'Ethical Committee', icon: ShieldCheck, active: pathname.includes('/ethical-committee') },
            { href: '/research/incubation-center', label: 'Incubation Center', icon: Rocket, active: pathname.includes('/incubation') },
            { href: '/research/start-up', label: 'Start-up', icon: Play, active: pathname === '/research/start-up' },
            { href: '/research/mou-memorandum-of-understanding', label: 'MOU', icon: Handshake, active: pathname.includes('/mou') },
            { href: '/research/collaboration', label: 'Collaboration', icon: Network, active: pathname === '/research/collaboration' },
            { href: '/research/publication', label: 'Publications', icon: Newspaper, active: pathname === '/research/publication' }
          ]
        }
      ]
    },
    {
      groupLabel: 'IQAC',
      menus: [
        {
          href: '/iqac',
          label: 'IQAC',
          icon: ClipboardCheck,
          active: pathname === '/iqac',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Committee',
      menus: [
        {
          href: '/committee',
          label: 'Committee',
          icon: Users,
          active: pathname.startsWith('/committee'),
          submenus: [
            { href: '/committee/student-council/view-document', label: 'Student Council', icon: UsersRound, active: pathname.includes('/student-council') },
            { href: '/committee/internal-compliants-committee-icc', label: 'ICC', icon: MessageCircle, active: pathname.includes('/internal-compliants') },
            { href: '/committee/student-grievance-redressal-committee-sgrc', label: 'SGRC', icon: AlertTriangle, active: pathname.includes('/student-grievance') },
            { href: '/committee/placement-cell-cdc/list-of-events', label: 'Placement Cell / CDC', icon: Briefcase, active: pathname.includes('/placement-cell') },
            { href: '/committee/anti-ragging-committee/view-committee-members', label: 'Anti-Ragging Committee', icon: ShieldOff, active: pathname.includes('/anti-ragging') },
            { href: '/committee/sedg-cell', label: 'SEDG Cell', icon: Equal, active: pathname === '/committee/sedg-cell' },
            { href: '/committee/disciplinary-committee', label: 'Disciplinary Committee', icon: Gavel, active: pathname.includes('/disciplinary') },
            { href: '/committee/mentoring-committee', label: 'Mentoring Committee', icon: UserPlus, active: pathname.includes('/mentoring-committee') },
            { href: '/committee/examination-committee', label: 'Examination Committee', icon: FileQuestion, active: pathname.includes('/examination') },
            { href: '/committee/library-and-learning-resources-committee', label: 'Library & Learning Resources', icon: Library, active: pathname.includes('/library-and-learning') },
            { href: '/committee/student-welfare-committee', label: 'Student Welfare Committee', icon: HeartHandshake, active: pathname.includes('/student-welfare') },
            { href: '/committee/patient-welfare-committee', label: 'Patient Welfare Committee', icon: Cross, active: pathname.includes('/patient-welfare') },
            { href: '/committee/international-student-cell-committee', label: 'International Student Cell', icon: Globe, active: pathname.includes('/international-student') },
            { href: '/committee/dental-education-department', label: 'Dental Education Department', icon: School, active: pathname.includes('/dental-education') },
            { href: '/committee/physical-infrastructure-and-purchase-maintenance-committee', label: 'Physical Infrastructure Committee', icon: Wrench, active: pathname.includes('/physical-infrastructure') },
            { href: '/committee/hostel-advisory-&-welfare-committee', label: 'Hostel Advisory & Welfare', icon: BedDouble, active: pathname.includes('/hostel-advisory') },
            { href: '/committee/finance-committee', label: 'Finance Committee', icon: DollarSign, active: pathname === '/committee/finance-committee' },
            { href: '/committee/physical-education-&-extra-currucular-activities-committee', label: 'Physical Education Committee', icon: Dumbbell, active: pathname.includes('/physical-education') },
            { href: '/committee/ncc/nss', label: 'NCC/NSS', icon: Flag, active: pathname.includes('/ncc/nss') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Alumni',
      menus: [
        {
          href: '/alumni',
          label: 'Alumni',
          icon: UsersRound,
          active: pathname.startsWith('/alumni'),
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Mandatory',
      menus: [
        {
          href: '/mandatory-disclosures',
          label: 'Disclosures',
          icon: FileText,
          active: pathname.startsWith('/mandatory-disclosures'),
          submenus: [
            { href: '/mandatory-disclosures/guidelines-on-public-disclosure-by-heis', label: 'Guidelines', icon: BookOpenCheck, active: pathname.includes('/guidelines') },
            { href: '/mandatory-disclosures/letter-of-undertaking', label: 'Letter of Undertaking', icon: FileKey, active: pathname.includes('/letter-of-undertaking') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Facilities',
      menus: [
        {
          href: '/facilities',
          label: 'Facilities',
          icon: Building,
          active: pathname.startsWith('/facilities'),
          submenus: [
            { href: '/facilities/accessibility-&-inclusion-at-jkkndch', label: 'Accessibility & Inclusion', icon: Accessibility, active: pathname.includes('/accessibility') },
            { href: 'https://outreach.dental.jkkn.ac.in/', label: 'Outreach Request', icon: ExternalLink, active: false },
            { href: '/facilities/food-court', label: 'Food Court', icon: Coffee, active: pathname === '/facilities/food-court' },
            { href: '/facilities/transport', label: 'Transport', icon: Bus, active: pathname === '/facilities/transport' },
            { href: '/facilities/sports-club', label: 'Sports Club', icon: Medal, active: pathname === '/facilities/sports-club' },
            { href: '/facilities/bank-&-post-office', label: 'Bank & Post Office', icon: PiggyBank, active: pathname.includes('/bank-') },
            { href: '/facilities/health-facilities', label: 'Health Facilities', icon: HeartPulse, active: pathname === '/facilities/health-facilities' },
            { href: '/facilities/ambulance-services', label: 'Ambulance Services', icon: Ambulance, active: pathname === '/facilities/ambulance-services' },
            { href: '/facilities/barrier-free-environment', label: 'Barrier Free Environment', icon: TreeDeciduous, active: pathname.includes('/barrier-free') },
            { href: '/facilities/library', label: 'Library', icon: BookCopy, active: pathname === '/facilities/library' },
            { href: '/facilities/labs', label: 'Labs', icon: FlaskRound, active: pathname === '/facilities/labs' },
            { href: '/facilities/hostel/boys-hostel', label: 'Boys Hostel', icon: Hotel, active: pathname === '/facilities/hostel/boys-hostel' },
            { href: '/facilities/hostel/girls-hostel', label: 'Girls Hostel', icon: Hotel, active: pathname === '/facilities/hostel/girls-hostel' },
            { href: '/facilities/seminar-hall', label: 'Seminar Hall', icon: Mic, active: pathname === '/facilities/seminar-hall' },
            { href: '/facilities/auditorium', label: 'Auditorium', icon: Theater, active: pathname === '/facilities/auditorium' },
            { href: '/facilities/digital-class-room', label: 'Digital Class Room', icon: Monitor, active: pathname === '/facilities/digital-class-room' },
            { href: '/facilities/wi-fi-campus', label: 'Wi-Fi Campus', icon: Wifi, active: pathname === '/facilities/wi-fi-campus' },
            { href: '/facilities/privacy-policy', label: 'Privacy Policy', icon: Lock, active: pathname === '/facilities/privacy-policy' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Info Center',
      menus: [
        {
          href: '/information-center',
          label: 'Info Center',
          icon: Info,
          active: pathname.startsWith('/information-center'),
          submenus: [
            { href: '/information-center/right-to-information-rti', label: 'Right to Information (RTI)', icon: FileQuestion, active: pathname.includes('/rti') },
            { href: '/information-center/announcements', label: 'Announcements', icon: Bell, active: pathname === '/information-center/announcements' },
            { href: '/information-center/news', label: 'News', icon: Rss, active: pathname === '/information-center/news' },
            { href: '/information-center/events', label: 'Events', icon: CalendarDays, active: pathname === '/information-center/events' },
            { href: '/information-center/careers', label: 'Careers', icon: UserCircle, active: pathname === '/information-center/careers' },
            { href: '/blog', label: 'Blog', icon: PenTool, active: pathname.startsWith('/blog') },
            { href: '/faq', label: 'FAQs', icon: FileQuestion, active: pathname.startsWith('/faq') }
          ]
        }
      ]
    },
    {
      groupLabel: 'Gallery',
      menus: [
        {
          href: '/gallery',
          label: 'Gallery',
          icon: Image,
          active: pathname === '/gallery',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Others',
      menus: [
        {
          href: '/others',
          label: 'Others',
          icon: MoreHorizontal,
          active: pathname.startsWith('/others'),
          submenus: [
            { href: '/others/digital-campus', label: 'Digital Campus', icon: Laptop, active: pathname === '/others/digital-campus' },
            { href: '/others/patient-safety-manual', label: 'Patient Safety Manual', icon: FileHeart, active: pathname.includes('/patient-safety') },
            { href: '/others/outreach', label: 'Outreach', icon: Megaphone, active: pathname === '/others/outreach' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Contact',
      menus: [
        {
          href: '/contact',
          label: 'Contact',
          icon: Phone,
          active: pathname === '/contact',
          submenus: []
        }
      ]
    }
  ];
}
