import type { NewsCategory } from '@/types/news';

export interface CategoryCount {
  id: NewsCategory | 'all';
  label: string;
  count: number;
}

export const newsCategories: CategoryCount[] = [
  { id: 'all', label: 'All News', count: 32 },
  { id: 'announcement', label: 'Announcements', count: 10 },
  { id: 'branch-update', label: 'Branch Updates', count: 6 },
  { id: 'event', label: 'Events', count: 8 },
  { id: 'training', label: 'Training & Capacity Building', count: 5 },
  { id: 'community', label: 'Community', count: 7 },
  { id: 'financial-education', label: 'Financial Education', count: 6 },
];

export interface NewsListItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  imageUrl: string;
  publishedAt: string;
}

export const featuredNewsItem: NewsListItem = {
  id: 'featured-1',
  slug: 'new-branch-officially-opened-bahir-dar',
  title: 'New Branch Officially Opened in Bahir Dar',
  excerpt:
    'We are pleased to announce the official opening of our new branch in Bahir Dar city. The new branch will provide modern financial services for members and the community.',
  category: 'branch-update',
  imageUrl: '/images/news/branch-opening.png',
  publishedAt: 'May 20, 2024',
};

export const latestNews: NewsListItem[] = [
  {
    id: '1',
    slug: 'annual-general-assembly-scheduled-june-2024',
    title: 'Annual General Assembly Scheduled for June 2024',
    excerpt: 'We invite all members to our Annual General Assembly which will be held on June 15, 2024 at Finote Selam.',
    category: 'announcement',
    imageUrl: '/images/news/annual-general-assembly.jpg',
    publishedAt: 'May 18, 2024',
  },
  {
    id: '2',
    slug: 'financial-literacy-training-members',
    title: 'Financial Literacy Training for Members',
    excerpt: 'Training program to improve financial awareness and money management skills of our members.',
    category: 'financial-education',
    imageUrl: '/images/news/financial-literacy-training.jpg',
    publishedAt: 'May 15, 2024',
  },
  {
    id: '3',
    slug: 'community-clean-up-campaign-held',
    title: 'Community Clean-Up Campaign Held',
    excerpt: 'Our team and members participated in a community clean-up campaign around Finote Selam town.',
    category: 'community',
    imageUrl: '/images/news/annual-general-assembly.jpg',
    // imageUrl: '/images/news/community-clean-up.jpg',
    publishedAt: 'May 12, 2024',
  },
  {
    id: '4',
    slug: 'dega-branch-service-renovation-completed',
    title: 'Dega Branch Service Renovation Completed',
    excerpt: 'Dega branch has been renovated to serve you better with improved facilities and services.',
    category: 'branch-update',
    imageUrl: '/images/news/annual-general-assembly.jpg',
    publishedAt: 'May 10, 2024',
  },
  {
    id: '5',
    slug: 'successful-cooperative-leaders-workshop',
    title: 'Successful Cooperative Leaders Workshop',
    excerpt: 'Two-day workshop for cooperative leaders from all branches was successfully concluded.',
    category: 'event',
    imageUrl: '/images/news/annual-general-assembly.jpg',
    // imageUrl: '/images/news/leaders-workshop.jpg',
    publishedAt: 'May 8, 2024',
  },
  {
    id: '6',
    slug: 'new-insurance-service-now-available',
    title: 'New Insurance Service Now Available',
    excerpt: 'We are happy to announce that new micro-insurance services are now available for our members.',
    category: 'announcement',
    imageUrl: '/images/news/financial-literacy-training.jpg',
    // imageUrl: '/images/news/insurance-service.jpg',
    publishedAt: 'May 5, 2024',
  },
  {
    id: '7',
    slug: 'school-supplies-donation-program',
    title: 'School Supplies Donation Program',
    excerpt: 'We donated school supplies to students in need in different schools around West Gojjam.',
    category: 'community',
    imageUrl: '/images/news/financial-literacy-training.jpg',
    // imageUrl: '/images/news/school-supplies-donation.jpg',
    publishedAt: 'May 2, 2024',
  },
  {
    id: '8',
    slug: 'customer-service-training-for-staff',
    title: 'Customer Service Training for Staff',
    excerpt: 'Our staff participated in customer service excellence training to improve member experience.',
    category: 'training',
    imageUrl: '/images/news/annual-general-assembly.jpg',
    // imageUrl: '/images/news/customer-service-training.jpg',
    publishedAt: 'April 30, 2024',
  },
  {
    id: '9',
    slug: 'bure-branch-rebuilding-progress-update',
    title: 'Bure Branch Rebuilding Progress Update',
    excerpt: 'Reconstruction of Bure branch is progressing well and will be ready to serve members soon.',
    category: 'branch-update',
    imageUrl: '/images/news/financial-literacy-training.jpg',
    // imageUrl: '/images/news/bure-branch-rebuilding.jpg',
    publishedAt: 'April 28, 2024',
  },
];

export const newsItemsPerPage = 9;
export const newsTotalPages = 6;

export interface UpcomingEvent {
  id: string;
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: '1',
    month: 'JUN',
    day: '15',
    title: 'Annual General Assembly 2024',
    time: '8:00 AM - 2:00 PM',
    location: 'Finote Selam, Head Office',
  },
  {
    id: '2',
    month: 'JUN',
    day: '20',
    title: 'Cooperative Leaders Training',
    time: '8:30 AM - 4:00 PM',
    location: 'Debre Markos Branch',
  },
  {
    id: '3',
    month: 'JUN',
    day: '28',
    title: 'Financial Literacy Seminar',
    time: '9:00 AM - 12:00 PM',
    location: 'Bahir Dar Branch',
  },
  {
    id: '4',
    month: 'JUL',
    day: '05',
    title: 'Youth Savings Awareness Event',
    time: '10:00 AM - 1:00 PM',
    location: 'Bure Branch',
  },
];

export const photoGallery: string[] = [
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800',
];

export interface DownloadItem {
  id: string;
  title: string;
  fileType: 'PDF' | 'XLS' | 'DOC';
  size: string;
  downloadUrl: string;
}

export const annualDownloads: DownloadItem[] = [
  { id: '1', title: 'Annual Report 2023', fileType: 'PDF', size: '4.2 MB', downloadUrl: '/downloads/annual-report-2023.pdf' },
  { id: '2', title: 'Financial Statement 2023', fileType: 'XLS', size: '2.6 MB', downloadUrl: '/downloads/financial-statement-2023.xlsx' },
  { id: '3', title: 'Audit Report 2023', fileType: 'PDF', size: '3.1 MB', downloadUrl: '/downloads/audit-report-2023.pdf' },
  { id: '4', title: 'Strategic Plan 2024-2026', fileType: 'DOC', size: '2.8 MB', downloadUrl: '/downloads/strategic-plan-2024-2026.docx' },
  { id: '5', title: 'Cooperative Bylaws', fileType: 'PDF', size: '1.7 MB', downloadUrl: '/downloads/cooperative-bylaws.pdf' },
  { id: '6', title: 'Credit Policy Guidelines', fileType: 'XLS', size: '1.9 MB', downloadUrl: '/downloads/credit-policy-guidelines.xlsx' },
];
