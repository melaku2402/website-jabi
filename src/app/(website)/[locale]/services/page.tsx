import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FeaturedService } from '@/components/services/FeaturedService';
import { HowItWorks } from '@/components/services/HowItWorks';
import { WhyChooseAndFaq } from '@/components/services/WhyChooseAndFaq';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import ScrollReveal from "@/components/ui/ScrollReveal";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title: 'Our Services | Jabi Cooperatives Saving & Credit Union S.C',
    description:
      'Reliable and innovative financial services designed to empower our members and communities — savings, loans, fixed deposits, money transfer and more.',
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <ScrollReveal>
        <ServicesHero />
      </ScrollReveal>
      <ScrollReveal delayMs={100}>
        <ServicesGrid />
      </ScrollReveal>
      <ScrollReveal delayMs={200}>
        <FeaturedService />
      </ScrollReveal>
      <ScrollReveal delayMs={300}>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal delayMs={400}>
        <WhyChooseAndFaq />
      </ScrollReveal>
      <ScrollReveal delayMs={500}>
        <PartnersStrip/>
      </ScrollReveal>
      <ScrollReveal delayMs={600}>
        <ServicesCTA />
      </ScrollReveal>
    </main>
  );
}
