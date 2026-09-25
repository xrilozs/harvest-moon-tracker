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
  // === SPRING MINE (Tambang di dekat Hot Spring, buka sepanjang tahun) ===
  { id: 'alexandrite', name: 'Alexandrite', mine: 'Spring Mine', floors: 'Lantai 50+', sellPrice: 10000, description: 'Batu permata langka berwarna hijau. Hadiah yang sangat disukai oleh beberapa warga.', image: '/img/items/Alexandrite.svg' },
  { id: 'moonstone', name: 'Moon Stone', mine: 'Spring Mine', floors: 'Lantai 50+', sellPrice: 55, description: 'Batu bulan yang berkilau. Bisa dijadikan hadiah.', image: '/img/items/MoonStone.svg' },
  { id: 'sandrose', name: 'Sand Rose', mine: 'Spring Mine', floors: 'Lantai 50+', sellPrice: 60, description: 'Bunga batu pasir yang indah. Disukai beberapa warga.', image: '/img/items/SandRose.svg' },
  { id: 'pink_diamond', name: 'Pink Diamond', mine: 'Spring Mine', floors: 'Lantai 30+ (sangat langka)', sellPrice: 10000, description: 'Berlian pink yang sangat langka dan berharga.', image: '/img/items/PinkDiamond.svg' },
  { id: 'diamond_spring', name: 'Diamond', mine: 'Spring Mine', floors: 'Lantai 10+', sellPrice: 100, description: 'Berlian biasa. Bisa dijual atau dijadikan hadiah.', image: '/img/items/Diamond.svg' },
  { id: 'emerald', name: 'Emerald', mine: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 80, description: 'Batu zamrud hijau. Disukai banyak warga.', image: '/img/items/Emerald.svg' },
  { id: 'ruby', name: 'Ruby', mine: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 75, description: 'Batu rubi merah. Hadiah yang bagus.', image: '/img/items/Ruby.svg' },
  { id: 'topaz', name: 'Topaz', mine: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 70, description: 'Batu topaz kuning.', image: '/img/items/Topaz.svg' },
  { id: 'peridot', name: 'Peridot', mine: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 68, description: 'Batu peridot hijau muda.', image: '/img/items/Peridot.svg' },
  { id: 'fluorite', name: 'Fluorite', mine: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 65, description: 'Batu fluorite berwarna-warni.', image: '/img/items/Fluorite.svg' },
  { id: 'agate', name: 'Agate', mine: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 62, description: 'Batu akik dengan pola unik.', image: '/img/items/Agate.svg' },
  { id: 'amethyst', name: 'Amethyst', mine: 'Spring Mine', floors: 'Lantai 3+', sellPrice: 60, description: 'Batu kecubung ungu. Disukai banyak gadis.', image: '/img/items/Amethyst.svg' },

  // === LAKE MINE / WINTER MINE (Hanya bisa diakses saat danau membeku di Winter) ===
  { id: 'cursed_hoe', name: 'Cursed Hoe', mine: 'Lake Mine', floors: 'Lantai 39', sellPrice: 0, description: 'Cangkul terkutuk. Gunakan 255 kali untuk bisa di-bless oleh Carter.', image: '/img/items/CursedHoe.svg' },
  { id: 'cursed_fishing_rod', name: 'Cursed Fishing Rod', mine: 'Lake Mine', floors: 'Lantai 29', sellPrice: 0, description: 'Pancing terkutuk. Gunakan 255 kali untuk bisa di-bless oleh Carter.', image: '/img/items/CursedFishingRod.svg' },
  { id: 'cursed_axe', name: 'Cursed Axe', mine: 'Lake Mine', floors: 'Lantai 49', sellPrice: 0, description: 'Kapak terkutuk. Gunakan 255 kali untuk bisa di-bless oleh Carter.', image: '/img/items/CursedAxe.svg' },
  { id: 'cursed_hammer', name: 'Cursed Hammer', mine: 'Lake Mine', floors: 'Lantai 59', sellPrice: 0, description: 'Palu terkutuk. Gunakan 255 kali untuk bisa di-bless oleh Carter.', image: '/img/items/CursedHammer.svg' },
  { id: 'cursed_watering_can', name: 'Cursed Watering Can', mine: 'Lake Mine', floors: 'Lantai 69', sellPrice: 0, description: 'Penyiram terkutuk. Gunakan 255 kali untuk bisa di-bless oleh Carter.', image: '/img/items/CursedWateringCan.svg' },
  { id: 'cursed_sickle', name: 'Cursed Sickle', mine: 'Lake Mine', floors: 'Lantai 79', sellPrice: 0, description: 'Sabit terkutuk. Gunakan 255 kali untuk bisa di-bless oleh Carter.', image: '/img/items/CursedSickle.svg' },
  { id: 'teleport_stone', name: 'Teleport Stone', mine: 'Lake Mine', floors: 'Lantai 255', sellPrice: 0, description: 'Batu teleportasi yang memungkinkanmu langsung ke lantai tertentu. Item langka!', image: '/img/items/TeleportStone.svg' },
  { id: 'pirate_treasure', name: 'Pirate Treasure', mine: 'Lake Mine', floors: 'Lantai 0 (acak)', sellPrice: 10000, description: 'Harta karun bajak laut yang berharga. Ditemukan secara acak saat menggali.', image: '/img/items/PirateTreasure.svg' },
];
