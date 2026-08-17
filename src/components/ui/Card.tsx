import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {children}
    </div>
  );
}