import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/ui/PageHero';

export async function NewsHero() {
  const t = await getTranslations('NewsPage.hero');
  return (
    <PageHero
      title={t('title')}
      breadcrumbLabel={t('breadcrumb')}
      imageSrc="/images/news/hero-building.jpg"
      imageAlt="Jabi Cooperatives office building"
      description={t('description')}
    />
  );
}
