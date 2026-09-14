import type { AdminUser } from "@/types/admin";

export const usersData: AdminUser[] = [
  {
    id: "usr_001",
    name: "Admin User",
    email: "admin@jabicoopscu.com.et",
    role: "super_admin",
    roleLabel: "Super Admin",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=faces",
    status: "active",
    lastLogin: "2024-05-20T10:30:00.000Z",
  },
  {
    id: "usr_002",
    name: "Tigist Bekele",
    email: "tigist.bekele@jabicoopscu.com.et",
    role: "admin",
    roleLabel: "Admin",
    avatar:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=150&h=150&fit=crop&crop=faces",
    status: "active",
    lastLogin: "2024-05-19T14:10:00.000Z",
  },
  {
    id: "usr_003",
    name: "Dawit Alemu",
    email: "dawit.alemu@jabicoopscu.com.et",
    role: "editor",
    roleLabel: "Editor",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces",
    status: "active",
    lastLogin: "2024-05-18T09:05:00.000Z",
  },
  {
    id: "usr_004",
    name: "Selam Fikru",
    email: "selam.fikru@jabicoopscu.com.et",
    role: "editor",
    roleLabel: "Editor",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    status: "inactive",
    lastLogin: "2024-04-30T16:45:00.000Z",
  },
];
