
import React from 'react';
import { Lock, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SiteMapLegendItem } from '@/types/siteMap';

interface SiteMapLegendProps {
  legendItems: SiteMapLegendItem[];
}

export const SiteMapLegend: React.FC<SiteMapLegendProps> = ({ legendItems }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Site Map Legend</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {item.icon ? (
              <Badge variant="outline" className={`${item.color} ${item.borderColor}`}>
                {item.icon}
                {item.label}
              </Badge>
            ) : (
              <>
                <span className={`w-4 h-4 ${item.color} ${item.borderColor} rounded`}></span>
                <span>{item.label}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const defaultLegendItems: SiteMapLegendItem[] = [
  { color: "bg-green-50", borderColor: "border border-green-200", label: "Static Content" },
  { color: "bg-blue-50", borderColor: "border border-blue-200", label: "Dynamic Content" },
  { color: "bg-red-500", label: "Priority Conversion" },
  { 
    color: "bg-amber-50 text-amber-700", 
    borderColor: "border border-amber-200", 
    label: "Gated Content", 
    icon: <Lock className="h-3 w-3 mr-1" />
  },
  { 
    color: "bg-purple-50 text-purple-700", 
    borderColor: "border border-purple-200", 
    label: "Regular Updates", 
    icon: <RefreshCw className="h-3 w-3 mr-1" />
  }
];
