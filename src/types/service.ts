import type { ContentStatus } from "./admin";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  status: ContentStatus;
  order: number;
}
