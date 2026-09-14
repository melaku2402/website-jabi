
"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { CalendarDays, ArrowRight, Newspaper } from "lucide-react";
import type { NewsArticleDTO } from "@/lib/repositories/news";

function formatDate(date: string | null) {
  if (!date) return "";
  const d = new Date(date);
  if (!d || isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

export function NewsEvents({ articles }: { articles: NewsArticleDTO[] }) {
  const t = useTranslations("HomePage.news");

  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:py-10">
      {/* Header Row */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            {t("eyebrow")}
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-[#022777] sm:text-4xl">
            {t("heading")}
          </h2>
        </div>
        <Link
          href="/news"
          className="flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-[#022777] transition-all hover:bg-gray-50 active:scale-[0.98]"
        >
          {t("viewAll")} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grid: 3 Article Cards + 1 Dark CTA Card */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => {
          const categoryText = t(`categories.${article.category}`);

          return (
            <article
              key={article.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5">
                {/* Meta Row */}
                <div className="flex items-center gap-2.5">
                  <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {categoryText}
                  </span>
                  <p className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                    <CalendarDays className="h-3.5 w-3.5 text-gray-400" />
                    {formatDate(article.publishedAt)}
                  </p>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-sm font-extrabold leading-snug text-[#022777] transition-colors group-hover:text-emerald-600">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-500">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto pt-4">
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#022777] transition-colors hover:text-emerald-600"
                  >
                    {t("readMore")}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}

        {/* 4th Column: 'More News' CTA Card */}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#022777] p-8 text-center text-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
            <Newspaper className="h-7 w-7 text-white" />
          </span>
          <h3 className="mt-5 text-2xl font-bold">{t("moreNews")}</h3>
          <p className="mt-2 text-xs leading-relaxed text-blue-100/80">
            {t("moreNewsDescription")}
          </p>
          <Link
            href="/news"
            className="group/btn mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-xs font-bold text-white transition-all hover:border-white hover:bg-white hover:text-[#022777]"
          >
            {t("viewAll")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}