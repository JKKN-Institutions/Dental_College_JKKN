import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { UserCircle2 } from 'lucide-react';
import DentalEnquiryForm from '@/components/lead/DentalEnquiryForm';
import StructuredData from '@/components/StructuredData';
import { generateBreadcrumbSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const dynamic = 'force-dynamic';

// Measured 2026-09-18: /faculty/ shipped zero JSON-LD. Same two nodes every other hub page carries.
const facultyBreadcrumbSchema = generateBreadcrumbSchema('/faculty/');
const facultyWebPageSchema = generateSpeakableWebPageSchema({
  title: 'Faculty (Senior Learners) | JKKN Dental College & Hospital',
  description:
    'Meet the experienced senior learners of JKKN Dental College & Hospital, Komarapalayam. Qualified senior learners and specialists in BDS and MDS programmes.',
  url: 'https://dental.jkkn.ac.in/faculty/',
  speakableCssSelectors: ['h1', '.hero-description'],
});

export const metadata: Metadata = {
  title: 'Faculty (Senior Learners) | JKKN Dental College & Hospital',
  description:
    'Meet the experienced senior learners of JKKN Dental College & Hospital, Komarapalayam. Qualified senior learners and specialists in BDS and MDS programmes.',
  alternates: { canonical: '/faculty/' },
  openGraph: {
    title: 'Faculty (Senior Learners) | JKKN Dental College & Hospital',
    description:
      'Meet the experienced senior learners of JKKN Dental College & Hospital, Komarapalayam.',
    url: 'https://dental.jkkn.ac.in/faculty/',
    siteName: 'JKKN Dental College & Hospital',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faculty (Senior Learners) | JKKN Dental College & Hospital',
    description:
      'Meet the experienced senior learners of JKKN Dental College & Hospital, Komarapalayam.',
  },
};

function toSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

const VALID_SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Seniority first (marketing audit T9, 2026-10-21): the list was A-Z, so card 2 was a first-year
// lecturer and the five professors were scattered. Rank by designation; A-Z stays inside a rank.
function designationRank(designation: string | null): number {
  const d = (designation ?? '').toLowerCase();
  if (/vice[\s-]*principal/.test(d)) return 1;
  if (/principal|dean/.test(d)) return 0;
  if (/associate professor|reader/.test(d)) return 3;
  if (/assistant professor|senior lecturer/.test(d)) return 4;
  if (/professor/.test(d)) return 2;
  if (/lecturer|tutor/.test(d)) return 5;
  return 6;
}

export default async function FacultyPage() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID;

  const { data: rows } = await supabase
    .from('faculty')
    .select(
      'id, name, designation, department, qualification, experience_years, photo_url, slug, email, myjkkn_staff_id'
    )
    .eq('college_id', collegeId)
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true });

  const seen = new Set<string>();
  const members = (rows ?? []).filter((m) => {
    const key =
      m.myjkkn_staff_id ||
      (m.email ? `email:${m.email.toLowerCase().trim()}` : null) ||
      `name:${m.name.toLowerCase().trim()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  // Array.prototype.sort is stable, so the database order (display_order, name) holds within a rank.
  members.sort((a, b) => designationRank(a.designation) - designationRank(b.designation));

  return (
    <>
      <StructuredData data={facultyBreadcrumbSchema} />
      <StructuredData data={facultyWebPageSchema} />
      <Header />
      <main className="min-h-screen bg-[#fbfbee]">
        {/* Hero */}
        <section className="bg-[#0b6d41] py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[#ffde59] text-xs font-semibold tracking-widest uppercase mb-2">
              JKKN Dental College &amp; Hospital
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Faculty (Senior Learners)</h1>
            <p className="text-[#d4f1e4] mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Experienced specialists guiding the next generation of dental professionals.
            </p>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {members && members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {members.map((m) => {
                const initials = m.name
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w: string) => w[0].toUpperCase())
                  .join('');

                const card = (
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col items-center text-center hover:shadow-md transition">
                    {/* Photo / Initials */}
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex-shrink-0 bg-[#0b6d41] flex items-center justify-center">
                      {m.photo_url ? (
                        <img
                          src={m.photo_url}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-white text-xl font-bold">{initials}</span>
                      )}
                    </div>

                    {/* Info */}
                    <p className="font-semibold text-gray-900 text-sm leading-snug">
                      {m.name}
                    </p>
                    {m.designation && (
                      <p className="text-xs text-[#0b6d41] font-medium mt-0.5">
                        {m.designation}
                      </p>
                    )}
                    {m.department && (
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {m.department}
                      </p>
                    )}
                    {m.qualification && (
                      <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                        {m.qualification}
                      </p>
                    )}
                    {m.experience_years > 0 && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        {m.experience_years}+ yrs experience
                      </p>
                    )}
                  </div>
                );

                const validSlug = m.slug && VALID_SLUG_RE.test(m.slug) ? m.slug : toSlug(m.name);

                return (
                  <div key={m.id}>
                    <a href={`/faculty/${validSlug}/`} className="block">
                      {card}
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                <UserCircle2 className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium">No faculty found.</p>
            </div>
          )}
        </section>

        {/* Enquiry form (marketing audit L3, 2026-10-21): 255 views in 60 days and no form. */}
        <section className="bg-gradient-to-br from-[#0b6d41] to-[#0f8f56] py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-2">Talk to Our Admission Team</h2>
            <p className="text-white/80 text-center text-sm mb-8">Ask about BDS / MDS fees, seats and guides. We call you back within 24 hours.</p>
            <DentalEnquiryForm sourcePage="faculty" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
