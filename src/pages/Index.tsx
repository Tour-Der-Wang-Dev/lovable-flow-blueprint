
import React from 'react';
import { SiteMap } from '../components/SiteMap';
import { siteMapData } from '../data/siteMapData';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Lovable.dev Site Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive site structure optimized for user experience and conversion rates
          </p>
        </div>
        
        <SiteMap data={siteMapData} />
        
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>This site map includes all required sections with detailed page annotations including URLs, CTAs, content types, and other specifications.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
