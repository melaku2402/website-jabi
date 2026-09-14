

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { CalendarDays, ArrowLeft, Tag } from "lucide-react";
import { getPublishedNewsBySlug } from "@/lib/repositories/news";

function formatDate(date: string | null) {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

interface NewsDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const article = await getPublishedNewsBySlug(slug, locale);

  if (!article) {
    return { title: `${t("news.title")} | ${t("suffix")}` };
  }

  return {
    // Article titles/excerpts are real content, not UI chrome, so they aren't translated (see notes on news content elsewhere in this project).
    title: `${article.title} | ${t("suffix")}`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations("NewsPage.detail");
  const tCategories = await getTranslations("HomePage.news.categories");

  const article = await getPublishedNewsBySlug(slug, locale);

  if (!article) {
    notFound();
  }

  const categoryText = tCategories(article.category);

  return (
    <main className="min-h-screen bg-gray-50/50 py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#022777] transition-colors hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToNews")}
        </Link>

        {/* Article Container */}
        <article className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          {/* Cover Image */}
          <div className="relative h-72 w-full bg-gray-100 sm:h-96 lg:h-[420px]">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Header & Content */}
          <div className="p-6 sm:p-10">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                <Tag className="h-3 w-3" />
                {categoryText}
              </span>
              <p className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <CalendarDays className="h-4 w-4 text-emerald-600" />
                {formatDate(article.publishedAt)}
              </p>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-2xl font-black text-[#022777] sm:text-4xl sm:leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 sm:text-lg">
              {article.excerpt}
            </p>

            <hr className="my-8 border-gray-100" />

            {/* Main Article Body */}
            <div className="prose prose-blue max-w-none text-sm leading-relaxed text-gray-700 sm:text-base">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <p>{article.excerpt}</p>
              )}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}