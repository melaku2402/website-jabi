'use client';

import { useState, useRef, MouseEvent } from 'react';
import { Landmark, Coins, HandCoins, TrendingUp, Award } from 'lucide-react';
import { homeImpact } from '@/data/impact';
import { CountUp } from './CountUp';

const icons = {
  assets: Landmark,
  capital: Coins,
  surplus: HandCoins,
  growth: TrendingUp,
  years: Award,
} as const;

export function ImpactBar() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Relative mouse position inside the card (0 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // VERY subtle 3D tilt calculations (max ±1.5 deg instead of 4)
    const rotateX = -((y - centerY) / centerY) * 1.5;
    const rotateY = ((x - centerX) / centerX) * 1.5;

    setMousePos({ x, y });
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 }); // Reset tilt on leave
  };

  return (
    <section className="bg-slate-50 py-12 perspective-1000">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Floating Card Container with subtle 3D Tilt */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
          className="relative overflow-hidden rounded-2xl bg-[#012A82] px-8 py-10 shadow-lg transition-transform duration-500 ease-out hover:shadow-xl hover:shadow-blue-900/20"
        >
          {/* Dynamic Ambient Spotlight following cursor */}
          {isHovered && (
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.08), transparent 40%)`,
              }}
            />
          )}

          <p className="relative z-10 text-center text-xs font-bold uppercase tracking-widest text-emerald-400">
            Our Impact In Numbers
          </p>

          <div className="relative z-10 mt-6 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
            {homeImpact.map((item, idx) => {
              const Icon = icons[item.icon as keyof typeof icons] || Award;
              return (
                <div
                  key={item.id}
                  className={`group flex cursor-default flex-col items-center gap-0.5 rounded-xl px-4 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 active:scale-[0.98] ${
                    idx > 0 ? 'sm:border-l sm:border-white/10' : ''
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Subtle icon glow highlight on hover */}
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <Icon
                      className="relative h-7 w-7 text-white/90 transition-all duration-300 group-hover:scale-105 group-hover:text-emerald-400"
                      strokeWidth={1.5}
                    />
                  </div>

                  <p className="mt-2 text-2xl font-extrabold text-white transition-colors duration-300 group-hover:text-emerald-50">
                    <CountUp value={item.value} />
                  </p>
                  <p className="text-xs font-medium text-blue-300 transition-colors duration-300 group-hover:text-blue-100">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}