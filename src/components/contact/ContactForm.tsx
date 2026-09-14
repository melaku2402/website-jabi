'use client';

import { useActionState } from 'react';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { submitContactAction } from '@/actions/contact';

const inputClasses =
  'w-full rounded-lg border border-gray-100 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-gray-400 shadow-sm transition-all duration-300 hover:border-emerald-600/40 hover:-translate-y-0.5 hover:shadow-md focus:border-[#01277A] focus:outline-none focus:ring-1 focus:ring-[#01277A] focus:-translate-y-0.5 focus:shadow-md';

export function ContactForm() {
  const t = useTranslations('ContactPage.form');
  const [state, formAction, isPending] = useActionState(submitContactAction, null);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-[#01277A]">{t('heading')}</h2>
      <p className="mt-2 text-sm text-gray-500">
        {t('subtitle')}
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        {state?.success && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            {state.message}
          </div>
        )}
        {state?.serverError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {state.serverError}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input
              name="fullName"
              type="text"
              required
              placeholder={t('fullName')}
              className={inputClasses}
            />
            {state?.errors?.fullName && <p className="mt-1 text-xs text-red-500">{state.errors.fullName[0]}</p>}
          </div>
          <div>
            <input name="email" type="email" required placeholder={t('email')} className={inputClasses} />
            {state?.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input name="phone" type="tel" required placeholder={t('phone')} className={inputClasses} />
            {state?.errors?.phone && <p className="mt-1 text-xs text-red-500">{state.errors.phone[0]}</p>}
          </div>
          <div>
            <input name="subject" type="text" required placeholder={t('subject')} className={inputClasses} />
            {state?.errors?.subject && <p className="mt-1 text-xs text-red-500">{state.errors.subject[0]}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            rows={5}
            required
            placeholder={t('message')}
            className={inputClasses}
          />
          {state?.errors?.message && <p className="mt-1 text-xs text-red-500">{state.errors.message[0]}</p>}
        </div>

        <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-gray-200 text-emerald-600 focus:ring-[#01277A]" />
          <span>
            {t('agreePrefix')}{' '}
            <a href="/privacy-policy" className="font-medium text-[#01277A] hover:text-emerald-600 underline-offset-2 hover:underline transition-colors">
              {t('privacyPolicy')}
            </a>{' '}
            {t('and')}{' '}
            <a href="/terms-of-use" className="font-medium text-[#01277A] hover:text-emerald-600 underline-offset-2 hover:underline transition-colors">
              {t('termsOfUse')}
            </a>
          </span>
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="group flex w-fit items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 transition-all duration-300"
        >
          {isPending ? t('sending') : t('sendMessage')}
          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </form>
    </div>
  );
}