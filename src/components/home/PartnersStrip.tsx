import Image from 'next/image';
import { partners } from '@/data/partners';

function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
  const lines = partner.name.split('\n');

  return (
    <div className="flex flex-1 shrink-0 basis-32 items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200">
      <div className="relative h-9 w-9 shrink-0">
        <Image
          src={partner.logoUrl}
          alt={partner.name.replace('\n', ' ')}
          fill
          className="object-contain"
          sizes="36px"
        />
      </div>

      <div className="flex flex-col justify-center leading-tight">
        {lines.map((line, i) => (
          <span key={i} className="whitespace-nowrap text-[13px] font-bold text-[#022777]">
            {line}
          </span>
        ))}
        {partner.subtitle && (
          <span className="whitespace-nowrap text-[11px] font-medium text-gray-400">
            {partner.subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export function PartnersStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
        Our Partners
      </p>

      <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-partners-marquee gap-3 group-hover:[animation-play-state:paused]">
          {/* Render the list twice back-to-back for a seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <PartnerCard key={`${partner.id}-${i}`} partner={partner} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partners-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-partners-marquee {
          animation: partners-marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}