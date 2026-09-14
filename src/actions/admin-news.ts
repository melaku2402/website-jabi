"use server";

import { revalidatePath } from "next/cache";
import {
  createNewsArticle,
  updateNewsArticle,
  deleteNewsArticle,
  type NewsArticleInput,
} from "@/lib/repositories/news";
import type { ContentStatus } from "@prisma/client";

export interface NewsFormState {
  success: boolean;
  message: string;
}

function parseInput(formData: FormData): NewsArticleInput {
  const publishedAtRaw = formData.get("publishedAt") as string;
  return {
    slug: (formData.get("slug") as string).trim(),
    titleEn: (formData.get("titleEn") as string).trim(),
    titleAm: (formData.get("titleAm") as string).trim(),
    excerptEn: (formData.get("excerptEn") as string).trim(),
    excerptAm: (formData.get("excerptAm") as string).trim(),
    contentEn: (formData.get("contentEn") as string).trim(),
    contentAm: (formData.get("contentAm") as string).trim(),
    category: formData.get("category") as string,
    imageUrl: formData.get("imageUrl") as string,
    author: formData.get("author") as string,
    status: formData.get("status") as ContentStatus,
    publishedAt: publishedAtRaw ? new Date(publishedAtRaw) : null,
  };
}

function revalidateNewsPaths() {
  revalidatePath("/admin/news");
  // Both locales share the same page component; revalidate the dynamic
  // route pattern itself rather than one resolved path.
  revalidatePath("/[locale]/news", "page");
  revalidatePath("/[locale]/news/[slug]", "page");
  revalidatePath("/[locale]", "page"); // homepage news preview section
}

export async function createNewsArticleAction(
  _prevState: NewsFormState | null,
  formData: FormData,
): Promise<NewsFormState> {
  try {
    await createNewsArticle(parseInput(formData));
    revalidateNewsPaths();
    return { success: true, message: "Article created." };
  } catch (err) {
    return { success: false, message: "Could not create the article. Check the slug is unique." };
  }
}

export async function updateNewsArticleAction(
  id: string,
  _prevState: NewsFormState | null,
  formData: FormData,
): Promise<NewsFormState> {
  try {
    await updateNewsArticle(id, parseInput(formData));
    revalidateNewsPaths();
    return { success: true, message: "Article updated." };
  } catch (err) {
    return { success: false, message: "Could not update the article." };
  }
}

export async function deleteNewsArticleAction(id: string): Promise<void> {
  await deleteNewsArticle(id);
  revalidateNewsPaths();
}
