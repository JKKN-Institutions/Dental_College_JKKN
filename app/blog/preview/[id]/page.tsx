import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import CampusBlogContent from '../../campus/[slug]/CampusBlogContent';
import { renderBlogBody } from '@/lib/blog-render';

// Never cached, never pre-rendered — a preview must always show the latest draft.
export const dynamic = 'force-dynamic';

// Belt and braces: this page is also blocked in robots.ts and the token link is
// unguessable, but noindex/nofollow keeps drafts out of search results even if
// somebody pastes the link somewhere public.
export const metadata: Metadata = {
  title: 'Draft Preview | JKKN Dental College',
  robots: { index: false, follow: false, nocache: true },
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** The subset of the `blogs` row this page and CampusBlogContent actually read. */
interface BlogRow {
  id: string;
  college_id: string | null;
  title: string;
  slug: string | null;
  category: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  excerpt: string | null;
  content: string | null;
  sections: unknown;
  post_status: string | null;
  is_published: boolean | null;
  published_at: string | null;
  created_at: string;
  tags: string | null;
  read_time: string | null;
}

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;

  if (!UUID_RE.test(id)) notFound();

  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  // Is an admin looking at this? Decides both the fallback access path and
  // whether the banner offers an "Edit this post" link.
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const isAdmin = !!session?.user;

  let post: BlogRow | null = null;

  if (token) {
    // Public share link — the SECURITY DEFINER function returns the row only
    // when the secret matches, so no login (and no RLS change) is needed.
    const { data } = await supabase.rpc('get_blog_preview', {
      p_id: id,
      p_token: token,
    });
    post = ((Array.isArray(data) ? data[0] : data) as BlogRow | null) ?? null;

    // The function bypasses RLS, so keep it scoped to this site's posts.
    if (post && post.college_id && post.college_id !== collegeId) post = null;
  } else if (isAdmin) {
    // Logged-in admin, no token needed.
    const { data } = await supabase.from('blogs').select('*').eq('id', id).single();
    post = (data as BlogRow | null) ?? null;
  }

  // No token and not logged in → indistinguishable from a page that doesn't exist.
  if (!post) notFound();

  const status: string =
    post.post_status ?? (post.is_published ? 'published' : 'draft');

  const [{ data: popularPosts }, { data: relatedPosts }, { data: initialComments }] =
    await Promise.all([
      supabase
        .from('blogs')
        .select('id, title, slug, category, published_at, created_at')
        .eq('college_id', collegeId)
        .eq('is_published', true)
        .neq('id', post.id)
        .order('created_at', { ascending: false })
        .limit(3),
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
      supabase
        .from('blog_comments')
        .select('id, author_name, content, created_at')
        .eq('blog_id', post.id)
        .eq('status', 'approved')
        .order('created_at', { ascending: true }),
    ]);

  const { processedHtml, tocItems, words, readTime } = renderBlogBody(post);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Preview banner — the only thing that differs from the live page */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-amber-950 px-2.5 py-1 rounded-full">
            {status === 'published' ? 'Preview' : 'Draft Preview'}
          </span>
          <p className="text-sm text-amber-900">
            This page is not public
            {status !== 'published' && ' — the post is still a draft'}. Only
            people with this link can see it.
          </p>
          {isAdmin && (
            <Link
              href={`/admin/blogs/${post.id}`}
              className="text-sm font-semibold text-[#006837] underline underline-offset-2 hover:text-[#005a2e] ml-auto"
            >
              Edit this post →
            </Link>
          )}
        </div>
      </div>

      <CampusBlogContent
        post={{ ...post, slug: post.slug ?? '' }}
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
