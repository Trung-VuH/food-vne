import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, MessageSquare } from 'lucide-react';
import { Restaurant } from '../types';
import { generateSlug } from '../utils/slugify';

interface RestaurantCardProps {
  restaurant: Restaurant;
  layout?: 'grid' | 'list';
  key?: React.Key;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, layout = 'grid' }) => {
  // Generate detail page URL: /[slug-ten-quan]-[slug-khu-vuc]-[id].html
  const detailUrl = `/${generateSlug(restaurant.name)}-${generateSlug(restaurant.province)}-${restaurant.id}.html`;

  if (layout === 'list') {
    return (
      <div className="bg-white rounded-[2px] border border-vne-border mb-[15px] flex flex-col sm:flex-row overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200 group">
        <Link to={detailUrl} className="shrink-0 w-full sm:w-[140px] h-[140px] sm:h-[100px] bg-[#ddd] relative overflow-hidden block">
          <img 
            src={restaurant.thumbnail} 
            alt={restaurant.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="p-[12px] flex-1 flex flex-col justify-center">
          <Link to={detailUrl}>
            <h3 className="font-bold text-[16px] mb-1 text-vne-title group-hover:text-vne-red transition-colors line-clamp-1">
              {restaurant.name}
            </h3>
          </Link>
          <div className="text-[12px] text-vne-gray mb-2 line-clamp-1">
            {restaurant.address}, {restaurant.province}
          </div>
          <div className="flex items-center gap-3 text-[12px]">
            <div className="text-[#f5a623] font-bold flex items-center gap-1">
              ★ {restaurant.rating} <span className="font-normal text-vne-gray ml-1">({restaurant.reviewCount} đánh giá)</span>
            </div>
            {restaurant.awards.includes('Michelin Guide') && (
              <div className="bg-vne-red text-white px-2 py-0.5 text-[10px] uppercase font-bold rounded-[2px]">
                {restaurant.michelinGuide?.[0] || 'Michelin'}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Grid layout
  return (
    <div className="bg-white rounded-[2px] border border-vne-border h-full flex flex-col overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow duration-200 group">
      <Link to={detailUrl} className="relative block h-40 overflow-hidden bg-[#ddd] shrink-0">
        <img 
          src={restaurant.thumbnail} 
          alt={restaurant.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {restaurant.awards.includes('Michelin Guide') && (
          <div className="absolute top-2 left-2 bg-vne-red text-white px-2 py-0.5 text-[10px] uppercase font-bold rounded-[2px]">
            MICHELIN
          </div>
        )}
      </Link>
      <div className="p-3 flex-1 flex flex-col">
        <Link to={detailUrl}>
          <h3 className="font-bold text-[16px] mb-1 text-vne-title group-hover:text-vne-red transition-colors line-clamp-2">
            {restaurant.name}
          </h3>
        </Link>
        <div className="text-[12px] text-vne-gray mb-2 line-clamp-2">
          {restaurant.address}, {restaurant.province}
        </div>
        <div className="mt-auto flex items-center justify-between text-[12px]">
          <div className="text-[#f5a623] font-bold flex items-center gap-1">
            ★ {restaurant.rating}
            <span className="font-normal text-vne-gray ml-1">({restaurant.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
