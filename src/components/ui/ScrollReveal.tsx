"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger multiple reveals on the same page, e.g. delay={i * 80}. */
  delayMs?: number;
  className?: string;
};

/**
 * Fades + lifts its children in once they scroll into view. Uses a single
 * IntersectionObserver-driven boolean rather than a scroll listener, so
 * it's cheap: no per-frame work, no layout thrashing. Reveals once and
 * disconnects — content doesn't re-hide when scrolled past.
 *
 * Respects prefers-reduced-motion by skipping the animation entirely and
 * rendering content immediately visible.
 */
export default function ScrollReveal({
  children,
  delayMs = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (visible) return; // already revealed (reduced-motion case) — nothing to observe

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
