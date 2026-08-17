import { Users, Landmark, Building2, Briefcase, Coins, HandCoins } from 'lucide-react';
import { primaryStats } from '@/data/stats';
import { CountUp } from './CountUp';

const icons = {
  members: Users,
  cooperatives: Landmark,
  branches: Building2,
  employees: Briefcase,
  assets: Coins,
  loans: HandCoins,
};

export function StatStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-14 max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:grid-cols-3 lg:grid-cols-6">
        {primaryStats.map((stat) => {
          const Icon = icons[stat.icon];
          return (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <Icon className="h-6 w-6 text-emerald-600" />
              <p className="mt-2 text-2xl font-extrabold text-[#022777] sm:text-3xl">
                <CountUp value={stat.value} />
                {stat.suffix && <span className="text-emerald-600">{stat.suffix}</span>}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}