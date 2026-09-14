"use client";

import { useMemo, useState } from "react";
import { Mail, MailOpen, Reply, Inbox, X, Trash2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminFilter from "@/components/admin/AdminFilter";
import AdminStatCard from "@/components/admin/AdminStatCard";
import AdminDataTable, { type AdminDataTableColumn } from "@/components/admin/AdminDataTable";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { messagesData } from "@/data/admin/messages";
import type { ContactMessage } from "@/types/content";
import { formatDate } from "@/lib/utils";

const filters = ["All", "Unread", "Read", "Replied"] as const;

export default function MessagesPage() {
  const [items, setItems] = useState<ContactMessage[]>(messagesData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [reply, setReply] = useState("");

  const unread = items.filter((m) => m.status === "unread").length;
  const read = items.filter((m) => m.status === "read").length;
  const replied = items.filter((m) => m.status === "replied").length;

  const filtered = useMemo(() => {
    return items.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.subject.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === "All" || m.status === filter.toLowerCase();
      return matchesSearch && matchesFilter;
    });
  }, [items, search, filter]);

  function openMessage(message: ContactMessage) {
    setSelected(message);
    setReply("");
    if (message.status === "unread") {
      setItems((prev) =>
        prev.map((m) => (m.id === message.id ? { ...m, status: "read" } : m))
      );
    }
  }

  function sendReply() {
    if (!selected) return;
    setItems((prev) =>
      prev.map((m) => (m.id === selected.id ? { ...m, status: "replied" } : m))
    );
    setSelected(null);
  }

  const columns: AdminDataTableColumn<ContactMessage>[] = [
    {
      key: "name",
      header: "Name",
      render: (row) => (
        <button onClick={() => openMessage(row)} className="text-left font-medium text-text-primary hover:text-blue-600">
          {row.name}
        </button>
      ),
    },
    { key: "email", header: "Email", render: (row) => row.email },
    { key: "subject", header: "Subject", render: (row) => row.subject },
    { key: "date", header: "Date", render: (row) => formatDate(row.date) },
    { key: "status", header: "Status", render: (row) => <AdminStatusBadge status={row.status} /> },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Manage Contact Messages"
        description="View and respond to messages submitted through the public website contact form."
      />

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard label="Total Messages" value={String(items.length)} icon={Inbox} color="navy" />
        <AdminStatCard label="Unread" value={String(unread)} icon={Mail} color="blue" />
        <AdminStatCard label="Read" value={String(read)} icon={MailOpen} color="purple" />
        <AdminStatCard label="Replied" value={String(replied)} icon={Reply} color="green" />
      </div>

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search messages..." />
          <AdminFilter options={filters} value={filter} onChange={(v) => setFilter(v as typeof filter)} />
        </div>

        <AdminDataTable columns={columns} rows={filtered} getRowId={(r) => r.id} />
      </div>

      {/* Detail drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-navy-950/50" onClick={() => setSelected(null)} aria-hidden="true" />
          <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-surface shadow-xl">
            <div className="flex items-start justify-between border-b border-border-subtle px-6 py-4">
              <div>
                <p className="text-base font-bold text-text-primary">{selected.subject}</p>
                <p className="mt-0.5 text-xs text-text-muted">
                  {selected.name} · {selected.email}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="rounded-lg p-1.5 text-text-muted hover:bg-surface-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <p className="text-xs text-text-muted">{formatDate(selected.date)}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-primary">{selected.body}</p>
            </div>
            <div className="border-t border-border-subtle px-6 py-4">
              <label className="mb-1.5 block text-sm font-medium text-text-primary">Reply</label>
              <textarea
                rows={3}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Write your reply..."
                className="w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setDeleteId(selected.id);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
                <button
                  onClick={sendReply}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
                >
                  <Reply className="h-4 w-4" /> Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Delete this message?"
        description="This will permanently remove the message. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
          setSelected(null);
        }}
      />
    </div>
  );
}
