import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import {
  generatePageMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateAboutPageSchema,
  generateSpeakableWebPageSchema
} from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Vision & Mission | JKKN Dental College Strategic Goals',
  description: 'Discover JKKN Dental College vision and mission. Leading global innovator in dental education, research, and clinical skill development. Learn about our commitment to excellence.',
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
    description: 'Discover JKKN Dental College vision and mission. Leading global innovator in dental education, research, and clinical skill development. Learn about our commitment to excellence.',
    url: 'https://dental.jkkn.ac.in/about/vision-and-mission/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B5E20] mb-16 uppercase text-center">
            OUR VISION AND MISSION
          </h1>

          {/* Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center">
            {/* Vision Left - Title and Icon */}
            <div className="flex flex-col items-center lg:items-end">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1B5E20] mb-8 uppercase">
                OUR VISION
              </h2>

              {/* Eye Icon */}
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer eye shape */}
                  <ellipse cx="100" cy="100" rx="85" ry="50" fill="none" stroke="#1B5E20" strokeWidth="8"/>
                  {/* Iris outer circle */}
                  <circle cx="100" cy="100" r="35" fill="none" stroke="#1B5E20" strokeWidth="8"/>
                  {/* Pupil */}
                  <circle cx="100" cy="100" r="20" fill="#1B5E20"/>
                  {/* Inner iris detail */}
                  <circle cx="100" cy="100" r="12" fill="none" stroke="#1B5E20" strokeWidth="4"/>
                  {/* Light reflection */}
                  <circle cx="92" cy="92" r="6" fill="#FBF8F3"/>
                </svg>
              </div>
            </div>

            {/* Vision Right - Content */}
            <div className="flex items-center">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                To be a Leading Global Innovative Solution provider for the ever-changing needs of society.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Mission Left - Title and Icon */}
            <div className="flex flex-col items-center lg:items-end">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1B5E20] mb-8 uppercase">
                OUR MISSION
              </h2>

              {/* Target Icon */}
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Outer circle */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#1B5E20" strokeWidth="6"/>
                  {/* Middle circle */}
                  <circle cx="100" cy="100" r="55" fill="none" stroke="#1B5E20" strokeWidth="6"/>
                  {/* Inner circle */}
                  <circle cx="100" cy="100" r="30" fill="none" stroke="#1B5E20" strokeWidth="6"/>
                  {/* Center bullseye */}
                  <circle cx="100" cy="100" r="15" fill="#1B5E20"/>

                  {/* Arrow */}
                  <g transform="rotate(-45 100 100)">
                    {/* Arrow shaft */}
                    <line x1="100" y1="20" x2="100" y2="100" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow head - left part */}
                    <line x1="100" y1="20" x2="90" y2="35" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow head - right part */}
                    <line x1="100" y1="20" x2="110" y2="35" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow fletching - left */}
                    <line x1="95" y1="95" x2="85" y2="105" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow fletching - right */}
                    <line x1="105" y1="95" x2="115" y2="105" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round"/>
                    {/* Arrow fletching - center */}
                    <line x1="100" y1="90" x2="100" y2="110" stroke="#1B5E20" strokeWidth="5" strokeLinecap="round"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Mission Right - Content */}
            <div className="flex items-center">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                Help learners to become great dentists through top-quality education, research, and clinical skill development. Facilitate their understanding of how to use bio convergence to improve oral healthcare and become leaders in their field.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
