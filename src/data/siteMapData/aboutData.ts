
import { SiteMapItem } from '@/types/siteMap';

export const aboutData: SiteMapItem = {
  title: "About",
  url: "/about",
  ctas: ["Join Our Team", "Contact Us"],
  contentType: "static",
  deviceConsiderations: "Company timeline converts to vertical layout on mobile",
  crossLinking: ["Team", "Press", "Case Studies"],
  breadcrumb: ["Home", "About"],
  metaRequirements: "Company mission, team expertise, technology focus",
  description: "Company information, mission, values and team overview",
  children: [
    {
      title: "Team",
      url: "/about/team",
      ctas: ["View Open Positions", "Contact Leadership"],
      contentType: "dynamic",
      deviceConsiderations: "Team grid converts to scrollable cards on mobile",
      crossLinking: ["Careers", "Press"],
      regularUpdates: true,
      breadcrumb: ["Home", "About", "Team"],
      description: "Profiles of key leadership and team members"
    },
    {
      title: "Careers",
      url: "/about/careers",
      ctas: ["View Open Positions", "Submit Application"],
      contentType: "dynamic",
      deviceConsiderations: "Job filter simplified on mobile",
      crossLinking: ["Team", "About/Culture"],
      regularUpdates: true,
      breadcrumb: ["Home", "About", "Careers"],
      description: "Current job openings and company culture information"
    },
    {
      title: "Press & News",
      url: "/about/press",
      ctas: ["Filter by Year", "Media Contact"],
      contentType: "dynamic",
      deviceConsiderations: "Press release archive simplified for mobile",
      crossLinking: ["About", "Case Studies"],
      regularUpdates: true,
      breadcrumb: ["Home", "About", "Press"],
      description: "Press releases, news updates, and media resources"
    }
  ]
};
