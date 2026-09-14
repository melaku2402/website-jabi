'use client';

import { Link } from '@/i18n/navigation';
import { FileText, FileSpreadsheet, Download, FileCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { annualDownloads } from '@/data/news-content';

const fileTypeStyles: Record<string, { icon: typeof FileText; className: string }> = {
  PDF: { icon: FileText, className: 'bg-red-50 text-red-600 border-red-100' },
  XLS: { icon: FileSpreadsheet, className: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  DOC: { icon: FileText, className: 'bg-blue-50 text-blue-600 border-blue-100' },
};

export function AnnualReportsStrip() {
  const t = useTranslations('NewsPage.annualReports');
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      {/* Header Section */}
      <div className="mb-6 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
          <FileCheck className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#03387C]">
            {t('heading')}
          </h3>
          <p className="text-xs text-gray-500 font-medium">
            {t('subtitle')}
          </p>
        </div>
      </div>

      {/* Grid Cards Container */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {annualDownloads.map((item) => {
          const style = fileTypeStyles[item.fileType] || {
            icon: FileText,
            className: 'bg-gray-50 text-gray-600 border-gray-100',
          };
          const Icon = style.icon;

          return (
            <Link
              key={item.id}
              href={item.downloadUrl}
              download
              className="group relative flex flex-col justify-between gap-3 rounded-2xl border border-gray-200/80 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#03387C]/30 hover:shadow-lg hover:shadow-[#03387C]/10"
            >
              <div className="space-y-3">
                {/* Icon & File Tag */}
                <div className="flex items-center justify-between">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${style.className}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-md bg-gray-50 px-2 py-0.5 text-[10px] font-extrabold text-gray-500 border border-gray-100">
                    {item.fileType}
                  </span>
                </div>

                {/* Title */}
                <p className="text-xs font-bold leading-snug text-[#03387C] transition-colors group-hover:text-emerald-600 line-clamp-2">
                  {item.title}
                </p>
              </div>

              {/* Bottom Download Bar */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 text-[11px] font-semibold text-gray-400 transition-colors group-hover:text-[#03387C]">
                <span>{item.size}</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-[#03387C] group-hover:text-white group-hover:shadow-sm">
                  <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}