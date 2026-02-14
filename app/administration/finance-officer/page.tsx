import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Finance Officer | JKKN Dental College',
  description: 'Meet Mr. K. Velayutham, MBA, Finance Officer at JKKN Dental College, managing financial planning, budgeting, and institutional growth.',
  keywords: 'Finance Officer, JKKN Dental College, K. Velayutham, financial management, budgeting, financial planning, institutional finance',
};

export default function FinanceOfficer() {
  return (
    <main className="overflow-x-hidden w-full">
      <Header />

      {/* Page Content */}
      <div className="bg-[#FBF8F3] py-12 px-4 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-12 uppercase">
            FINANCE OFFICER
          </h1>

          {/* Finance Officer Photo */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="/images/finance-officer-image.jpg"
                alt="Mr. K. Velayutham"
                className="w-full max-w-sm h-auto"
              />
            </div>
          </div>

          {/* Finance Officer Details */}
          <div className="text-center mb-10">
            <p className="text-base md:text-lg font-bold text-black mb-1">
              Finance Officer
            </p>
            <p className="text-base md:text-lg font-bold text-black mb-1">
              Mr. K. Velayutham, MBA
            </p>
            <p className="text-base md:text-lg font-bold text-black">
              JKKN Institutions, Komarapalayam
            </p>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-gray-700 text-justify leading-relaxed mb-6">
              Mr. K. Velayutham, MBA, serves as the Finance Officer of JKKN Institutions, overseeing financial planning, budgeting, and resource allocation to ensure the institution's financial stability and growth. With his extensive expertise in financial management, he plays a crucial role in optimizing financial operations, ensuring compliance with regulations, and supporting the institution's mission of academic excellence.
            </p>

            {/* Contact Information */}
            <div className="mt-8">
              <p className="text-black font-bold mb-3">
                For any financial queries or assistance, please contact:
              </p>

              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-pink-500">📱</span>
                  <span className="font-semibold">Mobile:</span>
                  <a href="tel:+919788285818" className="hover:text-[#1B5E20]">+91 97882 85818</a>
                </p>

                <p className="text-gray-700 flex items-center gap-2">
                  <span className="text-blue-500">📧</span>
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:velayutham.k@jkkn.ac.in" className="hover:text-[#1B5E20]">velayutham.k@jkkn.ac.in</a>
                </p>
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
