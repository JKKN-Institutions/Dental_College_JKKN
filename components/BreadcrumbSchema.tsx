import { cleanCrumbs, type CrumbItem } from '@/lib/breadcrumbs';

export default function BreadcrumbSchema({ items }: { items: CrumbItem[] }) {
  // cleanCrumbs drops hub crumbs that have no page (they answered 404 - measured 2026-09-18) and
  // normalises every item to its final trailing-slash URL, so the markup never links to a redirect.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: cleanCrumbs(items).map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
