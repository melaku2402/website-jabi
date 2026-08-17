'use client';

import { useState } from 'react';
import { Layers, Megaphone, Landmark, CalendarDays, GraduationCap, Users, BookOpen } from 'lucide-react';
import { newsCategories } from '@/data/news-content';

const icons: Record<string, typeof Layers> = {
  all: Layers,
  announcement: Megaphone,
  'branch-update': Landmark,
  event: CalendarDays,
  training: GraduationCap,
  community: Users,
  'financial-education': BookOpen,
};

export function CategoriesSidebar() {
  const [active, setActive] = useState('all');

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-widest text-[#01277A]">Categories</h3>
      <ul className="mt-4 space-y-1.5">
        {newsCategories.map((category) => {
          const Icon = icons[category.id];
          const isActive = active === category.id;
          return (
            <li key={category.id}>
              <button
                onClick={() => setActive(category.id)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  isActive ? 'bg-[#01277A] text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4" />
                  {category.label}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {category.count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}