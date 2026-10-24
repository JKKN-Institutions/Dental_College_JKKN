import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';
import { facultyDepartments, facultyGroups } from '@/data/facultyDirectory';

const PAGE_URL = 'https://dental.jkkn.ac.in/faculty/';
const TITLE = 'Faculty by Department | JKKN Dental College & Hospital';
const DESCRIPTION =
  'Department-wise faculty list of JKKN Dental College & Hospital, Komarapalayam: MDS and BDS departments with designation and qualification.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/faculty/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'JKKN Dental College & Hospital',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const webPageSchema = generateSpeakableWebPageSchema({
  title: TITLE,
  description: DESCRIPTION,
  url: PAGE_URL,
  speakableCssSelectors: ['h1', '.hero-description'],
});

export default function FacultyHubPage() {
  return (
    <main className="bg-[#FBFBEE]">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Faculty', url: PAGE_URL },
        ]}
      />
      <StructuredData data={webPageSchema} />
      <Header />

      <section className="bg-[#006837] px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/80 sm:text-sm">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="inline-flex min-h-[44px] items-center hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li>
                <span aria-current="page">Faculty</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Our Faculty by Department</h1>
          <p className="hero-description mt-3 max-w-2xl text-sm text-white/90 sm:text-base">
            Choose a department to view its official faculty list.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-12">
        {facultyGroups.map((group) => {
          const departments = facultyDepartments.filter((d) => d.group === group.id);
          return (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-28">
              <h2 id={`${group.id}-heading`} className="text-2xl font-bold text-[#006837]">
                {group.label}
              </h2>
              <p className="mt-1 text-sm text-[#002309]">{group.description}</p>

              <ul className="mt-6 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {departments.map((dept) => (
                  <li key={dept.slug}>
                    <Link
                      href={`/faculty/${dept.slug}/`}
                      className="group flex h-full flex-col rounded-lg border border-[#006837]/20 bg-white p-5 transition-all hover:border-[#006837] hover:shadow-md"
                    >
                      <span className="inline-flex w-fit rounded bg-[#7cb983] px-2.5 py-1 text-xs font-bold tracking-wider text-[#002309]">
                        {dept.code}
                      </span>
                      <span className="mt-3 text-lg font-bold text-[#006837]">{dept.name}</span>
                      <span className="mt-1 text-sm text-[#002309]">
                        Faculty list &middot; {dept.members.length}{' '}
                        {dept.members.length === 1 ? 'member' : 'members'}
                      </span>
                      <span className="mt-4 inline-flex min-h-[44px] items-center gap-1 pt-2 text-sm font-semibold text-[#006837] group-hover:underline">
                        View faculty <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
