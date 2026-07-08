import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Search, Menu, User, MapPin } from 'lucide-react';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-vne-body flex flex-col font-sans text-vne-text">
      {/* Top Header like VnExpress */}
      <header className="bg-white border-t-[3px] border-t-vne-red border-b border-vne-border shrink-0">
        <div className="max-w-6xl mx-auto px-4 h-[60px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-vne-gray cursor-pointer" />
            <Link to="/" className="text-[24px] font-bold text-vne-red flex items-center">
              VnExpress
              <span className="text-vne-text font-normal text-[16px] border-l border-[#ccc] pl-[10px] ml-2 hidden sm:inline-block">
                Thư viện Ẩm thực
              </span>
            </Link>
            <span className="text-vne-gray text-sm hidden md:inline-block border-l border-[#ccc] pl-4 ml-2">
              Thứ ba, 7/7/2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Tìm kiếm quán ăn, món ăn..." 
                className="bg-vne-bg border border-vne-border rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-vne-gray w-64"
              />
              <Search className="w-4 h-4 text-vne-gray absolute right-3 top-2" />
            </div>
            <div className="flex items-center gap-2 text-sm text-vne-text cursor-pointer hover:text-vne-red font-medium">
              <User className="w-5 h-5 text-vne-gray" />
              <span className="hidden md:inline">Đăng nhập</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation for Du lịch / Ẩm thực */}
      <div className="bg-white border-b border-vne-border mb-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap py-3 text-[14px] font-medium">
            <Link to="/" className="text-vne-red font-bold pb-1">Bản đồ</Link>
            <a href="#" className="text-vne-text hover:text-vne-red transition-colors pb-1">Cẩm nang</a>
            <a href="#" className="text-vne-text hover:text-vne-red transition-colors pb-1">Michelin Guide</a>
            <a href="#" className="text-vne-text hover:text-vne-red transition-colors pb-1">Tin tức</a>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-2">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-vne-border mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-[14px]">
          <div>
            <div className="text-[24px] font-bold text-vne-red mb-4">VnExpress</div>
            <p className="text-vne-gray leading-relaxed">
              Báo tiếng Việt nhiều người xem nhất<br/>
              Thuộc Bộ Khoa học và Công nghệ
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-3">Liên hệ</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Tòa soạn</li>
              <li>Quảng cáo</li>
              <li>Hợp tác bản quyền</li>
            </ul>
          </div>
          <div className="md:col-span-2 text-gray-500 text-xs leading-relaxed">
            <p>Tổng biên tập: Phạm Hiếu</p>
            <p>Địa chỉ: Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, Dịch Vọng, Cầu Giấy, Hà Nội</p>
            <p>© 1997-2026. Toàn bộ bản quyền thuộc VnExpress</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
