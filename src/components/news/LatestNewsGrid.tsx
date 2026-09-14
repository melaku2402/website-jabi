
"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { CalendarDays, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import type { NewsArticleDTO } from "@/lib/repositories/news";

interface LatestNewsGridProps {
  selectedCategory: string;
  articles: NewsArticleDTO[];
}

export function LatestNewsGrid({ selectedCategory, articles: latestNews }: LatestNewsGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const t = useTranslations("NewsPage.latest");
  const tCategories = useTranslations("HomePage.news.categories");

  // Reset to initial 6 cards whenever selected category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory]);

  // Filter articles by active category
  const filteredArticles = latestNews.filter((article) => {
    if (selectedCategory === "all") return true;
    return article.category === selectedCategory;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  const hasMoreArticles = visibleCount < filteredArticles.length;
  const isExpanded =
    visibleCount > 6 && visibleCount >= filteredArticles.length;

  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600">
        {t("heading")}
      </h2>

      {filteredArticles.length === 0 ? (
        <div className="mt-8 text-center text-sm text-gray-500">
          {t("empty")}
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
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
                    {tCategories(article.category)}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <CalendarDays className="h-3 w-3" />
                    {formatDate(article.publishedAt ?? "")}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-bold leading-snug text-[#03387C] transition-colors group-hover:text-emerald-600">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-500">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-3">
                  <Link
                    href={`/news/${article.slug}`}
                   
                 className="relative mt-4 ml-auto inline-flex w-fit items-center gap-1.5 overflow-hidden rounded-xl px-3 py-1.5 text-sm  text-green-700 transition-all duration-300 group-hover:bg-[#00a63f] group-hover:px-5 group-hover:py-2.5 group-hover:text-white group-hover:shadow-md active:scale-95"
                 
                  >
                    {t("readMore")}
                                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Action Button: View More vs Show Less */}
      {filteredArticles.length > 6 && (
        <div className="mt-10 text-center">
          {hasMoreArticles ? (
            <button
              onClick={handleViewMore}
              className="inline-flex items-center gap-2 rounded-lg bg-[#03387C] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#03387C] focus:ring-offset-2"
            >
              {t("viewMore")}
              <ChevronDown className="h-4 w-4" />
            </button>
          ) : isExpanded ? (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center gap-2 rounded-lg bg-[#03387C] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#03387C] focus:ring-offset-2"
            >
              {t("showLess")}
              <ChevronUp className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}