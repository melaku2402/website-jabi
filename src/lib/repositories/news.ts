import "server-only";
import { prisma } from "@/lib/prisma";
import type { ContentStatus, NewsArticle as NewsArticleRow } from "@prisma/client";
import { fallbackArticles } from "@/data/news";

export interface NewsArticleDTO {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  status: ContentStatus;
  author: string;
  publishedAt: string | null;
}

function toDTO(row: NewsArticleRow, locale: string): NewsArticleDTO {
  const isAmharic = locale === "am";
  return {
    id: row.id,
    slug: row.slug,
    title: isAmharic ? row.titleAm : row.titleEn,
    excerpt: isAmharic ? row.excerptAm : row.excerptEn,
    content: isAmharic ? row.contentAm : row.contentEn,
    category: row.category,
    imageUrl: row.imageUrl,
    status: row.status,
    author: row.author,
    publishedAt: row.publishedAt ? row.publishedAt.toISOString() : null,
  };
}

/**
 * Converts the static placeholder data (src/data/news.ts) into the same DTO
 * shape, used only as a fallback — see the try/catch below.
 */
function staticFallback(): NewsArticleDTO[] {
  return fallbackArticles.map((article) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    category: article.category,
    imageUrl: article.imageUrl,
    status: "published",
    author: "Jabi Cooperatives",
    publishedAt: article.publishedAt ? article.publishedAt.toISOString() : null,
  }));
}

/**
 * Public site: published articles only, newest first.
 *
 * Falls back to the static placeholder data if the database call fails —
 * this matters right now specifically because the database has not been
 * migrated/seeded yet in most environments running this code for the first
 * time. Once real content exists in NewsArticle, this fallback simply never
 * triggers.
 */
export async function getPublishedNews(locale: string): Promise<NewsArticleDTO[]> {
  try {
    const rows = await prisma.newsArticle.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
    });
    if (rows.length === 0) return staticFallback();
    return rows.map((row) => toDTO(row, locale));
  } catch {
    return staticFallback();
  }
}

/** Public site: single published article by slug, for the detail page. */
export async function getPublishedNewsBySlug(
  slug: string,
  locale: string,
): Promise<NewsArticleDTO | null> {
  try {
    const row = await prisma.newsArticle.findFirst({
      where: { slug, status: "published" },
    });
    if (row) return toDTO(row, locale);
  } catch {
    // fall through to static fallback below
  }
  return staticFallback().find((article) => article.slug === slug) ?? null;
}

/** Admin: every article regardless of status, for the management table. */
export async function getAllNewsForAdmin() {
  return prisma.newsArticle.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getNewsByIdForAdmin(id: string) {
  return prisma.newsArticle.findUnique({ where: { id } });
}

export interface NewsArticleInput {
  slug: string;
  titleEn: string;
  titleAm: string;
  excerptEn: string;
  excerptAm: string;
  contentEn: string;
  contentAm: string;
  category: string;
  imageUrl: string;
  status: ContentStatus;
  author: string;
  publishedAt: Date | null;
}

export async function createNewsArticle(input: NewsArticleInput) {
  return prisma.newsArticle.create({ data: input });
}

export async function updateNewsArticle(id: string, input: NewsArticleInput) {
  return prisma.newsArticle.update({ where: { id }, data: input });
}

export async function deleteNewsArticle(id: string) {
  return prisma.newsArticle.delete({ where: { id } });
}
