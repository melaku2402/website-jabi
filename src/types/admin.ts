import type { LucideIcon } from "lucide-react";

export type AdminRole = "super_admin" | "admin" | "editor";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  adminOnly?: boolean;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  roleLabel: string;
  avatar: string;
  status: "active" | "inactive";
  lastLogin: string;
}

export type ContentStatus = "published" | "draft" | "archived";

export interface StatTrend {
  value: string;
  direction: "up" | "down" | "flat";
}
