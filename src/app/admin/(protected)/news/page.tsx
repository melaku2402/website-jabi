import { getAllNewsForAdmin } from "@/lib/repositories/news";
import NewsPageClient from "./NewsPageClient";

export default async function NewsPage() {
  const articles = await getAllNewsForAdmin();

  return <NewsPageClient initialArticles={articles} />;
}
