import React from 'react';
import { X } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const filterCategories = [
    {
      title: 'Loại hình ẩm thực',
      options: ['Bình dân', 'Sang trọng', 'Nhà hàng', 'Quán ăn', 'Đường phố']
    },
    {
      title: 'Phong vị vùng miền',
      options: ['Miền Bắc', 'Miền Trung', 'Miền Nam', 'Tây Nguyên']
    },
    {
      title: 'Phân khúc giá',
      options: ['Bình dân', 'Trung cấp', 'Cao cấp']
    },
    {
      title: 'Tiện ích đi kèm',
      options: ['Có chỗ đỗ ô tô', 'Có điều hòa', 'Phù hợp trẻ em', 'Có phòng riêng', 'Thanh toán thẻ', 'Có quầy bar', 'Phù hợp gia đình', 'Bãi để xe máy', 'Vỉa hè', 'Phù hợp ăn đêm']
    },
    {
      title: 'Danh hiệu/Giải thưởng',
      options: ['Quán ăn lâu đời', 'Top Review VnE']
    },
    {
      title: 'Cẩm nang Michelin',
      options: ['Michelin Guide', 'Bib Gourmand', 'Một sao Michelin', 'Selected']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-[4px] shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-vne-border">
          <h2 className="text-[18px] font-bold text-vne-title">Bộ lọc tìm kiếm</h2>
          <button onClick={onClose} className="p-1 hover:bg-vne-bg rounded-full text-vne-gray transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filterCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-[14px] font-bold text-vne-title mb-3">{category.title}</h3>
                <div className="flex flex-col gap-2">
                  {category.options.map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-vne-red focus:ring-vne-red accent-vne-red" 
                      />
                      <span className="text-[14px] text-vne-text group-hover:text-vne-red transition-colors">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-vne-border flex justify-end gap-3 bg-gray-50">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-[14px] font-medium text-vne-gray hover:text-vne-title hover:bg-vne-border rounded-[2px] transition-colors border border-transparent"
          >
            Hủy
          </button>
          <button 
            onClick={onClose}
            className="px-4 py-2 text-[14px] font-bold text-white bg-vne-red hover:bg-[#900] rounded-[2px] transition-colors"
          >
            Áp dụng
          </button>
        </div>
      </div>
    </div>
  );
};
