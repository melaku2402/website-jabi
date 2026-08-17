'use client';

import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { testimonials } from '@/data/testimonials';

// Alternating accent styles for quote badge
const accentStyles = [
  { bg: 'bg-emerald-600', text: 'text-white' },
  { bg: 'bg-[#03387C]', text: 'text-white' },
  { bg: 'bg-emerald-600', text: 'text-white' },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-[#03387C] sm:text-4xl">
            What Our Members Say
          </h2>
          <span className="mx-auto mt-2.5 block h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Real stories from members whose financial journeys have been shaped by cooperative values.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => {
            const accent = accentStyles[idx % accentStyles.length];

            return (
              <Card
                key={testimonial.id}
                className="group flex h-full flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#03387C]/20 hover:shadow-lg hover:shadow-[#03387C]/5"
              >
                {/* Top Row: Quote Badge & Star Rating */}
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-110 ${accent.bg} ${accent.text}`}
                  >
                    <Quote className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                  </span>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-gray-200 text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Member Profile Footer */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-500/20">
                    <Image
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      fill
                      sizes="40px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#03387C] transition-colors duration-300 group-hover:text-emerald-600">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}