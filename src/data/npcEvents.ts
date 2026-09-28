export interface NpcEvent {
  id: string;
  character: string;
  title: string;
  date: string;
  time: string;
  location: string;
  trigger: string;
  whatToBring: string;
  reward: string;
  description: string;
}

export const npcEventsData: NpcEvent[] = [
  // === CLIFF — PALING PENTING ===
  { id: 'npc_cliff_job', character: 'Cliff', title: '⚠️ Ajak Cliff Kerja di Winery (WAJIB!)', date: 'Fall 14 (Tahun 1)', time: '10:00 - 13:00', location: 'Gereja (Church)', trigger: 'Masuk ke Gereja saat Duke mengumumkan lowongan kerja. Cliff harus masih tinggal di kota.', whatToBring: 'Tidak perlu, tapi kamu HARUS mengajak Cliff.', reward: 'Cliff tetap tinggal di Mineral Town dan tidak pergi selamanya.', description: 'EVENT KRITIS! Jika kamu tidak mengajak Cliff bekerja di Winery, dia akan meninggalkan kota setelah Winter dan TIDAK PERNAH KEMBALI!' },

  // === PINTU GEREJA TERBUKA ===
  { id: 'npc_church_door', character: 'Carter', title: 'Pintu Belakang Gereja Terbuka', date: 'Setelah FP Carter cukup tinggi (200+)', time: '13:00 - 16:00', location: 'Gereja (Church)', trigger: 'Bicara dengan Carter di bilik pengakuan pada hari Senin/Rabu (jam 13:00-16:00) dan lakukan pengakuan beberapa kali. Setelah FP cukup tinggi, pintu belakang gereja akan terbuka.', whatToBring: 'Tidak perlu.', reward: 'Akses ke lorong bawah tanah gereja yang terhubung ke Lake Mine (tambang musim dingin) — bisa dimasuki kapan saja tanpa harus menunggu danau beku!', description: 'Setelah berteman baik dengan Carter (lakukan pengakuan dosa di hari Senin/Rabu), pintu belakang gereja akan terbuka, memberikanmu akses ke Lake Mine sepanjang tahun.' },

  // === WON PERTAMA KALI ===
  { id: 'npc_won_arrival', character: 'Won', title: 'Won (Huang) Datang ke Mineral Town', date: 'Akhir Spring Tahun 1', time: 'Pagi hari', location: 'Rumah Zack (Beach)', trigger: 'Otomatis setelah beberapa minggu bermain. Won akan pindah ke rumah Zack di pantai.', whatToBring: 'Tidak perlu.', reward: 'Akses ke pedagang Won yang menjual item langka: Biji Apple, Van Favorite, SUGDW Apple, dll.', description: 'Won adalah pedagang baru yang pindah ke rumah Zack. Hati-hati, dia sering menipu dengan harga selangit! Tapi dia juga menjual item penting seperti biji apel.' },

  // === MENDAPAT KUDA ===
  { id: 'npc_barley_horse', character: 'Barley', title: 'Barley Memberimu Anak Kuda', date: 'Spring Tahun 1 (sekitar Spring 6-7)', time: 'Pagi hari', location: 'Kebunmu (Farm)', trigger: 'Barley datang otomatis ke kebunmu di awal Spring tahun pertama.', whatToBring: 'Tidak perlu.', reward: 'Anak kuda gratis! Rawat dengan baik (sikat & bicara setiap hari). Setelah 1 tahun jika hatinya tinggi, Barley akan membiarkanmu menyimpannya.', description: 'Barley menitipkan anak kuda padamu. PENTING: Jika kamu tidak merawatnya dengan baik (sikat & bicara setiap hari), Barley akan mengambilnya kembali setelah 1 tahun!' },

  // === GOLDEN LUMBER ===
  { id: 'npc_thomas_golden', character: 'Mayor Thomas', title: 'Mendapatkan Golden Lumber', date: 'Winter 2', time: '19:00', location: 'Kebunmu (Farm)', trigger: 'Thomas datang pagi hari meminta sesuatu. Bawa item yang diminta (biasanya telur) kepadanya jam 19:00.', whatToBring: 'Item yang diminta Thomas (biasanya Egg atau makanan tertentu).', reward: 'Golden Lumber — kayu emas yang tidak bisa dibeli! Digunakan untuk membangun pagar emas atau bangunan spesial.', description: 'Mayor Thomas akan memintamu sebuah item di pagi Winter 2. Berikan padanya di malam hari (19:00) untuk mendapatkan Golden Lumber yang sangat langka.' },

  // === KAPPA ===
  { id: 'npc_kappa_appear', character: 'Kappa', title: 'Kappa Muncul di Danau', date: 'Kapan saja (setelah melempar 10 Cucumber ke danau)', time: '11:00 - 17:00', location: 'Mother\'s Hill Lake', trigger: 'Lempar Cucumber ke danau di dekat air terjun Mother\'s Hill sebanyak 10 kali (10 hari berbeda). Pada lemparan terakhir, Kappa akan muncul.', whatToBring: 'Cucumber (timun) — bawa 1 per hari selama 10 hari.', reward: 'Kappa akan memberikan Power Berry! Setelah itu kamu bisa tetap memberinya Cucumber untuk menaikkan friendship.', description: 'Kappa adalah makhluk legendaris yang tinggal di danau. Berikan Cucumber ke danau selama 10 hari berturut-turut. Pada hari ke-10, Kappa akan muncul dan memberikan Power Berry.' },

  // === HARVEST GODDESS ===
  { id: 'npc_goddess_appear', character: 'Harvest Goddess', title: 'Harvest Goddess Muncul', date: 'Kapan saja', time: '09:00 - 17:00', location: 'Hot Spring / Harvest Goddess Pond', trigger: 'Lempar offering (bunga, sayuran, dll) ke kolam Harvest Goddess di dekat Hot Spring. Goddess akan muncul setiap kali.', whatToBring: 'Offering (buah/sayur/bunga) — BUKAN sampah!', reward: 'Meningkatkan FP dengan Goddess. Setelah FP sangat tinggi, bisa menikah dengannya (butuh syarat sangat berat).', description: 'Lempar persembahan ke kolam Goddess untuk bertemu dengannya. Beri offering setiap hari untuk menaikkan FP. Harvest Goddess bisa dijadikan istri jika memenuhi semua syarat.' },

  // === CLIFF PERGI ===
  { id: 'npc_cliff_leaves', character: 'Cliff', title: '❌ Cliff Pergi dari Mineral Town', date: 'Winter 29 (Tahun 1)', time: 'Pagi hari', location: 'Inn / Bus Stop', trigger: 'HANYA terjadi jika kamu TIDAK mengajak Cliff kerja di Winery pada Fall 14.', whatToBring: 'Tidak bisa dicegah.', reward: 'TIDAK ADA — Cliff pergi selamanya dan tidak pernah kembali.', description: 'Jika kamu gagal mengajak Cliff di event Winery Fall 14, dia akan kehilangan harapan dan meninggalkan kota selamanya. Ini adalah salah satu event paling menyedihkan di game.' },

  // === TV SHOPPING UNLOCK ===
  { id: 'npc_tv_shopping', character: 'TV Shopping', title: 'TV Shopping Channel Muncul', date: 'Setiap Sabtu', time: '09:00 (Cek TV)', location: 'Rumahmu (TV)', trigger: 'Setelah upgrade rumah ke Level 2 (punya dapur), periksa TV setiap hari Sabtu untuk melihat produk TV Shopping.', whatToBring: 'Uang untuk membeli alat dapur.', reward: 'Bisa membeli peralatan dapur: Frying Pan, Pot, Oven, Mixer, Whisk, Rolling Pin, Seasoning Set.', description: 'Setiap hari Sabtu, cek TV untuk melihat channel belanja. Satu alat dapur dijual per minggu. Beli semua peralatan untuk bisa memasak semua resep!' },

  // === HARVEST SPRITE TEA PARTY ===
  { id: 'npc_sprite_tea', character: 'Harvest Sprites', title: 'Pesta Teh Harvest Sprites', date: 'Kapan saja (saat FP Sprites tinggi)', time: 'Siang hari', location: 'Rumah Harvest Sprites (belakang Gereja)', trigger: 'Kunjungi rumah Harvest Sprites saat total FP mereka cukup tinggi. Berikan Flour setiap hari.', whatToBring: 'Flour (hadiah favorit Sprites)', reward: 'Diundang ke pesta teh. Harvest Sprites bisa diminta membantu kerja di ladang (menyiram, memanen) selama beberapa hari!', description: 'Setelah berteman baik dengan Harvest Sprites, mereka akan mengajakmu pesta teh. Sprites bisa diminta bantuan untuk bekerja di kebun — sangat berguna saat festival atau saat kamu sibuk!' },

  // === ELLEN SOCKS ===
  { id: 'npc_ellen_socks', character: 'Ellen', title: 'Mendapatkan Kaus Kaki (Socks) dari Ellen', date: 'Winter (hari Rabu)', time: '09:00 - 11:00', location: 'Rumah Ellen', trigger: 'FP Ellen 200+ dan bawa Yarn (benang sulam) saat mengunjunginya di hari Rabu musim dingin.', whatToBring: 'Yarn (Benang Sulam) — didapat dari mesin Yarn Maker.', reward: 'Kaus Kaki (Socks) — gantungkan saat tidur di Winter 24 malam untuk mendapat hadiah dari Thomas (Moonstone dll).', description: 'Berikan Yarn ke Ellen yang tua dan sakit. Dia akan merajutkan kaus kaki untukmu. Kaus kaki ini digunakan pada Starry Night Festival untuk mendapatkan hadiah Natal dari Mayor Thomas!' },
];
