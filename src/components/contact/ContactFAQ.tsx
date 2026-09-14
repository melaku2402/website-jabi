'use client';

import NextLink from 'next/link';
import { useState } from 'react';
import { HelpCircle, ChevronDown, Headphones, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface FaqEntry {
  question: string;
  answer: string;
}

export function ContactFAQ() {
  const t = useTranslations('ContactPage.faq');
  const items = t.raw('items') as FaqEntry[];
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-[#01277A]">{t('heading')}</h2>

      {/* Separate individual cards with hover elevation and translation */}
      <div className="mt-6 space-y-3">
        {items.map((item, index) => {
          const isOpen = openId === index;
          return (
            <div
              key={item.question}
              className={`group rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md ${
                isOpen ? 'border-gray-200 shadow-md' : ''
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-[#01277A] transition-colors group-hover:text-emerald-600">
                  {/* Fill #01277A with text-white gives the exact solid question mark badge */}
                  <HelpCircle className="h-5 w-5 shrink-0 fill-[#01277A] text-white transition-transform duration-300 group-hover:scale-110" />
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gray-400 transition-all duration-300 ${
                    isOpen ? 'rotate-180 text-[#01277A]' : 'group-hover:text-[#01277A]'
                  }`}
                />
              </button>
              {isOpen && (
                <p className="mt-3 pl-8 text-xs leading-relaxed text-gray-500 animate-in fade-in slide-in-from-top-1 duration-200">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Need More Help Banner */}
      <div className="group mt-6 flex flex-col items-start justify-between gap-4 rounded-xl bg-emerald-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Headphones className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-[#01277A]">{t('needMoreHelp.title')}</p>
            <p className="text-xs text-gray-600">{t('needMoreHelp.description')}</p>
          </div>
        </div>
        <NextLink
          href="tel:+251582201033"
          className="flex shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5"
        >
          {t('needMoreHelp.callUsNow')} <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </NextLink>
      </div>
    </div>
  );
}