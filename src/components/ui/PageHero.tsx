import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { Home, ChevronRight } from 'lucide-react';
import { SafeImage } from '@/components/ui/SafeImage';

interface PageHeroProps {
  title: string;
  breadcrumbLabel: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  children?: ReactNode;
}

export async function PageHero({
  title,
  breadcrumbLabel,
  description,
  imageSrc,
  imageAlt,
  imagePosition = 'object-center',
  children,
}: PageHeroProps) {
  const t = await getTranslations('common');
  return (
    <section className="relative h-[160px] w-full overflow-hidden sm:h-[180px] md:h-[200px]">
      {/* Background Image */}
      <SafeImage
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${imagePosition}`}
      />

      {/* Gradient Overlay using #002463 palette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002463]/95 via-[#002463]/80 to-[#002463]/30" />

      {/* Content Container with decreased vertical padding */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 py-4 lg:px-12">
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-3xl">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="mt-1.5 flex items-center gap-1.5 text-xs text-blue-200/90 sm:text-sm">
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-emerald-400"
          >
            <Home className="h-3.5 w-3.5" />
            <span>{t('nav.home')}</span>
          </Link>
          <ChevronRight className="h-3 w-3 opacity-60" />
          <span className="font-medium text-white">{breadcrumbLabel}</span>
        </nav>

        {/* Short Description */}
        {description && (
          <p className="mt-1.5 max-w-xl text-xs font-normal text-gray-200/90 sm:text-sm line-clamp-2">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}