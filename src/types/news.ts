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