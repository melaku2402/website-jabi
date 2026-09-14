"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { historyData } from "@/data/admin/history";
import type { HistoryMilestone } from "@/types/content";

export default function HistoryPage() {
  const [items, setItems] = useState<HistoryMilestone[]>(historyData);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  return (
    <div>
      <AdminPageHeader
        title="Manage History Timeline"
        description="Add and edit the historical milestones shown on the public website."
        actionLabel="Add Milestone"
        ActionIcon={Plus}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm sm:p-8">
        <ol className="relative space-y-8 border-l-2 border-border-subtle pl-8">
          {items.map((milestone) => (
            <li key={milestone.id} className="relative">
              <span className="absolute -left-[41px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-surface bg-blue-600" />
              <div className="flex flex-col justify-between gap-3 rounded-xl border border-border-subtle bg-surface-muted/40 p-4 sm:flex-row sm:items-start">
                <div>
                  <span className="inline-block rounded-full bg-navy-900 px-2.5 py-0.5 text-xs font-bold text-blue">
                    {milestone.year}
                  </span>
                  <p className="mt-2 text-sm font-bold text-text-primary">{milestone.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{milestone.description}</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <button className="flex items-center justify-center gap-1.5 rounded-lg border border-border-subtle px-3 py-1.5 text-xs font-semibold text-text-primary hover:bg-surface-muted">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(milestone.id)}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Delete this milestone?"
        description="This will remove the milestone from the history timeline. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
