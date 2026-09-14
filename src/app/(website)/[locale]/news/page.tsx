import { getTranslations } from 'next-intl/server';
import { getPublishedNews } from '@/lib/repositories/news';
import { NewsHero } from '@/components/news/NewsHero';
import { NewsMainContent } from '@/components/news/NewsMainContent';
import { AnnualReportsStrip } from '@/components/news/AnnualReportsStrip';
import { NewsletterBanner } from '@/components/news/NewsletterBanner';
import { CTABanner } from '@/components/home/CTABanner';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import ScrollReveal from "@/components/ui/ScrollReveal";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('news.title')} | ${t('suffix')}`,
    description: t('news.description'),
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articles = await getPublishedNews(locale);

  return (
    <main>
      <NewsHero />
      <ScrollReveal delayMs={0}>
        <NewsMainContent articles={articles} />
      </ScrollReveal>
      <ScrollReveal delayMs={100}>
        <AnnualReportsStrip />
      </ScrollReveal>
      <ScrollReveal delayMs={200}>
        <PartnersStrip />
      </ScrollReveal>
      <ScrollReveal delayMs={300}>
        <NewsletterBanner />
      </ScrollReveal>

    </main>
  );
}
