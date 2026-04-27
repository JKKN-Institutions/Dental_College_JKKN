import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';
import { Users, Utensils, Leaf, Star } from 'lucide-react';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Campus Food Court - Diverse Cuisine at JKKN Dental College',
  description: 'JKKN food court offers diverse, healthy, affordable meals with sustainable practices, quality ingredients, and a vibrant social hub for students and faculty.',
  keywords: 'JKKN food court, campus cafeteria, student dining, healthy food options, affordable meals, sustainable dining, college canteen, nutritious food',
  openGraph: {
    title: 'Campus Food Court - Diverse Cuisine at JKKN Dental College',
    description: 'JKKN food court offers diverse, healthy, affordable meals with sustainable practices, quality ingredients, and a vibrant social hub for students and faculty.',
    url: 'https://dental.jkkn.ac.in/facilities/food-court/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

export default function FoodCourt() {
  const breadcrumbSchema = generateBreadcrumbSchema('/facilities/food-court');
  const webPageSchema = generateWebPageSchema({
    title: 'Campus Food Court - Diverse Cuisine at JKKN Dental College',
    description: 'JKKN food court offers diverse, healthy, affordable meals with sustainable practices, quality ingredients, and a vibrant social hub for students and faculty.',
    url: 'https://dental.jkkn.ac.in/facilities/food-court/',
    dateModified: '2026-03-18',
  });
  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Campus Food Court - Diverse Cuisine at JKKN Dental College',
    description: 'JKKN food court offers diverse, healthy, affordable meals with sustainable practices, quality ingredients, and a vibrant social hub for students and faculty.',
    url: 'https://dental.jkkn.ac.in/facilities/food-court/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-[#006837] via-[#00572e] to-[#003d20] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Food Court
          </h1>
        </div>
      </section>

      {/* Images + Intro */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/foodcourt-1.webp"
                alt="JKKN Dental College food court exterior view at Komarapalayam campus"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/foodcourt-2.webp"
                alt="Students and faculty dining at JKKN campus food court seating area"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/foodcourt-3.webp"
                alt="Diverse food options available at JKKN Dental College campus dining hall"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="hero-description text-gray-700 text-base leading-relaxed">
              <strong>At JKKN Institutions, we recognize that success transcends the classroom, extending into overall well-being and campus life. In the heart of our campus is our state-of-the-art food court, a culinary haven designed not only to tantalize your taste buds but also to fuel your academic pursuits.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* A Hub for Social Interaction */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-[#006837]" />
            </div>
            A Hub for Social Interaction:
          </h2>
          <div className="bg-[#FBFBEE] rounded-xl p-8 border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Our food court serves as a bustling social nexus where students, faculty, and guests can gather, connect, and rejuvenate. With comfortable seating and an inviting ambiance, it&apos;s more than a place for meals; it&apos;s a venue for camaraderie and relaxation.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Cuisine That Celebrates Diversity */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Utensils className="w-5 h-5 text-[#006837]" />
            </div>
            Cuisine That Celebrates Diversity:
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Indulge in an array of dishes catering to various dietary preferences. From fresh and nourishing salads to warm and hearty meals, we offer something for every palate. Quality, taste, and health are at the core of our culinary philosophy.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Commitment to Sustainability */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Leaf className="w-5 h-5 text-[#006837]" />
            </div>
            Commitment to Sustainability:
          </h2>
          <div className="bg-[#FBFBEE] rounded-xl p-8 border border-green-100">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>We embrace an eco-conscious approach, utilizing sustainable packaging and collaborating with local suppliers. Our dedication to green practices ensures that every meal is a step towards a healthier planet.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Food Court */}
      <section className="bg-[#FBFBEE] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-[#006837] mb-6 flex items-center gap-3">
            <div className="w-9 h-9 bg-[#e8f5e9] rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-[#006837]" />
            </div>
            Why Choose Our Food Court?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              'Diverse Menu: Explore flavors and cuisines that cater to every appetite.',
              'Quality Ingredients: Savor meals crafted from fresh and ethically sourced ingredients.',
              'Healthy Options: Enjoy balanced choices that align with your wellness goals.',
              'Affordable Prices: Delight in gourmet quality without breaking the bank.',
              'Hygiene and Safety: Trust in our stringent standards that prioritize your well-being.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-green-100">
                <div className="w-2.5 h-2.5 rounded-full bg-[#006837] mt-1.5 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed"><strong>{item}</strong></p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-green-100 border-l-4 border-l-[#7cb983]">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>At the heart of JKKN&apos;s vibrant community, our food court stands as a testament to our belief in holistic education. Experience culinary excellence, community, and comfort. Your table is ready!</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
