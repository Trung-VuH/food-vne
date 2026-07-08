import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Star, MessageSquare, Clock, Phone, Share2, Heart, CheckCircle2, Award, Info } from 'lucide-react';
import { mockRestaurants } from '../data/restaurants';
import { Breadcrumb } from '../components/Breadcrumb';
import { RestaurantCard } from '../components/RestaurantCard';
import { generateSlug } from '../utils/slugify';

export const DetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Extract ID from slug format: slug-ten-quan-slug-khu-vuc-ID.html
  const idMatch = slug?.match(/-(\d+)\.html$/);
  const id = idMatch ? idMatch[1] : null;

  const restaurant = mockRestaurants.find(r => r.id === id);

  if (!restaurant) {
    return <Navigate to="/" replace />;
  }

  const provinceSlug = generateSlug(restaurant.province);

  // Mock related restaurants
  const relatedRestaurants = mockRestaurants
    .filter(r => r.id !== restaurant.id && r.province === restaurant.province)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto">
      <Breadcrumb 
        items={[
          { label: restaurant.province, url: `/${provinceSlug}` },
          { label: `Quán ${restaurant.signatureDishes[0] || 'ăn'}`, url: `/${provinceSlug}/quan-${generateSlug(restaurant.signatureDishes[0] || 'an')}` },
          { label: restaurant.name }
        ]} 
      />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-6">
                <h1 className="text-[28px] md:text-[32px] font-bold text-vne-red mb-2 leading-tight">
                  {restaurant.name}
                </h1>
                {restaurant.commonName && (
                  <p className="text-vne-gray text-[14px] italic mb-4">Thường gọi: {restaurant.commonName}</p>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-[14px] mb-4">
                  <div className="flex items-center gap-1 text-[#f5a623] font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-vne-gray">
                    <MessageSquare className="w-4 h-4" />
                    <span className="cursor-pointer hover:text-vne-red">{restaurant.reviewCount} Đánh giá từ VnE</span>
                  </div>
                  <div className="text-vne-border">|</div>
                  <div className="flex items-center gap-1 text-vne-gray">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.area}, {restaurant.province}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mb-6">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-vne-bg hover:bg-[#eee] rounded-[2px] text-[13px] font-medium transition-colors">
                    <Share2 className="w-3.5 h-3.5" /> Chia sẻ
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-vne-bg hover:bg-[#eee] rounded-[2px] text-[13px] font-medium transition-colors">
                    <Heart className="w-3.5 h-3.5" /> Lưu lại
                  </button>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mb-6 h-64 md:h-[320px] rounded-[4px] overflow-hidden bg-vne-bg flex gap-2">
                <div className="flex-1 h-full relative group cursor-pointer">
                  <img src={restaurant.images[0]} alt={restaurant.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="hidden md:flex w-1/4 flex-col gap-2 h-full">
                  {restaurant.images.slice(1, 3).map((img, idx) => (
                    <div key={idx} className="flex-1 relative group cursor-pointer">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  ))}
                  {/* If fewer images, just repeat or show placeholder */}
                  {restaurant.images.length < 3 && (
                    <div className="flex-1 bg-vne-bg flex items-center justify-center text-vne-gray group cursor-pointer hover:bg-vne-border transition-colors">
                      <span className="text-[12px] font-medium">Xem tất cả ảnh</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-vne-title mb-10 text-[15px] leading-relaxed">
                <p className="lead text-[16px] font-medium text-vne-title mb-6">
                  {restaurant.lead}
                </p>
                
                <div className="bg-vne-bg p-6 rounded-[2px] my-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-[14px]">
                  <div>
                    <h3 className="font-bold text-vne-title mb-3 flex items-center border-b border-vne-border pb-2">
                      <Info className="w-4 h-4 mr-2 text-vne-red" /> Thông tin cơ bản
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Địa chỉ:</span>
                        <span className="font-medium">{restaurant.address}, {restaurant.area}, {restaurant.province}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Loại hình:</span>
                        <span className="font-medium">{restaurant.cuisineType}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Phân khúc:</span>
                        <span className="font-medium">{restaurant.priceSegment.join(', ')}</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-vne-gray w-28 shrink-0">Phong vị:</span>
                        <span className="font-medium">{restaurant.regionalFlavor}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-vne-title mb-3 flex items-center border-b border-vne-border pb-2">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-vne-red" /> Tiện ích
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {restaurant.amenities.map(amenity => (
                        <li key={amenity} className="flex items-center text-vne-title">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f5a623] mr-2" />
                          {amenity}
                        </li>
                      ))}
                      {restaurant.amenities.length === 0 && <li className="text-vne-gray italic">Chưa cập nhật</li>}
                    </ul>
                  </div>
                </div>

                {restaurant.articleContent && (
                  <div className="mb-8">
                    <div 
                      className="prose prose-lg max-w-none text-vne-text [&>h1]:text-[28px] [&>h1]:md:text-[32px] [&>h1]:font-bold [&>h1]:text-vne-title [&>h1]:mb-4 [&>h1]:leading-tight [&>p]:mb-4 [&>p]:leading-relaxed [&>figure]:mb-6 [&>figure>figcaption]:text-[13px] [&>figure>figcaption]:text-vne-gray [&>figure>figcaption]:mt-2 [&>figure>figcaption]:text-center [&>figure>figcaption]:bg-gray-50 [&>figure>figcaption]:py-2"
                      dangerouslySetInnerHTML={{ __html: restaurant.articleContent }}
                    />
                  </div>
                )}

                {/* Awards section */}
                {restaurant.awards.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-[18px] font-bold text-vne-title mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-vne-red" />
                      Danh hiệu & Giải thưởng
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.awards.map(award => (
                        <span key={award} className="inline-flex items-center px-3 py-1 bg-vne-bg text-[#444] font-medium text-[12px] border border-vne-border rounded-[2px]">
                          {award}
                        </span>
                      ))}
                      {restaurant.michelinGuide?.map(mg => (
                        <span key={mg} className="inline-flex items-center px-3 py-1 bg-vne-red text-white font-bold text-[12px] rounded-[2px] uppercase">
                          Michelin: {mg}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dynamic Tags for SEO Internal Linking */}
                <div className="border-t border-vne-border pt-5 mt-6">
                  <div className="flex flex-wrap gap-2">
                    {restaurant.signatureDishes.map(dish => (
                      <Link 
                        key={dish}
                        to={`/${provinceSlug}/quan-${generateSlug(dish)}`}
                        className="px-[10px] py-1 bg-vne-bg hover:bg-vne-red hover:text-white text-vne-gray text-[11px] rounded-[12px] transition-colors"
                      >
                        #{generateSlug(dish)}
                      </Link>
                    ))}
                    <Link 
                      to={`/${provinceSlug}?khu-vuc=${generateSlug(restaurant.area)}`}
                      className="px-[10px] py-1 bg-vne-bg hover:bg-vne-red hover:text-white text-vne-gray text-[11px] rounded-[12px] transition-colors"
                    >
                      #{generateSlug(restaurant.area)}
                    </Link>
                  </div>
                </div>
              </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 shrink-0 space-y-6">
          {/* Map mockup */}
          <div className="bg-vne-bg rounded-[4px] h-40 flex items-center justify-center relative overflow-hidden border border-vne-border group cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')`}} />
            <div className="z-10 bg-white px-3 py-1.5 rounded-[2px] shadow-sm font-medium text-[13px] flex items-center group-hover:bg-vne-red group-hover:text-white transition-colors">
              <MapPin className="w-3 h-3 mr-1" />
              Xem trên bản đồ
            </div>
          </div>

          <div className="bg-white p-5 border border-vne-border">
            <h3 className="font-bold text-[14px] text-vne-title border-t border-vne-border pt-[15px] mb-3">
              Bài viết trên VnExpress
            </h3>
            <div className="space-y-3">
              <a href="#" className="block group">
                <h4 className="text-[13px] text-vne-title group-hover:text-vne-red line-clamp-2 leading-snug">
                  Vì sao khách sẵn sàng xếp hàng chờ ăn tại {restaurant.name}?
                </h4>
                <p className="text-[11px] text-vne-gray mt-1">Du lịch • 2 ngày trước</p>
              </a>
              <a href="#" className="block group">
                <h4 className="text-[13px] text-vne-title group-hover:text-vne-red line-clamp-2 leading-snug">
                  Top 5 quán ăn không thể bỏ qua khi đến {restaurant.province}
                </h4>
                <p className="text-[11px] text-vne-gray mt-1">Cẩm nang • 1 tuần trước</p>
              </a>
            </div>
          </div>

          {relatedRestaurants.length > 0 && (
            <div className="bg-white p-5 border border-vne-border">
              <h3 className="font-bold text-[14px] text-vne-title border-t border-vne-border pt-[15px] mb-3">
                Gợi ý cùng khu vực
              </h3>
              <div className="space-y-3">
                {relatedRestaurants.map(rel => (
                  <Link 
                    key={rel.id} 
                    to={`/${generateSlug(rel.name)}-${generateSlug(rel.province)}-${rel.id}.html`}
                    className="flex gap-2 group"
                  >
                    <img src={rel.thumbnail} alt={rel.name} className="w-[60px] h-[60px] object-cover rounded-[2px]" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[13px] text-vne-title group-hover:text-vne-red line-clamp-2 leading-tight">
                        {rel.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[#f5a623] text-[11px] font-bold mt-0.5">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        <span>{rel.rating}</span>
                      </div>
                      <p className="text-[11px] text-vne-gray line-clamp-1 mt-0.5">{rel.address}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
