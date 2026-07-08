import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Map, UtensilsCrossed, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mockRestaurants } from '../data/restaurants';
import { RestaurantCard } from '../components/RestaurantCard';
import { generateSlug } from '../utils/slugify';

export const HomePage = () => {
  const [activeRegion, setActiveRegion] = useState('Tất cả');
  
  const regions = ['Tất cả', 'Miền Bắc', 'Miền Trung', 'Miền Nam', 'Tây Nguyên'];
  
  const filteredRestaurants = activeRegion === 'Tất cả' 
    ? mockRestaurants 
    : mockRestaurants.filter(r => r.regionalFlavor === activeRegion);

  // Group by province for the "Khu vực nổi bật" section
  const [popularProvinces, setPopularProvinces] = useState([
    { name: 'Đà Nẵng', count: 342, image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=600' },
    { name: 'Hà Nội', count: 856, image: 'https://images.unsplash.com/photo-1599708153386-62bf3f034eb7?auto=format&fit=crop&q=80&w=600' },
    { name: 'TP.HCM', count: 1240, image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
    { name: 'Khánh Hòa', count: 215, image: 'https://images.unsplash.com/photo-1559535338-724d1db8cb24?auto=format&fit=crop&q=80&w=600' },
    { name: 'Thừa Thiên Huế', count: 156, image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600' },
    { name: 'Quảng Nam', count: 189, image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=600' },
    { name: 'Lâm Đồng', count: 420, image: 'https://images.unsplash.com/photo-1580974852861-c381510bc98a?auto=format&fit=crop&q=80&w=600' },
    { name: 'Kiên Giang', count: 280, image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&q=80&w=600' },
  ]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPopularProvinces(prev => {
        const next = [...prev];
        const first = next.shift();
        if(first) next.push(first);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-10">
      {/* Listing Quán ăn */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <h2 className="text-[20px] font-bold text-vne-title border-b-[3px] border-vne-red pb-1 inline-block">
            KHÁM PHÁ QUÁN ĂN NGON
          </h2>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-3 py-1.5 rounded-[2px] text-[13px] font-medium whitespace-nowrap transition-colors border ${
                  activeRegion === region 
                    ? 'bg-vne-red text-white border-vne-red' 
                    : 'bg-white text-vne-gray border-vne-border hover:text-vne-title'
                }`}
              >
                {region}
              </button>
            ))}
            <button className="flex items-center px-3 py-1.5 rounded-[2px] bg-white border border-vne-border text-vne-gray text-[13px] ml-2 hover:bg-vne-bg">
              <Filter className="w-4 h-4 mr-1" /> Bộ lọc
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} layout="grid" />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-white border border-vne-border text-vne-title px-6 py-2 rounded-[2px] text-[14px] font-bold hover:bg-vne-bg transition-colors">
            Xem thêm địa điểm
          </button>
        </div>
      </section>

      {/* Đặc sản nổi bật */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] font-bold text-vne-title border-b-[3px] border-vne-red pb-1 inline-block">DANH SÁCH NHÀ HÀNG THEO MÓN</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { title: 'Phở', location: 'Hà Nội', link: '/ha-noi/quan-pho', image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cb438?auto=format&fit=crop&q=80&w=600' },
            { title: 'Mì Quảng', location: 'Đà Nẵng', link: '/da-nang/quan-mi-quang', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bánh xèo', location: 'Nha Trang', link: '/nha-trang/quan-banh-xeo', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bún bò', location: 'Huế', link: '/hue/quan-bun-bo-hue', image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600' },
            { title: 'Cơm gà', location: 'Hội An', link: '/hoi-an/quan-com-ga', image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bún chả', location: 'Hà Nội', link: '/ha-noi/quan-bun-cha', image: 'https://images.unsplash.com/photo-1698242220138-04f86d634db2?auto=format&fit=crop&q=80&w=600' },
            { title: 'Cơm tấm', location: 'TP.HCM', link: '/tphcm/quan-com-tam', image: 'https://images.unsplash.com/photo-1652545593838-89f5ceef1915?auto=format&fit=crop&q=80&w=600' },
            { title: 'Hủ tiếu', location: 'TP.HCM', link: '/tphcm/quan-hu-tieu', image: 'https://images.unsplash.com/photo-1626804475297-41609ea064eb?auto=format&fit=crop&q=80&w=600' },
            { title: 'Lẩu gà lá é', location: 'Đà Lạt', link: '/da-lat/quan-lau-ga-la-e', image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bún đậu', location: 'Hà Nội', link: '/ha-noi/quan-bun-dau', image: 'https://images.unsplash.com/photo-1605333555562-b1e6ce4f15d2?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bánh khọt', location: 'Vũng Tàu', link: '/vung-tau/quan-banh-khot', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bánh cuốn', location: 'Hà Nội', link: '/ha-noi/quan-banh-cuon', image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600' },
            { title: 'Gỏi cuốn', location: 'TP.HCM', link: '/tphcm/quan-goi-cuon', image: 'https://images.unsplash.com/photo-1564630561571-0f723653139a?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bánh mì', location: 'Hội An', link: '/hoi-an/quan-banh-mi', image: 'https://images.unsplash.com/photo-1627308595229-7830f5c92f70?auto=format&fit=crop&q=80&w=600' },
            { title: 'Bún riêu', location: 'TP.HCM', link: '/tphcm/quan-bun-rieu', image: 'https://images.unsplash.com/photo-1634626159516-e4d0b1a0e14f?auto=format&fit=crop&q=80&w=600' }
          ].map((dish, index) => (
            <Link 
              key={dish.title} 
              to={dish.link}
              className={`group flex flex-col items-center cursor-pointer ${index >= 12 ? 'hidden md:flex' : ''}`}
            >
              <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-3 border-[3px] border-vne-border group-hover:border-vne-red transition-colors duration-300">
                <img src={dish.image} alt={`${dish.title} tại ${dish.location}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-[14px] text-vne-title text-center leading-tight group-hover:text-vne-red transition-colors">
                {dish.title}
              </h3>
              <p className="text-[12px] text-vne-gray text-center mt-1">tại {dish.location}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-white border border-vne-border text-vne-title px-6 py-2 rounded-[2px] text-[14px] font-bold hover:bg-vne-bg transition-colors">
            Xem thêm
          </button>
        </div>
      </section>

      {/* Tỉnh thành nổi bật */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] font-bold text-vne-title border-b-[3px] border-vne-red pb-1 inline-block">ĐIỂM ĐẾN ẨM THỰC NỔI BẬT</h2>
        </div>
        <div className="flex gap-4 overflow-hidden py-1">
          <AnimatePresence mode="popLayout">
            {popularProvinces.slice(0, 6).map(prov => (
              <motion.div
                layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={prov.name}
                className="w-[calc(33.333%-10.666px)] md:w-[calc(16.666%-13.333px)] shrink-0"
              >
                <Link 
                  to={`/${generateSlug(prov.name)}`}
                  className="group relative h-40 rounded-[2px] overflow-hidden block border border-vne-border w-full"
                >
                  <img src={prov.image} alt={prov.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 p-3 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-[16px] leading-tight">{prov.name}</h3>
                    <span className="text-white/80 text-[11px]">{prov.count} địa điểm</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
