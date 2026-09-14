"use client";

import { useMemo, useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { managementTeamData } from "@/data/admin/management-team";
import type { TeamMember } from "@/types/content";

export default function ManagementTeamPage() {
  const [items, setItems] = useState<TeamMember[]>(managementTeamData);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      items
        .filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.order - b.order),
    [items, search]
  );

  return (
    <div>
      <AdminPageHeader
        title="Management Team"
        description="Manage the leadership profiles featured on the public website."
        actionLabel="Add Team Member"
        ActionIcon={Plus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search team members..." />
        </div>

        {filtered.length === 0 ? (
          <AdminEmptyState title="No team members found" description="Try a different search term." />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((member) => (
              <div
                key={member.id}
                className="rounded-xl border border-border-subtle bg-surface-muted/40 p-4 text-center shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-border-subtle"
                />
                <p className="mt-3 text-sm font-bold text-text-primary">{member.name}</p>
                <p className="text-xs text-text-muted">{member.position}</p>
                <p className="mt-1 text-[11px] text-text-muted">{member.department}</p>
                <div className="mt-3 flex items-center justify-center">
                  <AdminStatusBadge status={member.status} />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border-subtle py-2 text-xs font-semibold text-text-primary hover:bg-surface-muted">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(member.id)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-200 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Remove this team member?"
        description="This will remove the profile from the public website. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
