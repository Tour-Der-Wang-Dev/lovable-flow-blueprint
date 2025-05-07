
import { SiteMapItem } from '@/types/siteMap';

export const pricingData: SiteMapItem = {
  title: "Pricing",
  url: "/pricing",
  ctas: ["Start Free Trial", "Contact Sales"],
  contentType: "static",
  deviceConsiderations: "Pricing comparison table converts to cards on mobile",
  crossLinking: ["Features", "FAQ", "Case Studies"],
  isPriorityConversion: true,
  breadcrumb: ["Home", "Pricing"],
  metaRequirements: "Pricing keywords, value propositions, competitive comparison terms",
  description: "Plan options, pricing details, and feature comparisons",
  children: [
    {
      title: "Plans Comparison",
      url: "/pricing/compare",
      ctas: ["Choose Plan", "Contact Sales"],
      contentType: "static",
      deviceConsiderations: "Feature comparison simplified for mobile",
      crossLinking: ["Features", "Enterprise Solutions"],
      isPriorityConversion: true,
      breadcrumb: ["Home", "Pricing", "Compare"],
      description: "Side-by-side comparison of plan features and limitations"
    },
    {
      title: "Enterprise Pricing",
      url: "/pricing/enterprise",
      ctas: ["Request Quote", "Schedule Consultation"],
      contentType: "static",
      deviceConsiderations: "ROI calculator simplified on mobile",
      crossLinking: ["Services/Enterprise", "Case Studies/Enterprise"],
      isPriorityConversion: true,
      crmIntegration: "Salesforce enterprise lead routing",
      breadcrumb: ["Home", "Pricing", "Enterprise"],
      description: "Custom enterprise pricing and volume discounts"
    }
  ]
};

export const contactData: SiteMapItem = {
  title: "Contact",
  url: "/contact",
  ctas: ["Submit Inquiry", "Book Meeting"],
  contentType: "dynamic",
  deviceConsiderations: "Form fields optimize for mobile input",
  crossLinking: ["About", "Support", "Pricing"],
  isPriorityConversion: true,
  crmIntegration: "HubSpot contact form integration",
  breadcrumb: ["Home", "Contact"],
  metaRequirements: "Contact keywords, location data, response time expectations",
  description: "Contact information and inquiry submission forms",
  children: [
    {
      title: "Sales",
      url: "/contact/sales",
      ctas: ["Request Callback", "Book Meeting"],
      contentType: "dynamic",
      deviceConsiderations: "Click-to-call functionality on mobile",
      crossLinking: ["Pricing", "Case Studies"],
      isPriorityConversion: true,
      crmIntegration: "Salesforce lead assignment",
      breadcrumb: ["Home", "Contact", "Sales"],
      description: "Sales team contact and product inquiries"
    },
    {
      title: "Support",
      url: "/contact/support",
      ctas: ["Submit Ticket", "Live Chat"],
      contentType: "dynamic",
      deviceConsiderations: "Support options prioritized differently on mobile",
      crossLinking: ["Documentation", "FAQ"],
      crmIntegration: "Zendesk ticket creation",
      breadcrumb: ["Home", "Contact", "Support"],
      description: "Customer support contact options and knowledge base"
    }
  ]
};
