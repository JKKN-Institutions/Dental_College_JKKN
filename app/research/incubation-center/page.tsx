import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Nattraja Incubation Forum (NIF) | JKKN Dental College',
  description: 'India\'s pioneering bioconvergence incubation center fostering healthcare innovation, startups, and research excellence at JKKN.',
  keywords: 'Nattraja Incubation Forum, NIF, bioconvergence incubation, healthcare innovation, startup incubation, dental technology, JKKN research',
  openGraph: {
    title: 'Nattraja Incubation Forum (NIF) | JKKN Dental College',
    description: 'India\'s pioneering bioconvergence incubation center fostering healthcare innovation, startups, and research excellence at JKKN.',
    url: 'https://dental.jkkn.ac.in/research/incubation-center/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function IncubationCenter() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: "Nattraja Incubation Forum (NIF) | JKKN Dental College",
    description: "India's pioneering bioconvergence incubation center fostering healthcare innovation, startups, and research excellence at JKKN.",
    url: 'https://dental.jkkn.ac.in/research/incubation-center/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Incubation Center', url: 'https://dental.jkkn.ac.in/research/incubation-center/' },
      ]} />
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8">
            INCUBATION CENTER
          </h1>

          {/* Subtitle 1 */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
            Nattraja Incubation Forum
          </h2>

          {/* Subtitle 2 */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-6">
            India's Bioconvergence Focused Incubation Center
          </h3>

          {/* Introduction Paragraph */}
          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            Nattraja Incubation Forum (NIF), also known as NLB Nattraja Launchpad for Bioconvergence, is India's pioneering incubation center dedicated to the field of bioconvergence. Affectionately referred to as the NLB Nattraja Launchpad, NIF, within the esteemed JKKN Group Institution, is the nation's first incubation center committed to healthcare innovation. Thriving on transformation and innovation, NIF is a dynamic space where minds unite to push boundaries in healthcare and technology. It sets an unparalleled precedent, catalyzing groundbreaking advancements in healthcare. More than a physical space, NIF is a crucible of ideas, a sanctuary for pioneers, and a haven for those who dream beyond boundaries. As the dawn of bioconvergence unfolds, Nattraja Incubation Forum stands as India's commitment to shaping the future of healthcare through innovation.
          </p>

          {/* About Section */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            About Nattraja Incubation Forum (NIF)
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            Nurturing Innovation at the Crossroads of Bioconvergence Welcome to Nattraja Incubation Forum (NIF), the vanguard of innovation in the field of bioconvergence. At NIF, we believe in the power of ideas, the potential of startups, and the transformative impact of bridging biology, technology, and healthcare. Our mission is clear: to drive innovation, create jobs, foster academic discourse, and contribute significantly to the global bio convergence industry.
          </p>

          {/* Our Vision Section */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Our Vision
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            Nurturing Tomorrow's Leaders in Bioconvergence NIF, also known as NLB Nattraja Launchpad for Bioconvergence, is India's premier incubation center exclusively dedicated to the exciting and emerging realm of bioconvergence. Our vision is ambitious, yet firmly rooted in our commitment to shaping the future of healthcare and technology.
          </p>

          {/* Our Goals Section */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Our Goals
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
            Nurturing Innovation, Transforming Industries Welcome to the forefront of ingenuity and progress, where innovation is nurtured to transform industries.  we are dedicated to fostering a culture of creativity and forward-thinking that propels us beyond the boundaries of conventional practices. Our commitment to nurturing innovation is the driving force behind our transformative impact on diverse industries.
          </p>

          {/* NIF Aims Section */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-4">
            NIF aims to achieve the following outcomes:
          </h3>

          <div className="space-y-3 mb-8 text-gray-700">
            <p className="leading-relaxed">
              Incubate at least 100 startups in bio convergence: We provide a supportive environment that empowers startups to reach their full potential.
            </p>
            <p className="leading-relaxed">
              Create at least 10,000 jobs in bio convergence: Through the success of our incubated startups, we actively contribute to economic growth and job creation.
            </p>
            <p className="leading-relaxed">
              Generate at least $1 billion in revenue from bio convergence: We support startups in achieving commercial success, thereby contributing significantly to the global bio convergence industry.
            </p>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            File at least 500 patents in bio convergence: NIF encourages and assists startups in protecting their intellectual property, resulting in a significant number of patents in the field.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Publish at least 1000 papers in bioconvergence: We foster research and development, actively contributing to the academic discourse in bioconvergence, and leading to a substantial number of published papers.
          </p>

          {/* Our Commitment Section */}
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
            Our Commitment
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            At NIF, we are more than just a physical space; we are a community of innovators, pioneers, and dreamers who dare to push the boundaries of what's possible in healthcare and technology. Our incubation center serves as a crucible of ideas, a sanctuary for startups, and a catalyst for groundbreaking advancements.
          </p>

          {/* Call to Action */}
          <h3 className="text-lg md:text-xl font-bold text-black mb-2">
            Call Us Now+919688232957
          </h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            For more details visit our Website Welcome to Nattraja Incubation Forum
          </p>

          {/* Button */}
          <div className="mb-12">
            <a
              href="/pdf/NIF-Nattraja-Launchpad-for-Bioconvergence-INCUBATION-CENTER.pdf"
              className="inline-block bg-[#81C784] hover:bg-[#66BB6A] text-white font-bold py-3 px-8 rounded transition-all duration-300 text-sm"
            >
              Nattraja Launchpad for Bioconvergence
            </a>
          </div>

        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
