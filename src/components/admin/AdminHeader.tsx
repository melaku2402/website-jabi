

"use client";

import { Menu, Search, Bell } from "lucide-react";
import type { AdminUser } from "@/types/admin";
import AdminProfileMenu from "./AdminProfileMenu";
import AdminBreadcrumb from "./AdminBreadcrumb";

interface AdminHeaderProps {
  onOpenMobileSidebar: () => void;
  currentUser: AdminUser;
  notificationCount?: number;
}

export default function AdminHeader({
  onOpenMobileSidebar,
  currentUser,
  notificationCount = 5,
}: AdminHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-blue-800/60 bg-blue-900 px-4 text-white sm:px-6">
      {/* LEFT SECTION: Mobile Toggle & Breadcrumbs */}
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileSidebar}
          aria-label="Open menu"
          className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden sm:block">
          <AdminBreadcrumb />
        </div>
      </div>

      {/* CENTER SECTION: Search Input (Large & Centered on Desktop) */}
      <div className="flex flex-1 justify-center px-2 sm:px-4">
        <div className="relative w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[480px] xl:max-w-[600px]">
          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search anything"
            className="w-full rounded-xl border border-white/20 bg-white/10 py-2 pl-4 pr-10 text-xs font-medium text-white placeholder:text-blue-200/70 transition-all focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-1 focus:ring-white/40 lg:text-sm"
          />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-200/80" />
        </div>
      </div>

      {/* RIGHT SECTION: Notifications & Profile Menu */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        {/* Notifications Button */}
        <button
          type="button"
          aria-label={`Notifications, ${notificationCount} unread`}
          className="relative rounded-lg p-2 text-white/80 transition-colors hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <span className="absolute right-1 top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow-xs">
              {notificationCount}
            </span>
          )}
        </button>

        {/* Divider */}
        <div className="hidden h-6 w-px bg-white/20 sm:block" />

        {/* User Profile Dropdown */}
        <div className="flex items-center">
          <AdminProfileMenu user={currentUser} />
        </div>
      </div>
    </header>
  );
}