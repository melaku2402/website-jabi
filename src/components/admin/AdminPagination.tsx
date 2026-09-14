"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
}

export default function AdminPagination({
  page,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
}: AdminPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-border-subtle px-1 pt-4 sm:flex-row">
      {totalItems !== undefined && pageSize !== undefined && (
        <p className="text-xs text-text-muted">
          Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, totalItems)} of{" "}
          {totalItems}
        </p>
      )}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, page - 1))}
          disabled={page === 1}
          aria-label="Previous page"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-surface-muted disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium",
              p === page
                ? "bg-blue-600 text-white"
                : "text-text-primary hover:bg-surface-muted"
            )}
          >
            {p}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          aria-label="Next page"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-muted hover:bg-surface-muted disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
