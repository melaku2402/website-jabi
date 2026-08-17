import Link from 'next/link';
import { PiggyBank, HandCoins, Wallet, Send, GraduationCap, MoreHorizontal, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { homeServices } from '@/data/services';

const icons = {
  savings: PiggyBank,
  loans: HandCoins,
  fixedDeposit: Wallet,
  moneyTransfer: Send,
  financialEducation: GraduationCap,
  other: MoreHorizontal,
};

// Per-service icon color, matching the alternating green/orange/blue pattern in the design.
// Full class strings kept literal (not templated) so Tailwind's compiler picks them up.
const iconStyles: Record<keyof typeof icons, { bg: string; text: string }> = {
  savings: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  loans: { bg: 'bg-orange-50', text: 'text-orange-500' },
  fixedDeposit: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  moneyTransfer: { bg: 'bg-blue-50', text: 'text-blue-600' },
  financialEducation: { bg: 'bg-emerald-50', text: 'text-emerald-600' },
  other: { bg: 'bg-blue-50', text: 'text-blue-600' },
};

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Our Services</span>
        <h2 className="mt-2 text-3xl font-extrabold text-[#022777] sm:text-4xl">
          Financial Solutions Designed For You
        </h2>
        <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-emerald-500" />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {homeServices.map((service) => {
          const Icon = icons[service.icon];
          const style = iconStyles[service.icon];
          return (
            <Card
              key={service.id}
              className="group relative flex flex-col items-center gap-3 border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl active:scale-[0.98]"
            >
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full ${style.bg} ${style.text} transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon className="h-8 w-8" strokeWidth={1.75} />
              </span>
              <h3 className="text-base font-bold text-[#022777] transition-colors group-hover:text-emerald-600">
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500">{service.description}</p>

              {/* Plain text link with arrow — no pill border, matching the design */}
              <Link
                href={service.href}
                className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#022777] after:absolute after:inset-0 hover:text-emerald-600"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}