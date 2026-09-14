import { ShieldCheck, Users, Eye, TrendingUp } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/ui/PageHero';
import { trustBadges } from '@/data/contact-content';

const icons = { reliable: ShieldCheck, memberFocused: Users, transparency: Eye, growth: TrendingUp };

export async function ContactHero() {
  const t = await getTranslations('ContactPage.hero');
  return (
    <PageHero
      title={t('title')}
      breadcrumbLabel={t('breadcrumb')}
      imageSrc="/images/contact/hero-building.jpg"
      imageAlt="Jabi Cooperatives office building"
      description={t('description')}
    >
      {/* <div className="mt-4 flex flex-wrap gap-3">
        {trustBadges.map((badge) => {
          const Icon = icons[badge.icon];
          return (
            <span
              key={badge.id}
              className="flex items-center gap-2 rounded-full border border-blue-800 bg-blue-900/40 px-4 py-2 text-xs font-medium text-blue-100"
            >
              <Icon className="h-3.5 w-3.5 text-emerald-400" />
              {badge.label}
            </span>
          );
        })}
      </div> */}
    </PageHero>
  );
}
