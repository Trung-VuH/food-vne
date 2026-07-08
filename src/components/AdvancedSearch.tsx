import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Utensils, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockRestaurants } from '../data/restaurants';
import { generateSlug } from '../utils/slugify';

// Danh sách món ăn + địa điểm (dựa trên dữ liệu HomePage)
const mockDishLocations = [
  { title: 'Phở', location: 'Hà Nội', slug: 'ha-noi/quan-pho' },
  { title: 'Mì Quảng', location: 'Đà Nẵng', slug: 'da-nang/quan-mi-quang' },
  { title: 'Bánh xèo', location: 'Nha Trang', slug: 'nha-trang/quan-banh-xeo' },
  { title: 'Bún bò', location: 'Huế', slug: 'hue/quan-bun-bo-hue' },
  { title: 'Cơm gà', location: 'Hội An', slug: 'hoi-an/quan-com-ga' },
  { title: 'Bún chả', location: 'Hà Nội', slug: 'ha-noi/quan-bun-cha' },
  { title: 'Cơm tấm', location: 'TP.HCM', slug: 'tphcm/quan-com-tam' },
  { title: 'Hủ tiếu', location: 'TP.HCM', slug: 'tphcm/quan-hu-tieu' },
  { title: 'Lẩu gà lá é', location: 'Đà Lạt', slug: 'da-lat/quan-lau-ga-la-e' },
  { title: 'Bún đậu', location: 'Hà Nội', slug: 'ha-noi/quan-bun-dau' },
  { title: 'Bánh khọt', location: 'Vũng Tàu', slug: 'vung-tau/quan-banh-khot' },
  { title: 'Bánh cuốn', location: 'Hà Nội', slug: 'ha-noi/quan-banh-cuon' },
  { title: 'Gỏi cuốn', location: 'TP.HCM', slug: 'tphcm/quan-goi-cuon' },
  { title: 'Bánh mì', location: 'Hội An', slug: 'hoi-an/quan-banh-mi' },
  { title: 'Bún riêu', location: 'TP.HCM', slug: 'tphcm/quan-bun-rieu' }
];

type SuggestionItem = 
  | { type: 'restaurant'; data: typeof mockRestaurants[0] }
  | { type: 'dish_location'; data: typeof mockDishLocations[0] };

export const AdvancedSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const q = query.toLowerCase();
      const results: SuggestionItem[] = [];

      // Tìm kiếm món ăn + địa điểm
      mockDishLocations.forEach(dl => {
        const dishLocString = `${dl.title} ${dl.location}`.toLowerCase();
        if (dishLocString.includes(q)) {
          results.push({ type: 'dish_location', data: dl });
        }
      });

      // Tìm kiếm nhà hàng/quán ăn
      mockRestaurants.forEach(r => {
        const resString = `${r.name} ${r.province}`.toLowerCase();
        if (resString.includes(q) || (r.commonName && r.commonName.toLowerCase().includes(q))) {
          results.push({ type: 'restaurant', data: r });
        }
      });

      setSuggestions(results);
      setIsOpen(results.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSelect = (item: SuggestionItem) => {
    setIsOpen(false);
    setQuery('');
    
    if (item.type === 'dish_location') {
      navigate(`/${item.data.slug}`);
    } else {
      navigate(`/${generateSlug(item.data.name)}-${generateSlug(item.data.province)}-${item.data.id}.html`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Ngăn submit form mặc định
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 relative" ref={wrapperRef}>
      <div className="relative flex items-center">
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) setIsOpen(true);
          }}
          placeholder="Tìm kiếm tên món ăn, địa điểm du lịch, nhà hàng, quán ăn..."
          className="w-full bg-white border border-vne-border shadow-sm rounded-full px-5 py-3 pl-12 text-sm focus:outline-none focus:ring-1 focus:ring-vne-red text-vne-title"
        />
        <Search className="w-5 h-5 text-vne-gray absolute left-4" />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-vne-border shadow-lg rounded-[4px] z-50 max-h-96 overflow-y-auto">
          {suggestions.length > 0 ? (
            <ul className="py-2">
              {suggestions.map((item, index) => (
                <li 
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="px-4 py-2 hover:bg-vne-bg cursor-pointer flex items-start gap-3 transition-colors"
                >
                  {item.type === 'restaurant' ? (
                    <Store className="w-5 h-5 text-vne-gray mt-0.5 shrink-0" />
                  ) : (
                    <Utensils className="w-5 h-5 text-vne-gray mt-0.5 shrink-0" />
                  )}
                  
                  <div className="flex-1 min-w-0">
                    {item.type === 'restaurant' ? (
                      <>
                        <h4 className="font-bold text-[14px] text-vne-title leading-tight">{item.data.name}</h4>
                        <p className="text-[12px] text-vne-gray flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.data.address}
                        </p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-bold text-[14px] text-vne-title leading-tight">{item.data.title} tại {item.data.location}</h4>
                        <p className="text-[12px] text-vne-gray flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          Khám phá các quán {item.data.title.toLowerCase()} ngon nhất ở {item.data.location}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-vne-gray text-sm">
              Không tìm thấy kết quả phù hợp.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
