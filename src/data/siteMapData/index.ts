
import { SiteMapItem } from '@/types/siteMap';
import { homepageData } from './homepageData';
import { servicesData } from './servicesData';
import { caseStudiesData } from './caseStudiesData';
import { aboutData } from './aboutData';
import { blogData, resourcesData } from './blogResourcesData';
import { pricingData, contactData } from './pricingContactData';
import { legalData, searchData } from './legalSearchData';

export const siteMapData: SiteMapItem[] = [
  homepageData,
  servicesData,
  caseStudiesData,
  aboutData,
  blogData,
  resourcesData,
  pricingData,
  contactData,
  legalData,
  searchData
];
