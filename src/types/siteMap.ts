
export interface SiteMapItem {
  title: string;
  url: string;
  ctas: string[];
  contentType: 'static' | 'dynamic';
  deviceConsiderations?: string;
  crossLinking?: string[];
  children?: SiteMapItem[];
  isGated?: boolean;
  crmIntegration?: string;
  regularUpdates?: boolean;
  isPriorityConversion?: boolean;
  metaRequirements?: string;
  breadcrumb?: string[];
  description?: string;
}

export interface SiteMapSectionData {
  title: string;
  items: string[];
}

export interface SiteMapLegendItem {
  color: string;
  borderColor?: string;
  label: string;
  icon?: React.ReactNode;
}
