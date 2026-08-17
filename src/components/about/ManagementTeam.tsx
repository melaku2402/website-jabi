'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { managementTeam } from '@/data/team';

export function ManagementTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
         <div className="mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl font-extrabold text-[#03387C] sm:text-3xl">
           Management Team
          </h2>
        </div>
        {/* Carousel Container */}
        <div className="relative mt-10">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#03387C] shadow-sm transition-all duration-300 hover:border-[#03387C]/30 hover:bg-[#03387C] hover:text-white hover:shadow-md active:scale-95 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#03387C] shadow-sm transition-all duration-300 hover:border-[#03387C]/30 hover:bg-[#03387C] hover:text-white hover:shadow-md active:scale-95 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 md:px-14 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {managementTeam.map((member) => (
              <div
                key={member.id}
                className="group w-[45%] shrink-0 snap-start overflow-hidden rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#03387C]/20 hover:shadow-lg hover:shadow-[#03387C]/10 sm:w-[30%] lg:w-[calc(20%-19.2px)]"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 28vw, 43vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Typography */}
                <div className="p-3 text-center">
                  <p className="text-sm font-extrabold text-[#03387C] transition-colors group-hover:text-emerald-600 line-clamp-1">
                    {member.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-gray-500 line-clamp-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}