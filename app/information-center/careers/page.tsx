import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import JobCard from '@/components/careers/JobCard';
import { getDentalJobs } from '@/lib/careers/api';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const revalidate = 300;

const PAGE_URL = 'https://dental.jkkn.ac.in/information-center/careers/';
const PAGE_TITLE = 'Careers & Current Openings';
const PAGE_DESCRIPTION =
  'Current job openings at JKKN Dental College & Hospital, Komarapalayam, for senior learners and team members. View details and apply online.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: 'JKKN dental careers, dental college jobs, dental teaching jobs, Komarapalayam jobs, Namakkal jobs, dental hospital jobs',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE} | JKKN Dental College & Hospital`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#7cb983]/30 bg-white p-6 text-center text-[#002309]">{children}</div>
  );
}

export default async function Careers() {
  const { jobs, available } = await getDentalJobs();

  const breadcrumbSchema = generateBreadcrumbSchema('/information-center/careers');
  const webPageSchema = generateWebPageSchema({
    title: `${PAGE_TITLE} | JKKN Dental College & Hospital`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    dateModified: '2026-09-28',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: `${PAGE_TITLE} | JKKN Dental College & Hospital`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    speakableCssSelectors: ['h1'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">CAREERS</h1>
          <div className="w-20 h-1 bg-[#7cb983] mb-4 rounded-full" />
          <p className="text-white/90 text-base md:text-lg font-medium">
            Career Opportunities at JKKN Dental College &amp; Hospital
          </p>
        </div>
      </section>

      {/* Current Openings — live from MyJKKN */}
      <section aria-labelledby="openings-heading" className="bg-[#FBFBEE] pt-8 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="openings-heading" className="text-2xl md:text-3xl font-bold text-[#006837]">
              Current Openings
            </h2>
            {available && jobs.length > 0 && (
              <p className="text-sm font-medium text-[#002309]/70">
                {jobs.length} open {jobs.length === 1 ? 'role' : 'roles'}
              </p>
            )}
          </div>

          {!available ? (
            <Notice>
              We couldn&apos;t load the current openings right now. Please try again shortly, or reach our HR team
              using the contact details below.
            </Notice>
          ) : jobs.length === 0 ? (
            <Notice>
              There are no open positions at the moment. Please check back soon, or reach our HR team using the
              contact details below.
            </Notice>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2">
              {jobs.map((job) => (
                <li key={job.id}>
                  <JobCard job={job} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Contact Details */}
      <div className="bg-[#FBFBEE] pt-4 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h3 className="text-white font-bold text-base md:text-lg">For job-related inquiries, contact us:</h3>
            </div>
            <div className="px-6 py-5">
              <div className="bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-5 space-y-2">
                <p className="text-[#002309] font-bold text-sm md:text-base">Mr N. Narayan Rao</p>
                <p className="text-[#002309] font-bold text-sm md:text-base">90923 27666</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
