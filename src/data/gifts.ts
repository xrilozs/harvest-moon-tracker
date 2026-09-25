export interface Gift {
  id: string;
  name: string;
  source: string;
  howToGet: string;
  image: string;
}

export const giftsData: Gift[] = [
  { id: 'g_fishing_rod', name: 'Fishing Rod', source: 'Zack', howToGet: 'Pergi ke pantai (Beach) pada hari cerah antara jam 07:00 - 10:00 pada hari Sabtu atau Minggu di Spring. Zack akan memberikanmu pancing.', image: '/img/items/FishingRod.svg' },
  { id: 'g_horse', name: 'Kuda (Horse)', source: 'Barley', howToGet: 'Barley menawarkan anak kuda secara otomatis pada Spring Tahun 1. Jika kamu menolak atau tidak merawatnya, kuda akan diambil kembali di Fall.', image: '/img/items/Kuda.svg' },
  { id: 'g_dog', name: 'Anjing (Dog)', source: 'Won / Awal Game', howToGet: 'Kamu mendapatkan anjing di awal game. Won juga kadang menawarkan anjing kedua (berbeda ras).', image: '/img/items/Anjing.svg' },
  { id: 'g_brush', name: 'Brush', source: 'Barley', howToGet: 'Beli sapi pertamamu dari Barley di Yodel Ranch. Dia akan memberikan Brush secara gratis untuk merawat ternakmu.', image: '/img/items/Brush.svg' },
  { id: 'g_milker', name: 'Milker', source: 'Barley', howToGet: 'Didapat bersamaan dengan Brush saat membeli sapi pertama.', image: '/img/items/Milker.svg' },
  { id: 'g_yarn_maker', name: 'Yarn Maker Recipe', source: 'Saibara (Blacksmith)', howToGet: 'Friendship dengan Saibara cukup tinggi (3+ hati). Dia akan menawarkan untuk membuat Yarn Maker.', image: '/img/items/YarnMakerRecipe.svg' },
  { id: 'g_cheese_maker', name: 'Cheese Maker Recipe', source: 'Saibara (Blacksmith)', howToGet: 'Friendship dengan Saibara cukup tinggi (3+ hati). Dia akan menawarkan untuk membuat Cheese Maker.', image: '/img/items/CheeseMakerRecipe.svg' },
  { id: 'g_mayo_maker', name: 'Mayonnaise Maker Recipe', source: 'Saibara (Blacksmith)', howToGet: 'Friendship dengan Saibara cukup tinggi (3+ hati). Dia akan menawarkan Mayonnaise Maker.', image: '/img/items/MayonnaiseMakerRecipe.svg' },
  { id: 'g_blue_feather', name: 'Blue Feather', source: 'Supermarket (Jeff)', howToGet: 'Tersedia di Supermarket setelah kamu memiliki rumah upgrade level 2 (punya dapur). Harga 1000G. Digunakan untuk melamar gadis.', image: '/img/items/BlueFeather.svg' },
  { id: 'g_kitchen', name: 'Kitchen Set', source: 'TV Shopping / Supermarket', howToGet: 'Tersedia setelah upgrade rumah ke level 2 (via Gotz). Beli peralatan masak satu per satu: Knife, Frying Pan, Pot, Oven, Mixer, Rolling Pin, dan Seasoning Set dari TV Shopping Network (Sabtu) atau Supermarket.', image: '/img/items/KitchenSet.svg' },
  { id: 'g_clock', name: 'Clock', source: 'Mayor Thomas', howToGet: 'Mayor Thomas memberikan jam dinding saat mengunjungi rumahmu setelah upgrade.', image: '/img/items/Clock.svg' },
  { id: 'g_large_bed', name: 'Large Bed', source: 'TV Shopping', howToGet: 'Beli dari TV Shopping Network pada hari Sabtu setelah upgrade rumah ke level 2. Diperlukan untuk menikah!', image: '/img/items/LargeBed.svg' },
  { id: 'g_shelf', name: 'Shelf', source: 'TV Shopping', howToGet: 'Beli dari TV Shopping Network pada hari Sabtu. Untuk menyimpan barang.', image: '/img/items/Shelf.svg' },
  { id: 'g_chocolate', name: 'Chocolate', source: 'Gadis-gadis', howToGet: 'Jika ada gadis yang menyukaimu (poin cinta tinggi), dia akan memberikan Chocolate pada Spring Thanksgiving (Spring 14).', image: '/img/items/Chocolate.svg' },
  { id: 'g_cookies_gift', name: 'Cookies (Hadiah)', source: 'Gadis-gadis', howToGet: 'Diberikan oleh gadis yang menyukaimu pada Spring Thanksgiving.', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/9d/Cookies_%28FoMT%29.png' },
  { id: 'g_cake_gift', name: 'Cake (Hadiah Ulang Tahun)', source: 'Warga', howToGet: 'Jika kamu memiliki friendship tinggi dengan warga, mereka akan memberimu hadiah pada hari ulang tahunmu.', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/1e/Cake_%28FoMT%29.png' },
  { id: 'g_recipe_bread', name: 'Bread Recipe', source: 'Ellen', howToGet: 'Friendship tinggi dengan Ellen. Dia akan mengajarkan resep Bread.', image: '/img/items/BreadRecipe.svg' },
  { id: 'g_recipe_cookies', name: 'Cookies Recipe', source: 'Anna', howToGet: 'Friendship tinggi dengan Anna. Dia akan mengajarkan resep Cookies dan kue lainnya.', image: '/img/items/CookiesRecipe.svg' },
  { id: 'g_recipe_tempura', name: 'Tempura Recipe', source: 'Doug', howToGet: 'Friendship tinggi dengan Doug. Dia mengajarkan resep Tempura.', image: '/img/items/TempuraRecipe.svg' },
  { id: 'g_recipe_wine', name: 'Wine Recipe', source: 'Duke', howToGet: 'Friendship tinggi dengan Duke. Dia mengajarkan resep Wild Grape Wine.', image: '/img/items/WineRecipe.svg' },
];
