import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import StructuredData from '@/components/StructuredData';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FacultyTable from '@/components/FacultyTable';
import { facultyDepartments, getFacultyDepartment } from '@/data/facultyDirectory';

interface FacultyDepartmentPageProps {
  params: Promise<{ department: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return facultyDepartments.map((d) => ({ department: d.slug }));
}

export async function generateMetadata({ params }: FacultyDepartmentPageProps): Promise<Metadata> {
  const { department } = await params;
  const dept = getFacultyDepartment(department);
  if (!dept) return {};

  const full = `${dept.name} Faculty | JKKN Dental College & Hospital`;
  const title = full.length <= 60 ? full : `${dept.name} Faculty | JKKN Dental`;
  const description = `Faculty of the Department of ${dept.name}, JKKN Dental College & Hospital, Komarapalayam: ${dept.members.length} teaching staff with designation and qualification.`;
  const url = `https://dental.jkkn.ac.in/faculty/${dept.slug}/`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/faculty/${dept.slug}/` },
    openGraph: { title, description, url, siteName: 'JKKN Dental College & Hospital', type: 'website', locale: 'en_IN' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function FacultyDepartmentPage({ params }: FacultyDepartmentPageProps) {
  const { department } = await params;
  const dept = getFacultyDepartment(department);
  if (!dept) notFound();

  const url = `https://dental.jkkn.ac.in/faculty/${dept.slug}/`;
  const others = facultyDepartments.filter((d) => d.slug !== dept.slug);

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Faculty of the Department of ${dept.name}`,
    url,
    numberOfItems: dept.members.length,
    itemListElement: dept.members.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Person',
        name: m.name,
        jobTitle: m.designation,
        worksFor: { '@type': 'EducationalOrganization', name: 'JKKN Dental College & Hospital' },
      },
    })),
  };

  return (
    <main className="bg-[#FBFBEE]">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
          { name: 'Faculty', url: 'https://dental.jkkn.ac.in/faculty/' },
          { name: dept.name, url },
        ]}
      />
      <StructuredData data={listSchema} />
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
                <span>Faculty</span>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li>
                <span aria-current="page">{dept.name}</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold uppercase text-white sm:text-3xl">Department of {dept.name}</h1>
          <p className="hero-description mt-2 text-sm font-semibold tracking-widest text-white/90 sm:text-base">
            FACULTY LIST
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <FacultyTable departmentName={dept.name} members={dept.members} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14" aria-labelledby="other-departments">
        <h2 id="other-departments" className="text-lg font-bold text-[#006837]">
          Other departments
        </h2>
        <ul className="mt-4 flex list-none flex-wrap gap-3 p-0">
          <li>
            <Link
              href="/faculty/"
              className="inline-flex min-h-[44px] items-center rounded border border-[#006837] bg-[#006837] px-4 text-sm font-semibold text-white hover:bg-[#002309]"
            >
              All departments
            </Link>
          </li>
          {others.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/faculty/${d.slug}/`}
                className="inline-flex min-h-[44px] items-center rounded border border-[#006837]/30 bg-white px-4 text-sm font-medium text-[#006837] hover:border-[#006837]"
              >
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
