import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { photoGallery } from '@/data/news-content';

export function PhotoGallery() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-950">Photo Gallery</h3>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {photoGallery.map((src, idx) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
            <Image src={src} alt={`Gallery photo ${idx + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <Link
        href="/news/gallery"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-blue-950 hover:bg-gray-50"
      >
        View Full Gallery <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
