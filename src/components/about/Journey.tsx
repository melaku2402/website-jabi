import { Flag, Users, Landmark, TrendingUp, BadgeCheck } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { growthTimeline, type TimelineMilestone } from '@/data/about-content';

const icons: Record<TimelineMilestone['icon'], typeof Flag> = {
  flag: Flag,
  members: Users,
  systems: Landmark,
  growth: TrendingUp,
  today: BadgeCheck,
};

export async function Journey() {
  const t = await getTranslations('AboutPage.journey');
  return (
    <section className="bg-blue-950 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-white/90">{t('eyebrow')}</p>
          <h2 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
            {t('heading')}
          </h2>
        </div>

        <div className="mt-16 hidden lg:block">
          <div className="relative grid grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-6 h-px bg-blue-700/60" />
            <div className="absolute left-[10%] right-[10%] top-6 flex -translate-y-1/2 items-center justify-between px-[10%]">
              {Array.from({ length: growthTimeline.length - 1 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i === 1 ? 'h-2 w-2 bg-emerald-400' : 'bg-white/70'
                  }`}
                />
              ))}
            </div>

            {growthTimeline.map((milestone) => {
              const Icon = icons[milestone.icon];
              return (
                <div key={milestone.icon} className="relative z-10 flex flex-col items-center text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-base font-bold text-white">
                    {t(`milestones.${milestone.icon}.year`)}
                  </p>
                  <p className="mt-2 max-w-[180px] text-xs leading-relaxed text-blue-200">
                    {t(`milestones.${milestone.icon}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 space-y-8 lg:hidden">
          {growthTimeline.map((milestone, idx) => {
            const Icon = icons[milestone.icon];
            return (
              <div key={milestone.icon} className="relative flex gap-4 pl-1">
                <div className="flex flex-col items-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  {idx < growthTimeline.length - 1 && (
                    <span className="mt-1 flex flex-1 flex-col items-center justify-center gap-1 py-1">
                      <span className="h-1 w-1 rounded-full bg-white/70" />
                      <span className="w-px flex-1 bg-blue-700/60" />
                    </span>
                  )}
                </div>
                <div className="pb-2">
                  <p className="text-base font-bold text-white">
                    {t(`milestones.${milestone.icon}.year`)}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-blue-200">
                    {t(`milestones.${milestone.icon}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
