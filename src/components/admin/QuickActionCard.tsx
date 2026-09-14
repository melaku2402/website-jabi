
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface QuickActionCardProps {
  href: string;
  label: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
}

export default function QuickActionCard({
  href,
  label,
  icon: Icon,
  iconColor = "text-text-primary",
  iconBg = "bg-white dark:bg-white/10",
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border-subtle bg-surface-muted px-3 py-4 text-center transition-all hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-xs"
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg shadow-2xs ${iconBg} ${iconColor}`}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <span className="text-xs font-semibold text-text-primary">{label}</span>
    </Link>
  );
}