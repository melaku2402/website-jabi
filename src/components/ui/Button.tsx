import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all focus:outline-none';
  const variants = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm',
    secondary: 'bg-slate-800 text-white hover:bg-slate-900',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50'
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}