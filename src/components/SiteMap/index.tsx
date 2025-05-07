
import React from 'react';
import { SiteMapItem as SiteMapItemComponent } from './SiteMapItem';
import { SiteMapLegend, defaultLegendItems } from './SiteMapLegend';
import { SiteMapSections, defaultSiteMapSections } from './SiteMapSections';
import { SiteMapItem } from '@/types/siteMap';

interface SiteMapProps {
  data: SiteMapItem[];
  showLegend?: boolean;
  showSections?: boolean;
}

export const SiteMap: React.FC<SiteMapProps> = ({ data, showLegend = true, showSections = true }) => {
  return (
    <div className="space-y-8">
      {showLegend && <SiteMapLegend legendItems={defaultLegendItems} />}
      
      {showSections && <SiteMapSections sections={defaultSiteMapSections} />}
      
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Site Structure</h2>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-50 border border-green-200 rounded mr-2"></div>
              <span className="text-sm">Static Content</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-50 border border-blue-200 rounded mr-2"></div>
              <span className="text-sm">Dynamic Content</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded mr-2"></div>
              <span className="text-sm">Priority Conversion</span>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px] pb-4">
            {data.map((item, index) => (
              <SiteMapItemComponent
                key={item.url}
                item={item}
                level={0}
                isLast={index === data.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export * from './SiteMapItem';
export * from './SiteMapLegend';
export * from './SiteMapSections';
