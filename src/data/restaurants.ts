import { Restaurant } from '../types';
import phoBatDanThumb from '../assets/images/pho_bat_dan_1783474865349.jpg';

export const mockRestaurants: Restaurant[] = [
  {
    id: '12345',
    name: 'Mì Quảng Bà Mua',
    commonName: 'Bà Mua',
    province: 'Đà Nẵng',
    area: 'Hải Châu',
    ward: 'Phước Ninh',
    address: '19-21 Trần Bình Trọng, Phường Phước Ninh',
    thumbnail: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Thương hiệu mì Quảng lâu đời và nổi tiếng bậc nhất Đà Nẵng, điểm đến quen thuộc của du khách.',
    mapLink: 'https://maps.google.com',
    signatureDishes: ['Mì quảng gà', 'Mì quảng ếch', 'Mì quảng tôm thịt', 'Bánh tráng cuốn thịt heo'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Bình dân', 'Trung cấp'],
    amenities: ['Có chỗ đỗ ô tô', 'Có điều hòa', 'Phù hợp trẻ em'],
    awards: ['Top Review VnE'],
    rating: 4.5,
    reviewCount: 1250,
  },
  {
    id: '12346',
    name: 'Mì Quảng Ếch Bếp Trang',
    province: 'Đà Nẵng',
    area: 'Hải Châu',
    ward: 'Hải Châu 1',
    address: '441 Ông Ích Khiêm, Phường Hải Châu 1',
    thumbnail: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Nổi tiếng với món mì quảng ếch độc đáo, bày trí đẹp mắt trên mẹt tre truyền thống.',
    signatureDishes: ['Mì quảng ếch', 'Mì quảng sườn non'],
    cuisineType: 'Sang trọng',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Trung cấp'],
    amenities: ['Có điều hòa', 'Phù hợp trẻ em', 'Có phòng riêng'],
    awards: [],
    rating: 4.2,
    reviewCount: 890,
  },
  {
    id: '67890',
    name: 'Lẩu Bò Ba Toa - Quán Gỗ',
    commonName: 'Quán Gỗ',
    province: 'Lâm Đồng',
    area: 'Đà Lạt',
    ward: 'Phường 1',
    address: '1/29 Hoàng Diệu, Phường 1',
    thumbnail: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Quán lẩu bò huyền thoại tại Đà Lạt, luôn tấp nập khách du lịch và người dân địa phương.',
    signatureDishes: ['Lẩu bò', 'Bò nướng'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Tây Nguyên',
    priceSegment: ['Bình dân'],
    amenities: ['Bãi để xe máy'],
    awards: ['Quán ăn lâu đời'],
    rating: 4.7,
    reviewCount: 3200,
  },
  {
    id: '11223',
    name: 'Bánh Xèo Chảo Mực Nhảy',
    province: 'Khánh Hòa',
    area: 'Nha Trang',
    ward: 'Lộc Thọ',
    address: '97 Hoàng Diệu, Phường Lộc Thọ',
    thumbnail: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Bánh xèo vàng rụm, nhân mực nhảy tươi rói mang đậm hương vị biển cả Nha Trang.',
    signatureDishes: ['Bánh xèo mực', 'Bánh xèo tôm', 'Nem nướng'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Bình dân'],
    amenities: ['Vỉa hè', 'Phù hợp ăn đêm'],
    awards: [],
    rating: 4.3,
    reviewCount: 650,
  },
  {
    id: '99887',
    name: 'Phở Bát Đàn',
    province: 'Hà Nội',
    area: 'Hoàn Kiếm',
    ward: 'Cửa Đông',
    address: '49 Bát Đàn, Phường Cửa Đông',
    thumbnail: phoBatDanThumb,
    images: [
      phoBatDanThumb
    ],
    lead: 'Quán phở truyền thống danh tiếng, thực khách xếp hàng từ sáng sớm để thưởng thức.',
    signatureDishes: ['Phở tái', 'Phở nạm', 'Phở gầu'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Bắc',
    priceSegment: ['Bình dân'],
    amenities: [],
    awards: ['Quán ăn lâu đời', 'Michelin Guide'],
    michelinGuide: ['Bib Gourmand'],
    rating: 4.6,
    reviewCount: 4100,
  },
  {
    id: '55667',
    name: 'Cơm Gà Bà Buội',
    province: 'Quảng Nam',
    area: 'Hội An',
    ward: 'Minh An',
    address: '22 Phan Chu Trinh, Phường Minh An',
    thumbnail: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Cơm gà nổi tiếng nhất Hội An với hạt cơm tơi xốp, thịt gà thả vườn dai ngon.',
    signatureDishes: ['Cơm gà xé', 'Cơm gà chặt', 'Gỏi gà'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Trung',
    priceSegment: ['Bình dân', 'Trung cấp'],
    amenities: ['Phù hợp gia đình'],
    awards: ['Quán ăn lâu đời'],
    rating: 4.4,
    reviewCount: 2800,
  },
  {
    id: '33445',
    name: 'Anan Saigon',
    province: 'TP.HCM',
    area: 'Quận 1',
    ward: 'Bến Nghé',
    address: '89 Tôn Thất Đạm, Phường Bến Nghé',
    thumbnail: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Nhà hàng ẩm thực Việt Nam hiện đại, tiên phong trong việc nâng tầm món ăn đường phố.',
    signatureDishes: ['Bánh mì 100 đô', 'Taco bánh xèo'],
    cuisineType: 'Sang trọng',
    regionalFlavor: 'Miền Nam',
    priceSegment: ['Cao cấp'],
    amenities: ['Có điều hòa', 'Thanh toán thẻ', 'Có quầy bar'],
    awards: ['Michelin Guide'],
    michelinGuide: ['Một sao Michelin'],
    rating: 4.8,
    reviewCount: 950,
  },
  {
    id: '10101',
    name: 'Quầy Bò Bía Ngọt Hồ Tây',
    province: 'Hà Nội',
    area: 'Tây Hồ',
    ward: 'Thụy Khuê',
    address: 'Đường Thanh Niên',
    thumbnail: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=800'
    ],
    lead: 'Hàng ngày, từ 16h, một góc vỉa hè đường ven hồ Tây đông nghịt khách chờ mua bò bía ngọt với giá 5.000 đồng một chiếc.',
    signatureDishes: ['Bò bía ngọt'],
    cuisineType: 'Bình dân',
    regionalFlavor: 'Miền Bắc',
    priceSegment: ['Bình dân'],
    amenities: ['Vỉa hè'],
    awards: [],
    rating: 4.5,
    reviewCount: 1500,
    articleContent: `
<h1 class="text-3xl md:text-4xl font-bold text-vne-title mb-4 leading-tight">Quầy bò bía Hà Nội khách phải xếp hàng chờ mua</h1>
<p class="text-[16px] text-vne-gray mb-6 leading-relaxed">
  Hàng ngày, từ 16h, một góc vỉa hè đường ven hồ Tây đông nghịt khách chờ mua bò bía ngọt với giá 5.000 đồng một chiếc.
</p>
<figure class="mb-6">
  <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1200" alt="Quầy bò bía" class="w-full rounded-[2px]" />
  <figcaption class="text-[13px] text-vne-gray mt-2 text-center bg-gray-50 py-2">
    Quầy bò bía nhỏ ven hồ Tây lúc nào cũng tấp nập khách (Ảnh minh họa).
  </figcaption>
</figure>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Khoảng 10 năm nay, người dân đi qua đoạn giao cắt giữa phố Thanh Niên và Nguyễn Đình Thi (quận Tây Hồ) vào mỗi buổi chiều lại quen thuộc với hình ảnh một chiếc xe đạp bán bò bía ngọt, xung quanh khách đứng đợi kín vỉa hè.
</p>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Chủ quán là chị Nguyễn Thị Hải (45 tuổi, quê Nam Định). Chị cho biết mỗi ngày bắt đầu dọn hàng từ 15h và bán liên tục đến 23h. Quầy hàng chỉ là một chiếc xe đạp thồ với tủ kính nhỏ, bên trong đựng bánh tráng, thanh kẹo mạch nha, dừa nạo và chút vừng đen.
</p>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Bò bía ngọt là món ăn vặt gắn liền với tuổi thơ của nhiều thế hệ. Chiếc bánh được cuốn nhỏ nhắn bằng hai lớp bánh tráng mỏng, dai. Bên trong là phần nhân ngọt ngào gồm thanh kẹo mạch nha giòn tan, dừa nạo tươi béo ngậy và chút vừng đen rang thơm phức. Khi ăn, thực khách sẽ cảm nhận được sự hòa quyện hoàn hảo giữa độ dai của vỏ, độ giòn rụm của kẹo và vị béo của dừa.
</p>
<figure class="mb-6">
  <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=1200" alt="Cuốn bò bía" class="w-full rounded-[2px]" />
  <figcaption class="text-[13px] text-vne-gray mt-2 text-center bg-gray-50 py-2">
    Nguyên liệu đơn giản nhưng tạo nên sức hút khó cưỡng (Ảnh minh họa).
  </figcaption>
</figure>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Dù hiện nay có vô vàn món ăn vặt hiện đại, bò bía ngọt ven hồ Tây vẫn giữ được sức hút riêng. Chị Hải chia sẻ, mỗi ngày chị bán được từ 1.000 đến 1.500 chiếc, ngày lễ tết, cuối tuần có thể lên tới 2.000 chiếc. Khách hàng đa phần là giới trẻ, học sinh, sinh viên và cả những người lớn tuổi muốn tìm lại hương vị tuổi thơ.
</p>
<p class="text-[18px] text-vne-text leading-relaxed mb-4">
  Với mức giá chỉ 5.000 đồng/chiếc, đây thực sự là món ăn vặt lý tưởng để nhâm nhi khi dạo bước ven hồ Tây lộng gió. Tuy nhiên, do khách đông, bạn nên chuẩn bị tinh thần phải chờ đợi từ 15-20 phút mới đến lượt mình.
</p>
    `
  }
];
