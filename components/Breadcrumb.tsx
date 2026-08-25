'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** 'onDark' renders the trail visibly on a dark hero. Omit it and the markup is unchanged. */
  variant?: 'default' | 'onDark';
}

export default function Breadcrumb({ items, variant = 'default' }: BreadcrumbProps) {
  const onDark = variant === 'onDark';
  // Generate JSON-LD structured data for Google
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return (
    <>
      {/* Visual breadcrumb navigation for users */}
      <nav
        aria-label="Breadcrumb"
        className={
          onDark
            ? 'text-xs sm:text-sm text-[#d4f1e4] mb-4'
            : 'hidden text-xs sm:text-sm text-gray-600 mb-4 px-4 sm:px-6 lg:px-8 pt-5 pb-2'
        }
      >
        <ol className="flex flex-wrap items-center gap-1 sm:gap-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center">
              {i > 0 && (
                <span
                  className={onDark ? 'mx-1 sm:mx-2 text-[#d4f1e4]' : 'mx-1 sm:mx-2 text-gray-400'}
                  aria-hidden="true"
                >
                  &gt;
                </span>
              )}
              {i === 0 ? (
                <Link
                  href={item.url}
                  className={
                    onDark
                      ? 'text-[#d4f1e4] hover:text-white hover:underline transition-colors'
                      : 'text-primary-600 hover:text-primary-800 hover:underline transition-colors'
                  }
                >
                  {item.name}
                </Link>
              ) : i === items.length - 1 ? (
                <span
                  className={onDark ? 'text-white font-medium' : 'text-gray-900 font-medium'}
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <span className={onDark ? 'text-[#d4f1e4]' : 'text-gray-600'}>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* JSON-LD structured data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
