import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: event } = await supabase
    .from('events')
    .select('title, description, image_url')
    .eq('slug', slug)
    .eq('college_id', siteConfig.id)
    .eq('is_published', true)
    .single();

  if (!event) return { title: 'Event Not Found' };

  return {
    title: `${event.title} | ${siteConfig.name}`,
    description: event.description?.slice(0, 160) || `Event at ${siteConfig.name}`,
    openGraph: event.image_url
      ? { images: [{ url: event.image_url }] }
      : undefined,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: event } = await supabase
    .from('events')
    .select('id, title, slug, description, event_date, venue, image_url')
    .eq('slug', slug)
    .eq('college_id', siteConfig.id)
    .eq('is_published', true)
    .single();

  if (!event) notFound();

  return (
    <main className="overflow-x-hidden w-full">
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://dental.jkkn.ac.in/' },
        { name: 'Events', url: 'https://dental.jkkn.ac.in/events/' },
      ]} />
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Back link */}
        <Link
          href="/#events"
          className="inline-flex items-center gap-1.5 text-sm text-[#006837] font-semibold mb-6 hover:underline"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Events
        </Link>

        {/* Cover image */}
        {event.image_url && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={event.image_url}
              alt={event.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {event.event_date && (
            <span className="text-sm font-semibold text-[#006837]">
              {new Date(event.event_date).toLocaleDateString('en-IN', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          )}
          {event.venue && (
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.venue}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {event.title}
        </h1>

        {/* Description */}
        {event.description && (
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
            {event.description}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
