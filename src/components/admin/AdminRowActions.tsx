
"use client";

import { useEffect, useRef, useState } from "react";
import { MoreVertical, Eye, Pencil, Trash2, AlertTriangle } from "lucide-react";

interface AdminRowActionsProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  itemName?: string;
}

export default function AdminRowActions({
  onView,
  onEdit,
  onDelete,
  itemName ,
}: AdminRowActionsProps) {
  const [open, setOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleDeleteConfirm = () => {
    if (onDelete) onDelete();
    setShowDeleteModal(false);
  };

  return (
    <>
      {/* Action Dropdown Button */}
      <div
        className={`relative inline-block ${open ? "z-30" : "z-0"}`}
        ref={ref}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Row actions"
          aria-haspopup="menu"
          aria-expanded={open}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <MoreVertical className="h-4 w-4" />
        </button>

        {open && (
          <div
            role="menu"
            className="absolute right-0 z-50 mt-1 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xl shadow-slate-200/50"
          >
            {onView && (
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onView();
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Eye className="h-3.5 w-3.5 text-slate-400" /> View
              </button>
            )}
            {onEdit && (
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  onEdit();
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <Pencil className="h-3.5 w-3.5 text-slate-400" /> Edit
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  setShowDeleteModal(true);
                }}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5 text-red-500" /> Delete
              </button>
            )}
          </div>
        )}
      </div>

      {/* Fixed Confirmation Modal Layer */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 text-red-600 mb-2">
              <div className="rounded-full bg-red-100 p-2">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                Confirm Deletion
              </h3>
            </div>

            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Are you sure you want to delete this {itemName}? This action
              cannot be undone.
            </p>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="rounded-lg px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}