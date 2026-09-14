
"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Newspaper,
  Wrench,
  Image as ImageIcon,
  Handshake,
  Mail,
  FileText,
  MessageSquareQuote,
  Landmark,
  TrendingUp,
  Settings,
  Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  dashboardStats,
  websiteOverview,
  contentSummary,
  contentSummaryTotal,
  recentActivities,
  quickActions,
  latestContent,
} from "@/data/admin/dashboard";
import AdminStatCard from "@/components/admin/AdminStatCard";
import QuickActionCard from "@/components/admin/QuickActionCard";
import AdminStatusBadge from "@/components/admin/AdminStatusBadge";
import AdminRowActions from "@/components/admin/AdminRowActions";

const statIconMap = {
  news: Newspaper,
  services: Wrench,
  gallery: ImageIcon,
  partners: Handshake,
  messages: Mail,
} as const;

const activityIconMap = {
  news: Newspaper,
  gallery: ImageIcon,
  partner: Handshake,
  message: Mail,
  testimonial: MessageSquareQuote,
} as const;

const activityColorMap = {
  news: "bg-blue-50 text-blue-600",
  gallery: "bg-violet-50 text-violet-600",
  partner: "bg-amber-50 text-amber-600",
  message: "bg-sky-50 text-sky-600",
  testimonial: "bg-green-50 text-green-600",
} as const;

const quickActionIconMap = {
  news: Newspaper,
  gallery: ImageIcon,
  report: FileText,
  partner: Handshake,
  service: Wrench,
  testimonial: MessageSquareQuote,
  team: Landmark,
  stats: TrendingUp,
  settings: Settings,
} as const;

const contentTabs = [
  "All",
  "News",
  "Gallery",
  "Reports",
  "Partners",
  "Testimonials",
  "Services",
] as const;

export default function AdminDashboardPage() {
  const [tab, setTab] = useState<(typeof contentTabs)[number]>("All");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  const filteredContent =
    tab === "All"
      ? latestContent
      : latestContent.filter(
          (row) => `${row.type}s` === tab || row.type === tab.slice(0, -1),
        );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-text-primary sm:text-2xl">
            Welcome back, Admin! 👋
          </h1>
          <p className="mt-1 text-sm text-text-muted">
            Here&apos;s what&apos;s happening with your website today.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-2.5 text-sm font-medium text-text-primary shadow-sm hover:bg-surface-muted"
        >
          <Calendar className="h-4 w-4 text-text-muted" />
          {currentDate}
        </button>
      </div>

     
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {dashboardStats.map((stat) => (
          <AdminStatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            changeDirection={stat.changeDirection}
            icon={statIconMap[stat.icon]}
            color={stat.color}
            href={stat.href}
          />
        ))}
      </div>

      {/* Main Grid: Left side (Charts & Content) vs Right side (Sidebar Activities & Actions) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column (Spans 2 cols on large screens) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Charts Row: Overview + Summary side-by-side */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Website overview */}
            <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-base font-bold text-text-primary">
                  Website Overview
                </h2>
                <select className="rounded-lg border border-border-subtle bg-surface-muted px-2.5 py-1.5 text-xs font-medium text-text-primary focus:outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="mb-3 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-text-muted">
                  <span className="h-2 w-2 rounded-full bg-blue-600" /> Visitors
                </span>
                <span className="flex items-center gap-1.5 text-text-muted">
                  <span className="h-2 w-2 rounded-full bg-green-600" /> Page
                  Views
                </span>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={websiteOverview}
                    margin={{ left: -20, right: 8, top: 4 }}
                  >
                    <CartesianGrid stroke="#E2E8F5" vertical={false} />
                    <XAxis
                      dataKey="label"
                      tick={{ fontSize: 11, fill: "#5B6B8C" }}
                      axisLine={{ stroke: "#E2E8F5" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 11, fill: "#5B6B8C" }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) =>
                        v >= 1000 ? `${v / 1000}K` : `${v}`
                      }
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: 10,
                        borderColor: "#E2E8F5",
                        fontSize: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="visitors"
                      stroke="#0B4DBB"
                      strokeWidth={2.5}
                      dot={{ r: 3, fill: "#0B4DBB" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="pageViews"
                      stroke="#0A9F55"
                      strokeWidth={2.5}
                      dot={{ r: 3, fill: "#0A9F55" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Content summary */}
            <div className="flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
              <h2 className="mb-4 text-base font-bold text-text-primary">
                Content Summary
              </h2>
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-44 w-44 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contentSummary}
                        dataKey="value"
                        nameKey="label"
                        innerRadius={50}
                        outerRadius={76}
                        paddingAngle={2}
                        strokeWidth={0}
                      >
                        {contentSummary.map((slice) => (
                          <Cell key={slice.label} fill={slice.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-extrabold text-text-primary">
                      {contentSummaryTotal}
                    </span>
                    <span className="text-[10px] text-text-muted">
                      Total Content
                    </span>
                  </div>
                </div>

                <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  {contentSummary.map((slice) => (
                    <li
                      key={slice.label}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="flex min-w-0 items-center gap-1.5 text-text-muted">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: slice.color }}
                        />
                        <span className="truncate">{slice.label}</span>
                      </span>
                      <span className="shrink-0 font-semibold text-text-primary">
                        {slice.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Latest content */}
          <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-base font-bold text-text-primary">
                Latest Content
              </h2>
              <button className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-navy-800">
                View All Content &gt;
              </button>
            </div>

            <div className="mb-4 flex flex-wrap gap-1 border-b border-border-subtle">
              {contentTabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`border-b-2 px-3 py-2 text-sm font-medium transition-colors ${
                    tab === t
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-text-muted hover:text-text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border-subtle text-xs font-semibold uppercase tracking-wide text-text-muted">
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Author</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContent.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-border-subtle last:border-0 hover:bg-surface-muted/60"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {row.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={row.image}
                              alt=""
                              className="h-10 w-10 shrink-0 rounded-lg object-cover"
                            />
                          ) : (
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-muted">
                              <Handshake className="h-4 w-4 text-text-muted" />
                            </span>
                          )}
                          <span className="font-medium text-text-primary">
                            {row.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-muted">
                          {row.type}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <AdminStatusBadge status="published" />
                      </td>
                      <td className="px-4 py-3 text-text-muted">
                        {row.author}
                      </td>
                      <td className="px-4 py-3 text-text-muted">{row.date}</td>
                      <td className="px-4 py-3">
                        <AdminRowActions
                          onView={() => {}}
                          onEdit={() => {}}
                          onDelete={() => {}}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar Column (Spans 1 col on large screens) */}
        <div className="space-y-6 lg:col-span-1">
          {/* Recent activities */}
          <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-text-primary">
                Recent Activities
              </h2>
              <button className="text-xs font-semibold text-blue-600 hover:text-navy-800">
                View All
              </button>
            </div>
            <ul className="space-y-3.5">
              {recentActivities.map((activity) => {
                const Icon = activityIconMap[activity.type];
                return (
                  <li key={activity.id} className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${activityColorMap[activity.type]}`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium leading-snug text-text-primary">
                        {activity.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-text-muted">
                        {activity.date}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick actions (placed directly underneath Recent Activities) */}
          <div className="rounded-xl border border-border-subtle bg-surface p-5 shadow-sm">
            <h2 className="mb-3 text-base font-bold text-text-primary">
              Quick Actions
            </h2>
            <div className="grid grid-cols-3 gap-2.5">
              {quickActions.map((action, index) => {
                // Clean, bright background colors matching each icon
                const colors = [
                  { icon: "text-blue-600", bg: "bg-blue-100" },
                  { icon: "text-emerald-600", bg: "bg-emerald-100" },
                  { icon: "text-purple-600", bg: "bg-purple-100" },
                  { icon: "text-amber-600", bg: "bg-amber-100" },
                  { icon: "text-rose-600", bg: "bg-rose-100" },
                  { icon: "text-cyan-600", bg: "bg-cyan-100" },
                  { icon: "text-indigo-600", bg: "bg-indigo-100" },
                  { icon: "text-teal-600", bg: "bg-teal-100" },
                  { icon: "text-violet-600", bg: "bg-violet-100" },
                ];

                const colorStyle = colors[index % colors.length];

                return (
                  <QuickActionCard
                    key={action.id}
                    href={action.href}
                    label={action.label}
                    icon={quickActionIconMap[action.icon]}
                    iconColor={colorStyle.icon}
                    iconBg={colorStyle.bg}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}