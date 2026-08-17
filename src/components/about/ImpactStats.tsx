'use client';

import { Users, Landmark, Building2, Briefcase, Coins, HandCoins } from 'lucide-react';
import { primaryStats } from '@/data/stats';
import { CountUp } from '@/components/home/CountUp';

const icons = {
  members: Users,
  cooperatives: Landmark,
  branches: Building2,
  employees: Briefcase,
  assets: Coins,
  loans: HandCoins,
};

const iconColors: Record<keyof typeof icons, string> = {
  members: 'text-emerald-600',
  cooperatives: 'text-[#03387C]',
  branches: 'text-emerald-600',
  employees: 'text-[#03387C]',
  assets: 'text-[#03387C]',
  loans: 'text-[#03387C]',
};

export function ImpactStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-6">
      {/* Title */}
      {/* <h2 className="text-center text-4xl font-extrabold text-[#03387C] sm:text-4xl">
       
      </h2> */}
        <div className="mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl font-extrabold text-[#03387C] sm:text-3xl">
             Our Impact in Numbers
          </h2>
        </div>
      {/* Full Outer Container - Shifts upward as a single block on hover */}
      <div className="group mt-12 grid grid-cols-2 gap-y-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#03387C]/20 hover:shadow-xl hover:shadow-[#03387C]/10 md:grid-cols-3 lg:grid-cols-6 lg:gap-y-0">
        {primaryStats.map((stat) => {
          const Icon = icons[stat.icon];
          return (
            <div key={stat.id} className="flex flex-col items-center text-center">
              {/* Icon with subtle scale on container hover */}
              <Icon
                className={`h-9 w-9 ${iconColors[stat.icon]} transition-transform duration-300 group-hover:scale-105`}
                strokeWidth={1.5}
              />
              <p className="mt-3 text-2xl font-extrabold text-[#03387C]">
                <CountUp value={`${stat.value}${stat.suffix ?? ''}`} />
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}