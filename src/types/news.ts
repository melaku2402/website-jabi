export type NewsCategory = 
  | 'announcement'
  | 'branch-update'
  | 'event'
  | 'training'
  | 'community'
  | 'financial-education';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  imageUrl: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Shape used by the admin news management panel (src/app/admin/news).
export interface NewsItem {
  id: string;
  title: string;
  category: string;
  image: string;
  status: 'published' | 'draft' | 'archived';
  author: string;
  publishedAt: string;
}