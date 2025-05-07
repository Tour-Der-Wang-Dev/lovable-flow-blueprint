
import { SiteMapItem } from '@/types/siteMap';

export const legalData: SiteMapItem = {
  title: "Legal",
  url: "/legal",
  ctas: ["Contact Legal", "Download Documents"],
  contentType: "static",
  deviceConsiderations: "Legal document navigation simplified for mobile",
  crossLinking: ["Privacy Policy", "Terms of Service"],
  breadcrumb: ["Home", "Legal"],
  description: "Legal documents, policies, and compliance information",
  children: [
    {
      title: "Terms of Service",
      url: "/legal/terms",
      ctas: ["Accept Terms", "Contact Legal"],
      contentType: "static",
      deviceConsiderations: "Document sections collapse on mobile",
      crossLinking: ["Privacy Policy", "Data Processing"],
      regularUpdates: true,
      breadcrumb: ["Home", "Legal", "Terms"],
      description: "Terms and conditions for platform usage"
    },
    {
      title: "Privacy Policy",
      url: "/legal/privacy",
      ctas: ["Cookie Settings", "Contact Privacy Officer"],
      contentType: "static",
      deviceConsiderations: "Cookie consent optimized for mobile",
      crossLinking: ["Terms of Service", "Data Processing"],
      regularUpdates: true,
      breadcrumb: ["Home", "Legal", "Privacy"],
      description: "Privacy practices and user data handling policies"
    }
  ]
};

export const searchData: SiteMapItem = {
  title: "Search",
  url: "/search",
  ctas: ["Advanced Search", "Browse Categories"],
  contentType: "dynamic",
  deviceConsiderations: "Voice search option on mobile",
  crossLinking: ["Documentation", "Blog", "Resources"],
  breadcrumb: ["Home", "Search"],
  description: "Site-wide search functionality and results page",
  children: []
};
