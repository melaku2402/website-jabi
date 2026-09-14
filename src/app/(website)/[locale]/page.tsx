import { getTranslations } from 'next-intl/server';
import { getPublishedNews } from '@/lib/repositories/news';
import { Hero } from '@/components/home/Hero';
import { StatStrip } from '@/components/home/StatStrip';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ImpactBar } from '@/components/home/ImpactBar';
import { NewsEvents } from '@/components/home/NewsEvents';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { CTABanner } from '@/components/home/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import  TestimonialsSection  from '@/components/home/TestimonialsSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('home.title')} | ${t('suffix')}`,
    description: t('home.description'),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const newsArticles = await getPublishedNews(locale);

  return (
    <main>
      <Hero />
      <ScrollReveal>
        <StatStrip />
      </ScrollReveal>
      <ScrollReveal delayMs={100}>
        <ServicesGrid />
      </ScrollReveal>
      <ScrollReveal delayMs={200}>
        <AboutPreview />
      </ScrollReveal>
      <ScrollReveal delayMs={300}>
        <ImpactBar />
      </ScrollReveal>
      <ScrollReveal delayMs={400}>
        <NewsEvents articles={newsArticles.slice(0, 3)} />
      </ScrollReveal>
      <ScrollReveal delayMs={700}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delayMs={500}>
        <PartnersStrip />
      </ScrollReveal>

      <ScrollReveal delayMs={600}>
        <CTABanner />
      </ScrollReveal>
    </main>
  );
}
