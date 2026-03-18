'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';

export default function OurTrustClient() {
  return (
    <main>
      <Header />

      {/* Hero Image Section with Framed Portrait */}
      <section className="bg-[#FBF8F3] pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center py-12">
            {/* Framed Portrait */}
            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] mb-8">
              <Image
                src="/images/Our_Trust.webp"
                alt="Shri. J.K.K. Nattraja"
                width={350}
                height={350}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              SHRI. J.K.K. NATTRAJA
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-bold text-center text-[#006838] mb-8">
              Founder J.K.K. Rangammal Charitable Trust
            </h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#FBF8F3] pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Paragraph 1 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              In the 1960s, female children in Komarapalayam had to walk 2.5 km to the nearby town of Bhavani for schooling. Some parents hesitated to send their daughters, while others ceased their children's education altogether, resulting in them staying at home or working in handlooms and dyeing industries. Recognizing the need for women's education, Shri J.K.K. Nattraja, a visionary philanthropist of the area, initiated a girls' school in the town in 1965, four years before the inception of the trust.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              The Trust, J.K.K. Rangammal Charitable Trust (Reg No: 33), was established in 1969 with the mission of providing literacy and empowering women, aiming to upgrade the socio-economic status of the community. Following in her father's footsteps, Smt. N. Sendamaraai, Managing Trustee, expanded the service to offer multi-disciplinary education to both genders. Now, under the umbrella of the Trust, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges, as well as a Government-Aided Girls' School and Matriculation schools.
            </p>

            {/* Paragraph 3 */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              The Trust actively engages in various social service activities, including health-oriented services like free dental camps, treatments, surgeries, blood donation drives, and motivational and entrepreneurship awareness camps. It also extends its charitable efforts to provide medical support to the impoverished, assist the destitute, offer natural calamity support, grant educational scholarships to underprivileged students, and foster cultural enrichment. A pioneering establishment of the region since its inception, the Trust's grand service to society remains immense, not only in terms of education but also in community welfare.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
