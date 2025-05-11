
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronDown, Globe, Smartphone, Link2, FileText, Lock, RefreshCw, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SiteMapItem as SiteMapItemType } from '@/types/siteMap';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';

interface ItemProps {
  item: SiteMapItemType;
  level: number;
  isLast: boolean;
}

export const SiteMapItem: React.FC<ItemProps> = ({ item, level, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = item.children && item.children.length > 0;
  
  return (
    <div className={cn("border-l", !isLast && "border-gray-300", level === 0 ? "ml-0" : "ml-6")}>
      <div className="relative py-3">
        <div className="absolute w-6 border-t border-gray-300" style={{ left: '-24px', top: '50%' }}></div>
        
        <div className="flex items-start bg-white rounded-md p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="mr-2 mt-1">
            {hasChildren && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="text-gray-500 hover:text-gray-700"
              >
                {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-sm text-gray-500 font-mono">
                      <Globe className="inline-block h-4 w-4 mr-1" />
                      {item.url}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>URL Structure</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {item.contentType === 'dynamic' && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Dynamic</Badge>
              )}
              {item.contentType === 'static' && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Static</Badge>
              )}
              {item.isGated && (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  <Lock className="h-3 w-3 mr-1" /> Gated
                </Badge>
              )}
              {item.regularUpdates && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  <RefreshCw className="h-3 w-3 mr-1" /> Regular Updates
                </Badge>
              )}
              {item.isPriorityConversion && (
                <Badge className="bg-red-500">Priority Conversion</Badge>
              )}
            </div>
            
            {item.description && (
              <p className="text-gray-600 mb-3">{item.description}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                {item.ctas.length > 0 && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700">Key CTAs:</span>
                    <ul className="list-disc list-inside text-gray-600 ml-2">
                      {item.ctas.map((cta, i) => (
                        <li key={i}>{cta}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.deviceConsiderations && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 flex items-center">
                      <Smartphone className="h-4 w-4 mr-1" /> Device Considerations:
                    </span>
                    <p className="text-gray-600 ml-5">{item.deviceConsiderations}</p>
                  </div>
                )}

                {item.crmIntegration && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 flex items-center">
                      <Users className="h-4 w-4 mr-1" /> CRM Integration:
                    </span>
                    <p className="text-gray-600 ml-5">{item.crmIntegration}</p>
                  </div>
                )}
              </div>
              
              <div>
                {item.crossLinking && item.crossLinking.length > 0 && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 flex items-center">
                      <Link2 className="h-4 w-4 mr-1" /> Cross-linking:
                    </span>
                    <ul className="list-disc list-inside text-gray-600 ml-5">
                      {item.crossLinking.map((link, i) => (
                        <li key={i}>{link}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.breadcrumb && item.breadcrumb.length > 0 && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700">Breadcrumb:</span>
                    <div className="text-gray-600 ml-5">
                      <BreadcrumbNav breadcrumb={item.breadcrumb} />
                    </div>
                  </div>
                )}
                
                {item.metaRequirements && (
                  <div className="mb-2">
                    <span className="font-medium text-gray-700 flex items-center">
                      <FileText className="h-4 w-4 mr-1" /> Meta Requirements:
                    </span>
                    <p className="text-gray-600 ml-5">{item.metaRequirements}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div className="ml-6">
          {item.children!.map((child, index) => (
            <SiteMapItem
              key={child.url}
              item={child}
              level={level + 1}
              isLast={index === item.children!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
