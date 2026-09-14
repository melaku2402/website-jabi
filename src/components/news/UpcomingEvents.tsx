import { Link } from '@/i18n/navigation';
import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { upcomingEvents } from '@/data/news-content';

export function UpcomingEvents() {
  const t = useTranslations('NewsPage.upcomingEvents');
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-950">{t('heading')}</h3>

      <div className="mt-4 space-y-5">
        {upcomingEvents.map((event, idx) => (
          <div key={event.id} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-blue-950 text-white">
                <span className="text-[9px] font-bold uppercase leading-none">{event.month}</span>
                <span className="text-sm font-extrabold leading-tight">{event.day}</span>
              </div>
              {idx < upcomingEvents.length - 1 && <span className="mt-1 w-px flex-1 bg-gray-200" />}
            </div>
            <div className="pb-1">
              <p className="text-sm font-bold text-blue-950">{event.title}</p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                <Clock className="h-3.5 w-3.5" />
                {event.time}
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-500">
                <MapPin className="h-3.5 w-3.5" />
                {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/news/events"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-900"
      >
        {t('viewAll')} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
