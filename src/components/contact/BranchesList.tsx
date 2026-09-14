import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Phone, ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { branchesList } from '@/data/contact-content';

export async function BranchesList() {
  const t = await getTranslations('ContactPage.branches');
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-[#01277A]">{t('heading')}</h2>

      <div className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        {branchesList.map((branch) => (
          <div
            key={branch.id}
            className="group flex items-center gap-4 p-4 transition-all duration-300 hover:bg-slate-50/80 hover:-translate-y-0.5"
          >
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={branch.imageUrl}
                alt={branch.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-[#01277A] transition-colors group-hover:text-emerald-600">
                {branch.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-gray-500">{branch.location}</p>
            </div>

            {/* Clickable phone number link */}
            <a
              href={`tel:${branch.phone.replace(/\s+/g, '')}`}
              className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-emerald-600 hover:underline transition-colors"
            >
              <Phone className="h-3.5 w-3.5 fill-[#01277A] text-[#01277A] transition-transform duration-300 group-hover:rotate-12" />
              {branch.phone}
            </a>
          </div>
        ))}
      </div>

      <Link
        href="/branches"
        className="group mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-100 bg-white py-2.5 text-sm font-semibold text-[#01277A] hover:border-gray-200 hover:bg-blue-50/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
      >
        {t('viewAll')}
        <ArrowRight className="h-4 w-4 text-[#01277A] transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
}