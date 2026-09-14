import NextLink from 'next/link';
import { Landmark, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { headOfficeMapEmbedUrl, headOfficeDirectionsUrl } from '@/data/contact-content';

export async function LocationMap() {
  const t = await getTranslations('ContactPage.map');
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-[#01277A]">{t('heading')}</h2>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
        <div className="h-72 w-full">
          <iframe
            src={headOfficeMapEmbedUrl}
            title="Jabi Cooperatives Head Office location"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4 bg-[#01277A] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#01277A]">
              <Landmark className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">{t('headOffice')}</p>
              <p className="mt-0.5 text-xs text-blue-100">{t('addressLine1')}</p>
              <p className="text-xs text-blue-100">{t('addressLine2')}</p>
              <p className="mt-0.5 text-xs text-blue-200">{t('poBox')}</p>
            </div>
          </div>

          <NextLink
            href={headOfficeDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#01277A] hover:bg-blue-50 transition-colors"
          >
            {t('getDirections')} <ArrowRight className="h-4 w-4" />
          </NextLink>
        </div>
      </div>
    </div>
  );
}