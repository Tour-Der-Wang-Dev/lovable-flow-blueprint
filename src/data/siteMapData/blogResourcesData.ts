
import { SiteMapItem } from '@/types/siteMap';

export const blogData: SiteMapItem = {
  title: "Blog",
  url: "/blog",
  ctas: ["Subscribe to Newsletter", "Filter by Topic"],
  contentType: "dynamic",
  deviceConsiderations: "Blog filters convert to dropdown on mobile",
  crossLinking: ["Resources", "Documentation", "Case Studies"],
  regularUpdates: true,
  metaRequirements: "Article keywords, author expertise, content categorization",
  breadcrumb: ["Home", "Blog"],
  description: "Industry insights, tutorials, and product updates",
  children: [
    {
      title: "Tutorials",
      url: "/blog/tutorials",
      ctas: ["Filter by Difficulty", "Subscribe"],
      contentType: "dynamic",
      deviceConsiderations: "Code samples adjust to screen width on mobile",
      crossLinking: ["Documentation", "Resources/Downloads"],
      regularUpdates: true,
      breadcrumb: ["Home", "Blog", "Tutorials"],
      description: "Step-by-step guides for using platform features"
    },
    {
      title: "Product Updates",
      url: "/blog/updates",
      ctas: ["Subscribe to Updates", "Join Beta Program"],
      contentType: "dynamic",
      deviceConsiderations: "Feature comparison tables stack on mobile",
      crossLinking: ["Roadmap", "Documentation"],
      regularUpdates: true,
      breadcrumb: ["Home", "Blog", "Updates"],
      description: "New feature announcements and platform changes"
    },
    {
      title: "Industry Insights",
      url: "/blog/insights",
      ctas: ["Subscribe", "Share Article"],
      contentType: "dynamic",
      deviceConsiderations: "Data visualizations simplified on mobile",
      crossLinking: ["Case Studies", "Resources/Whitepapers"],
      regularUpdates: true,
      breadcrumb: ["Home", "Blog", "Insights"],
      description: "Analysis and thought leadership on industry trends"
    }
  ]
};

export const resourcesData: SiteMapItem = {
  title: "Resources",
  url: "/resources",
  ctas: ["Download Resources", "Request Custom Resource"],
  contentType: "dynamic",
  deviceConsiderations: "Resource filtering simplified on mobile",
  crossLinking: ["Blog", "Documentation", "Case Studies"],
  breadcrumb: ["Home", "Resources"],
  metaRequirements: "Resource keywords, solution-focused meta descriptions",
  description: "Educational materials, tools, and technical documentation",
  children: [
    {
      title: "Documentation",
      url: "/resources/documentation",
      ctas: ["Search Docs", "Request Feature"],
      contentType: "dynamic",
      deviceConsiderations: "Documentation navigation collapses on mobile",
      crossLinking: ["API Reference", "Tutorials"],
      regularUpdates: true,
      breadcrumb: ["Home", "Resources", "Documentation"],
      description: "Technical documentation and user guides",
      children: [
        {
          title: "Getting Started",
          url: "/resources/documentation/getting-started",
          ctas: ["Quick Start", "View Tutorials"],
          contentType: "static",
          deviceConsiderations: "Step-by-step guide simplified on mobile",
          crossLinking: ["API Reference", "Tutorials/Beginners"],
          breadcrumb: ["Home", "Resources", "Documentation", "Getting Started"],
          description: "First-time user setup and orientation"
        },
        {
          title: "API Reference",
          url: "/resources/documentation/api",
          ctas: ["Try API", "Download SDK"],
          contentType: "dynamic",
          deviceConsiderations: "API request/response examples adjust for mobile",
          crossLinking: ["Documentation", "Tutorials/API"],
          regularUpdates: true,
          breadcrumb: ["Home", "Resources", "Documentation", "API"],
          description: "Detailed API endpoints and integration guides"
        }
      ]
    },
    {
      title: "Downloads",
      url: "/resources/downloads",
      ctas: ["Download Now", "Request Custom Resource"],
      contentType: "dynamic",
      deviceConsiderations: "Download cards stack vertically on mobile",
      crossLinking: ["Documentation", "Blog/Tutorials"],
      regularUpdates: true,
      breadcrumb: ["Home", "Resources", "Downloads"],
      description: "Downloadable tools, templates, and resources"
    },
    {
      title: "Webinars",
      url: "/resources/webinars",
      ctas: ["Register Now", "Watch Recording"],
      contentType: "dynamic",
      deviceConsiderations: "Video player optimized for mobile bandwidth",
      crossLinking: ["Blog", "Documentation"],
      isGated: true,
      crmIntegration: "Marketo webinar registration tracking",
      regularUpdates: true,
      breadcrumb: ["Home", "Resources", "Webinars"],
      description: "Live and recorded educational webinar sessions"
    }
  ]
};
