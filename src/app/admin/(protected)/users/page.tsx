"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus, ShieldAlert } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminDataTable, { type AdminDataTableColumn } from "@/components/admin/AdminDataTable";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminRowActions from "@/components/admin/AdminRowActions";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { usersData } from "@/data/admin/users";
import type { AdminUser } from "@/types/admin";
import { useAdminUser } from "@/components/admin/AdminUserContext";
import { formatDateTime } from "@/lib/utils";

export default function UsersPage() {
  const router = useRouter();
  // Server-validated (see admin/(protected)/layout.tsx) — no client-side
  // check to bypass, unlike the old getCurrentUser()-from-localStorage version.
  const currentUser = useAdminUser();
  const authorized = currentUser.role === "super_admin";
  const [items, setItems] = useState<AdminUser[]>(usersData);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      items.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      ),
    [items, search]
  );

  const columns: AdminDataTableColumn<AdminUser>[] = [
    {
      key: "name",
      header: "Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={row.avatar} alt={row.name} className="h-9 w-9 rounded-full object-cover" />
          <span className="font-medium text-text-primary">{row.name}</span>
        </div>
      ),
    },
    { key: "email", header: "Email", render: (row) => row.email },
    {
      key: "role",
      header: "Role",
      render: (row) => (
        <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-primary">
          {row.roleLabel}
        </span>
      ),
    },
    { key: "status", header: "Status", render: (row) => <AdminStatusBadge status={row.status} /> },
    {
      key: "lastLogin",
      header: "Last Login",
      render: (row) => {
        const { date, time } = formatDateTime(row.lastLogin);
        return (
          <span>
            {date} <span className="text-text-muted">· {time}</span>
          </span>
        );
      },
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <AdminRowActions onEdit={() => {}} onDelete={() => setDeleteId(row.id)} />
      ),
    },
  ];

  if (!authorized) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border-subtle bg-surface py-20 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
          <ShieldAlert className="h-6 w-6 text-red-600" />
        </span>
        <p className="text-base font-bold text-text-primary">Access restricted</p>
        <p className="max-w-sm text-sm text-text-muted">
          Only Super Admins can manage user accounts. Contact a Super Admin if you need access.
        </p>
        <button
          onClick={() => router.push("/admin")}
          className="mt-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div>
      <AdminPageHeader
        title="Users"
        description="Manage admin panel accounts, roles and access."
        actionLabel="Add User"
        ActionIcon={UserPlus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search users..." />
        </div>

        <AdminDataTable columns={columns} rows={filtered} getRowId={(r) => r.id} />
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Remove this user?"
        description="This will revoke the user's access to the admin panel. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
