
import React from 'react';
import { SiteMap } from '../components/SiteMap';
import { siteMapData } from '../data/siteMapData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Complete Site Structure Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive site architecture with conversion paths, content types, and technical specifications
          </p>
        </div>
        
        <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Site Map Legend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-green-50 border border-green-200 rounded"></span>
              <span>Static Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-50 border border-blue-200 rounded"></span>
              <span>Dynamic Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-red-500 rounded"></span>
              <span>Priority Conversion</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Gated
              </span>
              <span>Gated Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Updates
              </span>
              <span>Regular Updates</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Site Map Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Primary Navigation Structure</li>
              <li>Main Conversion Funnels</li>
              <li>Resource Sections (Downloads, Tools, Guides)</li>
              <li>Social Proof Elements</li>
              <li>Technical Documentation</li>
            </ul>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Team & Careers Pages</li>
              <li>Legal & Compliance Pages</li>
              <li>Search Functionality</li>
              <li>Mobile-Specific Navigation Patterns</li>
              <li>CRM & Marketing Tool Integrations</li>
            </ul>
          </div>
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
