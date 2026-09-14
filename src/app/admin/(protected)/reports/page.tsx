"use client";

import { useMemo, useState } from "react";
import { Upload, FileText } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminDataTable, { type AdminDataTableColumn } from "@/components/admin/AdminDataTable";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminRowActions from "@/components/admin/AdminRowActions";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import { reportsData } from "@/data/admin/reports";
import type { ReportItem } from "@/types/content";
import { formatDate } from "@/lib/utils";

export default function ReportsPage() {
  const [items, setItems] = useState<ReportItem[]>(reportsData);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = useMemo(
    () => items.filter((r) => r.name.toLowerCase().includes(search.toLowerCase())),
    [items, search]
  );

  const columns: AdminDataTableColumn<ReportItem>[] = [
    {
      key: "name",
      header: "Report Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <FileText className="h-4 w-4" />
          </span>
          <span className="font-medium text-text-primary">{row.name}</span>
        </div>
      ),
    },
    { key: "type", header: "Type", render: (row) => row.type },
    { key: "year", header: "Year", render: (row) => row.year },
    { key: "size", header: "File Size", render: (row) => row.fileSize },
    { key: "status", header: "Status", render: (row) => <AdminStatusBadge status={row.status} /> },
    { key: "uploaded", header: "Uploaded", render: (row) => formatDate(row.uploadedAt) },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <AdminRowActions onView={() => {}} onEdit={() => {}} onDelete={() => setDeleteId(row.id)} />
      ),
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Manage Reports"
        description="Upload and manage annual reports, financial statements and audits."
        actionLabel="Upload Report"
        ActionIcon={Upload}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search reports..." />
        </div>

        <AdminDataTable columns={columns} rows={filtered} getRowId={(r) => r.id} />
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Delete this report?"
        description="This will permanently remove the report file. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          setItems((prev) => prev.filter((i) => i.id !== deleteId));
          setDeleteId(null);
        }}
      />
    </div>
  );
}
