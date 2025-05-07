
import { SiteMapItem } from '@/types/siteMap';

export const caseStudiesData: SiteMapItem = {
  title: "Case Studies",
  url: "/case-studies",
  ctas: ["Filter by Industry", "Contact Sales"],
  contentType: "dynamic",
  deviceConsiderations: "Filter controls convert to dropdown on mobile",
  crossLinking: ["Services", "Features", "Pricing"],
  regularUpdates: true,
  metaRequirements: "Industry keywords, result metrics, testimonial highlights",
  breadcrumb: ["Home", "Case Studies"],
  description: "Success stories showcasing real-world implementations and results",
  children: [
    {
      title: "Industry Solutions",
      url: "/case-studies/industries",
      ctas: ["Filter by Industry", "Schedule Consultation"],
      contentType: "dynamic",
      deviceConsiderations: "Industry selector simplified on mobile",
      crossLinking: ["Services", "Features"],
      breadcrumb: ["Home", "Case Studies", "Industries"],
      description: "Case studies organized by industry vertical",
      children: [
        {
          title: "E-commerce",
          url: "/case-studies/industries/ecommerce",
          ctas: ["See E-commerce Solutions", "Request Demo"],
          contentType: "dynamic",
          deviceConsiderations: "Mobile-optimized result metrics",
          crossLinking: ["Features/AI Editing", "Services/Custom Development"],
          breadcrumb: ["Home", "Case Studies", "Industries", "E-commerce"],
          description: "Success stories from e-commerce implementations"
        },
        {
          title: "SaaS",
          url: "/case-studies/industries/saas",
          ctas: ["Explore SaaS Solutions", "Contact Sales"],
          contentType: "dynamic",
          deviceConsiderations: "Integration diagrams simplified for mobile",
          crossLinking: ["Features/Deployment", "Services/Enterprise"],
          breadcrumb: ["Home", "Case Studies", "Industries", "SaaS"],
          description: "Case studies from software-as-a-service clients"
        }
      ]
    },
    {
      title: "Client Success Stories",
      url: "/case-studies/success-stories",
      ctas: ["Filter by Result", "Contact Featured Client"],
      contentType: "dynamic",
      deviceConsiderations: "Video testimonials optimize bandwidth on mobile",
      crossLinking: ["Services", "About/Testimonials"],
      regularUpdates: true,
      breadcrumb: ["Home", "Case Studies", "Success Stories"],
      description: "Detailed client testimonials and business outcomes"
    }
  ]
};
