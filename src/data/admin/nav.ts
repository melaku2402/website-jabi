import {
  LayoutDashboard,
  Newspaper,
  Image as ImageIcon,
  FileText,
  Handshake,
  Quote,
  Wrench,
  Landmark,
  TrendingUp,
  Clock,
  BarChart3,
  Send,
  Mail,
  UserCog,
  Settings,
} from "lucide-react";
import type { AdminNavItem } from "@/types/admin";

export const adminNavItems: AdminNavItem[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/news",
    label: "Manage News",
    icon: Newspaper,
  },
  {
    href: "/admin/gallery",
    label: "Manage Gallery",
    icon: ImageIcon,
  },
  {
    href: "/admin/reports",
    label: "Manage Reports",
    icon: FileText,
  },
  {
    href: "/admin/partners",
    label: "Manage Partners",
    icon: Handshake,
  },
  {
    href: "/admin/testimonials",
    label: "Manage Testimonials",
    icon: Quote,
  },
  {
    href: "/admin/services",
    label: "Manage Services",
    icon: Wrench,
  },
  {
    href: "/admin/management-team",
    label: "Management Team",
    icon: Landmark,
  },
  {
    href: "/admin/organization-stats",
    label: "Organization Stats",
    icon: TrendingUp,
  },
  {
    href: "/admin/history",
    label: "Manage History Timeline",
    icon: Clock,
  },
  {
    href: "/admin/impact-metrics",
    label: "Manage Impact Metrics",
    icon: BarChart3,
  },
  {
    href: "/admin/newsletter",
    label: "Newsletter Subscribers",
    icon: Send,
  },
  {
    href: "/admin/messages",
    label: "Manage Contact Messages",
    icon: Mail,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: UserCog,
    adminOnly: true,
  },
  {
    href: "/admin/settings",
    label: "Website Settings",
    icon: Settings,
  },
];
