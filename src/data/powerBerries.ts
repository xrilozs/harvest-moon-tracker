export interface PowerBerry {
  id: string;
  location: string;
  description: string;
}

export const powerBerriesData: PowerBerry[] = [
  { id: 'pb1', location: 'Ladang (Farm)', description: 'Gali tanah di ladangmu menggunakan cangkul. Ditemukan secara acak saat mencangkul.' },
  { id: 'pb2', location: 'Spring Mine - Lantai 100', description: 'Gali tanah menggunakan cangkul di lantai 100 Spring Mine.' },
  { id: 'pb3', location: 'Lake Mine - Lantai 19', description: 'Gali tanah di lantai 19 Lake Mine (Winter Mine). Hanya bisa diakses saat danau membeku di Winter.' },
  { id: 'pb4', location: 'Harvest Goddess Spring', description: 'Lempar hasil panen atau bunga ke Harvest Goddess Spring (kolam air terjun dekat Hot Spring) selama 10 hari berturut-turut. Goddess akan memberikan Power Berry.' },
  { id: 'pb5', location: 'Horse Race (Medal)', description: 'Tukarkan 900 Medal di festival pacuan kuda (Spring 18 atau Fall 18).' },
  { id: 'pb6', location: 'Beach Festival (Frisbee)', description: 'Menangkan lomba Frisbee (tangkap piring terbang) bersama anjing dewasamu pada Beach Festival di tanggal 1 Summer.' },
  { id: 'pb7', location: 'Horse Race (Menang Lomba)', description: 'Ikut serta dan memenangkan perlombaan pacuan kuda dengan kuda dewasamu (Spring 18 atau Fall 18).' },
  { id: 'pb8', location: 'TV Shopping', description: 'Beli dari saluran TV Shopping pada hari Sabtu seharga 10.000 G. Item ini baru tersedia setelah kamu membeli seluruh peralatan dapur.' },
  { id: 'pb9', location: 'Lake Mine - Tersembunyi (Winter)', description: 'Jalan ke belakang pintu masuk Lake Mine (Gua Musim Dingin) saat danau membeku, lalu tekan tombol periksa (A) pada dinding di belakang gua.' },
  { id: 'pb10', location: 'Memancing di Laut (Winter)', description: 'Pancing di laut pada musim Winter menggunakan pancingan level Mystrile (atau lebih tinggi). Power Berry akan muncul sebagai tangkapan langka.' },
];

export const mysticBerryData = {
  id: 'mystic',
  location: 'Kappa (Blue Power Berry)',
  description: 'Lempar Cucumber (Mentimun) ke dalam danau di Mother\'s Hill selama 10 hari berturut-turut (hanya Spring). Kappa akan muncul dan memberikan Blue Power Berry yang berfungsi mengurangi jumlah kelelahan (Fatigue) yang kamu terima.'
};
