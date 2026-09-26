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
  { id: 'catfish', name: 'Catfish', location: 'Hot Spring (Kolam Air Panas)', requirement: 'Pancing di kolam Hot Spring menggunakan Fishing Rod level Cursed/Blessed/Mythic.', season: 'Winter', sellPrice: 200, bait: 'Tidak perlu umpan khusus.', image: '/img/items/catfish.jpg' },
  { id: 'carp', name: 'Carp', location: 'Danau Mother\'s Hill', requirement: 'Pancing di danau setelah kamu sudah mengirimkan (ship) minimal 200 ekor ikan.', season: 'Spring, Summer, Fall', sellPrice: 200, bait: 'Tidak perlu umpan khusus.', image: '/img/items/carp.jpg' },
  { id: 'jp_huchen', name: 'Jp. Huchen (Ito)', location: 'Sungai Mother\'s Hill (Hilir)', requirement: 'Kamu harus sudah memiliki resep masakan Sushi, Sashimi, dan Grilled Fish.', season: 'Spring, Summer, Fall', sellPrice: 300, bait: 'Tidak perlu umpan khusus.', image: '/img/items/jp_huchen.jpg' },
  { id: 'monkfish', name: 'Monkfish (Angler)', location: 'Laut (Ocean)', requirement: 'Pancing di laut pada malam hari antara jam 10:00 PM hingga 08:00 AM.', season: 'Spring, Winter', sellPrice: 300, bait: 'Tidak perlu umpan khusus.', image: '/img/items/Angler.svg' },
  { id: 'squid', name: 'Squid', location: 'Laut (Ocean)', requirement: 'Lempar satu ikan kecil (Small Fish) ke laut sebagai umpan, lalu pancing di hari yang sama.', season: 'Spring, Winter', sellPrice: 200, bait: 'Lempar Small Fish ke laut terlebih dahulu.', image: '/img/items/squid.jpg' },
  { id: 'coelacanth', name: 'Coelacanth', location: 'Danau Bawah Tanah (Winter Mine Lantai 9)', requirement: 'Pancing di kolam bawah tanah SETELAH kamu berhasil menangkap ke-5 King Fish lainnya.', season: 'Semua Musim (di dalam tambang)', sellPrice: 200, bait: 'Tidak perlu umpan khusus.', image: '/img/items/coelacanth.jpg' },
];

export interface RareFishingItem {
  id: string;
  name: string;
  location: string;
  requirement: string;
  season: string;
  sellPrice: number;
  image: string;
}

export const rareFishingItemsData: RareFishingItem[] = [
  { id: 'f_pirate_treasure', name: 'Pirate Treasure', location: 'Laut (Ocean)', requirement: 'Pancing menggunakan Fishing Rod level Cursed, Blessed, atau Mythic.', season: 'Summer', sellPrice: 10000, image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Pirate_Treasure_(FoMT).png' },
  { id: 'f_fish_fossil', name: 'Fish Fossil', location: 'Laut (Ocean)', requirement: 'Pancing menggunakan Fishing Rod level Cursed, Blessed, atau Mythic.', season: 'Fall', sellPrice: 5000, image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Fish_Fossil_(FoMT).png' }
];
