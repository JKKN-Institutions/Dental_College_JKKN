import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Bank & Post Office - On-Campus Banking Services at JKKN Dental College',
  description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
  keywords: 'on-campus banking JKKN, ATM facility dental college, campus post office, Indian Bank ATM, postal services, student banking, on-campus financial services',
  openGraph: {
    title: 'Bank & Post Office - On-Campus Banking Services at JKKN Dental College',
    description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
    url: 'https://dental.jkkn.ac.in/facilities/bank-&-post-office/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function BankPostOffice() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/bank-&-post-office');
  const webPageSchema = generateWebPageSchema({
    title: 'Bank & Post Office - On-Campus Banking Services at JKKN Dental College',
    description: 'JKKN campus features 24/7 ATM, on-campus post office, and complete banking services including domestic/international mail and savings schemes for students.',
    url: 'https://dental.jkkn.ac.in/facilities/bank-&-post-office/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Bank & Post Office - On-Campus Banking Services at JKKN Dental College',
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

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            BANK & POST OFFICE
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/bank_postoffice-1.webp"
                alt="Post office on campus"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/bank_postoffice-2.webp"
                alt="Indian Bank ATM 24 Hours"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[300px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/bank_postoffice-3.webp"
                alt="Indian Bank ATM"
                width={400}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
            At JKKN Institutions, we are committed to providing our students and staff with a range of convenient services to make campus life easier. This includes banking and postal services designed to meet your daily needs without requiring you to step off campus.
          </p>

          {/* On-Campus ATM Kiosk */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              On-Campus ATM Kiosk:
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              For your immediate banking needs, we have an ATM kiosk right on campus. Whether it's withdrawing cash or checking account balances, you can do it all in a secure environment, without the need to travel off-site.
            </p>
            <div className="text-base leading-relaxed text-gray-600 space-y-2">
              <p>Easy withdrawals and balance checks</p>
              <p>Conveniently located within the campus</p>
              <p>Available 24/7 to meet your banking needs</p>
            </div>
          </div>

          {/* Campus Post Office */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Campus Post Office:
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              Our on-campus post office serves as a one-stop solution for all your postal requirements. From mailing packages to availing savings schemes, everything is just a step away.
            </p>
            <div className="text-base leading-relaxed text-gray-600 space-y-2">
              <p>Domestic and international mail services</p>
              <p>Speed post and registered post options</p>
              <p>Additional facilities like savings schemes and postal life insurance</p>
              <p>Efficient and reliable service to keep you connected</p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="mb-12">
            <p className="text-base leading-relaxed text-gray-600">
              By offering these financial and postal services, JKKN Institutions ensures that you can manage your transactions and communications conveniently, allowing you more time to focus on your academic and professional growth.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
