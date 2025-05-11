
import React from 'react';

interface BreadcrumbNavProps {
  breadcrumb: string[];
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ breadcrumb }) => {
  if (!breadcrumb || breadcrumb.length === 0) return null;
  
  return (
    <div className="text-gray-600 mb-2">
      {breadcrumb.map((crumb, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="mx-1">›</span>}
          <span>{crumb}</span>
        </React.Fragment>
      ))}
    </div>
  );
};
