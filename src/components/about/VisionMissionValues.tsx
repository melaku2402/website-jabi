import { Eye, Target, Gem } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/Card';
import { visionMissionValues } from '@/data/about-content';

const icons = { vision: Eye, mission: Target, values: Gem };

// Icon styles aligned with system theme
const iconStyles: Record<keyof typeof icons, { bg: string; text: string }> = {
  vision: { bg: 'bg-emerald-600', text: 'text-white' },
  mission: { bg: 'bg-[#03387C]', text: 'text-white' },
  values: { bg: 'bg-emerald-600', text: 'text-white' },
};

export async function VisionMissionValues() {
  const t = await getTranslations('HomePage.about.visionMissionValues');
  return (
    <section className="bg-slate-50 py-2">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {visionMissionValues.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            const style = iconStyles[item.icon as keyof typeof iconStyles];
            const translatedDescription = item.list
              ? t.raw(`${item.icon}.list`).join(', ')
              : t(`${item.icon}.description`);

            return (
              <Card
                key={item.title}
                className="group flex h-full items-start gap-3.5 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03387C]/20 hover:shadow-lg hover:shadow-[#03387C]/5"
              >
                {/* Icon Badge */}
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-xs transition-all duration-300 group-hover:scale-110 ${style.bg} ${style.text}`}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                </span>

                {/* Text Block */}
                <div>
                  <h3 className="text-base font-bold text-[#03387C] transition-colors duration-300 group-hover:text-emerald-600">
                    {t(`${item.icon}.title`)}
                  </h3>

                  {/* Inline Description or Comma-separated Values List */}
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {translatedDescription}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}