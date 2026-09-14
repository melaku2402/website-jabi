import type { ContentStatus } from "./admin";

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  avatar: string;
  quote: string;
  status: ContentStatus;
}

export interface ReportItem {
  id: string;
  name: string;
  type: string;
  year: string;
  fileSize: string;
  status: ContentStatus;
  uploadedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  photo: string;
  order: number;
  status: ContentStatus;
}

export interface OrgStat {
  id: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface HistoryMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export type SubscriberStatus = "active" | "unsubscribed";

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  status: SubscriberStatus;
}

export type MessageStatus = "unread" | "read" | "replied";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  body: string;
  date: string;
  status: MessageStatus;
}
