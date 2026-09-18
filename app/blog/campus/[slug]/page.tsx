import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from './CampusBlogContent';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';
import { dentalOrgRef, DENTAL_LOGO_URL } from '@/lib/schema/organization';
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
    // .single() ERRORS when a slug matches more than one row, and that error path
    // ends in a 404 on a post that is actually live. Measured 2026-09-07: six
    // /blog/campus/ URLs returned 404 while the same slugs render fine elsewhere.
    // Take the newest matching row instead of demanding exactly one.
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

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
    // See the note in generateMetadata: .single() turns a duplicate slug into a
    // 404 on a live post. Newest row wins.
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!post) notFound();

  const postUrl = `https://dental.jkkn.ac.in/blog/campus/${post.slug}/`;

  // No "Campus" crumb: /blog/campus/ has no page and answered 404 on all 48 live posts
  // (measured 2026-09-18). A breadcrumb item must be a real URL.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dental.jkkn.ac.in/blog/" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": postUrl },
    ],
  };

  const speakableSchema = generateSpeakableWebPageSchema({
    title: post.title,
    description: post.excerpt ?? post.title,
    url: postUrl,
    datePublished: post.published_at ?? post.created_at ?? undefined,
    dateModified: post.updated_at ?? post.published_at ?? post.created_at ?? undefined,
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

  // BlogPosting was MISSING on every CMS post (48 of 48 live, measured 2026-09-18) - the posts
  // shipped only a breadcrumb and a WebPage, so nothing told Google or an AI engine that this
  // is an article, when it was written, or by whom. Every value below is a CMS field the page
  // itself renders; nothing is invented (no author email, no rating).
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${postUrl}#webpage` },
    "url": postUrl,
    "headline": post.title,
    ...(post.excerpt && { "description": post.excerpt }),
    ...(post.cover_image_url && { "image": post.cover_image_url }),
    ...(post.published_at || post.created_at ? { "datePublished": post.published_at ?? post.created_at } : {}),
    ...(post.updated_at || post.published_at || post.created_at
      ? { "dateModified": post.updated_at ?? post.published_at ?? post.created_at }
      : {}),
    "author": post.author_name
      ? { "@type": "Person", "name": post.author_name, "worksFor": dentalOrgRef }
      : { "@type": "Organization", "name": "JKKN Dental College Editorial Team", "url": "https://dental.jkkn.ac.in/" },
    "publisher": {
      ...dentalOrgRef,
      "logo": { "@type": "ImageObject", "url": DENTAL_LOGO_URL },
    },
    ...(post.category && { "articleSection": post.category }),
    ...(Array.isArray(post.tags) && post.tags.length > 0 && { "keywords": post.tags.join(', ') }),
    ...(words > 0 && { "wordCount": words }),
    "inLanguage": "en-IN",
    "isPartOf": { "@type": "Blog", "@id": "https://dental.jkkn.ac.in/blog/#blog", "name": "JKKN Dental College Blog", "url": "https://dental.jkkn.ac.in/blog/" },
  };

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <StructuredData data={blogPostingSchema} />
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
