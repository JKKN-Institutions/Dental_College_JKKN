import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/metadata';
import { ShieldCheck, Wifi, Utensils, Home as HomeIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hostel Facilities - JKKN Dental College',
  description:
    'Separate boys and girls hostels at JKKN Dental College, Komarapalayam — 24/7 security, Wi-Fi, hygienic mess, laundry and study-friendly rooms near campus.',
  keywords:
    'JKKN dental college hostel, boys hostel, girls hostel, dental college accommodation Komarapalayam, student hostel Namakkal',
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/facilities/hostel/',
  },
  openGraph: {
    title: 'Hostel Facilities - JKKN Dental College',
    description:
      'Separate boys and girls hostels at JKKN Dental College, Komarapalayam — 24/7 security, Wi-Fi, hygienic mess, laundry and study-friendly rooms near campus.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function HostelFacilities() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/hostel');
  const webPageSchema = generateWebPageSchema({
    title: 'Hostel Facilities - JKKN Dental College',
    description:
      'Separate boys and girls hostels at JKKN Dental College, Komarapalayam — 24/7 security, Wi-Fi, hygienic mess, laundry and study-friendly rooms near campus.',
    url: 'https://dental.jkkn.ac.in/facilities/hostel/',
    dateModified: '2026-07-02',
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hostel Facilities
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
          <p className="text-gray-200 text-base md:text-lg mt-6 max-w-3xl">
            JKKN Dental College &amp; Hospital provides separate hostels for boys and girls
            within walking distance of the campus, offering a safe, comfortable and
            study-focused residential experience for learners.
          </p>
        </div>
      </section>

      {/* Hostel Cards */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/facilities/hostel/boys-hostel/"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[240px]">
              <Image
                src="/images/boys-hostel-1.jpg"
                alt="Boys hostel building at JKKN Dental College"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#006837] mb-2">Boys Hostel</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Well-ventilated rooms a short walk from campus with high-speed internet,
                round-the-clock security and a quiet, study-focused environment.
              </p>
              <span className="inline-block mt-4 text-[#7cb983] font-semibold group-hover:text-[#006837] transition-colors">
                View Boys Hostel →
              </span>
            </div>
          </Link>

          <Link
            href="/facilities/hostel/girls-hostel/"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-[240px]">
              <Image
                src="/images/girls-hostel-1.jpg"
                alt="Girls hostel building at JKKN Dental College"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-[#006837] mb-2">Girls Hostel</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Safe on-campus accommodation for girls with 24/7 security, Wi-Fi
                connectivity, hygienic mess and dedicated warden support.
              </p>
              <span className="inline-block mt-4 text-[#7cb983] font-semibold group-hover:text-[#006837] transition-colors">
                View Girls Hostel →
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-8">
            Common Hostel Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FBFBEE] rounded-xl p-6">
              <ShieldCheck className="w-8 h-8 text-[#7cb983] mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">24/7 Security</h3>
              <p className="text-sm text-gray-600">
                Round-the-clock security measures and committed staff support.
              </p>
            </div>
            <div className="bg-[#FBFBEE] rounded-xl p-6">
              <Wifi className="w-8 h-8 text-[#7cb983] mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Wi-Fi Connectivity</h3>
              <p className="text-sm text-gray-600">
                High-speed internet across hostel blocks for study and research.
              </p>
            </div>
            <div className="bg-[#FBFBEE] rounded-xl p-6">
              <Utensils className="w-8 h-8 text-[#7cb983] mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Hygienic Mess</h3>
              <p className="text-sm text-gray-600">
                Vegetarian and non-vegetarian meals with laundry and hot water services.
              </p>
            </div>
            <div className="bg-[#FBFBEE] rounded-xl p-6">
              <HomeIcon className="w-8 h-8 text-[#7cb983] mb-3" />
              <h3 className="font-bold text-gray-800 mb-1">Near Campus</h3>
              <p className="text-sm text-gray-600">
                Minutes from academic buildings, labs and the dental hospital on NH-544.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
