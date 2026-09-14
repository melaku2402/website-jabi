import { getTranslations } from 'next-intl/server';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAre } from '@/components/about/WhoWeAre';
import { VisionMissionValues } from '@/components/about/VisionMissionValues';
import { Objectives } from '@/components/about/Objectives';
import { Journey } from '@/components/about/Journey';
import { ManagementTeam } from '@/components/about/ManagementTeam';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { ImpactStats } from '@/components/about/ImpactStats';
import ScrollReveal from "@/components/ui/ScrollReveal";
import UnionComparisonSection from '@/components/about/UnionComparisonSection';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: `${t('about.title')} | ${t('suffix')}`,
    description: t('about.description'),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <AboutHero />
      <ScrollReveal>
        <WhoWeAre />
      </ScrollReveal>
      <ScrollReveal delayMs={100}>
        <VisionMissionValues />
      </ScrollReveal>
      <ScrollReveal delayMs={200}>
        <Objectives />
      </ScrollReveal>
      <ScrollReveal delayMs={300}>
        <Journey />
      </ScrollReveal>
      <ScrollReveal>
        <UnionComparisonSection />
      </ScrollReveal>
      <ScrollReveal delayMs={400}>
        <ImpactStats />
      </ScrollReveal>
      <ManagementTeam />
      <PartnersStrip />
      <ServicesCTA />
    </main>
  );
}
