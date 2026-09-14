"use client";

import { X } from "lucide-react";
import AdminSidebar from "./AdminSidebar";
import type { AdminUser } from "@/types/admin";

interface AdminMobileSidebarProps {
  open: boolean;
  onClose: () => void;
  currentUser: AdminUser | null;
}

export default function AdminMobileSidebar({
  open,
  onClose,
  currentUser,
}: AdminMobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-navy-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full w-[280px] max-w-[85vw] animate-in slide-in-from-left duration-200">
        <AdminSidebar
          collapsed={false}
          onToggleCollapse={() => {}}
          currentUser={currentUser}
          variant="mobile"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-[-44px] top-4 rounded-full bg-white p-2 text-navy-900 shadow-md"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
