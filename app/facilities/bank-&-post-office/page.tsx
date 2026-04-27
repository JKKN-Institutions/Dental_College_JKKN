import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';
import { Landmark, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bank & Post Office | JKKN Dental Campus',
  description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
  keywords: 'on-campus banking JKKN, ATM facility dental college, campus post office, Indian Bank ATM, postal services, student banking, on-campus financial services',
  openGraph: {
    title: 'Bank & Post Office | JKKN Dental Campus',
    description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
    url: 'https://dental.jkkn.ac.in/facilities/bank-&-post-office/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function BankPostOffice() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/bank-&-post-office');
  const webPageSchema = generateWebPageSchema({
    title: 'Bank & Post Office | JKKN Dental Campus',
    description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
    url: 'https://dental.jkkn.ac.in/facilities/bank-&-post-office/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Bank & Post Office | JKKN Dental Campus',
    description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
    url: 'https://dental.jkkn.ac.in/facilities/bank-&-post-office/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            BANK & POST OFFICE
          </h1>
          <div className="h-1 w-24 bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/bank_postoffice-1.webp"
                alt="Post office on campus"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/bank_postoffice-2.webp"
                alt="Indian Bank ATM 24 Hours"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-[300px] md:h-[370px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/bank_postoffice-3.webp"
                alt="Indian Bank ATM"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="bg-[#FBFBEE] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#7cb983] pl-6">
            At JKKN Institutions, we are committed to providing our students and staff with a range of convenient services to make campus life easier. This includes banking and postal services designed to meet your daily needs without requiring you to step off campus.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* On-Campus ATM Kiosk */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Landmark className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">On-Campus ATM Kiosk:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              For your immediate banking needs, we have an ATM kiosk right on campus. Whether it&apos;s withdrawing cash or checking account balances, you can do it all in a secure environment, without the need to travel off-site.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Easy withdrawals and balance checks',
                'Conveniently located within the campus',
                'Available 24/7 to meet your banking needs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7cb983] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Campus Post Office */}
          <div className="bg-[#FBFBEE] rounded-2xl p-6 border border-[#7cb983]/20 hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
              <Mail className="text-white w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-[#006837]">Campus Post Office:</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our on-campus post office serves as a one-stop solution for all your postal requirements. From mailing packages to availing savings schemes, everything is just a step away.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Domestic and international mail services',
                'Speed post and registered post options',
                'Additional facilities like savings schemes and postal life insurance',
                'Efficient and reliable service to keep you connected',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#7cb983] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-base md:text-lg leading-relaxed">
            By offering these financial and postal services, JKKN Institutions ensures that you can manage your transactions and communications conveniently, allowing you more time to focus on your academic and professional growth.
          </p>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
