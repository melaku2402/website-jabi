'use client';

import { Check } from 'lucide-react';
import { objectives } from '@/data/about-content';

function ObjectiveList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 sm:space-y-5">
      {items.map((item) => (
        <li
          key={item}
          className="group flex items-start gap-3.5 transition-transform duration-300 hover:translate-x-1"
        >
          {/* Green checkmark circle matching screenshot */}
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xs transition-transform duration-300 group-hover:scale-110">
            <Check className="h-3 w-3 stroke-[3]" />
          </span>

          {/* Text content aligned flush left */}
          <span className="text-sm font-medium leading-normal text-gray-700 transition-colors duration-300 group-hover:text-[#03387C]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Objectives() {
  return (
    <section className="bg-white py-16 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Heading with Small Green Divider Dot/Bar */}
        <div className="mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl font-extrabold text-[#03387C] sm:text-3xl">
            Our Objectives
          </h2>
        </div>

        {/* Two-Column Grid: Starts Flush Left & Right */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2 lg:gap-x-16">
          <ObjectiveList items={objectives.left} />
          <ObjectiveList items={objectives.right} />
        </div>
      </div>
    </section>
  );
}