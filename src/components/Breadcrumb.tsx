import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center text-xs sm:text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link to="/" className="flex items-center hover:text-[#9f224e] transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Trang chủ</span>
      </Link>
      <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
      <span className="hover:text-[#9f224e] cursor-pointer transition-colors">Du lịch</span>
      <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
      <Link to="/" className="hover:text-[#9f224e] transition-colors">
        Ẩm thực
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
          {item.url ? (
            <Link to={item.url} className="hover:text-[#9f224e] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
