export interface AnimalProduct {
  id: string;
  name: string;
  type: 'Egg' | 'Milk' | 'Wool' | 'Mayonnaise' | 'Cheese' | 'Yarn';
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

  // === MAYONNAISE ===
  { id: 'mayo_s', name: 'Mayonnaise (S)', type: 'Mayonnaise', quality: 'Small', sellPrice: 100, howToGet: 'Masukkan Egg (S) ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6c/Mayonnaise_%28S%29.png' },
  { id: 'mayo_m', name: 'Mayonnaise (M)', type: 'Mayonnaise', quality: 'Medium', sellPrice: 150, howToGet: 'Masukkan Egg (M) ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/44/Mayonnaise_%28M%29.png' },
  { id: 'mayo_l', name: 'Mayonnaise (L)', type: 'Mayonnaise', quality: 'Large', sellPrice: 200, howToGet: 'Masukkan Egg (L) ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/01/Mayonnaise_%28L%29.png' },
  { id: 'mayo_g', name: 'Mayonnaise (G)', type: 'Mayonnaise', quality: 'Gold', sellPrice: 300, howToGet: 'Masukkan Gold Egg ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a5/Mayonnaise_%28G%29.png' },
  { id: 'mayo_p', name: 'Mayonnaise (P)', type: 'Mayonnaise', quality: 'P', sellPrice: 450, howToGet: 'Masukkan P Egg ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/16/Mayonnaise_%28P%29.png' },
  { id: 'mayo_x', name: 'Mayonnaise (X)', type: 'Mayonnaise', quality: 'X', sellPrice: 800, howToGet: 'Masukkan X Egg ke dalam Mayonnaise Maker, atau masak dengan Mayonnaise (S)+(M)+(L)+(G)+(P).', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f9/Mayonnaise_%28X%29.png' },

  // === CHEESE ===
  { id: 'cheese_s', name: 'Cheese (S)', type: 'Cheese', quality: 'Small', sellPrice: 300, howToGet: 'Masukkan Milk (S) ke dalam Cheese Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/ea/Cheese_%28S%29_%28FoMT%29.png' },
  { id: 'cheese_m', name: 'Cheese (M)', type: 'Cheese', quality: 'Medium', sellPrice: 400, howToGet: 'Masukkan Milk (M) ke dalam Cheese Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/3d/Cheese_%28M%29_%28FoMT%29.png' },
  { id: 'cheese_l', name: 'Cheese (L)', type: 'Cheese', quality: 'Large', sellPrice: 500, howToGet: 'Masukkan Milk (L) ke dalam Cheese Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/33/Cheese_%28L%29_%28FoMT%29.png' },
  { id: 'cheese_g', name: 'Cheese (G)', type: 'Cheese', quality: 'Gold', sellPrice: 600, howToGet: 'Masukkan Gold Milk ke dalam Cheese Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/29/Cheese_%28G%29_%28FoMT%29.png' },
  { id: 'cheese_p', name: 'Cheese (P)', type: 'Cheese', quality: 'P', sellPrice: 750, howToGet: 'Masukkan P Milk ke dalam Cheese Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/87/Cheese_%28P%29_%28FoMT%29.png' },
  { id: 'cheese_x', name: 'Cheese (X)', type: 'Cheese', quality: 'X', sellPrice: 1500, howToGet: 'Masukkan X Milk ke dalam Cheese Maker, atau masak dari Cheese (S)+(M)+(L)+(G)+(P).', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/94/Cheese_%28X%29_%28FoMT%29.png' },

  // === YARN ===
  { id: 'yarn_s', name: 'Yarn (S)', type: 'Yarn', quality: 'Small', sellPrice: 300, howToGet: 'Masukkan Wool (S) ke dalam Yarn Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/9e/Yarn_%28S%29_%28FoMT%29.png' },
  { id: 'yarn_m', name: 'Yarn (M)', type: 'Yarn', quality: 'Medium', sellPrice: 700, howToGet: 'Masukkan Wool (M) ke dalam Yarn Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/fb/Yarn_%28M%29_%28FoMT%29.png' },
  { id: 'yarn_l', name: 'Yarn (L)', type: 'Yarn', quality: 'Large', sellPrice: 800, howToGet: 'Masukkan Wool (L) ke dalam Yarn Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/4b/Yarn_%28L%29_%28FoMT%29.png' },
  { id: 'yarn_g', name: 'Yarn (G)', type: 'Yarn', quality: 'Gold', sellPrice: 1000, howToGet: 'Masukkan Gold Wool ke dalam Yarn Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b3/Yarn_%28G%29_%28FoMT%29.png' },
  { id: 'yarn_p', name: 'Yarn (P)', type: 'Yarn', quality: 'P', sellPrice: 1500, howToGet: 'Masukkan P Wool ke dalam Yarn Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/7b/Yarn_%28P%29_%28FoMT%29.png' },
  { id: 'yarn_x', name: 'Yarn (X)', type: 'Yarn', quality: 'X', sellPrice: 4000, howToGet: 'Masukkan X Wool ke dalam Yarn Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/e0/Yarn_%28X%29_%28FoMT%29.png' },
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
