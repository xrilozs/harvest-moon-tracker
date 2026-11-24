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
  { id: 'egg_g', name: 'Gold Egg', type: 'Egg', quality: 'Gold', sellPrice: 150, howToGet: 'Ayam dengan kebahagiaan maksimum (10 hati) dan sudah menang di Chicken Sumo Festival. Sangat langka!', image: '/img/items/gold_egg.png' },
  { id: 'egg_p', name: 'P Egg', type: 'Egg', quality: 'P', sellPrice: 180, howToGet: '10 hati + hewan sudah MENANG Chicken Sumo Festival + terakumulasi 600+ jam di luar kandang. Kalau penghitungnya hanya berjalan selama hewan benar-benar di luar (~10-12 jam/hari), itu sekitar 50-60 hari cerah - praktis hampir satu tahun penuh Spring-Fall, bukan 25 hari. Ketiga syarat ini wajib terpenuhi semua.', image: '/img/items/p_egg.png' },
  { id: 'egg_x', name: 'X Egg', type: 'Egg', quality: 'X', sellPrice: 350, howToGet: 'Muncul ACAK dari ayam yang sudah bertelur P Egg. Tidak bisa diusahakan dan tidak ada hubungannya dengan generasi/keturunan — murni keberuntungan.', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2d/X_Egg.png' },

  // === MILK ===
  { id: 'milk_s', name: 'Milk (S)', type: 'Milk', quality: 'Small', sellPrice: 100, howToGet: 'Sapi yang baru bisa diperah menghasilkan susu kecil.', image: '/img/items/small_milk.png' },
  { id: 'milk_m', name: 'Milk (M)', type: 'Milk', quality: 'Medium', sellPrice: 150, howToGet: 'Sapi dengan kebahagiaan sedang (4-7 hati). Beri makan, bicara, dan sikat setiap hari.', image: '/img/items/medium_milk.png' },
  { id: 'milk_l', name: 'Milk (L)', type: 'Milk', quality: 'Large', sellPrice: 200, howToGet: 'Sapi dengan kebahagiaan tinggi (8-9 hati). Rawat dengan baik setiap hari.', image: '/img/items/large_milk.png' },
  { id: 'milk_g', name: 'Gold Milk', type: 'Milk', quality: 'Gold', sellPrice: 300, howToGet: 'Sapi dengan kebahagiaan maksimum (10 hati) dan sudah menang di Cow Festival.', image: '/img/items/gold_milk.png' },
  { id: 'milk_p', name: 'P Milk', type: 'Milk', quality: 'P', sellPrice: 500, howToGet: '10 hati + sapi sudah MENANG Cow Festival + terakumulasi 600+ jam di luar kandang. Kalau penghitungnya hanya berjalan selama hewan benar-benar di luar (~10-12 jam/hari), itu sekitar 50-60 hari cerah - praktis hampir satu tahun penuh Spring-Fall, bukan 25 hari. Ketiga syarat ini wajib terpenuhi semua.', image: '/img/items/p_milk.png' },
  { id: 'milk_x', name: 'X Milk', type: 'Milk', quality: 'X', sellPrice: 800, howToGet: 'Muncul ACAK dari sapi yang sudah menghasilkan P Milk. Tidak bisa diusahakan dan tidak ada hubungannya dengan generasi/keturunan — murni keberuntungan.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/34/Milk_%28X%29.png' },

  // === WOOL ===
  { id: 'wool_s', name: 'Wool (S)', type: 'Wool', quality: 'Small', sellPrice: 100, howToGet: 'Domba yang baru bisa dicukur menghasilkan wol kecil.', image: '/img/items/small_woll.png' },
  { id: 'wool_m', name: 'Wool (M)', type: 'Wool', quality: 'Medium', sellPrice: 400, howToGet: 'Domba dengan kebahagiaan sedang (4-7 hati). Beri makan, bicara, dan sikat setiap hari.', image: '/img/items/medium_woll.png' },
  { id: 'wool_l', name: 'Wool (L)', type: 'Wool', quality: 'Large', sellPrice: 500, howToGet: 'Domba dengan kebahagiaan tinggi (8-9 hati).', image: '/img/items/large_woll.png' },
  { id: 'wool_g', name: 'Gold Wool', type: 'Wool', quality: 'Gold', sellPrice: 600, howToGet: 'Domba dengan kebahagiaan maksimum (10 hati) dan sudah menang di Sheep Festival.', image: '/img/items/gold_wool.png' },
  { id: 'wool_p', name: 'P Wool', type: 'Wool', quality: 'P', sellPrice: 700, howToGet: '10 hati + domba sudah MENANG Sheep Festival + terakumulasi 600+ jam di luar kandang. Kalau penghitungnya hanya berjalan selama hewan benar-benar di luar (~10-12 jam/hari), itu sekitar 50-60 hari cerah - praktis hampir satu tahun penuh Spring-Fall, bukan 25 hari. Ketiga syarat ini wajib terpenuhi semua.', image: '/img/items/p_wool.png' },
  { id: 'wool_x', name: 'X Wool', type: 'Wool', quality: 'X', sellPrice: 1000, howToGet: 'Muncul ACAK dari domba yang sudah menghasilkan P Wool, peluang sekitar 1:255. Tidak ada hubungannya dengan generasi/keturunan — murni keberuntungan.', image: '/img/items/x_wool.png' },

  // === MAYONNAISE ===
  { id: 'mayo_s', name: 'Mayonnaise (S)', type: 'Mayonnaise', quality: 'Small', sellPrice: 100, howToGet: 'Masukkan Egg (S) ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6c/Mayonnaise_%28S%29.png' },
  { id: 'mayo_m', name: 'Mayonnaise (M)', type: 'Mayonnaise', quality: 'Medium', sellPrice: 150, howToGet: 'Masukkan Egg (M) ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/44/Mayonnaise_%28M%29.png' },
  { id: 'mayo_l', name: 'Mayonnaise (L)', type: 'Mayonnaise', quality: 'Large', sellPrice: 200, howToGet: 'Masukkan Egg (L) ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/01/Mayonnaise_%28L%29.png' },
  { id: 'mayo_g', name: 'Mayonnaise (G)', type: 'Mayonnaise', quality: 'Gold', sellPrice: 300, howToGet: 'Masukkan Gold Egg ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a5/Mayonnaise_%28G%29.png' },
  { id: 'mayo_p', name: 'Mayonnaise (P)', type: 'Mayonnaise', quality: 'P', sellPrice: 450, howToGet: 'Masukkan P Egg ke dalam Mayonnaise Maker.', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/16/Mayonnaise_%28P%29.png' },
  { id: 'mayo_x', name: 'Mayonnaise (X)', type: 'Mayonnaise', quality: 'X', sellPrice: 800, howToGet: 'Masukkan X Egg ke dalam Mayonnaise Maker, atau masak dengan Mayonnaise (S)+(M)+(L)+(G)+(P).', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f9/Mayonnaise_%28X%29.png' },

  // === CHEESE ===
  { id: 'cheese_s', name: 'Cheese (S)', type: 'Cheese', quality: 'Small', sellPrice: 300, howToGet: 'Masukkan Milk (S) ke dalam Cheese Maker.', image: '/img/items/cheese_s.png' },
  { id: 'cheese_m', name: 'Cheese (M)', type: 'Cheese', quality: 'Medium', sellPrice: 400, howToGet: 'Masukkan Milk (M) ke dalam Cheese Maker.', image: '/img/items/cheese_m.png' },
  { id: 'cheese_l', name: 'Cheese (L)', type: 'Cheese', quality: 'Large', sellPrice: 500, howToGet: 'Masukkan Milk (L) ke dalam Cheese Maker.', image: '/img/items/cheese_l.png' },
  { id: 'cheese_g', name: 'Cheese (G)', type: 'Cheese', quality: 'Gold', sellPrice: 600, howToGet: 'Masukkan Gold Milk ke dalam Cheese Maker.', image: '/img/items/cheese_g.png' },
  { id: 'cheese_p', name: 'Cheese (P)', type: 'Cheese', quality: 'P', sellPrice: 750, howToGet: 'Masukkan P Milk ke dalam Cheese Maker.', image: '/img/items/cheese_p.png' },
  { id: 'cheese_x', name: 'Cheese (X)', type: 'Cheese', quality: 'X', sellPrice: 1500, howToGet: 'Masukkan X Milk ke dalam Cheese Maker, atau masak dari Cheese (S)+(M)+(L)+(G)+(P).', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/94/Cheese_%28X%29_%28FoMT%29.png' },

  // === YARN ===
  { id: 'yarn_s', name: 'Yarn (S)', type: 'Yarn', quality: 'Small', sellPrice: 300, howToGet: 'Masukkan Wool (S) ke dalam Yarn Maker.', image: '/img/items/yarn_s.png' },
  { id: 'yarn_m', name: 'Yarn (M)', type: 'Yarn', quality: 'Medium', sellPrice: 700, howToGet: 'Masukkan Wool (M) ke dalam Yarn Maker.', image: '/img/items/yarn_m.png' },
  { id: 'yarn_l', name: 'Yarn (L)', type: 'Yarn', quality: 'Large', sellPrice: 800, howToGet: 'Masukkan Wool (L) ke dalam Yarn Maker.', image: '/img/items/yarn_l.png' },
  { id: 'yarn_g', name: 'Yarn (G)', type: 'Yarn', quality: 'Gold', sellPrice: 1000, howToGet: 'Masukkan Gold Wool ke dalam Yarn Maker.', image: '/img/items/yarn_g.png' },
  { id: 'yarn_p', name: 'Yarn (P)', type: 'Yarn', quality: 'P', sellPrice: 1500, howToGet: 'Masukkan P Wool ke dalam Yarn Maker.', image: '/img/items/yarn_p.png' },
  { id: 'yarn_x', name: 'Yarn (X)', type: 'Yarn', quality: 'X', sellPrice: 4000, howToGet: 'Masukkan X Wool ke dalam Yarn Maker.', image: '/img/items/yarn_x.png' },
];

export const animalTips = [
  'Bicara dengan hewan setiap hari untuk menaikkan kebahagiaan.',
  'Sikat sapi dan domba setiap hari menggunakan Brush.',
  'Biarkan hewan keluar di cuaca cerah (bukan hujan/badai/salju).',
  'Beri makan setiap hari tanpa gagal. Ayam makan Chicken Feed, Sapi/Domba makan Fodder.',
  'Jangan tinggalkan hewan di luar saat hujan atau malam hari.',
  'Menangkan festival (Chicken Sumo, Cow Festival, Sheep Festival) untuk meningkatkan kualitas produk.',
  'Hewan yang sakit harus segera diberi Animal Medicine (beli dari Yodel Ranch).',
  'Syarat kualitas P (10 hati + menang festival + 600 jam di luar) berjalan PARALEL, bukan bertahap. Tidak perlu menunggu produk Gold dulu — mulai keluarkan hewan sedini mungkin karena 600 jam adalah syarat yang paling lama.',
  'Sapi & domba memakan sekitar 1 petak rumput per ekor per hari saat di luar. Kalau lahannya gundul mereka tetap mengumpulkan jam di luar, tapi TIDAK makan — jadi tetap isi Fodder di kandang.',
  'Ayam mencari makan sendiri dari tanah, jadi lahan gundul bukan masalah untuk ayam.',
  'Cara paling aman: tetap isi Fodder setiap pagi. Fodder yang tidak dimakan tidak hilang (tetap di kotak makan untuk besok), jadi tidak ada ruginya.',
  'Rumput tidak tumbuh saat Winter, jadi selama musim dingin hewan tetap di kandang dan wajib diberi Fodder.',
  'Kualitas X tidak bisa ditargetkan — ia hanya muncul acak dari hewan yang sudah menghasilkan kualitas P.',
];
