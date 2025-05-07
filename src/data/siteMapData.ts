
import { SiteMapItem } from '../components/SiteMap';

export const siteMapData: SiteMapItem[] = [
  {
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
    children: [
      {
        title: "Features Overview",
        url: "/features",
        ctas: ["Schedule Demo", "Get Started"],
        contentType: "static",
        deviceConsiderations: "Feature comparison table collapses to cards on mobile",
        crossLinking: ["Pricing", "Use Cases", "Documentation"],
        breadcrumb: ["Home", "Features"],
        children: [
          {
            title: "AI Editing",
            url: "/features/ai-editing",
            ctas: ["Try AI Editor", "Watch Tutorial"],
            contentType: "static",
            deviceConsiderations: "Interactive demo simplified for mobile",
            crossLinking: ["Documentation", "Case Studies"],
            breadcrumb: ["Home", "Features", "AI Editing"]
          },
          {
            title: "Collaboration Tools",
            url: "/features/collaboration",
            ctas: ["Start Collaborating", "See How It Works"],
            contentType: "static",
            deviceConsiderations: "Team workflow diagrams stack vertically on mobile",
            crossLinking: ["Documentation", "Pricing/Team Plans"],
            breadcrumb: ["Home", "Features", "Collaboration"]
          },
          {
            title: "Deployment Options",
            url: "/features/deployment",
            ctas: ["Deploy Now", "Learn More"],
            contentType: "static",
            deviceConsiderations: "Deployment flow diagram simplified on mobile",
            crossLinking: ["Documentation/Deployment", "Pricing"],
            breadcrumb: ["Home", "Features", "Deployment"]
          }
        ]
      }
    ]
  },
  {
    title: "Services",
    url: "/services",
    ctas: ["Get Custom Quote", "Contact Sales"],
    contentType: "static",
    deviceConsiderations: "Service cards stack vertically on mobile",
    crossLinking: ["Case Studies", "About/Team", "Pricing"],
    breadcrumb: ["Home", "Services"],
    metaRequirements: "Service keywords, industry terms, solution-focused meta descriptions",
    children: [
      {
        title: "Custom Development",
        url: "/services/custom-development",
        ctas: ["Request Consultation", "View Portfolio"],
        contentType: "static",
        deviceConsiderations: "Process timeline converts to vertical steps on mobile",
        crossLinking: ["Case Studies", "Technology Stack"],
        isPriorityConversion: true,
        breadcrumb: ["Home", "Services", "Custom Development"]
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
        breadcrumb: ["Home", "Services", "Enterprise"]
      },
      {
        title: "Training & Support",
        url: "/services/training",
        ctas: ["Schedule Training", "Contact Support"],
        contentType: "dynamic",
        deviceConsiderations: "Training calendar optimized for mobile booking",
        crossLinking: ["Documentation", "Pricing/Support Plans"],
        breadcrumb: ["Home", "Services", "Training"]
      }
    ]
  },
  {
    title: "Case Studies",
    url: "/case-studies",
    ctas: ["Filter by Industry", "Contact Sales"],
    contentType: "dynamic",
    deviceConsiderations: "Filter controls convert to dropdown on mobile",
    crossLinking: ["Services", "Features", "Pricing"],
    regularUpdates: true,
    metaRequirements: "Industry keywords, result metrics, testimonial highlights",
    breadcrumb: ["Home", "Case Studies"],
    children: [
      {
        title: "Industry Solutions",
        url: "/case-studies/industries",
        ctas: ["Filter by Industry", "Schedule Consultation"],
        contentType: "dynamic",
        deviceConsiderations: "Industry selector simplified on mobile",
        crossLinking: ["Services", "Features"],
        breadcrumb: ["Home", "Case Studies", "Industries"],
        children: [
          {
            title: "E-commerce",
            url: "/case-studies/industries/ecommerce",
            ctas: ["See E-commerce Solutions", "Request Demo"],
            contentType: "dynamic",
            deviceConsiderations: "Mobile-optimized result metrics",
            crossLinking: ["Features/AI Editing", "Services/Custom Development"],
            breadcrumb: ["Home", "Case Studies", "Industries", "E-commerce"]
          },
          {
            title: "SaaS",
            url: "/case-studies/industries/saas",
            ctas: ["Explore SaaS Solutions", "Contact Sales"],
            contentType: "dynamic",
            deviceConsiderations: "Integration diagrams simplified for mobile",
            crossLinking: ["Features/Deployment", "Services/Enterprise"],
            breadcrumb: ["Home", "Case Studies", "Industries", "SaaS"]
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
        breadcrumb: ["Home", "Case Studies", "Success Stories"]
      }
    ]
  },
  {
    title: "About",
    url: "/about",
    ctas: ["Join Our Team", "Contact Us"],
    contentType: "static",
    deviceConsiderations: "Company timeline converts to vertical layout on mobile",
    crossLinking: ["Team", "Press", "Case Studies"],
    breadcrumb: ["Home", "About"],
    metaRequirements: "Company mission, team expertise, technology focus",
    children: [
      {
        title: "Team",
        url: "/about/team",
        ctas: ["View Open Positions", "Contact Leadership"],
        contentType: "dynamic",
        deviceConsiderations: "Team grid converts to scrollable cards on mobile",
        crossLinking: ["Careers", "Press"],
        regularUpdates: true,
        breadcrumb: ["Home", "About", "Team"]
      },
      {
        title: "Careers",
        url: "/about/careers",
        ctas: ["View Open Positions", "Submit Application"],
        contentType: "dynamic",
        deviceConsiderations: "Job filter simplified on mobile",
        crossLinking: ["Team", "About/Culture"],
        regularUpdates: true,
        breadcrumb: ["Home", "About", "Careers"]
      },
      {
        title: "Press & News",
        url: "/about/press",
        ctas: ["Filter by Year", "Media Contact"],
        contentType: "dynamic",
        deviceConsiderations: "Press release archive simplified for mobile",
        crossLinking: ["About", "Case Studies"],
        regularUpdates: true,
        breadcrumb: ["Home", "About", "Press"]
      }
    ]
  },
  {
    title: "Blog",
    url: "/blog",
    ctas: ["Subscribe to Newsletter", "Filter by Topic"],
    contentType: "dynamic",
    deviceConsiderations: "Blog filters convert to dropdown on mobile",
    crossLinking: ["Resources", "Documentation", "Case Studies"],
    regularUpdates: true,
    metaRequirements: "Article keywords, author expertise, content categorization",
    breadcrumb: ["Home", "Blog"],
    children: [
      {
        title: "Tutorials",
        url: "/blog/tutorials",
        ctas: ["Filter by Difficulty", "Subscribe"],
        contentType: "dynamic",
        deviceConsiderations: "Code samples adjust to screen width on mobile",
        crossLinking: ["Documentation", "Resources/Downloads"],
        regularUpdates: true,
        breadcrumb: ["Home", "Blog", "Tutorials"]
      },
      {
        title: "Product Updates",
        url: "/blog/updates",
        ctas: ["Subscribe to Updates", "Join Beta Program"],
        contentType: "dynamic",
        deviceConsiderations: "Feature comparison tables stack on mobile",
        crossLinking: ["Roadmap", "Documentation"],
        regularUpdates: true,
        breadcrumb: ["Home", "Blog", "Updates"]
      },
      {
        title: "Industry Insights",
        url: "/blog/insights",
        ctas: ["Subscribe", "Share Article"],
        contentType: "dynamic",
        deviceConsiderations: "Data visualizations simplified on mobile",
        crossLinking: ["Case Studies", "Resources/Whitepapers"],
        regularUpdates: true,
        breadcrumb: ["Home", "Blog", "Insights"]
      }
    ]
  },
  {
    title: "Resources",
    url: "/resources",
    ctas: ["Download Resources", "Request Custom Resource"],
    contentType: "dynamic",
    deviceConsiderations: "Resource filtering simplified on mobile",
    crossLinking: ["Blog", "Documentation", "Case Studies"],
    breadcrumb: ["Home", "Resources"],
    metaRequirements: "Resource keywords, solution-focused meta descriptions",
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
        children: [
          {
            title: "Getting Started",
            url: "/resources/documentation/getting-started",
            ctas: ["Quick Start", "View Tutorials"],
            contentType: "static",
            deviceConsiderations: "Step-by-step guide simplified on mobile",
            crossLinking: ["API Reference", "Tutorials/Beginners"],
            breadcrumb: ["Home", "Resources", "Documentation", "Getting Started"]
          },
          {
            title: "API Reference",
            url: "/resources/documentation/api",
            ctas: ["Try API", "Download SDK"],
            contentType: "dynamic",
            deviceConsiderations: "API request/response examples adjust for mobile",
            crossLinking: ["Documentation", "Tutorials/API"],
            regularUpdates: true,
            breadcrumb: ["Home", "Resources", "Documentation", "API"]
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
        breadcrumb: ["Home", "Resources", "Downloads"]
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
        breadcrumb: ["Home", "Resources", "Webinars"]
      }
    ]
  },
  {
    title: "Pricing",
    url: "/pricing",
    ctas: ["Start Free Trial", "Contact Sales"],
    contentType: "static",
    deviceConsiderations: "Pricing comparison table converts to cards on mobile",
    crossLinking: ["Features", "FAQ", "Case Studies"],
    isPriorityConversion: true,
    breadcrumb: ["Home", "Pricing"],
    metaRequirements: "Pricing keywords, value propositions, competitive comparison terms",
    children: [
      {
        title: "Plans Comparison",
        url: "/pricing/compare",
        ctas: ["Choose Plan", "Contact Sales"],
        contentType: "static",
        deviceConsiderations: "Feature comparison simplified for mobile",
        crossLinking: ["Features", "Enterprise Solutions"],
        isPriorityConversion: true,
        breadcrumb: ["Home", "Pricing", "Compare"]
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
        breadcrumb: ["Home", "Pricing", "Enterprise"]
      }
    ]
  },
  {
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
        breadcrumb: ["Home", "Contact", "Sales"]
      },
      {
        title: "Support",
        url: "/contact/support",
        ctas: ["Submit Ticket", "Live Chat"],
        contentType: "dynamic",
        deviceConsiderations: "Support options prioritized differently on mobile",
        crossLinking: ["Documentation", "FAQ"],
        crmIntegration: "Zendesk ticket creation",
        breadcrumb: ["Home", "Contact", "Support"]
      }
    ]
  },
  {
    title: "Legal",
    url: "/legal",
    ctas: ["Contact Legal", "Download Documents"],
    contentType: "static",
    deviceConsiderations: "Legal document navigation simplified for mobile",
    crossLinking: ["Privacy Policy", "Terms of Service"],
    breadcrumb: ["Home", "Legal"],
    children: [
      {
        title: "Terms of Service",
        url: "/legal/terms",
        ctas: ["Accept Terms", "Contact Legal"],
        contentType: "static",
        deviceConsiderations: "Document sections collapse on mobile",
        crossLinking: ["Privacy Policy", "Data Processing"],
        regularUpdates: true,
        breadcrumb: ["Home", "Legal", "Terms"]
      },
      {
        title: "Privacy Policy",
        url: "/legal/privacy",
        ctas: ["Cookie Settings", "Contact Privacy Officer"],
        contentType: "static",
        deviceConsiderations: "Cookie consent optimized for mobile",
        crossLinking: ["Terms of Service", "Data Processing"],
        regularUpdates: true,
        breadcrumb: ["Home", "Legal", "Privacy"]
      }
    ]
  },
  {
    title: "Search",
    url: "/search",
    ctas: ["Advanced Search", "Browse Categories"],
    contentType: "dynamic",
    deviceConsiderations: "Voice search option on mobile",
    crossLinking: ["Documentation", "Blog", "Resources"],
    breadcrumb: ["Home", "Search"],
    children: []
  }
];
