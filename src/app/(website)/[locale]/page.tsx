import { Hero } from '@/components/home/Hero';
import { StatStrip } from '@/components/home/StatStrip';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ImpactBar } from '@/components/home/ImpactBar';
import { NewsEvents } from '@/components/home/NewsEvents';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { CTABanner } from '@/components/home/CTABanner';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Testimonials } from '@/components/home/Testimonials';
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delayMs={400}>
        <NewsEvents />
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
