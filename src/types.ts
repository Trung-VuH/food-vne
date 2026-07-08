export interface Restaurant {
  id: string;
  name: string;
  commonName?: string;
  province: string;
  area: string;
  ward: string;
  address: string;
  thumbnail: string;
  images: string[];
  lead: string;
  mapLink?: string;
  signatureDishes: string[];
  cuisineType: string;
  regionalFlavor: string;
  priceSegment: string[];
  amenities: string[];
  awards: string[];
  michelinGuide?: string[];
  rating: number;
  reviewCount: number;
  articleContent?: string;
}
