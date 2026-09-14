"use client";

import { useState } from "react";
import { Save, Pencil, X, Check } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { organizationStatsData } from "@/data/admin/organization-stats";
import type { OrgStat } from "@/types/content";

export default function OrganizationStatsPage() {
  const [stats, setStats] = useState<OrgStat[]>(organizationStatsData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftValue, setDraftValue] = useState("");
  const [saved, setSaved] = useState(false);

  function startEdit(stat: OrgStat) {
    setEditingId(stat.id);
    setDraftValue(stat.value);
  }

  function commitEdit(id: string) {
    setStats((prev) => prev.map((s) => (s.id === id ? { ...s, value: draftValue } : s)));
    setEditingId(null);
  }

  function saveAll() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <AdminPageHeader
        title="Organization Stats"
        description="Update the key statistics shown on the public website homepage."
        actionLabel={saved ? "Saved!" : "Save Changes"}
        ActionIcon={saved ? Check : Save}
        onAction={saveAll}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id} className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium text-text-muted">{stat.label}</p>
              {editingId !== stat.id && (
                <button
                  onClick={() => startEdit(stat)}
                  aria-label={`Edit ${stat.label}`}
                  className="rounded-lg p-1.5 text-text-muted hover:bg-surface-muted"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {editingId === stat.id ? (
              <div className="mt-2 flex items-center gap-2">
                <input
                  autoFocus
                  value={draftValue}
                  onChange={(e) => setDraftValue(e.target.value)}
                  className="w-full rounded-lg border border-blue-600 px-2.5 py-1.5 text-lg font-bold text-text-primary focus:outline-none"
                />
                <button
                  onClick={() => commitEdit(stat.id)}
                  aria-label="Confirm"
                  className="rounded-lg bg-green-600 p-1.5 text-white hover:bg-green-700"
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  aria-label="Cancel"
                  className="rounded-lg bg-surface-muted p-1.5 text-text-muted hover:bg-border-subtle"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <p className="mt-2 text-3xl font-extrabold text-text-primary">
                {stat.value}
                {stat.suffix && <span className="text-lg font-bold text-green-600">{stat.suffix}</span>}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
