import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ArrowLeft, Tag } from "lucide-react";
import { fallbackArticles } from "@/data/news";
import { SafeImage } from "@/components/ui/SafeImage";

const categoryLabels: Record<string, string> = {
  announcement: "Announcement",
  "branch-update": "Branch",
  event: "Event",
  training: "Training",
  community: "Community",
  "financial-education": "Financial Education",
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

interface NewsDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  // Await params per Next.js async dynamic API requirement
  const { slug } = await params;
  const article = fallbackArticles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const categoryText = categoryLabels[article.category] ?? article.category;

  return (
    <main className="min-h-screen bg-slate-50/50 py-10 lg:py-16">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#03387C] transition-colors hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to News &amp; Events
        </Link>

        {/* Article Container */}
        <article className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs">
          {/* Hero / Cover Image using SafeImage fallback */}
          <div className="relative h-72 w-full bg-slate-100 sm:h-96 lg:h-[420px]">
            <SafeImage
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Header & Meta */}
          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                <Tag className="h-3 w-3" />
                {categoryText}
              </span>
              <p className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
                <CalendarDays className="h-4 w-4 text-gray-400" />
                {formatDate(article.publishedAt)}
              </p>
            </div>

            <h1 className="mt-4 text-2xl font-black text-[#03387C] sm:text-4xl sm:leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 sm:text-lg">
              {article.excerpt}
            </p>

            <hr className="my-8 border-gray-100" />

            {/* Content */}
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