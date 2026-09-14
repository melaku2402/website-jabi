
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminStatCardProps {
  label: string;
  value: string;
  change?: string;
  changeDirection?: "up" | "down" | "flat";
  icon: LucideIcon;
  color: "navy" | "green" | "purple" | "orange" | "blue";
  href?: string;
}

const colorMap: Record<AdminStatCardProps["color"], string> = {
  navy: "bg-blue-900 text-white",
  green: "bg-green-600 text-white",
  purple: "bg-violet-600 text-white",
  orange: "bg-amber-500 text-white",
  blue: "bg-blue-600 text-white",
};

export default function AdminStatCard({
  label,
  value,
  change,
  changeDirection = "flat",
  icon: Icon,
  color,
  href,
}: AdminStatCardProps) {
  const content = (
    <>
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg",
            colorMap[color],
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-text-muted">
            {label}
          </p>
          <p className="mt-0.5 text-2xl font-bold text-text-primary">{value}</p>
        </div>
      </div>
      {change && (
        <div
          className={cn(
            "mt-3 inline-flex items-center gap-1 text-xs font-medium",
            changeDirection === "up" && "text-green-600",
            changeDirection === "down" && "text-red-600",
            changeDirection === "flat" && "text-text-muted",
          )}
        >
          {changeDirection === "up" && <ArrowUpRight className="h-3.5 w-3.5" />}
          {changeDirection === "down" && (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {changeDirection === "flat" && <Minus className="h-3.5 w-3.5" />}
          {change}
        </div>
      )}
    </>
  );

  const containerClasses = cn(
    "block rounded-xl border border-border-subtle bg-surface p-5 shadow-sm transition-all",
    href &&
      "hover:border-blue-300 hover:shadow-md dark:hover:border-blue-700",
  );

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return <div className={containerClasses}>{content}</div>;
}