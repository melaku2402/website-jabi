'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function NewsletterBanner() {
  const t = useTranslations('NewsPage.newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a real newsletter subscription endpoint.
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-7">
      {/* Outer Banner Container with Section-Wide Hover Lift */}
      <div className="relative overflow-hidden rounded-2xl bg-[#01277A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#01277A]/25">
        <div className="relative z-10 flex flex-col items-stretch sm:flex-row">
          
          {/* Left: App image with gentle zoom on hover */}
          <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
            <Image
              src="/images/home/jabi-app-mockup.png"
              alt="Jabi Cooperatives mobile app"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right: Text + Interactive Form */}
          <div className="flex flex-1 flex-col items-center justify-between gap-6 px-8 py-8 sm:flex-row">
            <div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-400" />
                <h3 className="text-xl font-extrabold text-white">
                  {t('heading')}
                </h3>
              </div>
              <p className="mt-1.5 max-w-md text-sm text-blue-100/90">
                {t('description')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-3 sm:w-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  /* Matched height with the larger button (py-3) */
                  className="min-w-0 w-full rounded-xl border border-white/10 bg-white px-4.5 py-3 text-base text-[#01277A] placeholder:text-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-emerald-400 sm:text-sm"
                />
              </div>

              {/* Increased Size Action Button */}
              <button
                type="submit"
                disabled={submitted}
                className="group/btn relative shrink-0 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-emerald-600 px-7 py-3 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-90 sm:text-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-white sm:h-4 sm:w-4" />
                    <span>{t('subscribed')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('subscribe')}</span>
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}