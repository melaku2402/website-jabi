import { Inbox, type LucideIcon } from "lucide-react";

interface AdminEmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export default function AdminEmptyState({
  title,
  description,
  icon: Icon = Inbox,
}: AdminEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface-muted">
        <Icon className="h-6 w-6 text-text-muted" />
      </div>
      <div>
        <p className="text-sm font-semibold text-text-primary">{title}</p>
        {description && (
          <p className="mt-1 max-w-sm text-sm text-text-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
