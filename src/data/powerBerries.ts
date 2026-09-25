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
  { id: 'pb5', location: 'Horse Race', description: 'Tukarkan 900 Medal di festival Horse Race (Spring 18 atau Fall 18).' },
  { id: 'pb6', location: 'Swimming Festival', description: 'Menangkan lomba renang pada Swimming Festival (Summer 1).' },
  { id: 'pb7', location: 'Mother\'s Hill - Pohon Besar', description: 'Periksa pohon besar di sekitar Mother\'s Hill Summit pada musim Winter.' },
  { id: 'pb8', location: 'TV Shopping', description: 'Beli dari TV Shopping Network pada hari Sabtu. Tersedia setelah membeli beberapa item rumah tangga lainnya.' },
  { id: 'pb9', location: 'Lake Mine - Tersembunyi', description: 'Periksa area di dekat pintu masuk Lake Mine (Winter Mine) saat musim Winter.' },
  { id: 'pb10', location: 'Memancing di Laut (Winter)', description: 'Pancing di laut menggunakan Mystrile Fishing Rod (atau lebih tinggi) pada musim Winter. Power Berry akan muncul sebagai tangkapan langka.' },
];

export const mysticBerryData = {
  id: 'mystic',
  location: 'Kappa (Blue Power Berry)',
  description: 'Lempar Cucumber (Mentimun) ke danau di Mother\'s Hill selama 10 hari berturut-turut (hanya Spring/Summer/Fall). Kappa akan muncul dan memberikan Mystic Berry (Blue Power Berry) yang mengurangi kelelahan.'
};
