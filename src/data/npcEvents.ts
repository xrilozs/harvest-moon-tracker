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
  // === DOCTOR / TRENT ===
  { id: 'npc_doctor_1', character: 'Doctor', title: 'Pemeriksaan Kesehatan', date: 'Acak (saat stamina rendah)', time: 'Pagi', location: 'Rumahmu', trigger: 'Kamu pingsan karena kehabisan stamina atau terlalu lama bekerja hingga lewat tengah malam.', whatToBring: 'Tidak perlu.', reward: 'Obat gratis dari Doctor.', description: 'Jika kamu pingsan karena kelelahan, Doctor akan datang keesokan harinya untuk memeriksa kesehatanmu.' },
  
  // === CLIFF ===
  { id: 'npc_cliff_1', character: 'Cliff', title: 'Cliff Mencari Pekerjaan', date: 'Fall 14 (Tahun 1)', time: '10:00 - 13:00', location: 'Gereja (Church)', trigger: 'Masuk ke Gereja saat Duke sedang mengumumkan lowongan kerja di Winery. Cliff harus masih tinggal di kota.', whatToBring: 'Tidak perlu, tapi kamu harus mengajaknya.', reward: 'Cliff tetap tinggal di Mineral Town dan tidak pergi. Friendship meningkat drastis.', description: 'PENTING! Saat Duke mengumumkan butuh bantuan panen anggur di Winery, ajak Cliff untuk bekerja di sana. Jika tidak diajak, Cliff akan pergi dari kota selamanya setelah Winter!' },
  
  // === CARTER ===
  { id: 'npc_carter_1', character: 'Carter', title: 'Pengakuan di Gereja', date: 'Senin & Rabu', time: '13:00 - 16:00', location: 'Gereja (Church) - Ruang Pengakuan', trigger: 'Masuk ke gereja pada hari Senin atau Rabu antara jam 13:00 - 16:00. Carter akan berada di bilik pengakuan.', whatToBring: 'Tidak perlu.', reward: 'Menghapus "bad deed" poinmu. Berguna jika kamu sering membuang sampah atau menjahili warga.', description: 'Kamu bisa melakukan pengakuan dosa di gereja pada hari Senin dan Rabu. Ini akan mengurangi poin dosa (bad deed) yang mempengaruhi reputasimu.' },

  // === WON / HUANG ===
  { id: 'npc_won_1', character: 'Won', title: 'Won Menjual Apel Emas', date: 'Acak (setelah Year 1)', time: 'Sepanjang hari', location: 'Inn (Penginapan)', trigger: 'Bicara dengan Won di Inn setelah memasuki Year 2. Dia akan sesekali menawarkan item langka secara acak.', whatToBring: 'Uang! Won sering menipu dengan harga mahal.', reward: 'SUGDW Apple / Apple Seeds (untuk menanam pohon apel). Beberapa item Won adalah penipuan, jadi hati-hati!', description: 'Won kadang menawarkan item langka seperti biji apel (Apple Seeds) tapi dengan harga selangit. Beberapa itemnya asli berguna, tapi banyak juga yang penipuan.' },

  // === GOTZ ===
  { id: 'npc_gotz_1', character: 'Gotz', title: 'Upgrade Rumah', date: 'Kapan saja', time: '11:00 - 16:00', location: 'Rumah Gotz (Woodcutter)', trigger: 'Bicara dengan Gotz di rumahnya saat dia sedang tidak bekerja. Kamu harus memiliki cukup uang dan lumber.', whatToBring: 'Uang dan Kayu (Lumber).', reward: 'Upgrade rumah: Level 1 (3000G + 200 Lumber), Level 2 (10000G + 700 Lumber, termasuk dapur!).', description: 'Bicara dengan Gotz untuk meng-upgrade rumahmu. Upgrade ke Level 2 sangat penting karena membuka dapur (Kitchen) untuk memasak!' },

  // === HARVEST SPRITES ===
  { id: 'npc_sprites_1', character: 'Harvest Sprites', title: 'Bantuan Harvest Sprites', date: 'Kapan saja', time: 'Siang hari', location: 'Rumah Harvest Sprites (di belakang Gereja)', trigger: 'Friendship dengan salah satu Harvest Sprite minimal 3 hati. Kunjungi rumah mereka dan pilih opsi "Minta Bantuan".', whatToBring: 'Flour (tepung) sebagai hadiah untuk menaikkan friendship.', reward: 'Mereka akan membantumu mengerjakan ladang (menyiram, memanen) selama beberapa hari!', description: 'Jika friendship dengan Harvest Sprites cukup tinggi, kamu bisa meminta mereka membantu di ladang. Berikan Flour setiap hari untuk menaikkan friendship. Sangat berguna saat kamu sibuk atau festival!' },

  // === DUKE & MANNA ===
  { id: 'npc_duke_1', character: 'Duke', title: 'Panen Anggur di Winery', date: 'Fall 14 (Tahun 1)', time: '10:00', location: 'Winery (Aja Winery)', trigger: 'Otomatis terjadi pada Fall 14 tahun pertama. Duke akan mengumumkan di Gereja bahwa dia butuh bantuan.', whatToBring: 'Tidak perlu.', reward: 'Gaji harian + friendship meningkat. Bisa mengajak Cliff agar dia tidak pergi.', description: 'Duke membutuhkan bantuan untuk memanen anggur. Kamu akan bekerja di winery selama beberapa hari. PENTING: Ajak Cliff untuk bekerja di sini juga!' },

  // === BARLEY ===
  { id: 'npc_barley_1', character: 'Barley', title: 'Mendapatkan Kuda', date: 'Spring (Tahun 1)', time: 'Siang hari', location: 'Yodel Ranch', trigger: 'Barley akan mengunjungi ladangmu secara otomatis pada pertengahan Spring tahun pertama dan menawarkan anak kuda.', whatToBring: 'Tidak perlu.', reward: 'Kuda gratis! Kamu bisa menungganginya setelah dewasa.', description: 'Pada Spring tahun pertama, Barley akan menawarkan anak kuda kepadamu. Terima tawarannya! Kuda bisa ditunggangi setelah dewasa dan diikutkan Horse Race.' },

  // === THOMAS ===
  { id: 'npc_thomas_1', character: 'Mayor Thomas', title: 'Pengiriman (Shipment)', date: 'Setiap hari', time: '17:00', location: 'Shipping Bin (di ladangmu)', trigger: 'Otomatis setiap hari. Zack datang mengambil barang dari Shipping Bin pada jam 17:00.', whatToBring: 'Taruh barang di Shipping Bin sebelum jam 17:00.', reward: 'Uang hasil penjualan (dibayar keesokan pagi).', description: 'Thomas/Zack mengambil barang dari Shipping Bin setiap jam 17:00. Pastikan barang sudah masuk sebelum waktu tersebut!' },

  // === GRAY ===
  { id: 'npc_gray_1', character: 'Gray', title: 'Gray di Blacksmith', date: 'Kapan saja', time: '10:00 - 16:00', location: 'Saibara Blacksmith', trigger: 'Masuk ke Blacksmith saat Gray dan Saibara sedang bekerja. Friendship dengan Gray minimal 2 hati.', whatToBring: 'Tidak perlu.', reward: 'Friendship meningkat. Cerita tentang hubungannya dengan kakeknya (Saibara).', description: 'Gray bekerja sebagai murid pandai besi di tempat kakeknya, Saibara. Kamu bisa melihat interaksi mereka dan belajar tentang latar belakang Gray.' },
];
