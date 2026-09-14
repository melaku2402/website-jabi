"use client";

import { useState, useRef } from "react";
import { FeaturedNews } from "./FeaturedNews";
import { LatestNewsGrid } from "./LatestNewsGrid";
import { CategoriesSidebar } from "./CategoriesSidebar";
import { UpcomingEvents } from "./UpcomingEvents";
import { PhotoGallery } from "./PhotoGallery";
import type { NewsArticleDTO } from "@/lib/repositories/news";

export function NewsMainContent({ articles }: { articles: NewsArticleDTO[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const newsGridRef = useRef<HTMLDivElement>(null);
  const featured = articles[0];

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);

    // Smooth scroll down to the news grid when a category is selected
    if (newsGridRef.current) {
      newsGridRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left Column (Main Content) */}
        <div className="space-y-8 lg:col-span-2 lg:space-y-12">
          {/* 1. Featured News (First on Mobile & Desktop) */}
          <FeaturedNews article={featured} />

          {/* 2. Categories (Displayed below FeaturedNews ONLY on mobile) */}
          <div className="block lg:hidden">
            <CategoriesSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              articles={articles}
            />
          </div>

          {/* 3. Latest News Grid */}
          <div ref={newsGridRef} className="scroll-mt-8">
            <LatestNewsGrid selectedCategory={selectedCategory} articles={articles} />
          </div>
        </div>

        {/* Right Sidebar (Desktop Column) */}
        <aside className="space-y-6">
         
          <UpcomingEvents />
           {/* Desktop-only Categories sidebar */}
          <div className="hidden lg:block">
            <CategoriesSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              articles={articles}
            />
          </div>
          <PhotoGallery />
        </aside>
      </div>
    </section>
  );
}
