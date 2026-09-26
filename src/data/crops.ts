export interface Crop {
  id: string;
  name: string;
  season: 'Spring' | 'Summer' | 'Fall';
  buyPrice: number;
  sellPrice: number;
  growTime: number;
  regrowTime: number | null;
  recommended: boolean;
  recommendReason?: string;
  image: string;
}

export const cropsData: Crop[] = [
  // === SPRING ===
  { id: 'turnip', name: 'Turnip', season: 'Spring', buyPrice: 120, sellPrice: 60, growTime: 4, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/b/bf/Turnip_%28FoMT%29.png' },
  { id: 'potato', name: 'Potato', season: 'Spring', buyPrice: 150, sellPrice: 80, growTime: 7, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/3/33/Potato_%28FoMT%29.png' },
  { id: 'cucumber', name: 'Cucumber', season: 'Spring', buyPrice: 200, sellPrice: 60, growTime: 9, regrowTime: 5, recommended: true, recommendReason: 'Bisa dipanen berulang setiap 5 hari. Cocok untuk penghasilan pasif.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/3d/Cucumber_%28FoMT%29.png' },
  { id: 'strawberry', name: 'Strawberry', season: 'Spring', buyPrice: 150, sellPrice: 30, growTime: 8, regrowTime: 2, recommended: true, recommendReason: 'Panen berulang setiap 2 hari! Paling menguntungkan di Spring jika ditanam awal musim.', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b2/Strawberry_%28FoMT%29.png' },
  { id: 'cabbage', name: 'Cabbage', season: 'Spring', buyPrice: 500, sellPrice: 250, growTime: 14, regrowTime: null, recommended: true, recommendReason: 'Harga jual tertinggi di Spring (250G). Tanam di awal musim agar sempat panen.', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/fb/Cabbage_%28FoMT%29.png' },
  { id: 'moondrop_flower', name: 'Moondrop Flower', season: 'Spring', buyPrice: 500, sellPrice: 60, growTime: 6, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a8/Moondrop.png' },
  { id: 'toy_flower', name: 'Toy Flower', season: 'Spring', buyPrice: 500, sellPrice: 100, growTime: 12, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d5/Toy.png' },

  // === SUMMER ===
  { id: 'tomato', name: 'Tomato', season: 'Summer', buyPrice: 200, sellPrice: 60, growTime: 9, regrowTime: 3, recommended: true, recommendReason: 'Panen berulang setiap 3 hari. Bahan masakan penting.', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/16/Tomato_%28FoMT%29.png' },
  { id: 'corn', name: 'Corn', season: 'Summer', buyPrice: 300, sellPrice: 100, growTime: 14, regrowTime: 3, recommended: true, recommendReason: 'Bisa dipanen berulang. Bahan pakan ayam (Chicken Feed) dan banyak resep.', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/e1/Corn_%28FoMT%29.png' },
  { id: 'onion', name: 'Onion', season: 'Summer', buyPrice: 150, sellPrice: 80, growTime: 7, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/e/ec/Onion_%28FoMT%29.png' },
  { id: 'pumpkin', name: 'Pumpkin', season: 'Summer', buyPrice: 500, sellPrice: 250, growTime: 14, regrowTime: null, recommended: true, recommendReason: 'Harga jual tinggi (250G). Tanam di awal musim.', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/23/Pumpkin_%28FoMT%29.png' },
  { id: 'pineapple', name: 'Pineapple', season: 'Summer', buyPrice: 1000, sellPrice: 500, growTime: 20, regrowTime: 5, recommended: true, recommendReason: 'Harga jual tertinggi (500G) dan bisa dipanen berulang! Hanya bisa dibeli dari Won.', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Pineapple_%28FoMT%29.png' },
  { id: 'pink_cat_flower', name: 'Pink Cat Flower', season: 'Summer', buyPrice: 300, sellPrice: 60, growTime: 6, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/3/3c/Pink_Cat.png' },

  // === FALL ===
  { id: 'eggplant', name: 'Eggplant', season: 'Fall', buyPrice: 120, sellPrice: 80, growTime: 9, regrowTime: 3, recommended: true, recommendReason: 'Panen berulang setiap 3 hari dengan harga jual lumayan.', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/11/Eggplant_%28FoMT%29.png' },
  { id: 'carrot', name: 'Carrot', season: 'Fall', buyPrice: 300, sellPrice: 120, growTime: 7, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/9/94/Carrot_%28FoMT%29.png' },
  { id: 'sweet_potato', name: 'Sweet Potato', season: 'Fall', buyPrice: 300, sellPrice: 120, growTime: 5, regrowTime: 2, recommended: true, recommendReason: 'Panen berulang setiap 2 hari! Paling menguntungkan di Fall.', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b1/Sweet_Potato_%28FoMT%29.png' },
  { id: 'spinach', name: 'Spinach', season: 'Fall', buyPrice: 200, sellPrice: 80, growTime: 5, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/1/1f/Spinach_%28FoMT%29.png' },
  { id: 'green_pepper', name: 'Green Pepper', season: 'Fall', buyPrice: 150, sellPrice: 40, growTime: 7, regrowTime: 2, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/5/58/Green_Pepper_%28FoMT%29.png' },
  { id: 'magic_red_flower', name: 'Magic Red Flower', season: 'Fall', buyPrice: 600, sellPrice: 200, growTime: 9, regrowTime: null, recommended: false, image: 'https://static.wikia.nocookie.net/hmwikia/images/3/37/Red_Magic_Grass.PNG' },
];
