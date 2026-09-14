"use client";

import { useMemo, useState } from "react";
import { Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { servicesData } from "@/data/admin/services";
import type { ServiceItem } from "@/types/service";

export default function ServicesPage() {
  const [items, setItems] = useState<ServiceItem[]>(servicesData);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      items
        .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.order - b.order),
    [items, search]
  );

  return (
    <div>
      <AdminPageHeader
        title="Manage Services"
        description="Manage the financial services and products listed on the public website."
        actionLabel="Add Service"
        ActionIcon={Plus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search services..." />
        </div>

        {filtered.length === 0 ? (
          <AdminEmptyState title="No services found" description="Try a different search term." />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="rounded-xl border border-border-subtle bg-surface-muted/40 p-4 shadow-sm">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <GripVertical className="h-3.5 w-3.5" /> {service.order}
                      </span>
                      <AdminStatusBadge status={service.status} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-bold text-text-primary">{service.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border-subtle py-2 text-xs font-semibold text-text-primary hover:bg-surface-muted">
                      <Pencil className="h-3.5 w-3.5" /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(service.id)}
                      className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-200 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Delete this service?"
        description="This will remove the service from the public website. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
