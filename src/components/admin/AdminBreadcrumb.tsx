"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { adminNavItems } from "@/data/admin/nav";

export default function AdminBreadcrumb() {
  const pathname = usePathname();
  const current =
    adminNavItems.find((item) =>
      item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href)
    ) ?? adminNavItems[0];

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <span className="text-text-muted">Admin</span>
      <ChevronRight className="h-3.5 w-3.5 text-text-muted" />
      <span className="font-medium text-text-primary">{current.label}</span>
    </nav>
  );
}
