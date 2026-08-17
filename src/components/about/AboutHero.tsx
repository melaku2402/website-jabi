import { PageHero } from '@/components/ui/PageHero';

export function AboutHero() {
  return (
    <PageHero
      title="About Us"
      breadcrumbLabel="About Us"
      imageSrc="/images/about/about-hero-bg.jpg"
      imageAlt="Jabi Cooperatives office building"
      imagePosition="object-[center_25%] md:object-[center_35%]"
      description="Jabi Cooperatives Saving & Credit Union S.C has been serving its members with dedication, transparency, and innovation since 1996 E.C."
    />
  );
}
