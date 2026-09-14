import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";
import { AdminUserProvider } from "@/components/admin/AdminUserContext";
import AdminLayoutClient from "@/components/admin/AdminLayoutClient";

/**
 * This is the real access-control boundary for the admin panel. It runs on
 * the server for every request to a protected /admin route (everything
 * except /admin/login, which lives outside this route group), validates
 * the session cookie against the database, and redirects unauthenticated
 * requests before any admin data or markup is ever sent to the client.
 *
 * Previously this check ran client-side in a "use client" layout via
 * localStorage — that could be bypassed entirely by setting a fake value
 * in the browser console. Route groups let /admin/login sit outside this
 * layout so this one file can assume "no valid session" always means
 * "redirect", with no path-based branching required.
 */
export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSessionUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <AdminUserProvider user={user}>
      <AdminLayoutClient user={user}>{children}</AdminLayoutClient>
    </AdminUserProvider>
  );
}
