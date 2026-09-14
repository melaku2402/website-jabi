
"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import type { NewsArticleDTO } from "@/lib/repositories/news";

const dotCount = 4;

export function FeaturedNews({ article: featuredNewsItem }: { article: NewsArticleDTO | undefined }) {
  const [activeDot, setActiveDot] = useState(0);
  const t = useTranslations("NewsPage.featured");
  const tCategories = useTranslations("HomePage.news.categories");

  if (!featuredNewsItem) return null;

  return (
    <div>
      <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-600">
        {t("eyebrow")}
      </h2>

      <div className="group mt-4 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-emerald-100 hover:shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Featured image */}
          <div className="relative h-64 w-full overflow-hidden lg:h-full">
            <Image
              src={featuredNewsItem.imageUrl}
              alt={featuredNewsItem.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-between p-6 lg:p-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {tCategories(featuredNewsItem.category)}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <CalendarDays className="h-3.5 w-3.5 text-emerald-600" />
                  {featuredNewsItem.publishedAt ? formatDate(featuredNewsItem.publishedAt) : ""}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-extrabold leading-snug text-[#03387C]">
                {featuredNewsItem.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {featuredNewsItem.excerpt}
              </p>
            </div>

            {/* Read More Link & Dots */}
            <div className="mt-6 flex flex-col items-start gap-5">
              <Link
                href={`/news/${featuredNewsItem.slug}`}
                className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#03387C] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#03387C]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/20 active:translate-y-0"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-emerald-500/20 to-emerald-600/0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                <span className="relative z-10">{t("readMore")}</span>
                <ArrowRight className="relative z-10 h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
              </Link>

              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: dotCount }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDot(idx)}
                    aria-label={`Go to featured item ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeDot === idx
                        ? "w-6 bg-emerald-600"
                        : "w-2 bg-gray-200 hover:bg-emerald-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}