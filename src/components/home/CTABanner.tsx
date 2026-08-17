import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const perks = ['Easy Savings', 'Affordable Loans', 'Better Tomorrow'];

export function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-6">
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0B1F4D] via-[#0F2E5C] to-[#0F5C4C] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/30">
        <div className="relative z-10 flex flex-col items-stretch lg:flex-row">
          {/* Left: full-height image */}
          <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-56 lg:h-auto lg:w-64">
            <Image
              src="/images/home/jabi-app-mockup.png"
              alt="Jabi Cooperatives mobile app"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
            />
            {/* soft fade into the gradient so the image edge blends in */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0F2E5C]/40" />
          </div>

          {/* Right: text + buttons */}
          <div className="flex flex-1 flex-col items-center justify-between gap-8 px-8 py-10 sm:flex-row">
            <div>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
                Join Jabi Cooperatives Today!
              </h2>
              <p className="mt-2 max-w-md text-sm text-blue-100/90">
                Become a member and enjoy secure, reliable and beneficial financial services.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {perks.map((perk) => (
                  <span
                    key={perk}
                    className="flex items-center gap-1.5 text-xs font-medium text-white/90 transition-colors duration-300 hover:text-white"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300 transition-transform duration-300 hover:scale-110" />
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <Link
                href="/membership"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-900/30 active:scale-[0.98]"
              >
                Open an Account
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}