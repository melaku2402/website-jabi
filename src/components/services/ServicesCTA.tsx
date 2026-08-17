import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServicesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      {/* Container with section-wide hover lift and shadow */}
      <div className="relative overflow-hidden rounded-2xl bg-[#01277A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#01277A]/25">
        <div className="relative z-10 flex flex-col items-stretch sm:flex-row">
          
          {/* Left image edge-to-edge */}
          <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
            <Image
              src="/images/home/jabi-app-mockup.png"
              alt="Jabi Cooperatives mobile app"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Right: Text + Interactive Action Buttons */}
          <div className="flex flex-1 flex-col items-center justify-between gap-6 px-8 py-8 sm:flex-row">
            <div>
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                Need Financial Services?
              </h2>
              <p className="mt-1.5 max-w-md text-sm text-blue-100/90">
                We are here to help you achieve your financial goals. Open an account today and enjoy member benefits.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3.5 sm:w-auto sm:flex-row">
              {/* Primary Action Button (Increased Size) */}
              <Link
                href="/membership"
                className="group/btn inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-3 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 sm:text-sm"
              >
                <span>Open an Account</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>

              {/* Secondary Button (Increased Size) */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 sm:text-sm"
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