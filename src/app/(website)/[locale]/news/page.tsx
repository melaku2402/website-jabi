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

  return {
    title: 'News & Updates | Jabi Cooperatives Saving & Credit Union S.C',
    description:
      'Stay informed with the latest news, announcements, events and activities from Jabi Cooperatives Saving & Credit Union S.C.',
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <NewsHero />
      <ScrollReveal>
        <NewsMainContent />
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
