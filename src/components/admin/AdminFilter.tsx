"use client";

import { cn } from "@/lib/utils";

interface AdminFilterProps {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}

export default function AdminFilter({ options, value, onChange }: AdminFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={value === option}
          className={cn(
            "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
            value === option
              ? "bg-blue-900 text-white"
              : "bg-surface-muted text-text-muted hover:bg-border-subtle hover:text-text-primary"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
