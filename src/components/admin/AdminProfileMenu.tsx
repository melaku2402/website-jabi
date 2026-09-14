
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import type { AdminUser } from "@/types/admin";
import { logout } from "@/lib/auth";

export default function AdminProfileMenu({ user }: { user: AdminUser }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    await logout();
    router.push("/admin/login");
  }

  return (
    <div
      className="relative inline-block"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Profile Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-white transition-colors hover:bg-slate-100 hover:text-blue-900"
      >
        <Image
          src={user.avatar}
          alt={user.name}
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-200"
        />
        <span className="hidden text-left sm:block">
          <span className="block text-xs font-semibold leading-tight text-white transition-colors group-hover:text-blue-900">
            {user.name}
          </span>
          <span className="block text-[11px] font-medium leading-tight text-slate-300 transition-colors group-hover:text-blue-900">
            {user.roleLabel}
          </span>
        </span>
        <ChevronDown className="hidden h-4 w-4 text-slate-400 transition-colors group-hover:text-blue-900 sm:block" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-1 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 animate-in fade-in zoom-in-95 duration-100"
        >
          {/* Header Info */}
          <div className="border-b border-slate-100 bg-slate-50/50 px-4 py-3">
            <p className="truncate text-xs font-bold text-slate-900">
              {user.name}
            </p>
            <p className="truncate text-[11px] text-slate-500">{user.email}</p>
          </div>

          {/* Links */}
          <div className="p-1">
            <button
              type="button"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <User className="h-4 w-4 text-slate-400" />
              Profile
            </button>
            <button
              type="button"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              <Settings className="h-4 w-4 text-slate-400" />
              Account Settings
            </button>
          </div>

          {/* Logout Button */}
          <div className="border-t border-slate-100 p-1">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 text-red-500" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}