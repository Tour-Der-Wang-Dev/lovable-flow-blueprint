
import React from 'react';

interface LegendIndicatorProps {
  className: string;
  label: string;
}

export const SiteMapLegendIndicator: React.FC<LegendIndicatorProps> = ({ className, label }) => {
  return (
    <div className="flex items-center">
      <div className={`w-4 h-4 ${className} rounded mr-2`}></div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

export const SiteMapLegendIndicators: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <SiteMapLegendIndicator 
        className="bg-green-50 border border-green-200" 
        label="Static Content" 
      />
      <SiteMapLegendIndicator 
        className="bg-blue-50 border border-blue-200" 
        label="Dynamic Content" 
      />
      <SiteMapLegendIndicator 
        className="bg-red-500" 
        label="Priority Conversion" 
      />
    </div>
  );
};
