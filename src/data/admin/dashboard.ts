// export interface DashboardStat {
//   id: string;
//   label: string;
//   value: string;
//   change?: string;
//   changeDirection?: "up" | "down" | "flat";
//   icon: "news" | "services" | "gallery" | "partners" | "messages";
//   color: "navy" | "green" | "purple" | "orange" | "blue";
// }

// export const dashboardStats: DashboardStat[] = [
//   {
//     id: "news",
//     label: "Total News",
//     value: "24",
//     change: "+3 from last week",
//     changeDirection: "up",
//     icon: "news",
//     color: "navy",
//   },
//   {
//     id: "services",
//     label: "Total Services",
//     value: "8",
//     change: "No change",
//     changeDirection: "flat",
//     icon: "services",
//     color: "green",
//   },
//   {
//     id: "gallery",
//     label: "Total Gallery Images",
//     value: "156",
//     change: "+12 from last week",
//     changeDirection: "up",
//     icon: "gallery",
//     color: "purple",
//   },
//   {
//     id: "partners",
//     label: "Total Partners",
//     value: "12",
//     change: "+1 from last week",
//     changeDirection: "up",
//     icon: "partners",
//     color: "orange",
//   },
//   {
//     id: "messages",
//     label: "Total Messages",
//     value: "18",
//     change: "+5 from last week",
//     changeDirection: "up",
//     icon: "messages",
//     color: "blue",
//   },
// ];

// export interface WebsiteOverviewPoint {
//   label: string;
//   visitors: number;
//   pageViews: number;
// }

// export const websiteOverview: WebsiteOverviewPoint[] = [
//   { label: "May 14", visitors: 2100, pageViews: 1400 },
//   { label: "May 15", visitors: 2800, pageViews: 2000 },
//   { label: "May 16", visitors: 3300, pageViews: 2300 },
//   { label: "May 17", visitors: 2600, pageViews: 1900 },
//   { label: "May 18", visitors: 3500, pageViews: 2600 },
//   { label: "May 19", visitors: 3900, pageViews: 2900 },
//   { label: "May 20", visitors: 4400, pageViews: 3400 },
// ];

// export interface ContentSummarySlice {
//   label: string;
//   value: number;
//   color: string;
// }

// export const contentSummary: ContentSummarySlice[] = [
//   { label: "News", value: 24, color: "#0B4DBB" },
//   { label: "Gallery Images", value: 156, color: "#062B72" },
//   { label: "Reports", value: 10, color: "#94A3B8" },
//   { label: "Partners", value: 12, color: "#F59E0B" },
//   { label: "Testimonials", value: 15, color: "#EF4444" },
//   { label: "Services", value: 8, color: "#0A9F55" },
//   { label: "Other Pages", value: 7, color: "#38BDF8" },
// ];

// export const contentSummaryTotal = contentSummary.reduce(
//   (sum, s) => sum + s.value,
//   0
// );

// export interface RecentActivity {
//   id: string;
//   title: string;
//   date: string;
//   type: "news" | "gallery" | "partner" | "message" | "testimonial";
// }

// export const recentActivities: RecentActivity[] = [
//   {
//     id: "act-1",
//     title: 'New news "Financial Literacy Training" was published',
//     date: "May 20, 2024 - 10:30 AM",
//     type: "news",
//   },
//   {
//     id: "act-2",
//     title: 'Gallery image "AGM 2024" was added',
//     date: "May 20, 2024 - 09:15 AM",
//     type: "gallery",
//   },
//   {
//     id: "act-3",
//     title: 'New partner "Oromia Bank" was added',
//     date: "May 19, 2024 - 04:45 PM",
//     type: "partner",
//   },
//   {
//     id: "act-4",
//     title: "Contact message received from member",
//     date: "May 19, 2024 - 02:20 PM",
//     type: "message",
//   },
//   {
//     id: "act-5",
//     title: "New testimonial was added",
//     date: "May 18, 2024 - 11:10 AM",
//     type: "testimonial",
//   },
// ];

// export interface LatestContentRow {
//   id: string;
//   title: string;
//   type: "News" | "Gallery" | "Report" | "Partner" | "Testimonial" | "Service";
//   status: "Published" | "Draft";
//   author: string;
//   date: string;
//   image?: string;
// }

// export const latestContent: LatestContentRow[] = [
//   {
//     id: "lc-1",
//     title: "New Branch Officially Opened in Bahir Dar",
//     type: "News",
//     status: "Published",
//     author: "Admin User",
//     date: "May 20, 2024",
//     image:
//       "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop",
//   },
//   {
//     id: "lc-2",
//     title: "Annual Progress Report 2024",
//     type: "Report",
//     status: "Published",
//     author: "Admin User",
//     date: "May 19, 2024",
//     image:
//       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop",
//   },
//   {
//     id: "lc-3",
//     title: "Financial Literacy Training for Members",
//     type: "News",
//     status: "Published",
//     author: "Admin User",
//     date: "May 18, 2024",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=100&h=100&fit=crop",
//   },
//   {
//     id: "lc-4",
//     title: "Oromia Bank",
//     type: "Partner",
//     status: "Published",
//     author: "Admin User",
//     date: "May 17, 2024",
//   },
//   {
//     id: "lc-5",
//     title: "Savings Account Service",
//     type: "Service",
//     status: "Published",
//     author: "Admin User",
//     date: "May 16, 2024",
//     image:
//       "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=100&h=100&fit=crop",
//   },
// ];

// export interface QuickAction {
//   id: string;
//   label: string;
//   href: string;
//   icon:
//     | "news"
//     | "gallery"
//     | "report"
//     | "partner"
//     | "service"
//     | "testimonial"
//     | "team"
//     | "stats"
//     | "settings";
// }

// export const quickActions: QuickAction[] = [
//   { id: "qa-news", label: "Add News", href: "/admin/news", icon: "news" },
//   { id: "qa-gallery", label: "Add Gallery", href: "/admin/gallery", icon: "gallery" },
//   { id: "qa-report", label: "Add Report", href: "/admin/reports", icon: "report" },
//   { id: "qa-partner", label: "Add Partner", href: "/admin/partners", icon: "partner" },
//   { id: "qa-service", label: "Add Service", href: "/admin/services", icon: "service" },
//   {
//     id: "qa-testimonial",
//     label: "Add Testimonial",
//     href: "/admin/testimonials",
//     icon: "testimonial",
//   },
//   {
//     id: "qa-team",
//     label: "Add Team Member",
//     href: "/admin/management-team",
//     icon: "team",
//   },
//   {
//     id: "qa-stats",
//     label: "Update Stats",
//     href: "/admin/organization-stats",
//     icon: "stats",
//   },
//   {
//     id: "qa-settings",
//     label: "Website Settings",
//     href: "/admin/settings",
//     icon: "settings",
//   },
// ];
import {
  LayoutDashboard,
  Newspaper,
  ImageIcon,
  FileText,
  Handshake,
  Quote,
  Wrench,
  Landmark,
  TrendingUp,
  Clock,
  BarChart3,
  Send,
  Mail,
  UserCog,
  Settings,
} from "lucide-react";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: any;
  adminOnly?: boolean;
}

export const adminNavItems: AdminNavItem[] = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/news",
    label: "Manage News",
    icon: Newspaper,
  },
  {
    href: "/admin/gallery",
    label: "Manage Gallery",
    icon: ImageIcon,
  },
  {
    href: "/admin/reports",
    label: "Manage Reports",
    icon: FileText,
  },
  {
    href: "/admin/partners",
    label: "Manage Partners",
    icon: Handshake,
  },
  {
    href: "/admin/testimonials",
    label: "Manage Testimonials",
    icon: Quote,
  },
  {
    href: "/admin/services",
    label: "Manage Services",
    icon: Wrench,
  },
  {
    href: "/admin/management-team",
    label: "Management Team",
    icon: Landmark,
  },
  {
    href: "/admin/organization-stats",
    label: "Organization Stats",
    icon: TrendingUp,
  },
  {
    href: "/admin/history",
    label: "Manage History Timeline",
    icon: Clock,
  },
  {
    href: "/admin/impact-metrics",
    label: "Manage Impact Metrics",
    icon: BarChart3,
  },
  {
    href: "/admin/newsletter",
    label: "Newsletter Subscribers",
    icon: Send,
  },
  {
    href: "/admin/messages",
    label: "Manage Contact Messages",
    icon: Mail,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: UserCog,
    adminOnly: true,
  },
  {
    href: "/admin/settings",
    label: "Website Settings",
    icon: Settings,
  },
];

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  change?: string;
  changeDirection?: "up" | "down" | "flat";
  icon: "news" | "services" | "gallery" | "partners" | "messages";
  color: "navy" | "green" | "purple" | "orange" | "blue";
  href?: string;
}

export const dashboardStats: DashboardStat[] = [
  {
    id: "news",
    label: "Total News",
    value: "24",
    change: "+3 from last week",
    changeDirection: "up",
    icon: "news",
    color: "navy",
    href: "/admin/news",
  },
  {
    id: "services",
    label: "Total Services",
    value: "8",
    change: "No change",
    changeDirection: "flat",
    icon: "services",
    color: "green",
    href: "/admin/services",
  },
  {
    id: "gallery",
    label: "Total Gallery Images",
    value: "156",
    change: "+12 from last week",
    changeDirection: "up",
    icon: "gallery",
    color: "purple",
    href: "/admin/gallery",
  },
  {
    id: "partners",
    label: "Total Partners",
    value: "12",
    change: "+1 from last week",
    changeDirection: "up",
    icon: "partners",
    color: "orange",
    href: "/admin/partners",
  },
  {
    id: "messages",
    label: "Total Messages",
    value: "18",
    change: "+5 from last week",
    changeDirection: "up",
    icon: "messages",
    color: "blue",
    href: "/admin/messages",
  },
];

export interface WebsiteOverviewPoint {
  label: string;
  visitors: number;
  pageViews: number;
}

export const websiteOverview: WebsiteOverviewPoint[] = [
  { label: "May 14", visitors: 2100, pageViews: 1400 },
  { label: "May 15", visitors: 2800, pageViews: 2000 },
  { label: "May 16", visitors: 3300, pageViews: 2300 },
  { label: "May 17", visitors: 2600, pageViews: 1900 },
  { label: "May 18", visitors: 3500, pageViews: 2600 },
  { label: "May 19", visitors: 3900, pageViews: 2900 },
  { label: "May 20", visitors: 4400, pageViews: 3400 },
];

export interface ContentSummarySlice {
  label: string;
  value: number;
  color: string;
}

export const contentSummary: ContentSummarySlice[] = [
  { label: "News", value: 24, color: "#0B4DBB" },
  { label: "Gallery Images", value: 156, color: "#062B72" },
  { label: "Reports", value: 10, color: "#94A3B8" },
  { label: "Partners", value: 12, color: "#F59E0B" },
  { label: "Testimonials", value: 15, color: "#EF4444" },
  { label: "Services", value: 8, color: "#0A9F55" },
  { label: "Other Pages", value: 7, color: "#38BDF8" },
];

export const contentSummaryTotal = contentSummary.reduce(
  (sum, s) => sum + s.value,
  0,
);

export interface RecentActivity {
  id: string;
  title: string;
  date: string;
  type: "news" | "gallery" | "partner" | "message" | "testimonial";
}

export const recentActivities: RecentActivity[] = [
  {
    id: "act-1",
    title: 'New news "Financial Literacy Training" was published',
    date: "May 20, 2024 - 10:30 AM",
    type: "news",
  },
  {
    id: "act-2",
    title: 'Gallery image "AGM 2024" was added',
    date: "May 20, 2024 - 09:15 AM",
    type: "gallery",
  },
  {
    id: "act-3",
    title: 'New partner "Oromia Bank" was added',
    date: "May 19, 2024 - 04:45 PM",
    type: "partner",
  },
  {
    id: "act-4",
    title: "Contact message received from member",
    date: "May 19, 2024 - 02:20 PM",
    type: "message",
  },
  {
    id: "act-5",
    title: "New testimonial was added",
    date: "May 18, 2024 - 11:10 AM",
    type: "testimonial",
  },
];

export interface LatestContentRow {
  id: string;
  title: string;
  type: "News" | "Gallery" | "Report" | "Partner" | "Testimonial" | "Service";
  status: "Published" | "Draft";
  author: string;
  date: string;
  image?: string;
}

export const latestContent: LatestContentRow[] = [
  {
    id: "lc-1",
    title: "New Branch Officially Opened in Bahir Dar",
    type: "News",
    status: "Published",
    author: "Admin User",
    date: "May 20, 2024",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=100&fit=crop",
  },
  {
    id: "lc-2",
    title: "Annual Progress Report 2024",
    type: "Report",
    status: "Published",
    author: "Admin User",
    date: "May 19, 2024",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop",
  },
  {
    id: "lc-3",
    title: "Financial Literacy Training for Members",
    type: "News",
    status: "Published",
    author: "Admin User",
    date: "May 18, 2024",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=100&h=100&fit=crop",
  },
  {
    id: "lc-4",
    title: "Oromia Bank",
    type: "Partner",
    status: "Published",
    author: "Admin User",
    date: "May 17, 2024",
  },
  {
    id: "lc-5",
    title: "Savings Account Service",
    type: "Service",
    status: "Published",
    author: "Admin User",
    date: "May 16, 2024",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=100&h=100&fit=crop",
  },
];

export interface QuickAction {
  id: string;
  label: string;
  href: string;
  icon:
    | "news"
    | "gallery"
    | "report"
    | "partner"
    | "service"
    | "testimonial"
    | "team"
    | "stats"
    | "settings";
}

export const quickActions: QuickAction[] = [
  { id: "qa-news", label: "Add News", href: "/admin/news", icon: "news" },
  {
    id: "qa-gallery",
    label: "Add Gallery",
    href: "/admin/gallery",
    icon: "gallery",
  },
  {
    id: "qa-report",
    label: "Add Report",
    href: "/admin/reports",
    icon: "report",
  },
  {
    id: "qa-partner",
    label: "Add Partner",
    href: "/admin/partners",
    icon: "partner",
  },
  {
    id: "qa-service",
    label: "Add Service",
    href: "/admin/services",
    icon: "service",
  },
  {
    id: "qa-testimonial",
    label: "Add Testimonial",
    href: "/admin/testimonials",
    icon: "testimonial",
  },
  {
    id: "qa-team",
    label: "Add Team Member",
    href: "/admin/management-team",
    icon: "team",
  },
  {
    id: "qa-stats",
    label: "Update Stats",
    href: "/admin/organization-stats",
    icon: "stats",
  },
  {
    id: "qa-settings",
    label: "Website Settings",
    href: "/admin/settings",
    icon: "settings",
  },
];