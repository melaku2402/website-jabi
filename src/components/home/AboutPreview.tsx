import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { Eye, Target, Gem, ArrowRight } from 'lucide-react';
import { visionMissionValues } from '@/data/about-content';

const icons = { vision: Eye, mission: Target, values: Gem };

export async function AboutPreview() {
  const t = await getTranslations('HomePage.about');
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[4fr_4fr_2fr]">
          {/* Text — 40% */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              {t('eyebrow')}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug text-[#01277A] sm:text-4xl">
              {t('headingLine1')} <br />
              {t('headingLine2Prefix')} <span className="text-emerald-600">{t('headingHighlight')}</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              {t('description')}
            </p>

            {/* Premium Illuminated CTA Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-[#01277A] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#01277A]/20 transition-all duration-300 hover:bg-[#01277A] hover:shadow-xl hover:shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Glowing Emerald Gradient Accent */}
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600/0 via-emerald-500/20 to-emerald-600/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <span className="relative z-10">{t('cta')}</span>
                <ArrowRight className="relative z-10 h-4 w-4 text-emerald-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Image — 40% with Hover Scale Effect */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 lg:aspect-auto lg:h-full">
            <Image
              src="/images/home/team-members.jpg"
              alt="Jabi Cooperatives team members"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#01277A]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Vision / Mission / Values — 20% with Card Hover Effects */}
          <div className="flex flex-col justify-center gap-4">
            {visionMissionValues.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];
              const translatedTitle = t(`visionMissionValues.${item.icon}.title`);
              const translatedDescription = item.list
                ? t.raw(`visionMissionValues.${item.icon}.list`).join(', ')
                : t(`visionMissionValues.${item.icon}.description`);
              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-3 rounded-xl border border-transparent bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110">
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#01277A] transition-colors duration-300 group-hover:text-emerald-600">
                      {translatedTitle}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                      {translatedDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}