"use client";

import { useMemo, useState } from "react";
import { Plus, Pencil, Trash2, ExternalLink } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { partnersData } from "@/data/admin/partners";
import type { Partner } from "@/types/partner";

export default function PartnersPage() {
  const [items, setItems] = useState<Partner[]>(partnersData);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(
    () => items.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())),
    [items, search]
  );

  return (
    <div>
      <AdminPageHeader
        title="Manage Partners"
        description="Add and manage partner organizations featured on the public website."
        actionLabel="Add Partner"
        ActionIcon={Plus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search partners..." />
        </div>

        {filtered.length === 0 ? (
          <AdminEmptyState title="No partners found" description="Try a different search term." />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((partner) => (
              <div
                key={partner.id}
                className="rounded-xl border border-border-subtle bg-surface-muted/40 p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-12 shrink-0 rounded-lg object-cover ring-1 ring-border-subtle"
                    />
                    <div>
                      <p className="text-sm font-bold text-text-primary">{partner.name}</p>
                      <a
                        href={partner.website}
                        className="flex items-center gap-1 text-xs text-blue-600 hover:underline"
                      >
                        Visit site <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <AdminStatusBadge status={partner.status} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{partner.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border-subtle py-2 text-xs font-semibold text-text-primary hover:bg-surface-muted">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(partner.id)}
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
        title="Remove this partner?"
        description="This will remove the partner from the public website. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
