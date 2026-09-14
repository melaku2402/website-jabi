import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Small uppercase label above the title, e.g. "News", "Gallery". */
  eyebrow: string;
  title: string;
  /** Optional "view all" style link rendered to the right on md+ screens. */
  action?: { label: string; href: string };
  /** Constrains the text block's width — useful when there's no action link. */
  maxWidthClass?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * Standard section header used across the light-background home sections
 * (Gallery, News, Projects): a small emerald eyebrow label, a bold zinc-950
 * heading, and an optional right-aligned "view all" link with an arrow icon.
 */
export default function SectionHeading({
  eyebrow,
  title,
  action,
  maxWidthClass,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className={maxWidthClass}>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#022777] md:text-4xl">
          {title}
        </h2>
        {children}
      </div>

      {action ? (
        <Link
          href={action.href}
          className="group relative inline-flex w-full max-w-xs shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#00a63f] px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#008b35] active:scale-[0.98] sm:w-auto sm:max-w-none sm:px-6 sm:py-4 sm:text-base md:px-7"
          aria-label={action.label}
        >
          {/* Light Sweep Shimmer Effect on Hover */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

          {/* Button Content */}
          <span className="relative inline-flex items-center gap-2">
            {action.label}
            <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </Link>
      ) : null}
    </div>
  );
}
