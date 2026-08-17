import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { featuredService } from '@/data/services-detail';

export function FeaturedService() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 shadow-sm lg:grid-cols-2">
        <div className="relative h-64 w-full lg:h-full">
          <Image src={featuredService.imageUrl} alt={featuredService.title} fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center bg-white p-8 lg:p-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            {featuredService.label}
          </span>
          <h3 className="mt-2 text-2xl font-extrabold text-blue-950 sm:text-3xl">{featuredService.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">{featuredService.description}</p>

          <ul className="mt-5 space-y-2.5">
            {featuredService.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={featuredService.ctaHref}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            {featuredService.ctaLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
