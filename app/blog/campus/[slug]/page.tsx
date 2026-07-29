import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';
import { renderBlogBody } from '@/lib/blog-render';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: post } = await supabase
    .from('blogs')
    .select('title, excerpt, slug, cover_image_url')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) {
    return { title: 'Blog Post Not Found | JKKN Dental College' };
  }

  const title = `${post.title} | JKKN Dental College Blog`;
  const description =
    post.excerpt || `Read ${post.title} on the JKKN Dental College campus blog.`;
  const url = `https://dental.jkkn.ac.in/blog/campus/${post.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      siteName: 'JKKN Dental College & Hospital',
      type: 'article',
      locale: 'en_IN',
      ...(post.cover_image_url && {
        images: [{ url: post.cover_image_url, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      ...(post.cover_image_url && { images: [post.cover_image_url] }),
    },
  };
}

export default async function CampusBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;
  const { data: post } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!post) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dental.jkkn.ac.in/blog/" },
      { "@type": "ListItem", "position": 3, "name": "Campus", "item": "https://dental.jkkn.ac.in/blog/campus/" },
      { "@type": "ListItem", "position": 4, "name": post.title, "item": `https://dental.jkkn.ac.in/blog/campus/${post.slug}/` },
    ],
  };

  const speakableSchema = generateSpeakableWebPageSchema({
    title: post.title,
    description: post.excerpt ?? post.title,
    url: `https://dental.jkkn.ac.in/blog/campus/${post.slug}/`,
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] = await Promise.all([
    // Popular: other recent published blogs
    supabase
      .from('blogs')
      .select('id, title, slug, category, published_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Related: same category, exclude current
    supabase
      .from('blogs')
      .select(
        'id, title, slug, category, excerpt, cover_image_url, published_at, created_at'
      )
      .eq('college_id', collegeId)
      .eq('is_published', true)
      .eq('category', post.category ?? 'General')
      .neq('id', post.id)
      .order('created_at', { ascending: false })
      .limit(3),
    // Approved comments for this post
    supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('blog_id', post.id)
      .eq('status', 'approved')
      .order('created_at', { ascending: true }),
  ]);

  // Structured posts (new format with sections JSONB) skip HTML processing
  const { processedHtml, tocItems, words, readTime } = renderBlogBody(post);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts ?? []}
        relatedPosts={relatedPosts ?? []}
        initialComments={initialComments ?? []}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
