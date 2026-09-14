"use client";

import { useMemo, useState } from "react";
import { Plus, Pencil, Trash2, Quote } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { testimonialsData } from "@/data/admin/testimonials";
import type { Testimonial } from "@/types/content";

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>(testimonialsData);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(
    () => items.filter((t) => t.name.toLowerCase().includes(search.toLowerCase())),
    [items, search]
  );

  return (
    <div>
      <AdminPageHeader
        title="Manage Testimonials"
        description="Curate member testimonials displayed on the public website."
        actionLabel="Add Testimonial"
        ActionIcon={Plus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search testimonials..." />
        </div>

        {filtered.length === 0 ? (
          <AdminEmptyState title="No testimonials found" description="Try a different search term." />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <div key={t.id} className="rounded-xl border border-border-subtle bg-surface-muted/40 p-4 shadow-sm">
                <div className="flex items-start justify-between">
                  <Quote className="h-6 w-6 text-blue-200" />
                  <AdminStatusBadge status={t.status} />
                </div>
                <p className="mt-2 text-sm italic leading-relaxed text-text-primary">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-text-primary">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.position}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border-subtle py-2 text-xs font-semibold text-text-primary hover:bg-surface-muted">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(t.id)}
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
        title="Delete this testimonial?"
        description="This will permanently remove the testimonial. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
