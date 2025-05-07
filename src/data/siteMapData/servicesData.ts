
import { SiteMapItem } from '@/types/siteMap';

export const servicesData: SiteMapItem = {
  title: "Services",
  url: "/services",
  ctas: ["Get Custom Quote", "Contact Sales"],
  contentType: "static",
  deviceConsiderations: "Service cards stack vertically on mobile",
  crossLinking: ["Case Studies", "About/Team", "Pricing"],
  breadcrumb: ["Home", "Services"],
  metaRequirements: "Service keywords, industry terms, solution-focused meta descriptions",
  description: "Overview of professional services and solutions offerings",
  children: [
    {
      title: "Custom Development",
      url: "/services/custom-development",
      ctas: ["Request Consultation", "View Portfolio"],
      contentType: "static",
      deviceConsiderations: "Process timeline converts to vertical steps on mobile",
      crossLinking: ["Case Studies", "Technology Stack"],
      isPriorityConversion: true,
      breadcrumb: ["Home", "Services", "Custom Development"],
      description: "Tailored development solutions for specific business needs"
    },
    {
      title: "Enterprise Solutions",
      url: "/services/enterprise",
      ctas: ["Book Enterprise Demo", "Download Whitepaper"],
      contentType: "static",
      deviceConsiderations: "Enterprise architecture diagrams simplified for mobile",
      crossLinking: ["Case Studies/Enterprise", "Security", "Compliance"],
      isGated: true,
      crmIntegration: "HubSpot enterprise lead tracking",
      isPriorityConversion: true,
      breadcrumb: ["Home", "Services", "Enterprise"],
      description: "Large-scale solutions for enterprise organizations"
    },
    {
      title: "Training & Support",
      url: "/services/training",
      ctas: ["Schedule Training", "Contact Support"],
      contentType: "dynamic",
      deviceConsiderations: "Training calendar optimized for mobile booking",
      crossLinking: ["Documentation", "Pricing/Support Plans"],
      breadcrumb: ["Home", "Services", "Training"],
      description: "Training programs and support options for customers"
    }
  ]
};
