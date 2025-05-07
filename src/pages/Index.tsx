
import React from 'react';
import { SiteMap } from '../components/SiteMap';
import { siteMapData } from '../data/siteMapData';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Site Map</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Complete Site Structure Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive site architecture with conversion paths, content types, and technical specifications
          </p>
        </div>
        
        <SiteMap data={siteMapData} />
        
        <div className="mt-16 text-center text-gray-500 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Implementation Notes</h3>
          <p className="mb-4">
            This site map includes all required sections with detailed page annotations including URLs, CTAs, 
            content types, device considerations, cross-linking opportunities, and technical specifications.
          </p>
          <p>
            Priority conversion pages are clearly marked for optimization focus. Gated content and CRM integration points 
            are identified for lead generation and tracking. Breadcrumb navigation schema is defined for all pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
