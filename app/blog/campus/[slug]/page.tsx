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
import { inlineCtaFor } from '@/lib/blog-inline-cta';
import { blogFromMyJkkn, blogSiteKey, getPost, listPosts } from '@/lib/blog/myjkkn';
import { MYJKKN_URL } from '@/lib/careers/config';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
  /** ?preview=<token>: the Preview link in MyJKKN opens a draft (BLOG_SOURCE=myjkkn only). */
  searchParams: Promise<{ preview?: string }>;
};

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    const detail = await getPost(slug, preview);
    if (!detail) return { title: 'Blog Post Not Found | JKKN Dental College' };
    const { post } = detail;
    const url = `https://dental.jkkn.ac.in/blog/campus/${post.slug}/`;
    // The SEO fields are filled in MyJKKN; where the writer left one empty, MyJKKN has
    // already fallen back to the title, excerpt, featured image and the post's own address.
    const description =
      post.seo.description || `Read ${post.title} on the JKKN Dental College campus blog.`;
    // MyJKKN gives the post's own address without the last slash; this site serves it with
    // one (trailingSlash). A canonical the writer pointed somewhere else is used as written.
    const canonical =
      post.seo.canonical_url.replace(/\/+$/, '') === url.replace(/\/+$/, '') ? url : post.seo.canonical_url;
    return {
      // absolute: a written SEO title is the whole title, so the layout's suffix is not added to it.
      title:
        post.seo.title === post.title
          ? `${post.title} | JKKN Dental College Blog`
          : { absolute: post.seo.title },
      description,
      ...(post.seo.keywords.length > 0 && { keywords: post.seo.keywords }),
      alternates: { canonical },
      openGraph: {
        title: post.seo.title,
        description,
        url,
        siteName: 'JKKN Dental College & Hospital',
        type: 'article',
        locale: 'en_IN',
        ...(post.seo.og_image && {
          images: [{ url: post.seo.og_image, width: 1200, height: 630, alt: post.title }],
        }),
      },
      twitter: {
        card: 'summary_large_image',
        title: post.seo.title,
        description,
        ...(post.seo.og_image && { images: [post.seo.og_image] }),
      },
      ...((detail.preview || post.seo.noindex) && {
        robots: { index: false, follow: !detail.preview },
      }),
    };
  }

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

/** The post page when posts come from MyJKKN (BLOG_SOURCE=myjkkn). Same markup and schema as below. */
async function MyJkknBlogPost({ slug, previewToken }: { slug: string; previewToken?: string }) {
  const detail = await getPost(slug, previewToken);
  if (!detail) notFound();
  const { post, related, comments, preview } = detail;

  const postUrl = `https://dental.jkkn.ac.in/blog/campus/${post.slug}/`;
  const popularPosts = (await listPosts(4)).posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const { processedHtml, tocItems, words, readTime } = renderBlogBody(post);

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
    datePublished: post.published_at ?? post.created_at,
    dateModified: post.updated_at,
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  // Same BlogPosting as the page below; every value is a field written in MyJKKN.
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${postUrl}#webpage` },
    "url": postUrl,
    "headline": post.title,
    ...(post.excerpt && { "description": post.excerpt }),
    ...(post.cover_image_url && { "image": post.cover_image_url }),
    "datePublished": post.published_at ?? post.created_at,
    "dateModified": post.updated_at,
    "author": post.author_name
      ? { "@type": "Person", "name": post.author_name, "worksFor": dentalOrgRef }
      : { "@type": "Organization", "name": "JKKN Dental College Editorial Team", "url": "https://dental.jkkn.ac.in/" },
    "publisher": {
      ...dentalOrgRef,
      "logo": { "@type": "ImageObject", "url": DENTAL_LOGO_URL },
    },
    ...(post.category && { "articleSection": post.category }),
    ...(post.tags && { "keywords": post.tags }),
    ...(words > 0 && { "wordCount": words }),
    "inLanguage": "en-IN",
    "isPartOf": { "@type": "Blog", "@id": "https://dental.jkkn.ac.in/blog/#blog", "name": "JKKN Dental College Blog", "url": "https://dental.jkkn.ac.in/blog/" },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* A draft preview carries no structured data: it is not published and not indexed. */}
      {!preview && (
        <>
          <StructuredData data={breadcrumbSchema} />
          <StructuredData data={speakableSchema} />
          <StructuredData data={blogPostingSchema} />
        </>
      )}
      <Header />
      {preview && (
        <div className="bg-[#ffde59] border-b border-amber-300">
          <p className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 text-sm font-semibold text-[#032816]">
            Draft Preview — this post is not published yet and is hidden from search engines.
          </p>
        </div>
      )}
      <CampusBlogContent
        post={post}
        processedContent={processedHtml}
        tocItems={tocItems}
        readTime={readTime}
        wordCount={words}
        popularPosts={popularPosts}
        relatedPosts={related}
        initialComments={comments}
        commentsVia={{ api: `${MYJKKN_URL}/api/public/blog/comments`, site: blogSiteKey() }}
        commentFormOpen={post.allow_comments && !preview}
        inlineCta={preview ? null : inlineCtaFor(post.slug, processedHtml)}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default async function CampusBlogPost({ params, searchParams }: PageProps) {
  const { slug } = await params;

  if (blogFromMyJkkn()) {
    const { preview } = await searchParams;
    return <MyJkknBlogPost slug={slug} previewToken={preview} />;
  }

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
  // Enquiry box inside the post - every post since 2026-11-05; course + place from lib/blog-inline-cta.ts.
  const inlineCta = inlineCtaFor(post.slug, processedHtml);

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
        inlineCta={inlineCta}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
