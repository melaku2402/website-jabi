"use client";

/**
 * Exposes the current admin user (already authenticated and fetched
 * server-side by `admin/(protected)/layout.tsx`) to any client component
 * further down the tree, without each page needing its own data fetch or
 * falling back to an insecure client-side session check.
 */

import { createContext, useContext, type ReactNode } from "react";
import type { AdminUser } from "@/types/admin";

const AdminUserContext = createContext<AdminUser | null>(null);

export function AdminUserProvider({
  user,
  children,
}: {
  user: AdminUser;
  children: ReactNode;
}) {
  return <AdminUserContext.Provider value={user}>{children}</AdminUserContext.Provider>;
}

/**
 * Returns the current admin user. Safe to call anywhere under the
 * protected admin layout — that layout guarantees a user was resolved
 * server-side before any children render.
 */
export function useAdminUser(): AdminUser {
  const user = useContext(AdminUserContext);
  if (!user) {
    throw new Error("useAdminUser() must be used within the protected admin layout.");
  }
  return user;
}
