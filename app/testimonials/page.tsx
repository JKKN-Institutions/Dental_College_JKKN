import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { generateBreadcrumbSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Student Testimonials | JKKN Dental College & Hospital',
  description:
    'Hear from BDS and MDS graduates of JKKN Dental College & Hospital about their clinical training, placement support, and career outcomes.',
  openGraph: {
    title: 'Student Testimonials | JKKN Dental College & Hospital',
    description:
      'Real experiences from BDS and MDS graduates — clinical exposure, placement support, and career outcomes at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/testimonials/',
    siteName: 'JKKN Dental College & Hospital',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dental.jkkn.ac.in/testimonials/',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
  { name: 'Testimonials', url: 'https://dental.jkkn.ac.in/testimonials/' },
];

const breadcrumbSchema = generateBreadcrumbSchema('/testimonials');

const testimonials = [
  {
    quote:
      'The CDC at JKKN connected me with Apollo Dental during my final year. The placement process was smooth — from resume building to interview prep, every step was guided. I started my career with confidence.',
    name: 'Priya Dharshini S.',
    role: 'BDS 2024 • Apollo Dental, Chennai',
    programme: 'BDS',
  },
  {
    quote:
      'After completing MDS in Orthodontics at JKKN, the research exposure and clinical training made me stand out. I was placed at a leading hospital within weeks of completing my programme.',
    name: 'Karthik Raja M.',
    role: 'MDS Orthodontics 2023 • Fortis Healthcare',
    programme: 'MDS',
  },
  {
    quote:
      "JKKN's international placement support helped me prepare for the UK licensing exam. Today, I work at NHS and credit my foundation to the clinical exposure I received at JKKN's 200+ chair hospital.",
    name: 'Sangeetha R.',
    role: 'BDS 2022 • NHS UK',
    programme: 'BDS',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#006837] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Testimonials</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section
          className="py-16 px-4 text-center"
          style={{ background: 'linear-gradient(135deg, #006837 0%, #002309 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-[#7cb983] font-semibold text-sm">STUDENT VOICES</span>
            </div>
            <h1
              className="text-white font-extrabold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw + 0.5rem, 3rem)' }}
            >
              What Our Graduates Say
            </h1>
            <p className="text-white/80 leading-relaxed" style={{ fontSize: 'clamp(0.9rem, 1vw + 0.4rem, 1.1rem)' }}>
              Hear directly from BDS and MDS alumni about their experience — clinical training, placement support, and
              the career foundation they built at JKKN Dental College &amp; Hospital.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="bg-[#FBFBEE] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"
                >
                  <div className="text-5xl text-gray-200 font-serif leading-none mb-3 select-none">&ldquo;</div>
                  <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-6">{t.quote}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                    <span className="inline-block mt-2 text-xs font-semibold text-[#006837] bg-[#FBFBEE] border border-[#7cb983] rounded-full px-3 py-0.5">
                      {t.programme}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-14 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-extrabold text-gray-900 mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw + 0.5rem, 2rem)' }}>
              Begin Your Journey at JKKN
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Join a college where clinical exposure, research culture, and placement support work together for your
              career — just as they did for our alumni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.jkkn.ai/apply/jkkn-admission-2026"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm"
              >
                Apply Now — 2026-27
              </a>
              <Link
                href="/admissions/"
                className="bg-white border border-[#7cb983] hover:bg-[#e8f5e9] text-[#006837] font-semibold px-8 py-4 rounded-full transition-colors text-sm"
              >
                Admission Process
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
