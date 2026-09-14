export interface WebsiteSettings {
  general: {
    websiteName: string;
    tagline: string;
    email: string;
    phone: string;
    address: string;
  };
  contact: {
    phone: string;
    email: string;
    officeAddress: string;
    workingHours: string;
  };
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
  };
  branding: {
    logoUrl: string;
    faviconUrl: string;
    primaryColor: string;
    secondaryColor: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
}

export const websiteSettingsData: WebsiteSettings = {
  general: {
    websiteName: "Jabi Cooperatives Saving & Credit Union S.C.",
    tagline: "Together for a Better Life!",
    email: "info@jabicoopscu.com.et",
    phone: "+251 47 111 2233",
    address: "funet selam , west gojjam , Ethiopia",
  },
  contact: {
    phone: "+251 47 111 2233",
    email: "support@jabicoopscu.com.et",
    officeAddress:
      "funet selam , west gojjam , Ethiopia",
    workingHours: "Mon - Fri: 8:30 AM - 5:30 PM",
  },
  social: {
    facebook: "https://facebook.com/jabicoopscu",
    twitter: "https://x.com/jabicoopscu",
    linkedin: "https://linkedin.com/company/jabicoopscu",
    youtube: "https://youtube.com/@jabicoopscu",
  },
  branding: {
    logoUrl: "/logo/jabi-logo.svg",
    faviconUrl: "/favicon.ico",
    primaryColor: "#062B72",
    secondaryColor: "#0A9F55",
  },
  seo: {
    metaTitle: "Jabi Cooperatives Saving & Credit Union S.C.",
    metaDescription:
      "Jabi Cooperatives Saving & Credit Union S.C. — building financial security together with our members across Ethiopia.",
    keywords: "SACCO, savings, credit union, Ethiopia, cooperative, Jimma",
  },
};
