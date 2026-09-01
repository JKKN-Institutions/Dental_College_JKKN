import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

type HubLink = { label: string; href: string; external?: boolean };

const committeeLinks: HubLink[] = [
  { label: 'Learner Council', href: '/committee/student-council' },
  { label: "Institution's Innovation Council (IIC)", href: '/research/institutions-innovation-council-iic' },
  { label: 'Internal Complaints Committee (ICC)', href: '/pdf/Internal-Compliance-committee.pdf', external: true },
  { label: 'Learner Grievance Redressal Committee (SGRC)', href: '/pdf/Student-Grievance-residencial-committee.pdf', external: true },
  { label: 'Placement Cell / CDC', href: '/committee/placement-cell-cdc' },
  { label: 'Institutional Ethical Committee', href: '/institutional-ethical-committee' },
  { label: 'Anti-Ragging Committee', href: '/committee/anti-ragging-committee' },
  { label: 'SEDG Cell', href: '/committee/sedg-cell' },
  { label: 'Disciplinary Committee', href: '/committee/disciplinary-committee' },
  { label: 'Dental Education Department', href: '/committee/dental-education-department' },
  { label: 'Mentoring Committee', href: '/committee/mentoring-committee' },
  { label: 'Physical Infrastructure and Purchase & Maintenance Committee', href: '/committee/physical-infrastructure-and-purchase-maintenance-committee' },
  { label: 'Examination Committee', href: '/committee/examination-committee' },
  { label: 'Hostel Advisory & Welfare Committee', href: '/committee/hostel-advisory-and-welfare-committee' },
  { label: 'Library and Learning Resources Committee', href: '/committee/library-and-learning-resources-committee' },
  { label: 'Finance Committee', href: '/committee/finance-committee' },
  { label: 'Learner Welfare Committee', href: '/committee/student-welfare-committee' },
  { label: 'Physical Education & Extra Curricular Activities Committee', href: '/committee/physical-education-and-extra-curricular-activities-committee' },
  { label: 'Patient Welfare Committee', href: '/committee/patient-welfare-committee' },
  { label: 'NCC / NSS', href: '/committee/ncc/nss' },
  { label: 'International Learner Cell Committee', href: '/committee/international-student-cell-committee' },
];

export const metadata: Metadata = {
  alternates: { canonical: '/committee/' },
  title: 'Committees | JKKN Dental College & Hospital',
  description: 'Directory of the committees at JKKN Dental College & Hospital - anti-ragging, grievance redressal, examination, finance, hostel, library, placement and more.',
  keywords: 'committees, anti-ragging committee, grievance redressal, examination committee, finance committee, placement cell, JKKN dental college',
  openGraph: {
    title: 'Committees | JKKN Dental College & Hospital',
    description: 'Directory of the committees at JKKN Dental College & Hospital - anti-ragging, grievance redressal, examination, finance, hostel, library, placement and more.',
    url: 'https://dental.jkkn.ac.in/committee/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function CommitteeHub() {
  const breadcrumbSchema = generateBreadcrumbSchema('/committee');
  const webPageSchema = generateWebPageSchema({
    title: 'Committees - JKKN Dental College & Hospital',
    description: 'Directory of the committees at JKKN Dental College & Hospital.',
    url: 'https://dental.jkkn.ac.in/committee/',
    dateModified: '2026-09-01',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Committees | JKKN Dental College & Hospital',
    description: 'Directory of the committees at JKKN Dental College & Hospital.',
    url: 'https://dental.jkkn.ac.in/committee/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D5E2E] mb-6">
            COMMITTEES
          </h1>

          <p className="hero-description text-base md:text-lg text-gray-700 max-w-4xl mb-10">
            This page lists the committees of JKKN Dental College &amp; Hospital. Choose a committee
            below to open its page or the document published for it.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0">
            {committeeLinks.map((item) => (
              <li key={item.href} className="w-full">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full border border-gray-200 rounded p-5 text-gray-800 font-semibold hover:border-[#0D5E2E] hover:text-[#0D5E2E] transition-all duration-300"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block h-full border border-gray-200 rounded p-5 text-gray-800 font-semibold hover:border-[#0D5E2E] hover:text-[#0D5E2E] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
