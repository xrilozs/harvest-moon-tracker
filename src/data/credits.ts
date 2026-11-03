export interface CreditSource {
  id: string;
  name: string;
  url: string;
  usedFor: string[];
  note?: string;
}

export const assetCredits: CreditSource[] = [
  {
    id: 'fogu',
    name: 'fogu.com — The Harvest Moon Fogu',
    url: 'https://fogu.com/hm4/',
    usedFor: [
      'Sprite permata Lake Mine (Amethyst, Agate, Flourite, Peridot, Topaz, Ruby, Emerald, Sandrose, Moonstone, Diamond, Pink Diamond, Alexandrite)',
      'Sprite bijih Orichalcum dan Adamantite',
      'Sprite produk ternak (Gold/P/X Egg, Milk, Wool, serta seluruh Cheese dan Yarn)',
      'Sprite Black Grass dan ikon resep',
      'Sprite alat untuk setiap level upgrade (Basic sampai Mythic)',
      'Sprite perhiasan: Necklace, Earrings, Bracelet, Brooch',
    ],
    note: 'Sprite asli versi Game Boy Advance.',
  },
  {
    id: 'hmwiki',
    name: 'Harvest Moon Wiki (Fandom)',
    url: 'https://harvestmoon.fandom.com/wiki/Harvest_Moon:_Friends_of_Mineral_Town',
    usedFor: [
      'Gambar tanaman kebun dan biji',
      'Sprite Cursed Tools',
      'Gambar hadiah, masakan, dan sebagian item spesial',
    ],
    note: 'Konten Fandom berlisensi CC BY-SA.',
  },
];

export const infoCredits: CreditSource[] = [
  {
    id: 'fogu_info',
    name: 'fogu.com — The Harvest Moon Fogu',
    url: 'https://fogu.com/hm4/',
    usedFor: [
      'Daftar harga biji dan syarat membuka biji Strawberry, Pumpkin, dan Spinach',
      'Jam buka Supermarket Jeff dan toko Won',
      'Daftar isi Spring Mine dan Lake Mine',
      'Biaya dan bahan pesanan Saibara di Blacksmith',
      'Daftar hadiah Horse Race beserta jumlah Medal-nya',
      'Syarat dan waktu event Stocking Festival serta permintaan Mayor Thomas di Winter 2',
    ],
  },
  {
    id: 'hmwiki_info',
    name: 'Harvest Moon Wiki (Fandom)',
    url: 'https://harvestmoon.fandom.com/wiki/Harvest_Moon:_Friends_of_Mineral_Town',
    usedFor: [
      'Data waktu tumbuh dan harga jual tanaman',
      'Jadwal event, profil warga, dan daftar kesukaan hadiah',
      'Daftar resep masakan',
    ],
    note: 'Sebagian besar data permainan di situs ini dirangkum dari panduan komunitas seperti ini.',
  },
];

export const creditsDisclaimer = [
  'Harvest Moon: Friends of Mineral Town adalah merek dagang dan hak cipta Marvelous Inc., Victor Interactive Software, dan Natsume Inc. Situs ini tidak berafiliasi dengan mereka.',
  'Semua gambar dan sprite dalam situs ini adalah milik pemegang hak cipta masing-masing, dipakai hanya untuk tujuan dokumentasi dan panduan nonkomersial.',
  'Situs ini dibuat penggemar untuk penggemar. Kalau kamu pemilik hak atas salah satu aset di sini dan keberatan, silakan hubungi kami agar asetnya kami hapus.',
];
