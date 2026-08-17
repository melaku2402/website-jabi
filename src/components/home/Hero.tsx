'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden bg-blue-950">
      {/* Background Image Container with Responsive Positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-bg-home.jpg"
          alt="Jabi Cooperatives head office building"
          fill
          priority
          sizes="100vw"
          /* 
            - Mobile (default): Focus on the right/top where the building logo & structure stand out 
            - md/lg: Anchor center-right so building aligns on the right side while text stays on the left
          */
          className="object-cover object-[75%_center] md:object-[80%_center] lg:object-right-center"
        />

        {/* 
          Adaptive Gradient Overlays for Maximum Legibility:
          - Mobile/Tablet: Darker, full-width gradient to ensure text readability over bright areas
          - Desktop (lg): Horizontal gradient fading to transparent on the right to expose the building architecture
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/75 to-blue-950/50 md:bg-gradient-to-r md:from-blue-950/90 md:via-blue-950/60 md:to-transparent lg:from-blue-950/95 lg:via-blue-950/40 lg:to-transparent" />
        
        {/* Soft bottom edge blend */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-950 to-transparent" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-36 lg:pt-40">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Main Headline */}
          <h1 className="animate-fade-up text-3xl font-extrabold leading-tight text-white opacity-0 [animation-delay:100ms] sm:text-5xl lg:text-6xl lg:leading-none">
            Your Trust,
            <br />
            Our <span className="text-emerald-400">Commitment!</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up mt-4 max-w-md text-sm leading-relaxed text-blue-100 opacity-0 [animation-delay:300ms] sm:mt-5 sm:max-w-lg sm:text-lg">
            Building stronger communities through reliable, innovative, and inclusive financial services.
          </p>

          {/* Action Buttons */}
          <div className="animate-fade-up mt-6 pt-5 flex flex-col gap-3 opacity-0 [animation-delay:500ms] sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
            <Button 
              variant="primary" 
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-emerald-600 px-7 py-3 text-base font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:text-sm"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                Open an Account <UserPlus className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </span>
            </Button>

            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-blue-950 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 sm:w-auto sm:text-sm"
              >
                <span>Our Services</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}