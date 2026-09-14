import type { TeamMember } from "@/types/content";

export const managementTeamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Abebe Girma",
    position: "General Manager",
    department: "Executive Office",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
    order: 1,
    status: "published",
  },
  {
    id: "team-2",
    name: "Selamawit Fikru",
    position: "Deputy General Manager",
    department: "Operations",
    photo:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=200&h=200&fit=crop&crop=faces",
    order: 2,
    status: "published",
  },
  {
    id: "team-3",
    name: "Yonas Tadesse",
    position: "Head of Finance",
    department: "Finance",
    photo:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=faces",
    order: 3,
    status: "published",
  },
  {
    id: "team-4",
    name: "Hanna Bekele",
    position: "Head of Credit & Loans",
    department: "Credit",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    order: 4,
    status: "draft",
  },
];
