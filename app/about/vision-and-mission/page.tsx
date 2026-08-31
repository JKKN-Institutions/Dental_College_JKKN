import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqAccordion from '@/components/FaqAccordion';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import {
  generatePageMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateAboutPageSchema,
  generateSpeakableWebPageSchema
} from '@/lib/metadata';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the vision of JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The vision of JKKN Dental College is to be a leading global innovative solution provider for the ever-changing needs of society, delivering excellence in dental education, research, and healthcare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the mission of JKKN Dental College?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The mission of JKKN Dental College is to help learners become great dentists through top-quality education, research, and clinical skill development. The college facilitates understanding of bio convergence to improve oral healthcare and empowers graduates to become leaders in their field.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long has JKKN Dental College been providing dental education?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College was established in 1987 as part of JKKN Institutions, founded in 1952 — over 74 years of committed service to quality education in Tamil Nadu, India.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is JKKN Dental College accredited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. JKKN Dental College is affiliated to TN Dr. MGR Medical University and holds NAAC A Grade accreditation. The college is approved by the Dental Council of India (DCI).',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is JKKN Dental College located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JKKN Dental College & Hospital is located at Natarajapuram, NH-544 (Salem-Coimbatore Highway), Komarapalayam, Namakkal, Tamil Nadu 638183. It is conveniently accessible from Salem, Erode, Namakkal, and Coimbatore.',
      },
    },
  ],
};

export const metadata = generatePageMetadata({
  title: 'Vision & Mission | JKKN Dental College Strategic Goals',
  description: 'Discover JKKN Dental College vision and mission. Leading global innovator in dental education, research, and clinical skill development.',
  keywords: 'vision mission, dental college goals, JKKN vision, dental education mission, strategic goals',
  canonicalPath: '/about/vision-and-mission',
  datePublished: '2024-01-15',
  dateModified: '2025-02-13'
});

export default function VisionAndMission() {
  // Generate structured data for this page
  const breadcrumbSchema = generateBreadcrumbSchema('/about/vision-and-mission');
  const webPageSchema = generateWebPageSchema({
    title: 'Vision & Mission - JKKN Dental College',
    description: 'Our vision to be a leading global innovative solution provider and mission to help learners become great dentists through top-quality education, research, and clinical skill development.',
    url: 'https://dental.jkkn.ac.in/about/vision-and-mission',
    datePublished: '2024-01-15',
    dateModified: '2025-02-13'
  });
  const aboutPageSchema = generateAboutPageSchema({
    title: 'Vision & Mission - JKKN Dental College',
    description: 'Our vision and mission statement outlining our commitment to innovation, education, and dental healthcare excellence.'
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Vision & Mission | JKKN Dental College Strategic Goals',
    description: 'Discover JKKN Dental College vision and mission. Leading global innovator in dental education, research, and clinical skill development.',
    url: 'https://dental.jkkn.ac.in/about/vision-and-mission/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={faqSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] to-[#002309] pt-16">
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            OUR VISION AND MISSION
          </h1>
          <div className="mt-4 mx-auto w-20 h-[3px] bg-[#7cb983] rounded-full" />
        </div>
      </section>

      {/* Breadcrumb strip */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            <li><a href="/" className="text-gray-500 hover:text-[#006837] transition-colors">Home</a></li>
            <li className="text-gray-300 select-none">/</li>
            <li><span className="text-gray-500">About</span></li>
            <li className="text-gray-300 select-none">/</li>
            <li className="text-[#006837] font-medium" aria-current="page">Vision &amp; Mission</li>
          </ol>
        </div>
      </nav>

      {/* Content Section */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Card header bar */}
            <div className="bg-[#006837] px-8 py-4">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">
                OUR VISION
              </h2>
            </div>
            {/* Card body */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-8 py-10">
              {/* Eye Icon */}
              <div className="shrink-0 w-32 h-32 md:w-40 md:h-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer eye shape */}
                  <ellipse cx="100" cy="100" rx="85" ry="50" fill="none" stroke="#006837" strokeWidth="8"/>
                  {/* Iris outer circle */}
                  <circle cx="100" cy="100" r="35" fill="none" stroke="#006837" strokeWidth="8"/>
                  {/* Pupil */}
                  <circle cx="100" cy="100" r="20" fill="#006837"/>
                  {/* Inner iris detail */}
                  <circle cx="100" cy="100" r="12" fill="none" stroke="#006837" strokeWidth="4"/>
                  {/* Light reflection */}
                  <circle cx="92" cy="92" r="6" fill="#FBFBEE"/>
                </svg>
              </div>
              {/* Vision text */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                To be a Leading Global Innovative Solution provider for the ever-changing needs of society.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Card header bar */}
            <div className="bg-[#7cb983] px-8 py-4">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">
                OUR MISSION
              </h2>
            </div>
            {/* Card body */}
            <div className="flex flex-col md:flex-row items-center gap-8 px-8 py-10">
              {/* Target Icon */}
              <div className="shrink-0 w-32 h-32 md:w-40 md:h-40">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#7cb983" strokeWidth="6"/>
                  {/* Middle circle */}
                  <circle cx="100" cy="100" r="55" fill="none" stroke="#7cb983" strokeWidth="6"/>
                  {/* Inner circle */}
                  <circle cx="100" cy="100" r="30" fill="none" stroke="#7cb983" strokeWidth="6"/>
                  {/* Center bullseye */}
                  <circle cx="100" cy="100" r="15" fill="#7cb983"/>
                  {/* Arrow */}
                  <g transform="rotate(-45 100 100)">
                    {/* Arrow shaft */}
                    <line x1="100" y1="20" x2="100" y2="100" stroke="#7cb983" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow head - left part */}
                    <line x1="100" y1="20" x2="90" y2="35" stroke="#7cb983" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow head - right part */}
                    <line x1="100" y1="20" x2="110" y2="35" stroke="#7cb983" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow fletching - left */}
                    <line x1="95" y1="95" x2="85" y2="105" stroke="#7cb983" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow fletching - right */}
                    <line x1="105" y1="95" x2="115" y2="105" stroke="#7cb983" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow fletching - center */}
                    <line x1="100" y1="90" x2="100" y2="110" stroke="#7cb983" strokeWidth="5" strokeLinecap="round"/>
                  </g>
                </svg>
              </div>
              {/* Mission text */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                Help learners to become great dentists through top-quality education, research, and clinical skill development. Facilitate their understanding of how to use bio convergence to improve oral healthcare and become leaders in their field.
              </p>
            </div>
          </div>

        </div>
      </section>

      <FaqAccordion schema={faqSchema} />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
