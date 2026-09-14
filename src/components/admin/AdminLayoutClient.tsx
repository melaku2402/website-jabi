"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminMobileSidebar from "@/components/admin/AdminMobileSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import type { AdminUser } from "@/types/admin";

/**
 * Pure UI shell for authenticated admin pages: sidebar, header, footer, and
 * their collapse/mobile-drawer state. Auth is no longer this component's
 * concern — `admin/(protected)/layout.tsx` guarantees `user` is a real,
 * server-validated session before this ever renders.
 */
export default function AdminLayoutClient({
  user,
  children,
}: {
  user: AdminUser;
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="m-0 flex h-screen w-full overflow-hidden p-0 bg-slate-100">
      {/* Fixed Desktop Sidebar Wrapper */}
      <div className="hidden h-full shrink-0 lg:block">
        <AdminSidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          currentUser={user}
        />
      </div>

      {/* Mobile Drawer */}
      <AdminMobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        currentUser={user}
      />

      {/* Main Column Container */}
      <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        {/* Fixed Header */}
        <AdminHeader
          onOpenMobileSidebar={() => setMobileOpen(true)}
          currentUser={user}
        />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Fixed Footer */}
        <footer className="shrink-0 border-t border-slate-200 bg-white px-4 py-4 text-center text-xs text-slate-500 sm:px-6">
          <p>
            © {new Date().getFullYear()} Jabi Cooperatives Saving &amp; Credit
            Union S.C. All Rights Reserved.
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms of Use
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
