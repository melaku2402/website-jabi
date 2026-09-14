import type { GalleryImage } from "@/types/gallery";

export const galleryData: GalleryImage[] = [
  {
    id: "gal-1",
    title: "AGM 2024",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop",
    category: "Events",
    date: "2024-05-20",
    status: "published",
  },
  {
    id: "gal-2",
    title: "Bahir Dar Branch Opening",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop",
    category: "Branches",
    date: "2024-05-18",
    status: "published",
  },
  {
    id: "gal-3",
    title: "Financial Literacy Workshop",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=300&fit=crop",
    category: "Training",
    date: "2024-05-12",
    status: "published",
  },
  {
    id: "gal-4",
    title: "Community Outreach Day",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=300&fit=crop",
    category: "Community",
    date: "2024-05-08",
    status: "published",
  },
  {
    id: "gal-5",
    title: "Staff Training Retreat",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop",
    category: "Training",
    date: "2024-05-02",
    status: "draft",
  },
  {
    id: "gal-6",
    title: "Jimma Branch Interior",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=300&h=300&fit=crop",
    category: "Branches",
    date: "2024-04-25",
    status: "published",
  },
  {
    id: "gal-7",
    title: "Members Appreciation Event",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=300&fit=crop",
    category: "Events",
    date: "2024-04-20",
    status: "published",
  },
  {
    id: "gal-8",
    title: "Cooperative Anniversary Celebration",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop",
    category: "Other",
    date: "2024-04-14",
    status: "published",
  },
];

export const galleryCategories = [
  "All",
  "Events",
  "Community",
  "Branches",
  "Training",
  "Other",
] as const;
