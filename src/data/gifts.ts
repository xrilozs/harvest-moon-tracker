export interface Gift {
  id: string;
  name: string;
  source: string;
  howToGet: string;
  image: string;
}

export const giftsData: Gift[] = [
  { id: 'g_fishing_rod', name: 'Fishing Rod (Pancingan)', source: 'Zack', howToGet: 'Kunjungi rumah Zack di Pantai (jam 11:00 AM - 4:00 PM) dengan slot alat (tools) kosong di tasmu. Dia akan memberikan pancingan peninggalan Greg.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Fishing_Rod_%28FoMT%29.png' },
  { id: 'g_horse', name: 'Kuda (Horse)', source: 'Barley', howToGet: 'Kunjungi Yodel Ranch pada Spring tahun pertama saat Barley ada di luar. Dia akan menitipkan anak kuda padamu. Jaga baik-baik agar tidak diambil tahun depan.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Horse_%28FoMT%29.png' },
  { id: 'g_socks', name: 'Kaus Kaki (Socks)', source: 'Ellen', howToGet: 'Berikan Yarn (Benang Sulam) ke Ellen saat Winter (jam 09:00 AM - 11:00 AM) pada hari Rabu. Syarat: Ellen harus memiliki FP tinggi (200+). Digunakan untuk festival Starry Night.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Stocking_%28FoMT%29.png' },
  { id: 'g_mayor_gift', name: 'Hadiah Natal Thomas', source: 'Mayor Thomas', howToGet: 'Mayor Thomas akan menaruh hadiah (seperti Moonstone atau Sand Rose) di dalam Kaus Kaki-mu pada malam Winter 25 saat kamu tidur.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Moonstone.png' },
  { id: 'g_chocolate', name: 'Chocolate', source: 'Para Gadis', howToGet: 'Diberikan oleh bachelorette pada Winter 14 (Winter Thanksgiving) jika hati mereka Ungu atau Biru. Mereka akan datang ke kebunmu di jam tertentu.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Chocolate_%28FoMT%29.png' },
  { id: 'g_chococake', name: 'Chocolate Cake', source: 'Para Gadis', howToGet: 'Diberikan oleh bachelorette pada Winter 14 jika hati mereka Hijau, Kuning, Oranye, atau Merah.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Chocolate_Cake_%28FoMT%29.png' },
  { id: 'g_ring', name: 'Cincin (Ring)', source: 'Berbagai Warga', howToGet: 'Terdapat 7 cincin yang bisa didapat: dari Starry Night Festival (gadis), Ulang Tahun (istri), Ulang Tahun Pernikahan (istri), Spring Thanksgiving (pos), Pedometer (72 juta step), dll.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Ring_%28FoMT%29.png' },
  { id: 'g_perfume', name: 'Perfume', source: 'Kai / Festival Pantai', howToGet: 'Memenangkan perlombaan renang di Beach Festival (Summer 1), atau dibeli dari Van jika terhubung ke AWL.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Perfume_%28FoMT%29.png' },
  { id: 'g_golden_lumber', name: 'Golden Lumber', source: 'Mayor Thomas', howToGet: 'Mayor Thomas akan memintamu sebuah barang spesial di Winter 2. Jika kamu berhasil membawakan barang tersebut padanya jam 7 malam, dia akan memberimu Golden Lumber.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Golden_Lumber_%28FoMT%29.png' },
  { id: 'g_ann_box', name: 'Broken Music Box', source: 'Ann', howToGet: 'Saat Ann memiliki hati Biru (Blue Heart Event). Kamu membawanya ke klinik saat sakit perut, lalu dia memberimu kotak musik ini.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Music_Box_%28FoMT%29.png' },
  { id: 'g_popuri_ball', name: 'Mud Ball', source: 'Popuri', howToGet: 'Saat Popuri memiliki hati Biru (Blue Heart Event). Diberikan saat kamu memberinya apel di gereja.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Mud_Ball_%28FoMT%29.png' },
  { id: 'g_mary_book', name: 'Mary\'s Book', source: 'Mary', howToGet: 'Saat Mary memiliki hati Biru (Blue Heart Event). Diberikan padamu untuk dibaca.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Book_%28FoMT%29.png' },
  { id: 'g_elli_flower', name: 'Pressed Flower', source: 'Elli', howToGet: 'Saat Elli memiliki hati Biru (Blue Heart Event). Diberikan padamu sebagai kenang-kenangan.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Pressed_Flower_%28FoMT%29.png' },
  { id: 'g_karen_wine', name: 'Karen\'s Wine', source: 'Karen', howToGet: 'Saat Karen memiliki hati Biru (Blue Heart Event). Diberikan dari kilang anggur milik ayahnya.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Wine_%28FoMT%29.png' },
  { id: 'g_recipe_sandwich', name: 'Resep: Sandwich', source: 'Ellen', howToGet: 'Berikan bahan masakan tertentu padanya saat FP-nya sangat tinggi (200+).', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Sandwich_%28FoMT%29.png' },
  { id: 'g_recipe_icecream', name: 'Resep: Ice Cream', source: 'Barley', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Ice_Cream_%28FoMT%29.png' },
  { id: 'g_recipe_mixedjuice', name: 'Resep: Mixed Juice', source: 'Doctor', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Mixed_Juice_%28FoMT%29.png' },
  { id: 'g_recipe_fondue', name: 'Resep: Cheese Fondue', source: 'Doug', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Cheese_Fondue_%28FoMT%29.png' },
  { id: 'g_recipe_pancake', name: 'Resep: Savory Pancake', source: 'Gotz', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Savory_Pancake_%28FoMT%29.png' },
  { id: 'g_recipe_fries', name: 'Resep: Fried Potato', source: 'May', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/French_Fries_%28FoMT%29.png' },
  { id: 'g_recipe_strawberry', name: 'Resep: Strawberry Milk', source: 'Carter', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Strawberry_Milk_%28FoMT%29.png' },
  { id: 'g_recipe_popcorn', name: 'Resep: Popcorn', source: 'Kai', howToGet: 'Berikan barang kesukaannya saat FP-nya tinggi di musim panas.', image: 'https://harvestmoon.fandom.com/wiki/Special:FilePath/Popcorn_%28FoMT%29.png' },
];
