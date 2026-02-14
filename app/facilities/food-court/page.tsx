import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Campus Food Court - Diverse Cuisine at JKKN Dental College',
  description: 'JKKN food court offers diverse, healthy, affordable meals with sustainable practices, quality ingredients, and a vibrant social hub for students and faculty.',
  keywords: 'JKKN food court, campus cafeteria, student dining, healthy food options, affordable meals, sustainable dining, college canteen, nutritious food',
};

export default function FoodCourt() {
  return (
    <main>
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8">
            Food Court
          </h1>

          {/* Image Gallery - 3 Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/foodcourt-1.webp"
                alt="Food court exterior"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/foodcourt-2.webp"
                alt="Food court seating area"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="w-full h-[280px] md:h-[240px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/foodcourt-3.webp"
                alt="Food court dining area"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base leading-relaxed text-gray-700 mb-8">
            <strong>At JKKN Institutions, we recognize that success transcends the classroom, extending into overall well-being and campus life. In the heart of our campus is our state-of-the-art food court, a culinary haven designed not only to tantalize your taste buds but also to fuel your academic pursuits.</strong>
          </p>

          {/* A Hub for Social Interaction */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              A Hub for Social Interaction:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Our food court serves as a bustling social nexus where students, faculty, and guests can gather, connect, and rejuvenate. With comfortable seating and an inviting ambiance, it's more than a place for meals; it's a venue for camaraderie and relaxation.</strong>
            </p>
          </div>

          {/* Cuisine That Celebrates Diversity */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Cuisine That Celebrates Diversity:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>Indulge in an array of dishes catering to various dietary preferences. From fresh and nourishing salads to warm and hearty meals, we offer something for every palate. Quality, taste, and health are at the core of our culinary philosophy.</strong>
            </p>
          </div>

          {/* Commitment to Sustainability */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Commitment to Sustainability:
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>We embrace an eco-conscious approach, utilizing sustainable packaging and collaborating with local suppliers. Our dedication to green practices ensures that every meal is a step towards a healthier planet.</strong>
            </p>
          </div>

          {/* Why Choose Our Food Court */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
              Why Choose Our Food Court?
            </h2>
            <div className="space-y-3 text-base text-gray-700 mb-4">
              <p>
                <strong>Diverse Menu: Explore flavors and cuisines that cater to every appetite.</strong>
              </p>
              <p>
                <strong>Quality Ingredients: Savor meals crafted from fresh and ethically sourced ingredients.</strong>
              </p>
              <p>
                <strong>Healthy Options: Enjoy balanced choices that align with your wellness goals.</strong>
              </p>
              <p>
                <strong>Affordable Prices: Delight in gourmet quality without breaking the bank.</strong>
              </p>
              <p>
                <strong>Hygiene and Safety: Trust in our stringent standards that prioritize your well-being.</strong>
              </p>
            </div>
            <p className="text-base leading-relaxed text-gray-700">
              <strong>At the heart of JKKN's vibrant community, our food court stands as a testament to our belief in holistic education. Experience culinary excellence, community, and comfort. Your table is ready!</strong>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
