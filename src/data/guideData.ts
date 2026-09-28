// === COTTAGE & TV QUIZ & MONEY GUIDE DATA ===

export interface HouseLevel {
  name: string;
  cost: string;
  materials: string;
  features: string[];
  howToGet: string;
}

export const houseLevelsData: HouseLevel[] = [
  {
    name: 'Rumah Awal (Starter House)',
    cost: 'Gratis (sudah ada dari awal)',
    materials: 'Tidak perlu',
    features: [
      'Tempat tidur kecil untuk istirahat dan save game',
      'TV untuk menonton acara (cuaca, TV Shopping, kuis)',
      'Kalender untuk melihat jadwal festival',
      'Buku catatan (diary) untuk save game',
      'Belum ada dapur — tidak bisa memasak',
    ],
    howToGet: 'Sudah tersedia sejak awal permainan. Rumah kecil sederhana di area farm.',
  },
  {
    name: 'Upgrade Pertama — Dapur! (Medium House)',
    cost: '3.000 G',
    materials: '200 Lumber',
    features: [
      '🍳 DAPUR (Kitchen) terbuka — bisa mulai memasak!',
      'Bisa membeli peralatan masak dari TV Shopping (tiap Sabtu)',
      'Bisa membeli Kulkas (Refrigerator) dan Kabinet dari TV Shopping',
      'Meja makan lebih besar',
      'Sudah bisa memasak resep "No Utensil" langsung',
    ],
    howToGet: 'Bicara dengan Gotz. Butuh 3.000G dan 200 Lumber. Ini upgrade PALING PENTING karena membuka akses dapur dan memasak!',
  },
  {
    name: 'Upgrade Kedua — Syarat Menikah! (Big House)',
    cost: '10.000 G',
    materials: '700 Lumber',
    features: [
      '💍 SYARAT MENIKAH — wajib untuk bisa melamar!',
      'Bisa membeli Large Bed dari TV Shopping (syarat menikah)',
      'Rumah jauh lebih luas',
      'Perapian (Fireplace) — recovery stamina saat hari bersalju',
      'Bisa beli Big Fridge dan Big Cabinet dari TV Shopping',
    ],
    howToGet: 'Bicara dengan Gotz setelah upgrade pertama selesai. Butuh 10.000G dan 700 Lumber. Wajib untuk menikah — beli juga Large Bed dari TV Shopping setelah upgrade!',
  },
  {
    name: '🏠 Town Cottage',
    cost: '100.000.000 G (100 juta Gold!)',
    materials: '999 Lumber',
    features: [
      'Rumah liburan di area kota (lahan kosong dekat Saibara Blacksmith)',
      'Ada TV untuk main Rock-Paper-Scissors dengan Harvest Goddess',
      'Goal end-game untuk pemain kaya',
      'Harus selesaikan semua upgrade rumah & bangunan farm dulu',
    ],
    howToGet: 'Bicara dengan Gotz setelah SEMUA upgrade rumah dan bangunan farm selesai. Dibangun di lahan kosong dekat Saibara Blacksmith. Harga 100 juta Gold menjadikannya target jangka panjang.',
  },
  {
    name: '🏖️ Seaside Cottage',
    cost: 'Gratis (tapi butuh link cable)',
    materials: 'Tidak perlu',
    features: [
      'Rumah liburan di tepi pantai',
      'Didapat melalui koneksi GBA ↔ GameCube',
      'Membutuhkan game Harvest Moon: A Wonderful Life di GameCube',
      'Butuh 50 connection stars dari linking kedua game',
    ],
    howToGet: 'Hubungkan GBA (Friends of Mineral Town) ke GameCube (Harvest Moon: A Wonderful Life) menggunakan GBA-GCN link cable. Kumpulkan 50 connection stars dengan menghubungkan kedua game berulang kali. Setelah cukup, Seaside Cottage akan terbuka. \n\n*Catatan untuk pemain Emulator: Kamu bisa menghubungkan emulator GBA (seperti VBA-M) dengan emulator GameCube (Dolphin), ATAU menggunakan Cheat Code (Gameshark/Codebreaker) untuk langsung membukanya karena proses linking di emulator cukup rumit.*',
  },
  {
    name: '⛰️ Mountain Cottage',
    cost: 'Gratis (hadiah anniversary)',
    materials: 'Tidak perlu',
    features: [
      'Rumah liburan di area gunung, utara danau Kappa',
      'Hadiah dari pasanganmu di anniversary pernikahan ke-50',
      'Rumah paling sulit didapat di game — butuh 50 tahun in-game!',
      'Penghargaan untuk dedikasi dan kesabaran pemain',
    ],
    howToGet: 'Menikah dan tetap bersama pasanganmu selama 50 tahun dalam game. Pada anniversary pernikahan ke-50, pasanganmu akan memberikan Mountain Cottage sebagai hadiah. Ini adalah rumah paling sulit dan paling lama untuk didapat!',
  },
];

export interface BuildingUpgrade {
  name: string;
  cost: string;
  materials: string;
  description: string;
}

export const farmBuildingsData: BuildingUpgrade[] = [
  { name: 'Chicken Coop Upgrade', cost: '5.000 G', materials: '420 Lumber', description: 'Kapasitas naik jadi 8 ayam. Menambah incubator. Setelah upgrade, bisa beli Mayonnaise Maker dari Saibara (20.000G + Adamantite).' },
  { name: 'Barn Upgrade', cost: '6.800 G', materials: '500 Lumber', description: 'Kapasitas naik jadi 16 hewan. Menambah ruang untuk hewan hamil. Setelah upgrade, bisa beli Cheese Maker dan Yarn Maker dari Saibara (masing-masing 20.000G + Adamantite).' },
];

export interface TvQuizPrize {
  streak: string;
  prize: string;
  description: string;
}

export const tvQuizPrizesData: TvQuizPrize[] = [
  { streak: '0-1 benar', prize: 'Nothing', description: 'Tidak ada hadiah. Kamu harus menjawab minimal 2 kali benar untuk dapat hadiah.' },
  { streak: '2 benar', prize: 'Colored Grass (Acak)', description: 'Salah satu dari: Black Grass, Blue Grass, Green Grass, Indigo Grass, Orange Grass, Purple Grass, Red Grass, White Grass, atau Yellow Grass.' },
  { streak: '3-9 benar', prize: 'Buckwheat Flour / Rice Cake', description: 'Tepung soba atau Kue Beras. Bahan masakan yang berguna.' },
  { streak: '10-14 benar', prize: 'Relaxation Tea Leaves', description: 'Daun teh relaksasi. Bahan untuk membuat Relaxation Tea di dapur.' },
  { streak: '15-19 benar', prize: 'Sunblock', description: 'Tabir surya. Bisa digunakan atau diberikan sebagai hadiah.' },
  { streak: '20-23 benar', prize: 'Skin Lotion', description: 'Losion kulit. Bisa digunakan atau diberikan sebagai hadiah.' },
  { streak: '24-29 benar', prize: 'Facial Pack', description: 'Masker wajah. Bisa digunakan atau diberikan sebagai hadiah untuk para wanita.' },
  { streak: '30-39 benar', prize: 'Perfume', description: 'Parfum. Hadiah favorit para wanita. Salah satu cara mendapatkan Perfume selain Horse Race Medal.' },
  { streak: '40-49 benar', prize: 'Dress', description: 'Gaun cantik. Hadiah favorit beberapa wanita (Sasha, Manna, Lillia).' },
  { streak: '50-59 benar', prize: 'Golden Lumber', description: 'Kayu emas langka! Sangat berharga dan tidak bisa dibeli di toko.' },
  { streak: '60-69 benar', prize: 'Fossil of Ancient Fish', description: 'Fosil ikan kuno. Item koleksi yang sangat langka dan berharga.' },
  { streak: '70-79 benar', prize: 'Pirate Treasure', description: 'Harta karun bajak laut! Item langka yang sangat berharga.' },
  { streak: '80-89 benar', prize: 'Recipe for Ketchup', description: 'Resep Ketchup. Berguna jika belum punya resepnya.' },
  { streak: '90-99 benar', prize: 'Recipe for French Fries', description: 'Resep French Fries. Berguna jika belum punya resepnya.' },
  { streak: '100+ benar', prize: 'Book', description: 'Buku. Item langka yang didapat setelah menjawab 100 kali benar berturut-turut!' },
];

export interface MoneyTip {
  id: string;
  season: string;
  title: string;
  income: string;
  description: string;
  steps: string[];
  priority: 'high' | 'medium' | 'low';
}

export const moneyTipsData: MoneyTip[] = [
  // === SPRING ===
  {
    id: 'mt_spring_turnip', season: 'Spring', title: 'Farming Turnip & Potato Massal',
    income: '~5.000-15.000G / harvest', priority: 'high',
    description: 'Turnip tumbuh 4 hari dan Potato 7 hari. Tanam sebanyak mungkin di awal Spring.',
    steps: ['Beli biji Turnip dan Potato dari Supermarket', 'Bersihkan ladang sebanyak mungkin', 'Siram setiap hari', 'Jual semua hasil panen lewat Shipping Bin', 'Reinvestasi ke biji baru'],
  },
  {
    id: 'mt_spring_bamboo', season: 'Spring', title: 'Kumpulkan Bamboo Shoot',
    income: '~500G / hari', priority: 'medium',
    description: 'Bamboo Shoot muncul di area gunung selama Spring. Gratis!',
    steps: ['Pergi ke Mother\'s Hill area setiap hari', 'Ambil semua Bamboo Shoot', 'Jual lewat Shipping Bin (50G each)', 'Atau berikan ke NPC untuk friendship'],
  },
  {
    id: 'mt_spring_horse', season: 'Spring', title: 'Horse Race Medal Farming (Spring 18)',
    income: 'Medal → Power Berry & Item Langka', priority: 'medium',
    description: 'Taruhan di Horse Race Spring 18 bisa menghasilkan banyak Medal untuk ditukar item langka. Gunakan Save/Load untuk menjamin kemenangan!',
    steps: ['Save game sebelum festival', 'Taruh semua medal pada kuda yang menang', 'Jika kalah, load save dan ulangi', 'Tukar medal: Power Berry (900M), Truth Jewel (1000M)', 'Repeat sampai dapat semua item'],
  },

  // === SUMMER ===
  {
    id: 'mt_summer_pineapple', season: 'Summer', title: '🌟 Pineapple Farming (TOP PROFIT!)',
    income: '~50.000-100.000G / season', priority: 'high',
    description: 'Pineapple adalah tanaman paling menguntungkan! Harga jual 500G, tumbuh ulang setiap 5 hari setelah panen pertama.',
    steps: ['Beli biji Pineapple dari Won (1000G/biji)', 'Tanam di awal Summer', 'Panen berulang kali karena regrow', 'Bisa panen 3-4x per season!', 'Ini penghasil uang terbesar di pertanian'],
  },
  {
    id: 'mt_summer_corn', season: 'Summer', title: 'Corn Farming (Regrow)',
    income: '~20.000-40.000G / season', priority: 'high',
    description: 'Corn bisa dipanen berulang dan harganya cukup baik. Alternatif jika belum punya akses Pineapple.',
    steps: ['Tanam Corn sebanyak mungkin', 'Siram setiap hari', 'Panen berulang (regrow setiap 3 hari)', 'Jual lewat Shipping Bin'],
  },
  {
    id: 'mt_summer_mining', season: 'Summer', title: 'Mining di Spring Mine (Ore & Gems)',
    income: '~5.000-30.000G / trip', priority: 'medium',
    description: 'Spring Mine bisa diakses sepanjang tahun. Cari Mystrile, Gold, dan permata.',
    steps: ['Bawa Hoe dan Hammer ke Spring Mine', 'Gali lantai demi lantai', 'Kumpulkan Mystrile (400G), Gold (250G)', 'Simpan permata langka (Diamond, Pink Diamond)', 'Jual ore biasa lewat Shipping Bin'],
  },

  // === FALL ===
  {
    id: 'mt_fall_sweetpotato', season: 'Fall', title: 'Sweet Potato Farming (Regrow)',
    income: '~30.000-60.000G / season', priority: 'high',
    description: 'Sweet Potato regrow dan menghasilkan profit bagus di Fall.',
    steps: ['Tanam Sweet Potato di awal Fall', 'Siram setiap hari', 'Panen berulang (regrow)', 'Jual lewat Shipping Bin'],
  },
  {
    id: 'mt_fall_truffle', season: 'Fall', title: 'Kumpulkan Truffle (MAHAL!)',
    income: '~5.000G / hari', priority: 'high',
    description: 'Truffle harganya 500G dan muncul di area gunung selama Fall. Gratis!',
    steps: ['Pergi ke Mother\'s Hill setiap hari', 'Cari Truffle di sekitar area hutan', 'Jual lewat Shipping Bin (500G each!)', 'JANGAN berikan ke NPC kecuali sudah cukup kaya'],
  },
  {
    id: 'mt_fall_wine', season: 'Fall', title: 'Kerja di Winery (Fall 14+)',
    income: '~1.000G / hari kerja', priority: 'low',
    description: 'Bantu Duke di Winery setelah mengajak Cliff.',
    steps: ['Ajak Cliff di Fall 14 (WAJIB!)', 'Bantu kerja di Winery', 'Dapat gaji harian + friendship'],
  },
  {
    id: 'mt_fall_horse', season: 'Fall', title: 'Horse Race Medal Farming (Fall 18)',
    income: 'Medal → Power Berry & Item Langka', priority: 'medium',
    description: 'Horse Race juga diadakan di Fall 18. Kesempatan kedua untuk farming medal! Gunakan Save/Load untuk menjamin kemenangan.',
    steps: ['Save game sebelum festival', 'Taruh semua medal pada kuda yang menang', 'Jika kalah, load save dan ulangi', 'Tukar medal untuk item langka yang belum didapat di Spring', 'Kuda milikmu bisa ikut lomba jika sudah dewasa dan hatinya tinggi'],
  },

  // === WINTER ===
  {
    id: 'mt_winter_lakemine', season: 'Winter', title: '🌟 Lake Mine Deep Diving (JACKPOT!)',
    income: '~50.000-200.000G / trip', priority: 'high',
    description: 'Lake Mine terbuka saat danau membeku di Winter. Mengandung Mythic Stone, Orichalcum, Adamantite, dan permata super langka!',
    steps: ['Bawa Hoe, Hammer, dan banyak Spa-Boiled Egg (stamina)', 'Masuk Lake Mine saat danau beku', 'Gali sedalam mungkin', 'Kumpulkan Mythic Stone (40.000G!)', 'Orichalcum (10.000G), Adamantite (5.000G)', 'Alexandrite, Pink Diamond = sangat mahal!'],
  },
  {
    id: 'mt_winter_tvquiz', season: 'Winter', title: 'TV Quiz Goddess (Item Langka)',
    income: 'Item langka bernilai tinggi', priority: 'medium',
    description: 'Kuis TV dari Harvest Goddess. Menang beruntun mendapat item semakin langka.',
    steps: ['Cek TV setiap hari selama Winter', 'Mainkan kuis tebak angka (Higher/Lower)', 'Save sebelum bermain, load jika kalah', 'Streak 50+ = Pirate Treasure!', 'Streak 80+ = Alexandrite!'],
  },

  // === TIPS UMUM ===
  {
    id: 'mt_general_cheese', season: 'Semua Season', title: '🌟 Gold Cheese & Mayonnaise Factory',
    income: '~3.000-5.000G / hari', priority: 'high',
    description: 'Setelah punya sapi/ayam berkualitas tinggi, ubah susu/telur jadi Cheese/Mayonnaise Gold untuk profit berlipat.',
    steps: ['Menangkan Cow/Chicken Festival untuk upgrade kualitas', 'Beli Cheese Maker dan Mayonnaise Maker dari Saibara', 'Proses Gold Milk → Gold Cheese (selling 500G vs 300G susu)', 'Proses Gold Egg → Gold Mayonnaise', 'Produksi setiap hari = income pasif yang stabil'],
  },
  {
    id: 'mt_general_shipping', season: 'Semua Season', title: 'Shipping Bin Timing',
    income: 'Optimasi penjualan', priority: 'low',
    description: 'Pastikan semua barang masuk Shipping Bin sebelum jam 17:00.',
    steps: ['Zack mengambil barang jam 17:00 tepat', 'Barang yang dimasukkan setelah 17:00 akan diambil besok', 'Uang masuk keesokan pagi', 'Rencanakan jadwal harianmu: farming pagi, mining siang, shipping sore'],
  },
];
