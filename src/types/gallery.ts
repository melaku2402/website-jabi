import type { ContentStatus } from "./admin";

export type GalleryCategory =
  | "Events"
  | "Community"
  | "Branches"
  | "Training"
  | "Other";

export interface GalleryImage {
  id: string;
  title: string;
  image: string;
  category: GalleryCategory;
  date: string;
  status: ContentStatus;
}
