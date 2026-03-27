import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateWebPageSchema, generateSpeakableWebPageSchema } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Blog | JKKN Dental College & Hospital',
  description: 'Latest articles, news & insights from JKKN Dental College & Hospital. Dental education tips, admission guides, campus updates & career advice.',
  alternates: {
    canonical: '/blog/',
  },
  openGraph: {
    title: 'Blog | JKKN Dental College & Hospital',
    description: 'Latest articles, news & insights from JKKN Dental College & Hospital. Dental education tips, admission guides, campus updates & career advice.',
    url: 'https://dental.jkkn.ac.in/blog/',
    siteName: 'JKKN Dental College & Hospital',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | JKKN Dental College & Hospital',
    description: 'Latest articles, news & insights from JKKN Dental College & Hospital. Dental education tips, admission guides, campus updates & career advice.',
  },
};

export const dynamic = 'force-dynamic';

const blogBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dental.jkkn.ac.in/blog/" }
  ]
};

const blogWebPageSchema = generateWebPageSchema({
  title: 'Blog | JKKN Dental College & Hospital',
  description: 'Latest articles, news & insights from JKKN Dental College & Hospital. Dental education tips, admission guides, campus updates & career advice.',
  url: 'https://dental.jkkn.ac.in/blog/',
  datePublished: '2024-10-01',
  dateModified: '2026-03-18',
});

const blogSpeakableSchema = generateSpeakableWebPageSchema({
  title: 'Blog | JKKN Dental College & Hospital',
  description: 'Latest articles, news & insights from JKKN Dental College & Hospital. Dental education tips, admission guides, campus updates & career advice.',
  url: 'https://dental.jkkn.ac.in/blog/',
  speakableCssSelectors: ['h1', '.hero-description', 'article p'],
});

export default async function BlogPage() {
  // Fetch admin-created posts from Supabase
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: campusPosts } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, author_name, category, cover_image_url, published_at, created_at, read_time')
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(9);

  const hasCampusPosts = campusPosts && campusPosts.length > 0;

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <StructuredData data={blogBreadcrumbSchema} />
      <StructuredData data={blogWebPageSchema} />
      <StructuredData data={blogSpeakableSchema} />
      <Header />

      {/* Hero */}
      <section className="bg-[#1B5E20] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#FFC107] text-xs font-semibold tracking-widest uppercase mb-2">
            JKKN Dental College &amp; Hospital
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Our Blog</h1>
          <p className="text-green-200 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Latest articles, insights and updates on dental education, campus life, and careers.
          </p>
        </div>
      </section>

      {/* ── Coming Soon — shown when no posts exist ── */}
      {!hasCampusPosts && (
        <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#e8f0ec] flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#1B5E20]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1B5E20] mb-3">Blog Coming Soon</h1>
          <p className="text-gray-500 text-base max-w-md">
            We&apos;re working on articles and insights about dental education, campus life, and careers. Check back soon!
          </p>
        </section>
      )}

      {/* ── Campus News (Admin Posts) Section — shown only when posts exist ── */}
      {hasCampusPosts && (
        <section className="bg-[#FBFBEE] border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309]">
                Latest Articles
              </h2>
              <p className="text-gray-500 text-sm mt-1.5">
                Expert insights on dental education and careers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusPosts.map((post) => {
                const cat = post.category || 'General';
                const firstLetter = post.title?.[0]?.toUpperCase() ?? 'B';
                const authorInitials = (post.author_name ?? 'JE').split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase();
                const authorShort = post.author_name
                  ? post.author_name.length > 10
                    ? post.author_name.slice(0, 9) + '...'
                    : post.author_name
                  : 'JKKN Team';
                const readMins = post.read_time
                  ? post.read_time.replace(/[^0-9]/g, '') || '5'
                  : '5';

                return (
                  <a
                    key={post.id}
                    href={`/blog/campus/${post.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
                  >
                    {/* Cover image / placeholder */}
                    <div className="relative" style={{ height: '13rem' }}>
                      {post.cover_image_url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.cover_image_url}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#e8f0ec] flex items-center justify-center">
                          <span
                            className="font-black select-none"
                            style={{ fontSize: '7rem', color: '#c5d9cc', lineHeight: 1 }}
                          >
                            {firstLetter}
                          </span>
                        </div>
                      )}
                      {/* Category badge */}
                      <span className="absolute top-3 left-3 bg-[#3B82F6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {cat}
                      </span>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-gray-900 text-[0.95rem] leading-snug mb-2 line-clamp-3">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Footer */}
                      <div className="flex items-center gap-3 mt-auto flex-wrap">
                        {/* Author */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <div className="w-7 h-7 rounded-full bg-[#d1e8da] flex items-center justify-center flex-shrink-0">
                            <span className="text-[10px] font-bold text-[#006837]">{authorInitials}</span>
                          </div>
                          <span className="text-xs text-gray-600">{authorShort}</span>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs">{formatDate(post.published_at ?? post.created_at)}</span>
                        </div>

                        {/* Read time */}
                        <div className="flex items-center gap-1 text-gray-500 flex-shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-xs">{readMins} min</span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
