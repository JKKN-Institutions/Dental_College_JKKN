import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: { canonical: '/research/incubation-center/' },
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

const nifOutcomes = [
  'Incubate at least 100 startups in bio convergence: We provide a supportive environment that empowers startups to reach their full potential.',
  'Create at least 10,000 jobs in bio convergence: Through the success of our incubated startups, we actively contribute to economic growth and job creation.',
  'Generate at least $1 billion in revenue from bio convergence: We support startups in achieving commercial success, thereby contributing significantly to the global bio convergence industry.',
  'File at least 500 patents in bio convergence: NIF encourages and assists startups in protecting their intellectual property, resulting in a significant number of patents in the field.',
  'Publish at least 1000 papers in bioconvergence: We foster research and development, actively contributing to the academic discourse in bioconvergence, and leading to a substantial number of published papers.',
];

export default function IncubationCenter() {
  const speakableSchema = generateSpeakableWebPageSchema({
    title: "Nattraja Incubation Forum (NIF) | JKKN Dental College",
    description: "India's pioneering bioconvergence incubation center fostering healthcare innovation, startups, and research excellence at JKKN.",
    url: 'https://dental.jkkn.ac.in/research/incubation-center/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden w-full">
      <StructuredData data={speakableSchema} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Research', url: 'https://dental.jkkn.ac.in/research/' },
        { name: 'Incubation Center', url: 'https://dental.jkkn.ac.in/research/incubation-center/' },
      ]} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 uppercase tracking-wide">
            INCUBATION CENTER
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-[#7cb983] mb-1">
            Nattraja Incubation Forum
          </h2>
          <p className="text-white/80 font-semibold text-base md:text-lg mb-5">
            India&apos;s Bioconvergence Focused Incubation Center
          </p>
          <div className="w-20 h-1 bg-[#7cb983] mb-6 rounded-full" />
          <p className="hero-description text-white/85 text-base leading-relaxed max-w-3xl">
            Nattraja Incubation Forum (NIF), also known as NLB Nattraja Launchpad for Bioconvergence, is India&apos;s pioneering incubation center dedicated to the field of bioconvergence. Affectionately referred to as the NLB Nattraja Launchpad, NIF, within the esteemed JKKN Group Institution, is the nation&apos;s first incubation center committed to healthcare innovation. Thriving on transformation and innovation, NIF is a dynamic space where minds unite to push boundaries in healthcare and technology. It sets an unparalleled precedent, catalyzing groundbreaking advancements in healthcare. More than a physical space, NIF is a crucible of ideas, a sanctuary for pioneers, and a haven for those who dream beyond boundaries. As the dawn of bioconvergence unfolds, Nattraja Incubation Forum stands as India&apos;s commitment to shaping the future of healthcare through innovation.
          </p>
        </div>
      </section>

      <div className="bg-[#FBFBEE] py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          {/* About NIF */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">About Nattraja Incubation Forum (NIF)</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Nurturing Innovation at the Crossroads of Bioconvergence Welcome to Nattraja Incubation Forum (NIF), the vanguard of innovation in the field of bioconvergence. At NIF, we believe in the power of ideas, the potential of startups, and the transformative impact of bridging biology, technology, and healthcare. Our mission is clear: to drive innovation, create jobs, foster academic discourse, and contribute significantly to the global bio convergence industry.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">Our Vision</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Nurturing Tomorrow&apos;s Leaders in Bioconvergence NIF, also known as NLB Nattraja Launchpad for Bioconvergence, is India&apos;s premier incubation center exclusively dedicated to the exciting and emerging realm of bioconvergence. Our vision is ambitious, yet firmly rooted in our commitment to shaping the future of healthcare and technology.
              </p>
            </div>
          </div>

          {/* Our Goals */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">Our Goals</h2>
            </div>
            <div className="px-6 pt-5 pb-2">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-5">
                Nurturing Innovation, Transforming Industries Welcome to the forefront of ingenuity and progress, where innovation is nurtured to transform industries.  we are dedicated to fostering a culture of creativity and forward-thinking that propels us beyond the boundaries of conventional practices. Our commitment to nurturing innovation is the driving force behind our transformative impact on diverse industries.
              </p>
              <p className="text-sm font-bold text-[#006837] uppercase tracking-wide mb-4">
                NIF aims to achieve the following outcomes:
              </p>
            </div>
            <ul className="px-6 pb-6 space-y-3">
              {nifOutcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-[#FBFBEE] border border-[#7cb983]/30 rounded-xl p-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#006837] text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#006837] px-6 py-4">
              <h2 className="text-white font-bold text-base md:text-lg">Our Commitment</h2>
            </div>
            <div className="px-6 py-5">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                At NIF, we are more than just a physical space; we are a community of innovators, pioneers, and dreamers who dare to push the boundaries of what&apos;s possible in healthcare and technology. Our incubation center serves as a crucible of ideas, a sanctuary for startups, and a catalyst for groundbreaking advancements.
              </p>
            </div>
          </div>

          {/* CTA / Contact */}
          <div className="bg-[#006837] rounded-2xl p-6 md:p-8">
            <h3 className="text-white font-bold text-lg md:text-xl mb-2">
              Call Us Now+919688232957
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-6">
              For more details visit our Website Welcome to Nattraja Incubation Forum
            </p>
            <a
              href="/pdf/NIF-Nattraja-Launchpad-for-Bioconvergence-INCUBATION-CENTER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-[#FBFBEE] text-[#006837] font-bold py-3 px-10 rounded-xl transition-colors duration-200 text-sm"
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
