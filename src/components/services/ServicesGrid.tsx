import Link from 'next/link';
import { PiggyBank, HandCoins, Wallet, Send, GraduationCap, MoreHorizontal, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { servicesGridDetail } from '@/data/services-detail';

const icons = {
  savings: PiggyBank,
  loans: HandCoins,
  fixedDeposit: Wallet,
  moneyTransfer: Send,
  financialEducation: GraduationCap,
  other: MoreHorizontal,
};

const iconColorClasses = {
  green: 'bg-emerald-50 text-emerald-600',
  orange: 'bg-orange-50 text-orange-500',
  blue: 'bg-blue-50 text-blue-600',
};

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Our Services</span>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {servicesGridDetail.map((service) => {
          const Icon = icons[service.icon];
          return (
            <Card key={service.id} className="flex flex-col items-center gap-3 p-6 text-center">
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${iconColorClasses[service.iconColor]}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-base font-bold text-blue-950">{service.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500">{service.description}</p>
              <Link
                href={service.href}
                className="mt-1 flex items-center gap-1 text-xs font-semibold text-blue-950 hover:text-emerald-600"
              >
                {service.ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
