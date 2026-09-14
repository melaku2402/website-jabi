import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/ui/PageHero';

export async function ServicesHero() {
  const t = await getTranslations('ServicesPage.hero');
  return (
    <PageHero
      title={t('title')}
      breadcrumbLabel={t('breadcrumb')}
      imageSrc="/images/services/about-hero-bg.jpg"
      imageAlt="Jabi Cooperatives office building"
      imagePosition="object-right"
      description={t('description')}
    />
  );
}
