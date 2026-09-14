"use client";

import { useState } from "react";
import { Save, Pencil, X, Check, BarChart3 } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import { impactMetricsData } from "@/data/admin/impact-metrics";
import type { ImpactMetric } from "@/types/content";

export default function ImpactMetricsPage() {
  const [metrics, setMetrics] = useState<ImpactMetric[]>(impactMetricsData);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftValue, setDraftValue] = useState("");
  const [saved, setSaved] = useState(false);

  function startEdit(metric: ImpactMetric) {
    setEditingId(metric.id);
    setDraftValue(metric.value);
  }

  function commitEdit(id: string) {
    setMetrics((prev) => prev.map((m) => (m.id === id ? { ...m, value: draftValue } : m)));
    setEditingId(null);
  }

  function saveAll() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <AdminPageHeader
        title="Manage Impact Metrics"
        description="Update the cooperative's key financial impact metrics."
        actionLabel={saved ? "Saved!" : "Save Changes"}
        ActionIcon={saved ? Check : Save}
        onAction={saveAll}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.id} className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-text-primary">{metric.label}</p>
              </div>
              {editingId !== metric.id && (
                <button
                  onClick={() => startEdit(metric)}
                  aria-label={`Edit ${metric.label}`}
                  className="rounded-lg p-1.5 text-text-muted hover:bg-surface-muted"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {editingId === metric.id ? (
              <div className="mt-3 flex items-center gap-2">
                <input
                  autoFocus
                  value={draftValue}
                  onChange={(e) => setDraftValue(e.target.value)}
                  className="w-full rounded-lg border border-blue-600 px-2.5 py-1.5 text-xl font-bold text-text-primary focus:outline-none"
                />
                <button
                  onClick={() => commitEdit(metric.id)}
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
              <p className="mt-3 text-2xl font-extrabold text-text-primary">{metric.value}</p>
            )}
            <p className="mt-1.5 text-xs text-text-muted">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
