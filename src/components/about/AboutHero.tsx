import { getTranslations } from 'next-intl/server';
import { PageHero } from '@/components/ui/PageHero';

export async function AboutHero() {
  const t = await getTranslations('AboutPage.hero');
  return (
    <PageHero
      title={t('title')}
      breadcrumbLabel={t('breadcrumb')}
      imageSrc="/images/about/about-hero-bg.jpg"
      imageAlt="Jabi Cooperatives office building"
      imagePosition="object-[center_25%] md:object-[center_35%]"
      description={t('description')}
    />
  );
}
