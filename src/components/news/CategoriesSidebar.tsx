
"use client";

import {
  Layers,
  Megaphone,
  Landmark,
  CalendarDays,
  GraduationCap,
  Users,
  BookOpen,
} from "lucide-react";
import { useTranslations } from "next-intl";
import type { NewsArticleDTO } from "@/lib/repositories/news";

const categoriesConfig = [
  { id: "all", icon: Layers },
  { id: "announcement", icon: Megaphone },
  { id: "branch-update", icon: Landmark },
  { id: "event", icon: CalendarDays },
  { id: "training", icon: GraduationCap },
  { id: "community", icon: Users },
  { id: "financial-education", icon: BookOpen },
];

interface CategoriesSidebarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  articles: NewsArticleDTO[];
}

export function CategoriesSidebar({
  selectedCategory,
  onSelectCategory,
  articles: latestNews,
}: CategoriesSidebarProps) {
  const t = useTranslations("NewsPage.categoriesSidebar");
  const tCategories = useTranslations("HomePage.news.categories");

  // 1. Calculate count for each category dynamically
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") {
      return latestNews.length; // Total length for "All News"
    }
    return latestNews.filter((article) => article.category === categoryId)
      .length;
  };

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#01277A]">
        {t("heading")}
      </h3>
      <ul className="mt-4 space-y-1.5">
        {categoriesConfig.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          const count = getCategoryCount(category.id); // Dynamic exact count
          const label = category.id === "all" ? t("all") : tCategories(category.id);

          return (
            <li key={category.id}>
              <button
                onClick={() => onSelectCategory(category.id)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-[#01277A] text-white"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}