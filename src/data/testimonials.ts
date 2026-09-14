// 1. Updated Type Interface matching the component properties
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  cooperative?: string;
  photo?: string;
  quote: string;
  rating?: number;
  location?: string;
  membershipYear?: string;
}

// 2. Updated Testimonials Data Export
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Daniel Bekele",
    role: "Local Business Owner",
    cooperative: "Jabi Tehnan SACCO",
    photo: "/images/team/birhanu_alemu.png",
    quote:
      "Joining the cooperative transformed my business. The affordable credit terms allowed me to expand my shop and hire two new employees. Truly a supportive institution.",
    rating: 5,
    location: "Jabi Tehnan",
    membershipYear: "2012 E.C.",
  },
  {
    id: "2",
    name: "Tigist Assefa",
    role: "Agricultural Entrepreneur",
    cooperative: "Finote Selam Union",
    photo: "/images/team/abeba_tsegaye.png",
    quote:
      "The savings programs helped me build a secure financial cushion for my family. Their financial literacy workshops were an incredible bonus that changed how I manage money.",
    rating: 5,
    location: "Finote Selam",
    membershipYear: "2015 E.C.",
  },
  {
    id: "3",
    name: "Dawit Getachew",
    role: "Civil Servant",
    cooperative: "Bahir Dar Branch",
    photo: "/images/team/melaku_alemu.png",
    quote:
      "Customer service is outstanding, and the digital services have made managing my account effortless. It feels great to be part of a community-focused cooperative.",
    rating: 5,
    location: "Bahir Dar",
    membershipYear: "2018 E.C.",
  },
  {
    id: "4",
    name: "Almaz Tadesse",
    role: "Poultry Farmer",
    cooperative: "Jabi Tehnan SACCO",
    photo: "/images/team/senait_kebede.png",
    quote:
      "With the flexible agricultural loan provided by Jabi, I modernized my farm and doubled my yield within two years. Their staff truly cares about our success.",
    rating: 5,
    location: "Jabi Tehnan",
    membershipYear: "2010 E.C.",
  },
  {
    id: "5",
    name: "Yared Kassahun",
    role: "High School Teacher",
    cooperative: "Finote Selam Union",
    photo: "/images/team/birhanu_alemu.png",
    quote:
      "The fixed savings plan made it possible for me to construct my family home. Transparent processes and reasonable interest rates set them apart from commercial banks.",
    rating: 5,
    location: "Finote Selam",
    membershipYear: "2014 E.C.",
  },
  {
    id: "6",
    name: "Muluwork Hailu",
    role: "Handicraft & Textile Retailer",
    cooperative: "Dembecha Branch",
    photo: "/images/team/tadesse_getachew.png",   
    quote:
      "Being part of a cooperative that upholds integrity and solidarity gives me peace of mind. The emergency micro-loan service saved my business during tough market periods.",
    rating: 5,
    location: "Dembecha",
    membershipYear: "2017 E.C.",
  },
  {
    id: "7",
    name: "Solomon Worku",
    role: "Transport Services Provider",
    cooperative: "Bure Union",
    photo: "/images/team/abeba_tsegaye.png",
    quote:
      "The rapid loan processing and dedicated customer support enabled me to purchase my second commercial vehicle. Highly recommended for any growing entrepreneur.",
    rating: 5,
    location: "Bure",
    membershipYear: "2019 E.C.",
  },
];
