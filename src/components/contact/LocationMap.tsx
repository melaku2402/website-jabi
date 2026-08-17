import Link from 'next/link';
import { Landmark, ArrowRight } from 'lucide-react';
import { headOfficeMapEmbedUrl, headOfficeDirectionsUrl } from '@/data/contact-content';

export function LocationMap() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-[#01277A]">Our Location</h2>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
        <div className="h-72 w-full">
          <iframe
            src={headOfficeMapEmbedUrl}
            title="Jabi Cooperatives Head Office location"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4 bg-[#01277A] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#01277A]">
              <Landmark className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">Head Office</p>
              <p className="mt-0.5 text-xs text-blue-100">Finote Selam, West Gojjam,</p>
              <p className="text-xs text-blue-100">Amhara Region, Ethiopia</p>
              <p className="mt-0.5 text-xs text-blue-200">P.O.Box 1018</p>
            </div>
          </div>

          <Link
            href={headOfficeDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#01277A] hover:bg-blue-50 transition-colors"
          >
            Get Directions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}