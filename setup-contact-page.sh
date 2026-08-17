#!/usr/bin/env bash
set -e
echo "Creating Contact Us page files..."
mkdir -p "src/app/(website)/[locale]/contact" src/components/contact

mkdir -p "$(dirname "src/data/contact-content.ts")"
cat > "src/data/contact-content.ts" << 'FILEEOF'
export interface TrustBadge {
  id: string;
  icon: 'reliable' | 'memberFocused' | 'transparency' | 'growth';
  label: string;
}

export const trustBadges: TrustBadge[] = [
  { id: 'reliable', icon: 'reliable', label: 'Reliable Service' },
  { id: 'member-focused', icon: 'memberFocused', label: 'Member Focused' },
  { id: 'transparency', icon: 'transparency', label: 'Transparency' },
  { id: 'growth', icon: 'growth', label: 'Together for Growth' },
];

export interface ContactInfoCard {
  id: string;
  icon: 'call' | 'email' | 'location' | 'clock';
  title: string;
  lines: string[];
  note: string;
}

export const contactInfoCards: ContactInfoCard[] = [
  {
    id: 'call',
    icon: 'call',
    title: 'Call Us',
    lines: ['+251 58 220 1033', '+251 91 662 2200'],
    note: 'Mon - Fri: 8:00 AM - 5:00 PM',
  },
  {
    id: 'email',
    icon: 'email',
    title: 'Email Us',
    lines: ['info@jabicoopscu.com.et', 'support@jabicoopscu.com.et'],
    note: 'We reply within 24 hours',
  },
  {
    id: 'location',
    icon: 'location',
    title: 'Head Office',
    lines: ['Finote Selam, West Gojjam', 'Amhara Region, Ethiopia'],
    note: 'P.O.Box 1018',
  },
  {
    id: 'hours',
    icon: 'clock',
    title: 'Working Hours',
    lines: ['Monday - Friday', '8:00 AM - 5:00 PM'],
    note: 'Saturday: 8:00 AM - 1:00 PM',
  },
];

export interface BranchListItem {
  id: string;
  name: string;
  location: string;
  phone: string;
  imageUrl: string;
}

export const branchesList: BranchListItem[] = [
  {
    id: 'bahir-dar',
    name: 'Bahir Dar Branch',
    location: 'Bahir Dar City Administration',
    phone: '+251 58 222 3344',
    imageUrl: '/images/branches/bahir-dar.jpg',
  },
  {
    id: 'debre-markos',
    name: 'Debre Markos Branch',
    location: 'Debre Markos Town',
    phone: '+251 58 223 4455',
    imageUrl: '/images/branches/debre-markos.jpg',
  },
  {
    id: 'bure',
    name: 'Bure Branch',
    location: 'Bure Town',
    phone: '+251 58 224 5566',
    imageUrl: '/images/branches/bure.jpg',
  },
  {
    id: 'addis-zemen',
    name: 'Addis Zemen Branch',
    location: 'Addis Zemen Town',
    phone: '+251 58 225 6677',
    imageUrl: '/images/branches/addis-zemen.jpg',
  },
  {
    id: 'dega-damot',
    name: 'Dega Damot Branch',
    location: 'Dega Damot Woreda',
    phone: '+251 58 226 7788',
    imageUrl: '/images/branches/dega-damot.jpg',
  },
];

export interface ContactFaqItem {
  id: string;
  question: string;
  answer: string;
}

export const contactFaq: ContactFaqItem[] = [
  {
    id: 'membership',
    question: 'How can I become a member of Jabi Cooperatives S.C.U?',
    answer: 'Visit any branch with a valid ID and complete the membership application form. Our staff will guide you through account opening and the initial savings deposit.',
  },
  {
    id: 'loan-requirements',
    question: 'What are the requirements for a loan?',
    answer: 'You need an active membership account, valid identification, proof of income or collateral, and a completed loan application form.',
  },
  {
    id: 'balance-check',
    question: 'How can I check my account balance?',
    answer: 'You can check your balance at any branch, through our mobile banking service, or by calling our customer service line.',
  },
  {
    id: 'interest-rates',
    question: 'What are your interest rates on savings and loans?',
    answer: 'Interest rates vary by product and are reviewed periodically. Please contact a branch or our support line for the most current rates.',
  },
  {
    id: 'update-info',
    question: 'How can I update my account information?',
    answer: 'Visit your nearest branch with valid identification to update your account details, or contact customer support for guidance.',
  },
];

export const headOfficeMapEmbedUrl =
  'https://maps.google.com/maps?q=Finote%20Selam%2C%20West%20Gojjam%2C%20Ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed';

export const headOfficeDirectionsUrl =
  'https://www.google.com/maps/search/?api=1&query=Finote+Selam+West+Gojjam+Ethiopia';
FILEEOF
echo "  wrote src/data/contact-content.ts"

mkdir -p "$(dirname "src/components/contact/ContactHero.tsx")"
cat > "src/components/contact/ContactHero.tsx" << 'FILEEOF'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Users, Eye, TrendingUp } from 'lucide-react';
import { trustBadges } from '@/data/contact-content';

const icons = { reliable: ShieldCheck, memberFocused: Users, transparency: Eye, growth: TrendingUp };

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 lg:py-20">
          <nav className="mb-5 flex items-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-blue-200">
            We are here to help you! Reach out to us for any inquiries, support or feedback.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {trustBadges.map((badge) => {
              const Icon = icons[badge.icon];
              return (
                <span
                  key={badge.id}
                  className="flex items-center gap-2 rounded-full border border-blue-800 bg-blue-900/40 px-4 py-2 text-xs font-medium text-blue-100"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-400" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>

        <div className="relative h-64 lg:h-auto">
          <Image
            src="/images/contact/hero-building.jpg"
            alt="Jabi Cooperatives office building"
            fill
            priority
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/40 to-transparent lg:from-blue-950 lg:via-blue-950/10" />
        </div>
      </div>
    </section>
  );
}
FILEEOF
echo "  wrote src/components/contact/ContactHero.tsx"

mkdir -p "$(dirname "src/components/contact/ContactInfoStrip.tsx")"
cat > "src/components/contact/ContactInfoStrip.tsx" << 'FILEEOF'
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfoCards } from '@/data/contact-content';

const icons = { call: Phone, email: Mail, location: MapPin, clock: Clock };
const iconBg = { call: 'bg-blue-950', email: 'bg-emerald-600', location: 'bg-blue-950', clock: 'bg-emerald-600' };

export function ContactInfoStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
        {contactInfoCards.map((card) => {
          const Icon = icons[card.icon];
          return (
            <div key={card.id} className="flex items-start gap-3">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white ${iconBg[card.icon]}`}>
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-blue-950">{card.title}</p>
                {card.lines.map((line) => (
                  <p key={line} className="mt-0.5 text-xs font-medium text-gray-600">{line}</p>
                ))}
                <p className="mt-1 text-[11px] text-gray-400">{card.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
FILEEOF
echo "  wrote src/components/contact/ContactInfoStrip.tsx"

mkdir -p "$(dirname "src/components/contact/ContactForm.tsx")"
cat > "src/components/contact/ContactForm.tsx" << 'FILEEOF'
'use client';

import { useActionState } from 'react';
import { Send } from 'lucide-react';
import { submitContactAction } from '@/actions/contact';

const inputClasses =
  'mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-gray-400 focus:border-blue-950 focus:outline-none focus:ring-1 focus:ring-blue-950';

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactAction, null);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-blue-950">Send Us a Message</h2>
      <p className="mt-2 text-sm text-gray-500">
        Have a question or feedback? Fill out the form below and our team will get back to you.
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
            <input name="fullName" type="text" required placeholder="Full Name *" className={inputClasses} />
            {state?.errors?.fullName && <p className="mt-1 text-xs text-red-500">{state.errors.fullName[0]}</p>}
          </div>
          <div>
            <input name="email" type="email" required placeholder="Email Address *" className={inputClasses} />
            {state?.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input name="phone" type="tel" required placeholder="Phone Number *" className={inputClasses} />
            {state?.errors?.phone && <p className="mt-1 text-xs text-red-500">{state.errors.phone[0]}</p>}
          </div>
          <div>
            <input name="subject" type="text" required placeholder="Subject *" className={inputClasses} />
            {state?.errors?.subject && <p className="mt-1 text-xs text-red-500">{state.errors.subject[0]}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message *"
            className={inputClasses}
          />
          {state?.errors?.message && <p className="mt-1 text-xs text-red-500">{state.errors.message[0]}</p>}
        </div>

        <label className="flex items-start gap-2 text-xs text-gray-500">
          <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-gray-300 text-emerald-600" />
          <span>
            I agree to the{' '}
            <a href="/privacy-policy" className="font-medium text-blue-950 hover:text-emerald-600">privacy policy</a>{' '}
            and{' '}
            <a href="/terms-of-use" className="font-medium text-blue-950 hover:text-emerald-600">terms of use</a>
          </span>
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="flex w-fit items-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {isPending ? 'Sending...' : 'Send Message'} <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
FILEEOF
echo "  wrote src/components/contact/ContactForm.tsx"

mkdir -p "$(dirname "src/components/contact/LocationMap.tsx")"
cat > "src/components/contact/LocationMap.tsx" << 'FILEEOF'
import Link from 'next/link';
import { Landmark, ArrowRight } from 'lucide-react';
import { headOfficeMapEmbedUrl, headOfficeDirectionsUrl } from '@/data/contact-content';

export function LocationMap() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-blue-950">Our Location</h2>

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

        <div className="flex flex-col gap-4 bg-blue-950 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-950">
              <Landmark className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Head Office</p>
              <p className="mt-0.5 text-xs text-blue-200">Finote Selam, West Gojjam,</p>
              <p className="text-xs text-blue-200">Amhara Region, Ethiopia</p>
              <p className="mt-0.5 text-xs text-blue-300">P.O.Box 1018</p>
            </div>
          </div>

          <Link
            href={headOfficeDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-950 hover:bg-blue-50"
          >
            Get Directions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
FILEEOF
echo "  wrote src/components/contact/LocationMap.tsx"

mkdir -p "$(dirname "src/components/contact/BranchesList.tsx")"
cat > "src/components/contact/BranchesList.tsx" << 'FILEEOF'
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { branchesList } from '@/data/contact-content';

export function BranchesList() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-blue-950">Our Branches</h2>

      <div className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm">
        {branchesList.map((branch) => (
          <div key={branch.id} className="flex items-center gap-4 p-4">
            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
              <Image src={branch.imageUrl} alt={branch.name} fill className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-blue-950">{branch.name}</p>
              <p className="mt-0.5 truncate text-xs text-gray-500">{branch.location}</p>
            </div>
            <span className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-gray-500">
              <Phone className="h-3.5 w-3.5 text-blue-950" />
              {branch.phone}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/branches"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-blue-950 hover:bg-gray-50"
      >
        View All Branches <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
FILEEOF
echo "  wrote src/components/contact/BranchesList.tsx"

mkdir -p "$(dirname "src/components/contact/ContactFAQ.tsx")"
cat > "src/components/contact/ContactFAQ.tsx" << 'FILEEOF'
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HelpCircle, ChevronDown, Headphones, ArrowRight } from 'lucide-react';
import { contactFaq } from '@/data/contact-content';

export function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-extrabold text-blue-950">Frequently Asked Questions</h2>

      <div className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
        {contactFaq.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="p-3">
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-3 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2.5 text-sm font-medium text-blue-950">
                  <HelpCircle className="h-4 w-4 shrink-0 text-blue-950" />
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <p className="mt-2 pl-6.5 text-xs leading-relaxed text-gray-500">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-xl bg-emerald-50 p-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600">
            <Headphones className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-blue-950">Need More Help?</p>
            <p className="text-xs text-gray-600">Our customer service team is ready to assist you.</p>
          </div>
        </div>
        <Link
          href="tel:+251582201033"
          className="flex shrink-0 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700"
        >
          Call Us Now <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
FILEEOF
echo "  wrote src/components/contact/ContactFAQ.tsx"

mkdir -p "$(dirname "src/components/contact/ContactCTA.tsx")"
cat > "src/components/contact/ContactCTA.tsx" << 'FILEEOF'
import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-blue-950 p-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-blue-950">
            <Users className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">Join Jabi Cooperatives Today!</h2>
            <p className="mt-1 max-w-md text-sm text-blue-200">
              Experience reliable, inclusive and innovative financial services designed for you and your community.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/membership"
            className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Become a Member <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center gap-2 rounded-lg border border-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
FILEEOF
echo "  wrote src/components/contact/ContactCTA.tsx"

mkdir -p "$(dirname "src/components/contact/ContactFormAndMap.tsx")"
cat > "src/components/contact/ContactFormAndMap.tsx" << 'FILEEOF'
import { ContactForm } from './ContactForm';
import { LocationMap } from './LocationMap';

export function ContactFormAndMap() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <ContactForm />
        <LocationMap />
      </div>
    </section>
  );
}
FILEEOF
echo "  wrote src/components/contact/ContactFormAndMap.tsx"

mkdir -p "$(dirname "src/components/contact/BranchesAndFaq.tsx")"
cat > "src/components/contact/BranchesAndFaq.tsx" << 'FILEEOF'
import { BranchesList } from './BranchesList';
import { ContactFAQ } from './ContactFAQ';

export function BranchesAndFaq() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <BranchesList />
        <ContactFAQ />
      </div>
    </section>
  );
}
FILEEOF
echo "  wrote src/components/contact/BranchesAndFaq.tsx"

mkdir -p "$(dirname "src/app/(website)/[locale]/contact/page.tsx")"
cat > "src/app/(website)/[locale]/contact/page.tsx" << 'FILEEOF'
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfoStrip } from '@/components/contact/ContactInfoStrip';
import { ContactFormAndMap } from '@/components/contact/ContactFormAndMap';
import { BranchesAndFaq } from '@/components/contact/BranchesAndFaq';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { Partners } from '@/components/about/Partners';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return {
    title: 'Contact Us | Jabi Cooperatives Saving & Credit Union S.C',
    description:
      'We are here to help you! Reach out to Jabi Cooperatives Saving & Credit Union S.C. for any inquiries, support or feedback.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <ContactHero />
      <ContactInfoStrip />
      <ContactFormAndMap />
      <BranchesAndFaq />
      <ContactCTA />
      <Partners />
    </main>
  );
}
FILEEOF
echo "  wrote src/app/(website)/[locale]/contact/page.tsx"

echo "All Contact Us page files written successfully."