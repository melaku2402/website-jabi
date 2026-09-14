import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { mainNavLinks, footerServiceLinks, footerResourceLinks, siteContact } from '@/data/site-config';

const socialIcons = { facebook: Facebook, twitter: Twitter, linkedin: Linkedin, youtube: Youtube };

export async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:py-12">
        {/* 
          Grid layout:
          - Mobile (<640px): 2 columns (Brand takes col-span-2, link groups split into 2-column grid)
          - sm (>=640px): 2 columns
          - md (>=768px): 4 columns
          - lg (>=1024px): 5 columns
        */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand column - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/home/logo.png" 
                alt="Jabi Cooperatives logo" 
                width={48} 
                height={48} 
                className="h-12 w-12 object-contain" 
              />
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">{t('Footer.brandName')}</p>
                <p className="text-[10px] font-semibold text-emerald-400">{t('Footer.brandTagline')}</p>
              </div>
            </div>
            <p className="mt-3 text-xs italic text-blue-300">{t('Footer.tagline')}</p>
            <p className="mt-2 text-xs leading-relaxed text-blue-200 sm:text-sm md:max-w-xs lg:max-w-none">
              {t('Footer.description')}
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {(['facebook', 'twitter', 'linkedin', 'youtube'] as const).map((key) => {
                const Icon = socialIcons[key];
                return (
                  <Link
                    key={key}
                    href="#"
                    aria-label={key}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900 text-blue-200 transition-colors hover:bg-emerald-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:text-sm sm:normal-case">
              {t('Footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs text-blue-200 sm:text-sm">
              {mainNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-400">
                    {t(`common.nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:text-sm sm:normal-case">
              {t('Footer.ourServices')}
            </h4>
            <ul className="space-y-2 text-xs text-blue-200 sm:text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-400">
                    {t(`Footer.serviceLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:text-sm sm:normal-case">
              {t('Footer.resources')}
            </h4>
            <ul className="space-y-2 text-xs text-blue-200 sm:text-sm">
              {footerResourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald-400">
                    {t(`Footer.resourceLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 sm:col-span-1 md:col-span-1">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white sm:text-sm sm:normal-case">
              {t('Footer.contactUs')}
            </h4>
            <ul className="space-y-2 text-xs text-blue-200 sm:text-sm">
              <li className="flex items-start gap-1.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span className="break-words">{siteContact.address}</span>
              </li>
              {siteContact.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span>{phone}</span>
                </li>
              ))}
              <li className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span className="truncate">{siteContact.email}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span>{siteContact.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 text-center text-xs text-blue-300 sm:flex-row sm:text-left">
          <p>{t('Footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-emerald-400">{t('Footer.privacyPolicy')}</Link>
            <Link href="/terms-of-use" className="hover:text-emerald-400">{t('Footer.termsOfUse')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}