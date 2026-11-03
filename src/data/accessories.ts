export interface BlacksmithRecipe {
  cost: string;
  material: string;
  days: string;
}

export interface Accessory {
  id: string;
  name: string;
  nameId: string;
  category: 'Perhiasan' | 'Permata';
  blacksmith: BlacksmithRecipe | null;
  prizes: string[];
  usage: string;
  image: string;
}

export const blacksmithInfo = {
  name: 'Saibara (Blacksmith)',
  hours: 'Buka 10.00 - 16.00, tutup setiap hari Kamis',
  note: 'Bicara dengan Saibara dari seberang meja kasir. Selama dia mengerjakan pesananmu, toko tutup — kembali lagi setelah jumlah harinya lewat.',
};

export const accessoriesData: Accessory[] = [
  {
    id: 'acc_necklace', name: 'Necklace', nameId: 'Kalung', category: 'Perhiasan',
    blacksmith: { cost: '1.000 G', material: '1 Orichalcum', days: '2 hari' },
    prizes: ['Horse Race: tukar 20 Medal ke Mayor Thomas (Spring 18 / Fall 18)'],
    usage: 'Hadiah mahal untuk para gadis desa. Bisa juga dijual ke Won.',
    image: '/img/items/necklace.png',
  },
  {
    id: 'acc_earrings', name: 'Earrings', nameId: 'Anting', category: 'Perhiasan',
    blacksmith: { cost: '1.000 G', material: '1 Orichalcum', days: '2 hari' },
    prizes: [],
    usage: 'Hadiah mahal untuk para gadis desa. Hanya bisa didapat dari Saibara.',
    image: '/img/items/earrings.png',
  },
  {
    id: 'acc_bracelet', name: 'Bracelet', nameId: 'Gelang', category: 'Perhiasan',
    blacksmith: { cost: '1.000 G', material: '1 Orichalcum', days: '2 hari' },
    prizes: [],
    usage: 'Hadiah untuk para gadis desa. Mayor Thomas kadang memintanya pada Winter 2 — berikan, dan kamu dapat Golden Lumber.',
    image: '/img/items/bracelet.png',
  },
  {
    id: 'acc_brooch', name: 'Brooch (Broach)', nameId: 'Bros', category: 'Perhiasan',
    blacksmith: { cost: '1.000 G', material: '1 Orichalcum', days: '2 hari' },
    prizes: ['Horse Race: tukar 18 Medal ke Mayor Thomas (Spring 18 / Fall 18)'],
    usage: 'Perhiasan termurah untuk ditukar dengan Medal. Hadiah bagus untuk para gadis desa.',
    image: '/img/items/brooch.png',
  },
  {
    id: 'acc_diamond', name: 'Diamond', nameId: 'Berlian', category: 'Permata',
    blacksmith: null,
    prizes: ['Horse Race: tukar 14 Medal', 'Gali di Lake Mine (Winter Mine)'],
    usage: 'Permata bernilai tinggi. Mayor Thomas kadang memintanya pada Winter 2.',
    image: '/img/items/diamond.gif',
  },
  {
    id: 'acc_adamantite', name: 'Adamantite', nameId: 'Adamantit', category: 'Permata',
    blacksmith: null,
    prizes: ['Horse Race: tukar 4 Medal (hadiah termurah)', 'Gali di Spring Mine lantai 10+'],
    usage: 'Bahan wajib untuk Mayonnaise Maker, Cheese Maker, dan Yarn Maker dari Saibara (20.000 G + 1 Adamantite, 5 hari).',
    image: '/img/items/adamantite.gif',
  },
  {
    id: 'acc_orichalcum', name: 'Orichalcum', nameId: 'Orikalkum', category: 'Permata',
    blacksmith: null,
    prizes: ['Gali di Spring Mine lantai 10+ (langka)'],
    usage: 'Bahan wajib untuk keempat perhiasan di atas. Satu perhiasan butuh 1 Orichalcum.',
    image: '/img/items/orichalcum.gif',
  },
  {
    id: 'acc_truth_jewel', name: 'Jewel of Truth', nameId: 'Permata Kebenaran', category: 'Permata',
    blacksmith: null,
    prizes: ['Horse Race: tukar 1.000 Medal (hadiah termahal)', 'Beli dari Won seharga 50.000 G'],
    usage: 'Salah satu dari 9 Jewel of Truth. Kumpulkan kesembilannya untuk membentuk Gem of Truth.',
    image: '/img/items/truth_jewel.png',
  },
];

export const accessoryTips: string[] = [
  'Keempat perhiasan dibuat dengan bahan yang sama: 1.000 G + 1 Orichalcum, jadi kumpulkan Orichalcum sebanyak mungkin saat menambang.',
  'Brooch (18 Medal) dan Necklace (20 Medal) jauh lebih murah ditukar lewat Horse Race daripada dibuat, kalau kamu rajin bertaruh.',
  'Horse Race diadakan dua kali setahun: Spring 18 dan Fall 18. Medal tidak hangus, jadi bisa dikumpulkan antar-festival.',
  'Saibara tutup setiap hari Kamis, dan tokonya juga tutup selama dia mengerjakan pesananmu.',
];
