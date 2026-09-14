import { Plus, type LucideIcon } from "lucide-react";

interface AdminPageHeaderProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  ActionIcon?: LucideIcon;
}

export default function AdminPageHeader({
  title,
  description,
  actionLabel,
  onAction,
  ActionIcon = Plus,
}: AdminPageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-xl font-bold text-text-primary sm:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-text-muted">{description}</p>
      </div>
      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800 focus-visible:outline-blue-600"
        >
          <ActionIcon className="h-4 w-4" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
