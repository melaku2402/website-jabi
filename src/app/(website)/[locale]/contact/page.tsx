import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfoStrip } from '@/components/contact/ContactInfoStrip';
import { ContactFormAndMap } from '@/components/contact/ContactFormAndMap';
import { BranchesAndFaq } from '@/components/contact/BranchesAndFaq';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { NewsletterBanner } from '@/components/news/NewsletterBanner';
import ScrollReveal from "@/components/ui/ScrollReveal";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title: 'Contact Us | Jabi Cooperatives Saving & Credit Union S.C',
    description:
      'We are here to help you! Reach out to Jabi Cooperatives Saving & Credit Union S.C. for any inquiries, support or feedback.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <ContactHero />
      <ScrollReveal>
        <ContactInfoStrip />
      </ScrollReveal>
      <ScrollReveal delayMs={100}>
        <ContactFormAndMap />
      </ScrollReveal>
      <ScrollReveal delayMs={200}>
        <BranchesAndFaq />
      </ScrollReveal>
      <ScrollReveal delayMs={300}>
        <PartnersStrip />
      </ScrollReveal>
      <ScrollReveal delayMs={400}>
        <NewsletterBanner />
      </ScrollReveal>

    </main>
  );
}
