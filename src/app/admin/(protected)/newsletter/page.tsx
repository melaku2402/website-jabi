"use client";

import { useMemo, useState } from "react";
import { Send, Users, UserCheck, UserPlus, UserX } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminFilter from "@/components/admin/AdminFilter";
import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminDataTable, { type AdminDataTableColumn } from "@/components/admin/AdminDataTable";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminRowActions from "@/components/admin/AdminRowActions";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { newsletterData } from "@/data/admin/newsletter";
import type { NewsletterSubscriber } from "@/types/content";
import { formatDate } from "@/lib/utils";

const filters = ["All", "Active", "Unsubscribed"] as const;

export default function NewsletterPage() {
  const [items, setItems] = useState<NewsletterSubscriber[]>(newsletterData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const active = items.filter((s) => s.status === "active").length;
  const unsubscribed = items.filter((s) => s.status === "unsubscribed").length;
  const thisMonth = items.filter((s) => s.subscribedAt.startsWith("2024-05")).length;

  const filtered = useMemo(() => {
    return items.filter((s) => {
      const matchesSearch = s.email.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "All" ||
        (filter === "Active" && s.status === "active") ||
        (filter === "Unsubscribed" && s.status === "unsubscribed");
      return matchesSearch && matchesFilter;
    });
  }, [items, search, filter]);

  const columns: AdminDataTableColumn<NewsletterSubscriber>[] = [
    { key: "email", header: "Email", render: (row) => <span className="font-medium text-text-primary">{row.email}</span> },
    { key: "date", header: "Subscription Date", render: (row) => formatDate(row.subscribedAt) },
    { key: "status", header: "Status", render: (row) => <AdminStatusBadge status={row.status} /> },
    {
      key: "actions",
      header: "Actions",
      render: (row) => <AdminRowActions onDelete={() => setDeleteId(row.id)} />,
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Newsletter Subscribers"
        description="View and manage members subscribed to the cooperative newsletter."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard label="Total Subscribers" value={String(items.length)} icon={Users} color="navy" />
        <AdminStatCard label="Active Subscribers" value={String(active)} icon={UserCheck} color="green" />
        <AdminStatCard label="New This Month" value={String(thisMonth)} icon={UserPlus} color="blue" />
        <AdminStatCard label="Unsubscribed" value={String(unsubscribed)} icon={UserX} color="orange" />
      </div>

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search subscribers..." />
          <div className="flex items-center gap-3">
            <AdminFilter options={filters} value={filter} onChange={(v) => setFilter(v as typeof filter)} />
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800">
              <Send className="h-4 w-4" /> Send Newsletter
            </button>
          </div>
        </div>

        <AdminDataTable columns={columns} rows={filtered} getRowId={(r) => r.id} />
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Remove this subscriber?"
        description="This will remove the subscriber from your mailing list. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
