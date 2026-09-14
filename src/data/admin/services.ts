import { PiggyBank, HandCoins, Landmark as LandmarkIcon, Send, GraduationCap, LayoutGrid } from "lucide-react";
import type { ServiceItem } from "@/types/service";

export const servicesData: ServiceItem[] = [
  {
    id: "svc-1",
    name: "Savings",
    description: "Flexible personal and group savings accounts for members.",
    icon: PiggyBank,
    status: "published",
    order: 1,
  },
  {
    id: "svc-2",
    name: "Loans",
    description: "Affordable credit for personal, business and agricultural needs.",
    icon: HandCoins,
    status: "published",
    order: 2,
  },
  {
    id: "svc-3",
    name: "Fixed Deposit",
    description: "Competitive fixed-term deposit accounts with guaranteed returns.",
    icon: LandmarkIcon,
    status: "published",
    order: 3,
  },
  {
    id: "svc-4",
    name: "Money Transfer",
    description: "Fast and secure domestic transfers between member accounts.",
    icon: Send,
    status: "published",
    order: 4,
  },
  {
    id: "svc-5",
    name: "Financial Education",
    description: "Workshops and training that build member financial literacy.",
    icon: GraduationCap,
    status: "published",
    order: 5,
  },
  {
    id: "svc-6",
    name: "Other Services",
    description: "Additional cooperative services tailored to member needs.",
    icon: LayoutGrid,
    status: "draft",
    order: 6,
  },
];
