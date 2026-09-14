import Image from "next/image";
import { Quote } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import SectionHeading from "../ui/SectionHeading";
import { getPublishedTestimonials } from "@/lib/repositories/testimonials";
import { testimonials as staticTestimonials } from "@/data/testimonials";

export default async function TestimonialsSection() {
  const locale = await getLocale();
  const dbTestimonials = await getPublishedTestimonials(locale);

  // Falls back to the static placeholder testimonials (English only) until
  // real bilingual testimonials are added from the admin panel.
  const testimonials =
    dbTestimonials.length > 0
      ? dbTestimonials
      : staticTestimonials.map((item) => ({
          id: item.id,
          name: item.name,
          position: item.cooperative ? `${item.role} · ${item.cooperative}` : item.role,
          quote: item.quote,
          avatar: item.photo ?? "",
          rating: item.rating ?? null,
        }));

  if (testimonials.length === 0) return null;

  const t = await getTranslations("HomePage.testimonials");
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="bg-[#f7f8f7] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("heading")}
          maxWidthClass="max-w-2xl"
          className="mb-8 sm:mb-10 "
        />
      </div>

      <div className="group relative w-full overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:px-6 md:px-8 lg:px-8 xl:px-10">
        <div className="marquee-track flex w-max items-stretch gap-5 group-hover:[animation-play-state:paused] sm:gap-6">
          {marqueeTestimonials.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex w-[300px] shrink-0 flex-col rounded-xl border-2 border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg sm:w-[360px] sm:p-7"
            >
              <Quote
                className="size-6 text-green-700"
                fill="currentColor"
                strokeWidth={0}
              />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  {item.avatar ? (
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {item.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {item.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-rtl {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-rtl 40s linear infinite;
        }
        .group:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (max-width: 639px) {
          .marquee-track { animation-duration: 28s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
