import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import GalleryCarousel, { GalleryImage } from '@/components/GalleryCarousel';
import StructuredData from '@/components/StructuredData';
import { generateSpeakableWebPageSchema } from '@/lib/metadata';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Campus Gallery | JKKN Dental College & Hospital Photos',
  description: 'Explore JKKN Dental College campus through our photo gallery. View our modern infrastructure, clinical facilities, laboratories, classrooms, library, and student activities.',
  keywords: 'JKKN campus photos, dental college gallery, campus facilities, infrastructure photos',
  openGraph: {
    title: 'Campus Gallery | JKKN Dental College & Hospital Photos',
    description: 'Explore JKKN Dental College campus through our photo gallery. View our modern infrastructure, clinical facilities, laboratories, classrooms, library, and student activities.',
    url: 'https://dental.jkkn.ac.in/gallery/',
    type: 'website',
    siteName: 'JKKN Dental College & Hospital',
  },
};

// ── Hardcoded images (used when no admin albums exist) ──────────────────────
const HARDCODED_IMAGES: GalleryImage[] = [
  { src: '/images/Pongal-Celebration-gallery.jpg',           alt: 'Pongal Celebration',           caption: 'Pongal Celebration' },
  { src: '/images/Farewell-Day-gallery.webp',                alt: 'Farewell Day',                 caption: 'Farewell Day' },
  { src: '/images/Founders-Day-2022-gallery.jpg',            alt: 'Founders Day 2022',            caption: 'Founders Day 2022' },
  { src: '/images/Blood-Camp-gallery.webp',                  alt: 'Blood Camp',                   caption: 'Blood Camp' },
  { src: '/images/World-Hemophilia-Day-gallery.jpg',         alt: 'World Hemophilia Day',         caption: 'World Hemophilia Day' },
  { src: '/images/World-No-Tobacco-Day-gallery.webp',        alt: 'World No Tobacco Day',         caption: 'World No Tobacco Day' },
  { src: '/images/World-Oral-Health-Day-gallery.webp',       alt: 'World Oral Health Day',        caption: 'World Oral Health Day' },
  { src: '/images/Stem-cell-gallery.webp',                   alt: 'Stem Cell',                    caption: 'Stem Cell' },
  { src: '/images/35th-College-Day-gallery.webp',            alt: '35th College Day',             caption: '35th College Day' },
  { src: '/images/ANTI-RAGGING-SEMINAR-gallery.webp',        alt: 'ANTI RAGGING SEMINAR',         caption: 'ANTI RAGGING SEMINAR' },
  { src: '/images/26th-Graduation-Day-gallery.webp',         alt: '26th Graduation Day',          caption: '26th Graduation Day' },
  { src: '/images/Basic-Of-Cancer-and-Awareness-gallery.webp', alt: 'Basic Of Cancer and Awareness', caption: 'Basic Of Cancer and Awareness' },
  { src: '/images/Fire-and-safety-gallery.webp',             alt: 'Fire and safety',              caption: 'Fire and safety' },
  { src: '/images/Prosthodontist-Day-gallery.webp',          alt: 'Prosthodontist Day',           caption: 'Prosthodontist Day' },
  { src: '/images/Yoga-day-gallery.webp',                    alt: 'Yoga day',                     caption: 'Yoga day' },
];

export default async function Gallery() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID!;

  const { data: albums } = await supabase
    .from('gallery_albums')
    .select('id, name, cover_image_url')
    .eq('college_id', collegeId)
    .order('created_at', { ascending: false });

  const hasAdminAlbums = albums && albums.length > 0;

  type AlbumImage = { image_url: string; caption: string | null; album_id: string };
  let albumImages: AlbumImage[] = [];

  if (hasAdminAlbums) {
    const albumIds = (albums ?? []).map((a) => a.id);
    const { data: imgs } = await supabase
      .from('gallery_images')
      .select('album_id, image_url, caption, display_order')
      .in('album_id', albumIds)
      .eq('college_id', collegeId)
      .order('display_order', { ascending: true });
    albumImages = (imgs ?? []) as AlbumImage[];
  }

  // Schema #4g: BreadcrumbList – /gallery Page
  const galleryBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dental.jkkn.ac.in/" },
      { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://dental.jkkn.ac.in/gallery/" }
    ]
  };

  const speakableSchema = generateSpeakableWebPageSchema({
    title: 'Campus Gallery | JKKN Dental College & Hospital Photos',
    description: 'Explore JKKN Dental College campus through our photo gallery. View our modern infrastructure, clinical facilities, laboratories, classrooms, library, and student activities.',
    url: 'https://dental.jkkn.ac.in/gallery/',
    speakableCssSelectors: ['h1', '.hero-description', 'article p'],
  });

  return (
    <main className="overflow-x-hidden">
      <StructuredData data={galleryBreadcrumbSchema} />
      <StructuredData data={speakableSchema} />
      <Header />

      <div className="bg-[#FBF8F3] py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B5E20] mb-8 sm:mb-10 md:mb-12">
            GALLERY
          </h1>

          {/* ── Admin albums ── */}
          {hasAdminAlbums && (
            <div className="space-y-10 sm:space-y-12">
              {(albums ?? []).map((album) => {
                const photos = albumImages.filter((img) => img.album_id === album.id);
                const images: GalleryImage[] =
                  photos.length > 0
                    ? photos.map((p) => ({ src: p.image_url, alt: p.caption ?? album.name }))
                    : album.cover_image_url
                    ? [{ src: album.cover_image_url, alt: album.name }]
                    : [];

                if (images.length === 0) return null;

                return (
                  <GalleryCarousel key={album.id} title={album.name} images={images} />
                );
              })}
            </div>
          )}

          {/* ── Hardcoded gallery (shown only when no admin albums exist) ── */}
          {!hasAdminAlbums && (
            <GalleryCarousel images={HARDCODED_IMAGES} />
          )}
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
