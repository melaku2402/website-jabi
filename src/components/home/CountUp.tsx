'use client';

import { useEffect, useRef, useState } from 'react';

export function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => zeroed(value));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const match = value.match(/^([\d,]+(?:\.\d+)?)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const raw = match[1];
    const suffix = value.slice(match.index! + raw.length);
    const target = parseFloat(raw.replace(/,/g, ''));
    const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
    const usesCommas = raw.includes(',');

    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      const formatted = usesCommas
        ? Math.round(current).toLocaleString('en-US')
        : current.toFixed(decimals);

      setDisplay(`${formatted}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration]);

  return <span ref={ref}>{display}</span>;
}

function zeroed(value: string) {
  const match = value.match(/^([\d,]+(?:\.\d+)?)/);
  if (!match) return value;
  const raw = match[1];
  const suffix = value.slice(match.index! + raw.length);
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  const zero = decimals > 0 ? (0).toFixed(decimals) : '0';
  return `${zero}${suffix}`;
}
