
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronsLeft, ChevronsRight, ShieldCheck } from "lucide-react";
import { adminNavItems } from "@/data/admin/nav";
import type { AdminUser } from "@/types/admin";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  currentUser: AdminUser | null;
  variant?: "desktop" | "mobile";
}

export default function AdminSidebar({
  collapsed,
  onToggleCollapse,
  currentUser,
  variant = "desktop",
}: AdminSidebarProps) {
  const pathname = usePathname();
  const isCollapsed = variant === "desktop" && collapsed;

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const visibleNavItems = adminNavItems.filter(
    (item) => !item.adminOnly || currentUser?.role === "super_admin",
  );

  return (
    <aside
      className={cn(
        "sticky top-0 h-screen flex flex-col bg-blue-900 text-white transition-all duration-200 shrink-0 z-20",
        isCollapsed ? "w-[76px]" : "w-[260px]",
      )}
    >
      {/* Brand */}
      <div
        className={cn(
          "flex items-center gap-3 border-b border-white/10 px-5 py-5",
          isCollapsed && "justify-center px-3",
        )}
      >
        <Image
          src="/images/home/logo.png"
          alt="JABI Cooperatives logo"
          width={40}
          height={40}
          className="shrink-0 rounded-full"
        />
        {!isCollapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-bold leading-tight tracking-wide">
              JABI COOPERATIVES
            </p>
            <p className="text-xs text-blue-100/70">Admin Panel</p>
          </div>
        )}
      </div>

      {/* Nav List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const needsDivider = item.label === "Users";
            return (
              <li key={item.href}>
                {needsDivider && (
                  <div className="my-3 border-t border-white/10" />
                )}
                <Link
                  href={item.href}
                  title={isCollapsed ? item.label : undefined}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isCollapsed && "justify-center px-2",
                    active
                      ? "bg-white text-blue-900 shadow-sm"
                      : "text-blue-50/85 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-[18px] w-[18px] shrink-0",
                      active
                        ? "text-blue-600"
                        : "text-blue-100/80 group-hover:text-white",
                    )}
                  />
                  {!isCollapsed && (
                    <span className="truncate">{item.label}</span>
                  )}
                  {isCollapsed && (
                    <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1.5 text-xs text-white shadow-lg group-hover:block z-50">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse Toggle */}
      {variant === "desktop" && (
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="mx-3 mb-2 flex items-center justify-center gap-2 rounded-lg border border-white/10 py-2 text-xs text-blue-100/70 hover:bg-white/10 hover:text-white"
        >
          {isCollapsed ? (
            <ChevronsRight className="h-4 w-4" />
          ) : (
            <>
              <ChevronsLeft className="h-4 w-4" />
              Collapse
            </>
          )}
        </button>
      )}

     

      {/* User Info */}
      {currentUser && (
        <div
          className={cn(
            "flex items-center gap-3 border-t border-white/10 px-4 py-4",
            isCollapsed && "justify-center px-2",
          )}
        >
          <Image
            src={currentUser.avatar}
            alt={currentUser.name}
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-white/20"
          />
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {currentUser.name}
              </p>
              <p className="truncate text-xs text-blue-100/70">
                {currentUser.roleLabel}
              </p>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}