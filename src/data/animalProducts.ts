export interface AnimalProduct {
  id: string;
  name: string;
  type: 'Egg' | 'Milk' | 'Wool';
  quality: 'Small' | 'Medium' | 'Large' | 'Gold' | 'P' | 'X';
  sellPrice: number;
  howToGet: string;
  image: string;
}

export const animalProductsData: AnimalProduct[] = [
  // === EGGS ===
  { id: 'egg_s', name: 'Egg (S)', type: 'Egg', quality: 'Small', sellPrice: 50, howToGet: 'Ayam yang baru mulai bertelur menghasilkan telur kecil.', image: '/img/items/regular_egg.png' },
  { id: 'egg_m', name: 'Egg (M)', type: 'Egg', quality: 'Medium', sellPrice: 60, howToGet: 'Ayam dengan kebahagiaan sedang (4-7 hati). Beri makan setiap hari dan bicara dengannya.', image: '/img/items/good_egg.png' },
  { id: 'egg_l', name: 'Egg (L)', type: 'Egg', quality: 'Large', sellPrice: 80, howToGet: 'Ayam dengan kebahagiaan tinggi (8-9 hati). Rawat dengan baik dan biarkan keluar di cuaca cerah.', image: '/img/items/best_egg.png' },
  { id: 'egg_g', name: 'Gold Egg', type: 'Egg', quality: 'Gold', sellPrice: 150, howToGet: 'Ayam dengan kebahagiaan maksimum (10 hati) dan sudah menang di Chicken Sumo Festival. Sangat langka!', image: '/img/items/GoldEgg.svg' },
  { id: 'egg_p', name: 'P Egg', type: 'Egg', quality: 'P', sellPrice: 180, howToGet: 'Ayam dengan kebahagiaan 10 hati yang sudah bertelur Gold Egg secara konsisten. Sangat langka!', image: '/img/items/PEgg.svg' },
  { id: 'egg_x', name: 'X Egg', type: 'Egg', quality: 'X', sellPrice: 350, howToGet: 'Ayam generasi ke-2+ dari induk P Egg dengan kebahagiaan maksimum. Paling langka!', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2d/X_Egg.png' },

  // === MILK ===
  { id: 'milk_s', name: 'Milk (S)', type: 'Milk', quality: 'Small', sellPrice: 100, howToGet: 'Sapi yang baru bisa diperah menghasilkan susu kecil.', image: '/img/items/small_milk.png' },
  { id: 'milk_m', name: 'Milk (M)', type: 'Milk', quality: 'Medium', sellPrice: 150, howToGet: 'Sapi dengan kebahagiaan sedang (4-7 hati). Beri makan, bicara, dan sikat setiap hari.', image: '/img/items/medium_milk.png' },
  { id: 'milk_l', name: 'Milk (L)', type: 'Milk', quality: 'Large', sellPrice: 200, howToGet: 'Sapi dengan kebahagiaan tinggi (8-9 hati). Rawat dengan baik setiap hari.', image: '/img/items/large_milk.png' },
  { id: 'milk_g', name: 'Gold Milk', type: 'Milk', quality: 'Gold', sellPrice: 300, howToGet: 'Sapi dengan kebahagiaan maksimum (10 hati) dan sudah menang di Cow Festival.', image: '/img/items/GoldMilk.svg' },
  { id: 'milk_p', name: 'P Milk', type: 'Milk', quality: 'P', sellPrice: 500, howToGet: 'Sapi dengan 10 hati yang sudah menghasilkan Gold Milk secara konsisten.', image: '/img/items/PMilk.svg' },
  { id: 'milk_x', name: 'X Milk', type: 'Milk', quality: 'X', sellPrice: 800, howToGet: 'Sapi generasi ke-2+ dengan induk P Milk dan kebahagiaan maksimum.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/34/Milk_%28X%29.png' },

  // === WOOL ===
  { id: 'wool_s', name: 'Wool (S)', type: 'Wool', quality: 'Small', sellPrice: 100, howToGet: 'Domba yang baru bisa dicukur menghasilkan wol kecil.', image: '/img/items/small_woll.png' },
  { id: 'wool_m', name: 'Wool (M)', type: 'Wool', quality: 'Medium', sellPrice: 400, howToGet: 'Domba dengan kebahagiaan sedang (4-7 hati). Beri makan, bicara, dan sikat setiap hari.', image: '/img/items/medium_woll.png' },
  { id: 'wool_l', name: 'Wool (L)', type: 'Wool', quality: 'Large', sellPrice: 500, howToGet: 'Domba dengan kebahagiaan tinggi (8-9 hati).', image: '/img/items/large_woll.png' },
  { id: 'wool_g', name: 'Gold Wool', type: 'Wool', quality: 'Gold', sellPrice: 600, howToGet: 'Domba dengan kebahagiaan maksimum (10 hati) dan sudah menang di Sheep Festival.', image: '/img/items/GoldWool.svg' },
  { id: 'wool_p', name: 'P Wool', type: 'Wool', quality: 'P', sellPrice: 700, howToGet: 'Domba dengan 10 hati yang sudah menghasilkan Gold Wool secara konsisten.', image: '/img/items/PWool.svg' },
  { id: 'wool_x', name: 'X Wool', type: 'Wool', quality: 'X', sellPrice: 1000, howToGet: 'Domba generasi ke-2+ dengan induk P Wool dan kebahagiaan maksimum.', image: '/img/items/XWool.svg' },
];

export const animalTips = [
  'Bicara dengan hewan setiap hari untuk menaikkan kebahagiaan.',
  'Sikat sapi dan domba setiap hari menggunakan Brush.',
  'Biarkan hewan keluar di cuaca cerah (bukan hujan/badai/salju).',
  'Beri makan setiap hari tanpa gagal. Ayam makan Chicken Feed, Sapi/Domba makan Fodder.',
  'Jangan tinggalkan hewan di luar saat hujan atau malam hari.',
  'Menangkan festival (Chicken Sumo, Cow Festival, Sheep Festival) untuk meningkatkan kualitas produk.',
  'Hewan yang sakit harus segera diberi Animal Medicine (beli dari Yodel Ranch).',
];
