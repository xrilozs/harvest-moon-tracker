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
  { id: 'amethyst', name: 'Amethyst', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 60, description: 'Batu kecubung ungu. Ditemukan dengan menghancurkan batu.', image: '/img/items/amethyst.gif' },
  { id: 'agate', name: 'Agate', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 62, description: 'Batu akik. Ditemukan dengan menghancurkan batu.', image: '/img/items/agate.gif' },
  { id: 'fluorite', name: 'Fluorite', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 65, description: 'Permata fluorite. Ditemukan dengan menghancurkan batu.', image: '/img/items/fluorite.gif' },
  { id: 'peridot', name: 'Peridot', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 68, description: 'Permata hijau kekuningan. Ditemukan dengan menghancurkan batu.', image: '/img/items/peridot.gif' },
  { id: 'topaz', name: 'Topaz', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 70, description: 'Batu kuning topaz. Ditemukan dengan menghancurkan batu.', image: '/img/items/topaz.gif' },
  { id: 'ruby', name: 'Ruby', mine: 'Lake Mine', floors: 'Semua lantai kecuali lt 50, 100, 150, 200', sellPrice: 75, description: 'Batu rubi merah menyala. Ditemukan dengan menghancurkan batu.', image: '/img/items/ruby.gif' },
  { id: 'emerald', name: 'Emerald', mine: 'Lake Mine', floors: 'Lantai yang berakhiran angka 5 (5, 15, 25, dst)', sellPrice: 80, description: 'Batu zamrud hijau tua.', image: '/img/items/emerald.gif' },
  { id: 'sandrose', name: 'Sand Rose', mine: 'Lake Mine', floors: 'Lantai yang berakhiran angka 9 (9, 19, 29, dst)', sellPrice: 60, description: 'Bunga batu pasir.', image: '/img/items/sandrose.gif' },
  { id: 'moonstone', name: 'Moon Stone', mine: 'Lake Mine', floors: 'Lantai yang berakhiran angka 8 (8, 18, 28, dst)', sellPrice: 55, description: 'Batu bulan yang berkilau. Dijatuhkan di lantai dengan akhiran angka 8.', image: '/img/items/moonstone.gif' },
  { id: 'diamond_winter', name: 'Diamond', mine: 'Lake Mine', floors: 'Lantai 10, 20, 30, 70, 90, 110, 130, 170, 190, 255', sellPrice: 100, description: 'Berlian biasa yang berharga mahal.', image: '/img/items/diamond.gif' },
  { id: 'pink_diamond', name: 'Pink Diamond', mine: 'Lake Mine', floors: 'Lantai 30, 70, 90, 110, 130, 170, 190, 255', sellPrice: 10000, description: 'Berlian merah muda super langka yang harganya sangat mahal!', image: '/img/items/pink_diamond.gif' },
  { id: 'alexandrite', name: 'Alexandrite', mine: 'Lake Mine', floors: 'Lantai 50, 100, 150, 200, 251-255', sellPrice: 10000, description: 'Batu mulia berwarna hijau. Sangat berharga dan langka.', image: '/img/items/alexandrite.gif' },

  // === SPRING MINE & SPESIAL ===
  // { id: 'black_grass', name: 'Black Grass', mine: 'Lake Mine', floors: 'Semua lantai (Gali menggunakan Hoe)', sellPrice: 10, description: 'Rumput hitam, bisa dimakan untuk sedikit stamina atau digunakan untuk resep masak.', image: '/img/items/black_grass.png' },
  { id: 'teleport_stone', name: 'Teleport Stone', mine: 'Spring Mine', floors: 'Lantai 255', sellPrice: 0, description: 'Batu teleportasi. Muncul dari Tahun Ke-3. Gali dengan Hoe di lantai 255 Spring Mine.', image: '/img/items/teleport_stone.jpg' },
  { id: 'french_fries_recipe', name: 'French Fries Recipe', mine: 'Spring Mine', floors: 'Lantai 255', sellPrice: 0, description: 'Resep kentang goreng. Ditemukan saat memancing di dalam Spring Mine lantai 255.', image: '/img/items/recipe.gif' },

  // === CURSED TOOLS ===
  { id: 'cursed_fishing_rod', name: 'Cursed Fishing Rod', mine: 'Lake Mine', floors: 'Lantai 29', sellPrice: 0, description: 'Pancingan terkutuk. Bisa menangkap Ikan (L), King Fish, Pirate Treasure, dan Fish Fossil. Tidak bisa dilepas sampai di-bless. Cara bless: Gunakan 255 kali (boleh diayun di darat / saat festival).', image: '/img/items/cursed_fishing_rod.webp' },
  { id: 'cursed_hoe', name: 'Cursed Hoe', mine: 'Lake Mine', floors: 'Lantai 39', sellPrice: 0, description: 'Cangkul terkutuk. Mencangkul 12x3 petak tanah sekaligus. Tidak bisa dilepas sampai di-bless. Cara bless: Minta Carter di Gereja memberkati 10 kali (1.000G per sesi).', image: '/img/items/cursed_hoe.webp' },
  { id: 'cursed_ax', name: 'Cursed Ax', mine: 'Lake Mine', floors: 'Lantai 49', sellPrice: 0, description: 'Kapak terkutuk. Menebang semua tunggul pohon di layar sekaligus. Tidak bisa dilepas sampai di-bless. Cara bless: Gunakan 255 kali (paling mudah: ayunkan saat festival).', image: '/img/items/cursed_ax.webp' },
  { id: 'cursed_hammer', name: 'Cursed Hammer', mine: 'Lake Mine', floors: 'Lantai 59', sellPrice: 0, description: 'Palu terkutuk. Menghancurkan batu dan batu besar dalam 1 pukulan. Tidak bisa dilepas sampai di-bless. Cara bless: Bawa (equip) selama 10 hari.', image: '/img/items/cursed_hammer.webp' },
  { id: 'cursed_watering_can', name: 'Cursed Watering Can', mine: 'Lake Mine', floors: 'Lantai 69', sellPrice: 0, description: 'Penyiram terkutuk. Menyiram 6x13 petak tanah sekaligus. Tidak bisa dilepas sampai di-bless. Cara bless: Minta Carter di Gereja memberkati 10 kali (1.000G per sesi).', image: '/img/items/cursed_watering_can.webp' },
  { id: 'cursed_sickle', name: 'Cursed Sickle', mine: 'Lake Mine', floors: 'Lantai 79', sellPrice: 0, description: 'Sabit terkutuk. Memotong rumput/gulma 9x9 petak sekaligus. Tidak bisa dilepas sampai di-bless. Cara bless: Bawa (equip) selama 10 hari.', image: '/img/items/cursed_sickle.webp' },
];
