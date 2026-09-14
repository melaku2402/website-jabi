import type { ReactNode } from "react";
import AdminEmptyState from "./AdminEmptyState";

export interface AdminDataTableColumn<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  className?: string;
}

interface AdminDataTableProps<T> {
  columns: AdminDataTableColumn<T>[];
  rows: T[];
  getRowId: (row: T) => string;
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function AdminDataTable<T>({
  columns,
  rows,
  getRowId,
  emptyTitle = "No records found",
  emptyDescription = "Try adjusting your search or filters.",
}: AdminDataTableProps<T>) {
  if (rows.length === 0) {
    return <AdminEmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border-subtle">
            {columns.map((col) => (
              <th
                key={col.key}
                className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-text-muted"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={getRowId(row)}
              className="border-b border-border-subtle last:border-0 hover:bg-surface-muted/60"
            >
              {columns.map((col) => (
                <td key={col.key} className={`px-4 py-3.5 align-middle ${col.className ?? ""}`}>
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
