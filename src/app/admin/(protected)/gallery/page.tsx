"use client";

import { useMemo, useState } from "react";
import { ImagePlus, Pencil, Trash2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminFilter from "@/components/admin/AdminFilter";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminEmptyState from "@/components/admin/AdminEmptyState";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { galleryData, galleryCategories } from "@/data/admin/gallery";
import type { GalleryImage } from "@/types/gallery";
import { formatDate } from "@/lib/utils";

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryImage[]>(galleryData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return items.filter((g) => {
      const matchesSearch = g.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || g.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [items, search, category]);

  return (
    <div>
      <AdminPageHeader
        title="Manage Gallery"
        description="Upload and organize photos shown in the public website gallery."
        actionLabel="Add Images"
        ActionIcon={ImagePlus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search gallery..." />
          <AdminFilter
            options={galleryCategories}
            value={category}
            onChange={(v) => setCategory(v as typeof category)}
          />
        </div>

        {filtered.length === 0 ? (
          <AdminEmptyState title="No images found" description="Try a different search term or category." />
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm"
              >
                <div className="relative aspect-square overflow-hidden bg-surface-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.image}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-2 top-2 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      aria-label={`Edit ${image.title}`}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/95 text-text-primary shadow"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      aria-label={`Delete ${image.title}`}
                      onClick={() => setDeleteId(image.id)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/95 text-red-600 shadow"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <div className="p-3">
                  <p className="truncate text-sm font-semibold text-text-primary">{image.title}</p>
                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="text-xs text-text-muted">{formatDate(image.date)}</span>
                    <AdminStatusBadge status={image.status} />
                  </div>
                  <span className="mt-2 inline-block rounded-full bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-text-muted">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Delete this image?"
        description="This will permanently remove the image from the gallery. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
