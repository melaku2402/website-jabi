import { Users, Landmark, Building2, Briefcase, Coins, HandCoins } from 'lucide-react';
import { getLocale, getTranslations } from 'next-intl/server';
import { primaryStats } from '@/data/stats';
import { getOrgStats } from '@/lib/repositories/stats';
import { CountUp } from './CountUp';

const icons: Record<string, typeof Users> = {
  members: Users,
  cooperatives: Landmark,
  branches: Building2,
  employees: Briefcase,
  assets: Coins,
  loans: HandCoins,
};

export async function StatStrip() {
  const locale = await getLocale();
  const t = await getTranslations('HomePage.stats');
  const dbStats = await getOrgStats(locale);

  // Falls back to the static translated stats until real figures are
  // entered from the admin panel (Organization Stats page).
  const stats =
    dbStats.length > 0
      ? dbStats.map((s) => ({ id: s.id, icon: s.key, value: s.value, suffix: s.suffix, label: s.label }))
      : primaryStats.map((s) => ({ id: s.id, icon: s.icon, value: s.value, suffix: s.suffix, label: t(s.icon) }));

  return (
    <div className="relative z-20 mx-auto -mt-14 max-w-7xl px-6">
      <div className="grid grid-cols-2 gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat) => {
          const Icon = icons[stat.icon] ?? Coins;
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