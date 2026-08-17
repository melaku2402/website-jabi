import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfoCards } from '@/data/contact-content';

const icons = { call: Phone, email: Mail, location: MapPin, clock: Clock };
const iconBg = { 
  call: 'bg-[#01277A]', 
  email: 'bg-emerald-600', 
  location: 'bg-[#01277A]', 
  clock: 'bg-emerald-600' 
};

// Helper function to return correct link href based on card type
function getLineHref(type: keyof typeof icons, line: string): string | null {
  if (type === 'call') return `tel:${line.replace(/\s+/g, '')}`;
  if (type === 'email') return `mailto:${line}`;
  if (type === 'location') return `https://maps.google.com/?q=${encodeURIComponent(line)}`;
  return null;
}

export function ContactInfoStrip() {
  return (
    <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:grid-cols-2 lg:grid-cols-4">
        {contactInfoCards.map((card) => {
          const Icon = icons[card.icon];
          const bgClass = iconBg[card.icon];

          return (
            <div
              key={card.id}
              className="group flex items-start gap-4 rounded-xl p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50/60"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${bgClass}`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#01277A]">{card.title}</p>
                {card.lines.map((line) => {
                  const href = getLineHref(card.icon, line);

                  return href ? (
                    <a
                      key={line}
                      href={href}
                      target={card.icon === 'location' ? '_blank' : undefined}
                      rel={card.icon === 'location' ? 'noopener noreferrer' : undefined}
                      className="mt-0.5 block truncate text-xs font-medium text-gray-600 hover:text-emerald-600 hover:underline transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="mt-0.5 text-xs font-medium text-gray-600">
                      {line}
                    </p>
                  );
                })}
                {card.note && (
                  <p className="mt-1 text-[11px] text-gray-400">{card.note}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}