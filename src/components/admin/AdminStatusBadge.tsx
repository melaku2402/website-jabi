import { CheckCircle2, Circle, Archive, Mail, MailOpen, Reply } from "lucide-react";
import { cn } from "@/lib/utils";

type Status =
  | "published"
  | "draft"
  | "archived"
  | "active"
  | "inactive"
  | "unread"
  | "read"
  | "replied"
  | "unsubscribed";

const statusConfig: Record<
  Status,
  { label: string; className: string; icon: React.ReactNode }
> = {
  published: {
    label: "Published",
    className: "bg-green-50 text-green-700 ring-1 ring-green-200",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
  draft: {
    label: "Draft",
    className: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    icon: <Circle className="h-3.5 w-3.5" />,
  },
  archived: {
    label: "Archived",
    className: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    icon: <Archive className="h-3.5 w-3.5" />,
  },
  active: {
    label: "Active",
    className: "bg-green-50 text-green-700 ring-1 ring-green-200",
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
  },
  inactive: {
    label: "Inactive",
    className: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    icon: <Circle className="h-3.5 w-3.5" />,
  },
  unread: {
    label: "Unread",
    className: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
    icon: <Mail className="h-3.5 w-3.5" />,
  },
  read: {
    label: "Read",
    className: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    icon: <MailOpen className="h-3.5 w-3.5" />,
  },
  replied: {
    label: "Replied",
    className: "bg-green-50 text-green-700 ring-1 ring-green-200",
    icon: <Reply className="h-3.5 w-3.5" />,
  },
  unsubscribed: {
    label: "Unsubscribed",
    className: "bg-red-50 text-red-700 ring-1 ring-red-200",
    icon: <Circle className="h-3.5 w-3.5" />,
  },
};

export default function AdminStatusBadge({ status }: { status: Status }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        config.className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
}
