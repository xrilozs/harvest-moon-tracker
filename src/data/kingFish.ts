export interface KingFish {
  id: string;
  name: string;
  location: string;
  requirement: string;
  season: string;
  sellPrice: number;
  bait: string;
  image: string;
}

export const kingFishData: KingFish[] = [
  { id: 'catfish', name: 'Catfish', location: 'Danau Mother\'s Hill', requirement: 'Pancing di danau saat hujan. Gunakan Fishing Rod level Mystrile atau lebih tinggi.', season: 'Spring, Summer, Fall (saat hujan)', sellPrice: 200, bait: 'Tidak perlu umpan khusus, tapi butuh keberuntungan.', image: '/img/items/Catfish.svg' },
  { id: 'angler', name: 'Angler (Monkfish)', location: 'Laut (Ocean)', requirement: 'Pancing di laut antara jam 22:00 - 08:00 menggunakan Fishing Rod level Mystrile+.', season: 'Winter', sellPrice: 300, bait: 'Tidak perlu umpan khusus.', image: '/img/items/Angler.svg' },
  { id: 'char', name: 'Char', location: 'Air Terjun (Waterfall) / Sungai Hulu', requirement: 'Pancing di dekat air terjun Mother\'s Hill. Fishing Rod level tinggi disarankan.', season: 'Spring, Summer, Fall', sellPrice: 200, bait: 'Tidak perlu umpan khusus.', image: '/img/items/Char.svg' },
  { id: 'huchen', name: 'Huchen (Ito)', location: 'Sungai Mother\'s Hill (Hilir)', requirement: 'Pancing di sungai bagian hilir. Butuh Fishing Rod level tinggi dan sedikit keberuntungan.', season: 'Winter', sellPrice: 300, bait: 'Tidak perlu umpan khusus.', image: '/img/items/Huchen.svg' },
  { id: 'squid', name: 'Squid', location: 'Laut (Ocean)', requirement: 'Pancing di laut pada malam hari. Lebih mudah ditangkap dengan rod level tinggi.', season: 'Summer', sellPrice: 200, bait: 'Tidak perlu umpan khusus.', image: '/img/items/Squid.svg' },
  { id: 'sea_bream', name: 'Sea Bream', location: 'Laut (Ocean)', requirement: 'Pancing di laut pada siang hari cerah. Rod level tinggi direkomendasikan.', season: 'Spring, Fall', sellPrice: 250, bait: 'Tidak perlu umpan khusus.', image: '/img/items/SeaBream.svg' },
];
