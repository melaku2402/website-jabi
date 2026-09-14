import Image from 'next/image';
import { Caveat } from 'next/font/google';
import { CalendarDays } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { whoWeAreContent } from '@/data/about-content';

// Real cursive font for the signature
const caveat = Caveat({ subsets: ['latin'], weight: ['600', '700'] });

export async function WhoWeAre() {
  const t = await getTranslations('AboutPage.whoWeAre');
  const { signatoryName, imageUrl, establishedYear } = whoWeAreContent;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.5fr]">
        {/* Left column */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            {t('label')}
          </span>
          <h2 className="mt-3 max-w-md text-2xl font-extrabold leading-snug text-[#01277A] sm:text-3xl">
            {t('heading')}
          </h2>
          <div className="mt-5 space-y-4 text-justify text-sm leading-relaxed text-gray-600">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-5">
            <p className={`${caveat.className} text-3xl leading-none text-blue-950`}>
              {signatoryName}
            </p>
            <p className="mt-1.5 text-sm font-medium text-gray-500">{t('signatoryTitle')}</p>
          </div>
        </div>

        {/* Right column: Image container with left-shift hover movement */}
        <div className="group relative">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-sm transition-all duration-500 group-hover:-translate-x-1.5 group-hover:shadow-xl">
            <Image
              src={imageUrl}
              alt="Jabi Cooperatives office"
              fill
              sizes="(min-width: 1024px) 53vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          {/* Established Badge with subtle lift on hover */}
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-xl bg-blue-950 px-5 py-3 shadow-lg transition-transform duration-500 group-hover:-translate-x-1">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <CalendarDays className="h-5 w-5 text-white" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-medium text-blue-200">{t('establishedLabel')}</p>
              <p className="text-lg font-extrabold text-white">{establishedYear}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}