export interface MineItem {
  id: string;
  name: string;
  mine: 'Spring Mine' | 'Lake Mine';
  floors: string;
  sellPrice: number;
  description: string;
  image: string;
}

export const mineItemsData: MineItem[] = [
  // === LAKE MINE (Hanya bisa diakses di Winter saat danau membeku) ===
  { id: 'amethyst', name: 'Amethyst', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 60, description: 'Batu kecubung ungu. Ditemukan dengan menghancurkan batu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Amethyst_(FoMT).png' },
  { id: 'agate', name: 'Agate', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 62, description: 'Batu akik. Ditemukan dengan menghancurkan batu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Agate_(FoMT).png' },
  { id: 'fluorite', name: 'Fluorite', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 65, description: 'Permata fluorite. Ditemukan dengan menghancurkan batu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Fluorite_(FoMT).png' },
  { id: 'peridot', name: 'Peridot', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 68, description: 'Permata hijau kekuningan. Ditemukan dengan menghancurkan batu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Peridot_(FoMT).png' },
  { id: 'topaz', name: 'Topaz', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 70, description: 'Batu kuning topaz. Ditemukan dengan menghancurkan batu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Topaz_(FoMT).png' },
  { id: 'ruby', name: 'Ruby', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 75, description: 'Batu rubi merah menyala. Ditemukan dengan menghancurkan batu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Ruby_(FoMT).png' },
  { id: 'emerald', name: 'Emerald', mine: 'Lake Mine', floors: 'Lantai yang berakhiran angka 5 (5, 15, 25, dst)', sellPrice: 80, description: 'Batu zamrud hijau tua.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Emerald_(FoMT).png' },
  { id: 'sandrose', name: 'Sand Rose', mine: 'Lake Mine', floors: 'Lantai yang berakhiran angka 9 (9, 19, 29, dst)', sellPrice: 60, description: 'Bunga batu pasir.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Sand_Rose_(FoMT).png' },
  { id: 'moonstone', name: 'Moon Stone', mine: 'Lake Mine', floors: 'Lantai yang berakhiran angka 8 (8, 18, 28, dst)', sellPrice: 55, description: 'Batu bulan yang berkilau. Dijatuhkan di lantai dengan akhiran angka 8.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Moon_Stone_(FoMT).png' },
  { id: 'diamond_winter', name: 'Diamond', mine: 'Lake Mine', floors: 'Lantai 10, 20, 30, 70, 90, 110, 130, 170, 190, 255', sellPrice: 100, description: 'Berlian biasa yang berharga mahal.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Diamond_(FoMT).png' },
  { id: 'pink_diamond', name: 'Pink Diamond', mine: 'Lake Mine', floors: 'Lantai 30, 70, 90, 110, 130, 170, 190, 255', sellPrice: 10000, description: 'Berlian merah muda super langka yang harganya sangat mahal!', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Pink_Diamond_(FoMT).png' },
  { id: 'alexandrite', name: 'Alexandrite', mine: 'Lake Mine', floors: 'Lantai 50, 100, 150, 200, 251-255', sellPrice: 10000, description: 'Batu mulia berwarna hijau. Sangat berharga dan langka.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Alexandrite_(FoMT).png' },

  // === SPRING MINE & SPESIAL ===
  { id: 'black_grass', name: 'Black Grass', mine: 'Lake Mine', floors: 'Semua lantai (Gali menggunakan Hoe)', sellPrice: 10, description: 'Rumput hitam, bisa dimakan untuk sedikit stamina atau digunakan untuk resep masak.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Black_Grass_(FoMT).png' },
  { id: 'teleport_stone', name: 'Teleport Stone', mine: 'Spring Mine', floors: 'Lantai 255', sellPrice: 0, description: 'Batu teleportasi. Muncul dari Tahun Ke-3. Gali dengan Hoe di lantai 255 Spring Mine.', image: '/img/items/teleport_stone.jpg' },
  { id: 'french_fries_recipe', name: 'French Fries Recipe (Botol)', mine: 'Spring Mine', floors: 'Lantai 255', sellPrice: 0, description: 'Resep kentang goreng di dalam botol. Ditemukan saat memancing di dalam Spring Mine lantai 255.', image: '/img/items/French_Fries.webp' },
];
