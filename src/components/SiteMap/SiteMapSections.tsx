
import React from 'react';
import { SiteMapSectionData } from '@/types/siteMap';

interface SiteMapSectionsProps {
  sections: SiteMapSectionData[];
}

export const SiteMapSections: React.FC<SiteMapSectionsProps> = ({ sections }) => {
  // Split sections into two columns
  const midpoint = Math.ceil(sections.length / 2);
  const firstColumn = sections.slice(0, midpoint);
  const secondColumn = sections.slice(midpoint);

  return (
    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Site Map Sections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {firstColumn.map((section, index) => (
            <li key={index}>{section.title}</li>
          ))}
        </ul>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {secondColumn.map((section, index) => (
            <li key={index}>{section.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const defaultSiteMapSections: SiteMapSectionData[] = [
  { title: "Primary Navigation Structure", items: [] },
  { title: "Main Conversion Funnels", items: [] },
  { title: "Resource Sections (Downloads, Tools, Guides)", items: [] },
  { title: "Social Proof Elements", items: [] },
  { title: "Technical Documentation", items: [] },
  { title: "Team & Careers Pages", items: [] },
  { title: "Legal & Compliance Pages", items: [] },
  { title: "Search Functionality", items: [] },
  { title: "Mobile-Specific Navigation Patterns", items: [] },
  { title: "CRM & Marketing Tool Integrations", items: [] },
];
