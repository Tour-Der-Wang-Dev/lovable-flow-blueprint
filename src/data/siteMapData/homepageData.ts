
import { SiteMapItem } from '@/types/siteMap';

export const homepageData: SiteMapItem = {
  title: "Homepage",
  url: "/",
  ctas: ["Start Free Trial", "See Live Demo", "Watch Tutorial"],
  contentType: "dynamic",
  deviceConsiderations: "Mobile-optimized hero section with simplified CTAs",
  crossLinking: ["Features", "Case Studies", "Pricing"],
  isPriorityConversion: true,
  regularUpdates: true,
  metaRequirements: "Primary keywords, product benefits, social sharing optimization",
  breadcrumb: ["Home"],
  description: "The main landing page showcasing key value propositions and direct paths to conversions",
  children: [
    {
      title: "Features Overview",
      url: "/features",
      ctas: ["Schedule Demo", "Get Started"],
      contentType: "static",
      deviceConsiderations: "Feature comparison table collapses to cards on mobile",
      crossLinking: ["Pricing", "Use Cases", "Documentation"],
      breadcrumb: ["Home", "Features"],
      description: "Comprehensive overview of all platform capabilities and benefits",
      children: [
        {
          title: "AI Editing",
          url: "/features/ai-editing",
          ctas: ["Try AI Editor", "Watch Tutorial"],
          contentType: "static",
          deviceConsiderations: "Interactive demo simplified for mobile",
          crossLinking: ["Documentation", "Case Studies"],
          breadcrumb: ["Home", "Features", "AI Editing"],
          description: "Detailed explanation of AI-powered editing capabilities"
        },
        {
          title: "Collaboration Tools",
          url: "/features/collaboration",
          ctas: ["Start Collaborating", "See How It Works"],
          contentType: "static",
          deviceConsiderations: "Team workflow diagrams stack vertically on mobile",
          crossLinking: ["Documentation", "Pricing/Team Plans"],
          breadcrumb: ["Home", "Features", "Collaboration"],
          description: "Overview of team collaboration features and workflows"
        },
        {
          title: "Deployment Options",
          url: "/features/deployment",
          ctas: ["Deploy Now", "Learn More"],
          contentType: "static",
          deviceConsiderations: "Deployment flow diagram simplified on mobile",
          crossLinking: ["Documentation/Deployment", "Pricing"],
          breadcrumb: ["Home", "Features", "Deployment"],
          description: "Explanation of various deployment methods and environments"
        }
      ]
    }
  ]
};
