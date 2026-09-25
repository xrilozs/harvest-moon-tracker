export interface Jewel {
  id: string;
  name: string;
  type: 'Truth' | 'Goddess' | 'Kappa';
  location: string;
  howToGet: string;
  image: string;
}

export const jewelsData: Jewel[] = [
  // === TRUTH JEWELS (9 total, tersembunyi di sekitar kota) ===
  { id: 't1', name: 'Jewel of Truth #1', type: 'Truth', location: 'Rumah Anjing (Dog House)', howToGet: 'Periksa bagian atas rumah anjingmu di ladang.', image: '/img/items/JewelofTruth1.svg' },
  { id: 't2', name: 'Jewel of Truth #2', type: 'Truth', location: 'Kandang Kuda', howToGet: 'Periksa tempat minum kuda (water trough) di dalam kandang.', image: '/img/items/JewelofTruth2.svg' },
  { id: 't3', name: 'Jewel of Truth #3', type: 'Truth', location: 'Balap Kuda (Horse Race)', howToGet: 'Tukarkan 1000 Medal di festival Balap Kuda.', image: '/img/items/JewelofTruth3.svg' },
  { id: 't4', name: 'Jewel of Truth #4', type: 'Truth', location: 'Won / Huang', howToGet: 'Beli dari Won seharga 50.000 G di penginapan (Inn).', image: '/img/items/JewelofTruth4.svg' },
  { id: 't5', name: 'Jewel of Truth #5', type: 'Truth', location: 'Tiang Lampu Kota', howToGet: 'Periksa salah satu tiang lampu jalan antara Gereja dan Rose Square.', image: '/img/items/JewelofTruth5.svg' },
  { id: 't6', name: 'Jewel of Truth #6', type: 'Truth', location: 'Perpustakaan Mary', howToGet: 'Periksa rak buku di lantai dua perpustakaan.', image: '/img/items/JewelofTruth6.svg' },
  { id: 't7', name: 'Jewel of Truth #7', type: 'Truth', location: 'TV Desa', howToGet: 'Mainkan dan menangkan game di TV pada malam Tahun Baru (Winter 30).', image: '/img/items/JewelofTruth7.svg' },
  { id: 't8', name: 'Jewel of Truth #8', type: 'Truth', location: 'Kalender Rumahmu', howToGet: 'Periksa kalender yang ada di dalam rumahmu setelah upgrade rumah.', image: '/img/items/JewelofTruth8.svg' },
  { id: 't9', name: 'Jewel of Truth #9', type: 'Truth', location: 'Rumah Mayor Thomas', howToGet: 'Setelah mendapat 8 Truth Jewel sebelumnya, periksa kulkas di rumah Mayor Thomas.', image: '/img/items/JewelofTruth9.svg' },

  // === GODDESS JEWELS (9 total, ditemukan di Spring Mine) ===
  { id: 'g1', name: 'Goddess Jewel #1', type: 'Goddess', location: 'Spring Mine - Lantai 60', howToGet: 'Gali tanah di lantai 60 Spring Mine.', image: '/img/items/GoddessJewel1.svg' },
  { id: 'g2', name: 'Goddess Jewel #2', type: 'Goddess', location: 'Spring Mine - Lantai 102', howToGet: 'Gali tanah di lantai 102 Spring Mine.', image: '/img/items/GoddessJewel2.svg' },
  { id: 'g3', name: 'Goddess Jewel #3', type: 'Goddess', location: 'Spring Mine - Lantai 123', howToGet: 'Gali tanah di lantai 123 Spring Mine.', image: '/img/items/GoddessJewel3.svg' },
  { id: 'g4', name: 'Goddess Jewel #4', type: 'Goddess', location: 'Spring Mine - Lantai 152', howToGet: 'Gali tanah di lantai 152 Spring Mine.', image: '/img/items/GoddessJewel4.svg' },
  { id: 'g5', name: 'Goddess Jewel #5', type: 'Goddess', location: 'Spring Mine - Lantai 155', howToGet: 'Gali tanah di lantai 155 Spring Mine.', image: '/img/items/GoddessJewel5.svg' },
  { id: 'g6', name: 'Goddess Jewel #6', type: 'Goddess', location: 'Spring Mine - Lantai 171', howToGet: 'Gali tanah di lantai 171 Spring Mine.', image: '/img/items/GoddessJewel6.svg' },
  { id: 'g7', name: 'Goddess Jewel #7', type: 'Goddess', location: 'Spring Mine - Lantai 190', howToGet: 'Gali tanah di lantai 190 Spring Mine.', image: '/img/items/GoddessJewel7.svg' },
  { id: 'g8', name: 'Goddess Jewel #8', type: 'Goddess', location: 'Spring Mine - Lantai 202', howToGet: 'Gali tanah di lantai 202 Spring Mine.', image: '/img/items/GoddessJewel8.svg' },
  { id: 'g9', name: 'Goddess Jewel #9', type: 'Goddess', location: 'Spring Mine - Lantai 222', howToGet: 'Gali tanah di lantai 222 Spring Mine.', image: '/img/items/GoddessJewel9.svg' },

  // === KAPPA JEWELS (9 total, ditemukan di Lake/Winter Mine) ===
  { id: 'k1', name: 'Kappa Jewel #1', type: 'Kappa', location: 'Lake Mine - Lantai 0', howToGet: 'Gali tanah di lantai pertama Lake Mine (hanya Winter).', image: '/img/items/KappaJewel1.svg' },
  { id: 'k2', name: 'Kappa Jewel #2', type: 'Kappa', location: 'Lake Mine - Lantai 40', howToGet: 'Gali tanah di lantai 40 Lake Mine.', image: '/img/items/KappaJewel2.svg' },
  { id: 'k3', name: 'Kappa Jewel #3', type: 'Kappa', location: 'Lake Mine - Lantai 60', howToGet: 'Gali tanah di lantai 60 Lake Mine.', image: '/img/items/KappaJewel3.svg' },
  { id: 'k4', name: 'Kappa Jewel #4', type: 'Kappa', location: 'Lake Mine - Lantai 80', howToGet: 'Gali tanah di lantai 80 Lake Mine.', image: '/img/items/KappaJewel4.svg' },
  { id: 'k5', name: 'Kappa Jewel #5', type: 'Kappa', location: 'Lake Mine - Lantai 120', howToGet: 'Gali tanah di lantai 120 Lake Mine.', image: '/img/items/KappaJewel5.svg' },
  { id: 'k6', name: 'Kappa Jewel #6', type: 'Kappa', location: 'Lake Mine - Lantai 140', howToGet: 'Gali tanah di lantai 140 Lake Mine.', image: '/img/items/KappaJewel6.svg' },
  { id: 'k7', name: 'Kappa Jewel #7', type: 'Kappa', location: 'Lake Mine - Lantai 160', howToGet: 'Gali tanah di lantai 160 Lake Mine.', image: '/img/items/KappaJewel7.svg' },
  { id: 'k8', name: 'Kappa Jewel #8', type: 'Kappa', location: 'Lake Mine - Lantai 180', howToGet: 'Gali tanah di lantai 180 Lake Mine.', image: '/img/items/KappaJewel8.svg' },
  { id: 'k9', name: 'Kappa Jewel #9', type: 'Kappa', location: 'Lake Mine - Lantai 255', howToGet: 'Gali tanah di lantai terdalam (255) Lake Mine.', image: '/img/items/KappaJewel9.svg' },
];
