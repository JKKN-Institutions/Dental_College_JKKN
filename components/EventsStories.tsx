import { createClient } from '@/lib/supabase/server';
import { siteConfig } from '@/lib/site-config';
import Link from 'next/link';
import Image from 'next/image';

interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_date: string | null;
  venue: string | null;
  image_url: string | null;
}

export default async function EventsStories() {
  const supabase = await createClient();

  const { data: events } = await supabase
    .from('events')
    .select('id, title, slug, description, event_date, venue, image_url')
    .eq('college_id', siteConfig.id)
    .eq('is_published', true)
    .order('event_date', { ascending: false })
    .limit(6);

  if (!events || events.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <p className="text-[#006837] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
            Latest Events
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Events &amp; Happenings
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: Event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 bg-[#006837]/10 overflow-hidden">
                {event.image_url ? (
                  <Image
                    src={event.image_url}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#006837]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {event.event_date && (
                  <p className="text-xs font-semibold text-[#006837] mb-2">
                    {new Date(event.event_date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                )}
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#006837] transition-colors line-clamp-2">
                  {event.title}
                </h3>
                {event.venue && (
                  <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.venue}
                  </p>
                )}
                {event.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 flex-1">
                    {event.description}
                  </p>
                )}
                <span className="mt-4 text-xs font-semibold text-[#006837] group-hover:underline">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
