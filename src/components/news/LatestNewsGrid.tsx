'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CalendarDays, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { latestNews, newsTotalPages } from '@/data/news-content';

const categoryLabels: Record<string, string> = {
  announcement: 'Announcement',
  'branch-update': 'Branch Update',
  event: 'Event',
  training: 'Training',
  community: 'Community',
  'financial-education': 'Financial Education',
};

export function LatestNewsGrid() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600">Latest News</h2>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestNews.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
          >
            <div className="relative h-40 w-full overflow-hidden bg-gray-100">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  {categoryLabels[article.category]}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <CalendarDays className="h-3 w-3" />
                  {article.publishedAt}
                </span>
              </div>
              <h3 className="mt-2 text-sm font-bold leading-snug text-[#03387C] transition-colors group-hover:text-emerald-600">
                {article.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-500">{article.excerpt}</p>
              <div className="mt-auto pt-3">
                <Link
                  href={`/news/${article.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold text-[#03387C] transition-colors hover:text-emerald-600"
                >
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>

        {Array.from({ length: newsTotalPages }).map((_, idx) => {
          const num = idx + 1;
          return (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`h-9 w-9 rounded-lg text-sm font-medium transition-colors ${
                page === num ? 'bg-[#03387C] text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {num}
            </button>
          );
        })}

        <button
          onClick={() => setPage((p) => Math.min(newsTotalPages, p + 1))}
          disabled={page === newsTotalPages}
          className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}