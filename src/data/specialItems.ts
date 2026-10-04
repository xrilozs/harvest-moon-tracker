export interface SpecialItem {
  id: string;
  name: string;
  type: string;
  howToGet: string;
  function: string;
  image: string;
}

export const specialItemsData: SpecialItem[] = [
  { 
    id: 'si_golden_lumber', 
    name: 'Golden Lumber', 
    type: 'Material', 
    howToGet: 'Diberikan oleh Mayor Thomas di tanggal 2 Winter (jika memenuhi permintaannya), atau bisa dibeli dari Gotz seharga 100.000 G (setelah kamu memiliki 999 Lumber).', 
    function: 'Digunakan sebagai pagar kayu yang tidak akan pernah hancur. Namun, jika ditaruh di ladang, penduduk desa akan membencimu dan memanggilmu "Moneybags" (Orang Kaya Sombong) setiap pagi.', 
    image: '/img/items/golden_lumber.png' 
  },
  { 
    id: 'si_tea_leaves', 
    name: 'Relaxation Tea Leaves', 
    type: 'Bahan Masakan', 
    howToGet: 'Ikuti Pesta Teh (Tea Party) bersama Harvest Sprites di musim semi. Kamu harus diundang melalui surat yang akan datang jika berteman baik dengan ketujuh Harvest Sprites (bawa hadiah Flour ke rumah mereka antara jam 3-4 PM).', 
    function: 'Gunakan sebagai bahan memasak (menggunakan panci) untuk membuat Relaxation Tea, salah satu minuman terbaik yang mengembalikan banyak stamina dan sangat disukai oleh banyak penduduk.', 
    image: 'https://static.wikia.nocookie.net/hmwikia/images/6/64/Relaxation_Tea_Leaves_%28FoMT%29.png' 
  },
  { 
    id: 'si_frisbee', 
    name: 'Frisbee', 
    type: 'Mainan', 
    howToGet: 'Bisa dibeli dari Won (Huang) di rumah Zack seharga 5.000 G setelah anjingmu berstatus dewasa (setelah musim gugur/Fall tahun pertama).', 
    function: 'Bawa ke papan kayu di pantai (Mineral Beach) selama musim Summer atau Fall. Periksa papan tersebut dengan anjingmu di sebelahmu untuk memainkan mini-game lempar Frisbee. Melatih anjingmu untuk festival Beach Day.', 
    image: '/img/items/frisbee.png' 
  },
  { 
    id: 'si_ketchup_recipe', 
    name: 'Message in a Bottle (Ketchup)', 
    type: 'Resep Rahasia', 
    howToGet: 'Memancing di laut pada musim Spring. Kamu harus menggunakan Fishing Rod level Cursed, Blessed, atau Mythic.', 
    function: 'Berisi pesan rahasia yang mengajarkanmu resep masakan Ketchup (Saus Tomat). Setelah membacanya, kamu otomatis menguasai resep tersebut.', 
    image: 'https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_unAydiA742C3-l6MuJWGq-hwektQiPbtuCp9YjN0jQNyU7V2lG8_WgSJywdHT6SoZr8K8jIIpg-bmtOFU95l-ry4HjFaYsGEdI3F-iPa4RQgPPaZUm=s0-d' 
  },
  { 
    id: 'si_perfume', 
    name: 'Perfume (Parfum)', 
    type: 'Kosmetik', 
    howToGet: 'Dimenangkan dalam perlombaan Balap Kuda (Horse Race) atau sebagai hadiah dari Harvest Goddess di Kuis TV (Tahun Baru) jika menjawab benar berturut-turut.', 
    function: 'Hadiah yang sangat disukai oleh para gadis desa, khususnya Karen dan Elli. Berguna untuk menaikkan FP/Affection mereka secara drastis.', 
    image: '/img/items/parfume.png' 
  },
  { 
    id: 'si_dress', 
    name: 'Dress (Gaun)', 
    type: 'Kosmetik', 
    howToGet: 'Dimenangkan dari perlombaan Balap Kuda (Horse Race) atau kuis TV.', 
    function: 'Sama seperti Parfum, ini adalah hadiah langka yang sangat disukai para gadis desa.', 
    image: '/img/items/dress.png' 
  },
  { 
    id: 'si_facial_pack', 
    name: 'Facial Pack (Masker Wajah)', 
    type: 'Kosmetik', 
    howToGet: 'Dimenangkan dari perlombaan Balap Kuda (Horse Race) dengan menukar medali, atau hadiah dari kuis TV.', 
    function: 'Item kosmetik yang bisa diberikan sebagai hadiah langka. Sangat disukai oleh para gadis desa untuk menaikkan FP mereka.', 
    image: '/img/items/facial.png' 
  },
  { 
    id: 'si_sunblock', 
    name: 'Sunblock (Tabir Surya)', 
    type: 'Kosmetik', 
    howToGet: 'Dimenangkan dari perlombaan Balap Kuda (Horse Race) atau hadiah dari kuis TV.', 
    function: 'Item kosmetik yang bisa diberikan sebagai hadiah langka. Sangat disukai oleh gadis-gadis di desa.', 
    image: '/img/items/sunblock.png' 
  },
  { 
    id: 'si_skin_lotion', 
    name: 'Skin Lotion (Losion Kulit)', 
    type: 'Kosmetik', 
    howToGet: 'Dimenangkan dari perlombaan Balap Kuda (Horse Race) atau hadiah dari kuis TV.', 
    function: 'Item kosmetik spesial. Berfungsi sebagai hadiah yang sangat bagus untuk para gadis desa.', 
    image: '/img/items/lotion.png' 
  },
  { 
    id: 'si_jewelry', 
    name: 'Perhiasan (Necklace, Brooch, dll)', 
    type: 'Kosmetik', 
    howToGet: 'Temui Saibara dan minta dia untuk membuatkannya. Membutuhkan 1 Orichalcum dan biaya 1.000 G. Dibuat dalam 3 hari.', 
    function: 'Bisa diberikan sebagai hadiah yang sangat mahal untuk para gadis desa, atau bisa dijual kembali kepada Won dengan harga tawar-menawar (berkisar di angka 2.000 G per perhiasan).', 
    image: '/img/items/jewelry.png' 
  },
  { 
    id: 'si_socks', 
    name: 'Socks (Kaus Kaki)', 
    type: 'Key Item', 
    howToGet: 'Berikan Yarn (Benang Sulam) kepada Ellen kapan saja antara jam 9:00 AM - 11:00 AM di hari Rabu (musim Winter). Syaratnya kamu harus memiliki FP yang sangat tinggi dengannya.', 
    function: 'Digunakan saat festival Starry Night (Winter 25). Tidurlah di malam hari, dan Mayor Thomas diam-diam akan datang memasukkan hadiah (seperti Moonstone atau Mithril) ke dalam kaus kakimu.', 
    image: '/img/items/sock.png' 
  }
];
