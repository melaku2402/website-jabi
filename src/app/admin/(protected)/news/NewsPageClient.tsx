"use client";

import { useMemo, useState, useTransition, useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSearch from "@/components/admin/AdminSearch";
import AdminFilter from "@/components/admin/AdminFilter";
import AdminDataTable, { type AdminDataTableColumn } from "@/components/admin/AdminDataTable";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminRowActions from "@/components/admin/AdminRowActions";
import AdminConfirmDialog from "@/components/admin/AdminConfirmDialog";
import AdminModal from "@/components/admin/AdminModal";
import AdminPagination from "@/components/admin/AdminPagination";
import { formatDate } from "@/lib/utils";
import {
  createNewsArticleAction,
  updateNewsArticleAction,
  deleteNewsArticleAction,
  type NewsFormState,
} from "@/actions/admin-news";
import type { NewsArticle } from "@prisma/client";

const filters = ["All", "Published", "Draft"] as const;
const categories = [
  "announcement",
  "branch-update",
  "event",
  "training",
  "community",
  "financial-education",
] as const;
const PAGE_SIZE = 5;

const emptyState: NewsFormState = { success: false, message: "" };
const inputClasses =
  "w-full rounded-lg border border-border-subtle px-3 py-2.5 text-sm focus:border-blue-600 focus:outline-none";
const labelClasses = "mb-1.5 block text-sm font-medium text-text-primary";

function toDateInputValue(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toISOString().slice(0, 10);
}

/** Shared form body for both the Add and Edit modals — same fields either way. */
function ArticleFormFields({ article }: { article: NewsArticle | null }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Title (English)</label>
          <input name="titleEn" defaultValue={article?.titleEn} required className={inputClasses} placeholder="e.g. New Branch Opening" />
        </div>
        <div>
          <label className={labelClasses}>Title (Amharic)</label>
          <input name="titleAm" defaultValue={article?.titleAm} required className={inputClasses} placeholder="ርዕስ በአማርኛ" />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Slug (used in the article URL)</label>
        <input name="slug" defaultValue={article?.slug} required pattern="[a-z0-9-]+" className={inputClasses} placeholder="e.g. new-branch-opening-bahir-dar" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Excerpt (English)</label>
          <textarea name="excerptEn" defaultValue={article?.excerptEn} required rows={2} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Excerpt (Amharic)</label>
          <textarea name="excerptAm" defaultValue={article?.excerptAm} required rows={2} className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Content (English)</label>
          <textarea name="contentEn" defaultValue={article?.contentEn} required rows={5} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Content (Amharic)</label>
          <textarea name="contentAm" defaultValue={article?.contentAm} required rows={5} className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Category</label>
          <select name="category" defaultValue={article?.category ?? categories[0]} className={inputClasses}>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses}>Status</label>
          <select name="status" defaultValue={article?.status ?? "draft"} className={inputClasses}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Author</label>
          <input name="author" defaultValue={article?.author} required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Published date</label>
          <input type="date" name="publishedAt" defaultValue={toDateInputValue(article?.publishedAt ?? null)} className={inputClasses} />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Image URL</label>
        <input name="imageUrl" defaultValue={article?.imageUrl} required className={inputClasses} placeholder="/images/news/... or https://..." />
      </div>
    </div>
  );
}

export default function NewsPageClient({ initialArticles }: { initialArticles: NewsArticle[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editing, setEditing] = useState<NewsArticle | null>(null);
  const [isPending, startTransition] = useTransition();

  const [createState, createAction] = useActionState(createNewsArticleAction, emptyState);
  const boundUpdateAction = editing
    ? updateNewsArticleAction.bind(null, editing.id)
    : async (_prevState: NewsFormState | null, _formData: FormData) => emptyState;
  const [updateState, updateAction] = useActionState(boundUpdateAction, emptyState);

  // Close the relevant modal once its Server Action reports success, and
  // refresh so the table reflects the newly written database row.
  useEffect(() => {
    if (createState.success) {
      setAddOpen(false);
      router.refresh();
    }
  }, [createState, router]);

  useEffect(() => {
    if (updateState.success) {
      setEditing(null);
      router.refresh();
    }
  }, [updateState, router]);

  const filtered = useMemo(() => {
    return initialArticles.filter((n) => {
      const matchesSearch = n.titleEn.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "All" ||
        (filter === "Published" && n.status === "published") ||
        (filter === "Draft" && n.status === "draft");
      return matchesSearch && matchesFilter;
    });
  }, [initialArticles, search, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const columns: AdminDataTableColumn<NewsArticle>[] = [
    {
      key: "title",
      header: "Title",
      render: (row) => (
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={row.imageUrl} alt="" className="h-10 w-14 shrink-0 rounded-lg object-cover" />
          <span className="font-medium text-text-primary">{row.titleEn}</span>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (row) => (
        <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-muted">
          {row.category}
        </span>
      ),
    },
    { key: "author", header: "Author", render: (row) => row.author },
    {
      key: "date",
      header: "Date",
      render: (row) => (row.publishedAt ? formatDate(row.publishedAt.toISOString()) : "—"),
    },
    {
      key: "status",
      header: "Status",
      render: (row) => <AdminStatusBadge status={row.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <AdminRowActions
          onEdit={() => setEditing(row)}
          onDelete={() => setDeleteId(row.id)}
        />
      ),
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Manage News"
        description="Create, edit and manage news and announcements displayed on the public website."
        actionLabel="Add News"
        ActionIcon={Plus}
        onAction={() => setAddOpen(true)}
      />

      <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <AdminSearch value={search} onChange={setSearch} placeholder="Search news..." />
          <AdminFilter options={filters} value={filter} onChange={(v) => setFilter(v as typeof filter)} />
        </div>

        <AdminDataTable
          columns={columns}
          rows={pageRows}
          getRowId={(r) => r.id}
          emptyTitle="No news found"
          emptyDescription="Try a different search term or filter, or add a new article."
        />

        <AdminPagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          totalItems={filtered.length}
          pageSize={PAGE_SIZE}
        />
      </div>

      <AdminConfirmDialog
        open={deleteId !== null}
        title="Delete this news article?"
        description="This will permanently remove the article from the website. This action cannot be undone."
        onCancel={() => setDeleteId(null)}
        onConfirm={() => {
          const id = deleteId;
          setDeleteId(null);
          if (id) {
            startTransition(async () => {
              await deleteNewsArticleAction(id);
              router.refresh();
            });
          }
        }}
      />

      <AdminModal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Add News"
        description="Create a new news article or announcement."
        footer={
          <>
            <button
              type="button"
              onClick={() => setAddOpen(false)}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-text-primary hover:bg-surface-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="add-news-form"
              disabled={isPending}
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-60"
            >
              Publish
            </button>
          </>
        }
      >
        <form id="add-news-form" action={createAction}>
          {createState.message && !createState.success && (
            <p className="mb-3 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
              {createState.message}
            </p>
          )}
          <ArticleFormFields article={null} />
        </form>
      </AdminModal>

      <AdminModal
        open={editing !== null}
        onClose={() => setEditing(null)}
        title="Edit News"
        description="Update this article's details."
        footer={
          <>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-text-primary hover:bg-surface-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="edit-news-form"
              disabled={isPending}
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-60"
            >
              Save Changes
            </button>
          </>
        }
      >
        <form id="edit-news-form" action={updateAction}>
          {updateState.message && !updateState.success && (
            <p className="mb-3 rounded-lg border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
              {updateState.message}
            </p>
          )}
          <ArticleFormFields article={editing} />
        </form>
      </AdminModal>
    </div>
  );
}
