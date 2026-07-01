import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Scholarships 2026-27 | JKKN Dental College',
  description: 'Scholarship details for BDS students at JKKN Dental College. PMSS, Maintainence, First Graduate, Community, Trust, and Naan Phudulvan scholarships available for eligible students.',
  alternates: {
    canonical: '/scholarships/',
  },
  openGraph: {
    title: 'Scholarships 2026-27 | JKKN Dental College',
    description: 'Scholarship details for BDS students at JKKN Dental College. PMSS, Maintainence, First Graduate, Community, Trust, and Naan Phudulvan scholarships available for eligible students.',
    url: 'https://dental.jkkn.ac.in/scholarships/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarships 2026-27 | JKKN Dental College',
    description: 'Scholarship details for BDS students at JKKN Dental College.',
  },
};

export default function ScholarshipsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema('/scholarships');
  const webPageSchema = generateWebPageSchema({
    title: 'Scholarships 2026-27 | JKKN Dental College',
    description: 'Scholarship details for BDS students at JKKN Dental College.',
    url: 'https://dental.jkkn.ac.in/scholarships/',
    dateModified: '2026-04-27',
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={webPageSchema} />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006837] to-[#002309] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Scholarship <span className="text-[#7cb983]">Details</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Government and institutional scholarships available for eligible BDS learners at JKKN Dental College &amp; Hospital.
          </p>
        </div>
      </section>

      {/* Scholarship Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* SC/SCA/ST/BC-CC */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-6">
              SC / SCA / ST / BC-CC
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#006837] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Scholarship</th>
                    <th className="px-6 py-4 text-left font-bold">Course</th>
                    <th className="px-6 py-4 text-right font-bold">GQ</th>
                    <th className="px-6 py-4 text-right font-bold">MQ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-[#FBFBEE]">
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">PMSS (Community Scholarship)</td>
                    <td className="px-6 py-4 text-gray-700">BDS</td>
                    <td className="px-6 py-4 text-right text-gray-800">&#8377;2.5L / Yr</td>
                    <td className="px-6 py-4 text-right text-gray-800">&#8377;6L / Yr</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">Maintainence Scholarship</td>
                    <td className="px-6 py-4 text-gray-700">BDS</td>
                    <td className="px-6 py-4 text-right text-gray-800">&#8377;5K–10K / Yr</td>
                    <td className="px-6 py-4 text-right text-gray-500">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BC/MBC/DNC/BCM */}
          <div className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-6">
              BC / MBC / DNC / BCM
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#006837] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Scholarship</th>
                    <th className="px-6 py-4 text-left font-bold">Course</th>
                    <th className="px-6 py-4 text-right font-bold">GQ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-[#FBFBEE]">
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">First Graduate</td>
                    <td className="px-6 py-4 text-gray-700">BDS</td>
                    <td className="px-6 py-4 text-right text-gray-800">&#8377;40K / Yr</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">Community Scholarship</td>
                    <td className="px-6 py-4 text-gray-700">BDS</td>
                    <td className="px-6 py-4 text-right text-gray-800">&#8377;5K–10K / Yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* All Community – Tamil Medium */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#006837] mb-2">
              All Community
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Govt / Govt Aided School (6 to 12 Std) — Tamil Medium
            </p>
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#006837] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Scholarship</th>
                    <th className="px-6 py-4 text-left font-bold">Course</th>
                    <th className="px-6 py-4 text-right font-bold">Amount</th>
                    <th className="px-6 py-4 text-left font-bold">Quota</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-[#FBFBEE]">
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">Trust Scholarship (Merit Based)</td>
                    <td className="px-6 py-4 text-gray-700">BDS</td>
                    <td className="px-6 py-4 text-right text-gray-500">—</td>
                    <td className="px-6 py-4 text-gray-600">MQ / GQ</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">Naan Phudulvan Scholarship</td>
                    <td className="px-6 py-4 text-gray-700">BDS</td>
                    <td className="px-6 py-4 text-right text-gray-800">&#8377;1,000 / month</td>
                    <td className="px-6 py-4 text-gray-600">Boys &amp; Girls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#006837] to-[#002309]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Scholarships?
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            Contact our admission office for eligibility details and application process.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-gray-200">+91 93458 55001</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-gray-200">dental@jkkn.ac.in</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
