import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';
import Link from 'next/link';
import { GraduationCap, Stethoscope, Users, Award, Building2, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About JKKN Dental College | DCI Approved Since 1987',
  description: 'Learn about JKKN Dental College & Hospital — DCI approved, NAAC A accredited since 1987. 200+ dental chairs, 500+ daily patients, BDS & MDS programs in Komarapalayam, Namakkal.',
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/about/',
  },
  openGraph: {
    title: 'About JKKN Dental College | DCI Approved Since 1987',
    description: 'Learn about JKKN Dental College & Hospital — DCI approved, NAAC A accredited since 1987. 200+ dental chairs, 500+ daily patients, BDS & MDS programs in Komarapalayam, Namakkal.',
    url: 'https://dental.jkkn.ac.in/about/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About JKKN Dental College | DCI Approved Since 1987',
    description: 'Learn about JKKN Dental College & Hospital — DCI approved, NAAC A accredited since 1987. 200+ dental chairs, 500+ daily patients.',
    images: ['/images/BDS-hero-image.png'],
  },
};

// Schema #4d: BreadcrumbList – /about Page
const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://dental.jkkn.ac.in/about/" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When was JKKN Dental College established?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College & Hospital was established in 1987 as part of JKKN Institutions (founded in 1952). The college is affiliated to Tamil Nadu Dr. M.G.R. Medical University and approved by the Dental Council of India."
      }
    },
    {
      "@type": "Question",
      "name": "What programs does JKKN Dental College offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College offers BDS (Bachelor of Dental Surgery) with 100 seats — a 5-year program including 1-year internship — and MDS (Master of Dental Surgery) in 5 specializations: Periodontics, Orthodontics, Prosthodontics, Conservative Dentistry & Endodontics, and Oral Medicine & Radiology."
      }
    },
    {
      "@type": "Question",
      "name": "What accreditations does JKKN Dental College hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College holds NAAC A Grade accreditation and is fully approved by the Dental Council of India (DCI). The college is affiliated to Tamil Nadu Dr. M.G.R. Medical University, Chennai."
      }
    },
    {
      "@type": "Question",
      "name": "What hospital facilities are available at JKKN Dental College?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JKKN Dental College operates a full-service dental hospital with 200+ dental chairs, 100+ beds, and treats 500+ patients daily across all dental specializations including general dentistry, orthodontics, oral surgery, and prosthodontics."
      }
    }
  ]
};

export default function AboutPage() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'About Us | JKKN Dental College & Hospital',
    description: 'Learn about JKKN Dental College & Hospital — established 1987, part of JKKN Institutions (since 1952). Affiliated to TN Dr. MGR Medical University, offering BDS and MDS programs in Komarapalayam, Namakkal.',
    url: 'https://dental.jkkn.ac.in/about/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  const highlights = [
    { icon: GraduationCap, label: 'Established', value: '1987', desc: 'Part of JKKN Institutions (since 1952)' },
    { icon: Stethoscope, label: 'Dental Chairs', value: '200+', desc: 'Full-service dental hospital' },
    { icon: Users, label: 'Daily Patients', value: '500+', desc: 'Across all dental specializations' },
    { icon: Award, label: 'Accreditation', value: 'NAAC A', desc: 'DCI Approved' },
    { icon: Building2, label: 'Programs', value: 'BDS & MDS', desc: '5 MDS specializations' },
    { icon: MapPin, label: 'Location', value: 'Komarapalayam', desc: 'NH-544, Namakkal, Tamil Nadu' },
  ];

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={aboutBreadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Section */}
      <section className="bg-[#006837] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            About JKKN Dental College & Hospital
          </h1>
          <p className="hero-description text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Established in 1987, JKKN Dental College & Hospital is a DCI-approved, NAAC A accredited institution
            affiliated to Tamil Nadu Dr. M.G.R. Medical University. Located on NH-544 in Komarapalayam, Namakkal District,
            the college offers BDS and MDS programs with hands-on clinical training at our 200+ chair dental hospital.
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FBF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <item.icon className="w-8 h-8 text-[#006837] mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#006837]">{item.value}</div>
                <div className="text-sm font-semibold text-gray-800 mt-1">{item.label}</div>
                <div className="text-xs text-gray-500 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <article>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B5E20] mb-6">
              Our Legacy in Dental Education
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              JKKN Dental College & Hospital is part of J.K.K. Nattraja Educational Institutions, a multi-disciplinary
              educational group with over 70 years of commitment to quality education in Tamil Nadu. The dental college
              was established in 1987 and has since trained thousands of dental professionals who serve across India and internationally.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              Our college operates a comprehensive dental hospital treating 500+ patients daily, providing learners with
              unmatched clinical exposure from their first year. With 200+ dental chairs, advanced diagnostic equipment
              including CBCT and digital imaging, and dedicated departments across all dental specializations, JKKN offers
              a complete learning ecosystem for aspiring dentists.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              The college offers BDS (Bachelor of Dental Surgery) with 100 seats and MDS (Master of Dental Surgery) in
              5 specializations — Periodontics, Orthodontics & Dentofacial Orthopedics, Prosthodontics & Crown and Bridge,
              Conservative Dentistry & Endodontics, and Oral Medicine & Radiology. All programs are approved by the Dental
              Council of India and affiliated to Tamil Nadu Dr. M.G.R. Medical University.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B5E20] mb-6">
              Accreditation & Approvals
            </h2>
            <ul className="space-y-3 text-gray-700 text-base sm:text-lg mb-8">
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#006837] mt-1 flex-shrink-0" />
                <span><strong>NAAC A Grade</strong> — National Assessment and Accreditation Council</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#006837] mt-1 flex-shrink-0" />
                <span><strong>DCI Approved</strong> — Dental Council of India</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#006837] mt-1 flex-shrink-0" />
                <span><strong>Affiliated to</strong> Tamil Nadu Dr. M.G.R. Medical University, Chennai</span>
              </li>
            </ul>
          </article>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Link
              href="/about/vision-and-mission/"
              className="bg-[#006837] text-white rounded-xl p-5 hover:bg-[#005530] transition-colors"
            >
              <h3 className="font-bold text-lg mb-1">Vision & Mission</h3>
              <p className="text-gray-200 text-sm">Our strategic goals and commitment to dental education excellence</p>
            </Link>
            <Link
              href="/admission/"
              className="bg-[#006837] text-white rounded-xl p-5 hover:bg-[#005530] transition-colors"
            >
              <h3 className="font-bold text-lg mb-1">Admissions 2026</h3>
              <p className="text-gray-200 text-sm">BDS & MDS admission process, eligibility, and fee structure</p>
            </Link>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
