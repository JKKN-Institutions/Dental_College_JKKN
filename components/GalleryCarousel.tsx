'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryCarouselProps {
  title?: string;
  images: GalleryImage[];
}

const PER_PAGE = 3;

export default function GalleryCarousel({ title, images }: GalleryCarouselProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(images.length / PER_PAGE));
  const multiPage = totalPages > 1;
  const visible = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div>
      {title && (
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B5E20] mb-5 sm:mb-6">
          {title}
        </h2>
      )}

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Left arrow */}
        <button
          onClick={() => setPage((p) => p - 1)}
          aria-label="Previous"
          disabled={page === 0}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Images */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {visible.map((img, i) => (
            <div key={i}>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              {img.caption && (
                <p className="mt-2 text-sm font-semibold text-gray-700">{img.caption}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => setPage((p) => p + 1)}
          aria-label="Next"
          disabled={page === totalPages - 1}
          className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      {multiPage && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                i === page ? 'bg-[#1B5E20]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
