export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon: 'flag' | 'members' | 'systems' | 'growth' | 'today';
}

export const growthTimeline: TimelineMilestone[] = [
  { year: '1996 E.C.', title: 'Established', description: 'Established with 25 founding members and a shared vision.', icon: 'flag' },
  { year: '2000 E.C.', title: 'Expansion', description: 'Expanded membership and introduced new financial services.', icon: 'members' },
  { year: '2010 E.C.', title: 'Strengthened Systems', description: 'Strengthened systems and opened additional service points.', icon: 'systems' },
  { year: '2020 E.C.', title: 'Digital Innovation', description: 'Embraced digital innovation for better member experience.', icon: 'growth' },
  { year: 'Today', title: 'Continuing Our Mission', description: 'Continuing our mission to empower members and communities.', icon: 'today' },
];

export interface WhoWeAreContent {
  label: string;
  heading: string;
  paragraphs: string[];
  signatoryName: string;
  signatoryTitle: string;
  imageUrl: string;
  establishedLabel: string;
  establishedYear: string;
}

export const whoWeAreContent: WhoWeAreContent = {
  label: 'Who We Are',
  heading: 'Building Stronger Communities Through Financial Cooperation',
  paragraphs: [
    'Established in 1996 E.C., Jabi Cooperatives Saving & Credit Union S.C is a trusted financial institution dedicated to providing accessible, affordable and innovative financial services to individuals, families and communities. We are driven by the cooperative values and principles that put people first.',
    'We believe in the power of saving together and growing together. Our members are at the heart of everything we do.',
  ],
  signatoryName: 'Ato. Melaku Alemu',
  signatoryTitle: 'General Manager',
  imageUrl: '/images/about/who-we-are.jpg',
  establishedLabel: 'Established',
  establishedYear: '1996 E.C.',
};

export interface VisionMissionValuesItem {
  icon: 'vision' | 'mission' | 'values';
  title: string;
  description?: string;
  list?: string[];
}

export const visionMissionValues: VisionMissionValuesItem[] = [
  {
    icon: 'vision',
    title: 'Our Vision',
    description: 'To be a leading cooperative financial institution in Ethiopia.',
  },
  {
    icon: 'mission',
    title: 'Our Mission',
    description: 'To provide quality financial services and create value for members.',
  },
  {
    icon: 'values',
    title: 'Our Values',
    list: ['Transparency', 'Integrity', 'Accountability', 'Solidarity', 'Professionalism'],
  },
];

export interface ObjectiveColumns {
  left: string[];
  right: string[];
}

export const objectives: ObjectiveColumns = {
  left: [
    'Mobilize savings and other financial resources from members.',
    'Provide affordable and appropriate credit services to members.',
    'Promote a culture of saving and responsible borrowing.',
    'Enhance financial literacy and business development of members.',
  ],
  right: [
    'Ensure the financial sustainability and growth of the union.',
    'Deliver excellent and innovative financial services.',
    'Contribute to the social and economic development of the community.',
    'Uphold cooperative principles and values in all operations.',
  ],
};