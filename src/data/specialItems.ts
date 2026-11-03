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
    howToGet: 'Tiga cara: (1) Winter 2, Mayor Thomas datang pagi hari meminta satu item (White Grass, Diamond, Truffle, Moonstone, kadang Bracelet) — simpan sampai dia kembali jam 19.00, berikan, dan kamu dapat Golden Lumber. (2) Beli dari Gotz seharga 100.000 G, muncul setelah kamu mengumpulkan 999 Lumber. (3) Hadiah Kuis TV Tahun Baru dengan streak 50-59 jawaban benar.', 
    function: 'Tidak bisa dikirim lewat Shipping Bin. Satu-satunya kegunaan praktis adalah dipajang di rak rumah. Jangan ditaruh di ladang: setiap pagi warga akan datang memarahimu dan memanggilmu "orang kaya sombong" sepanjang hari sampai kayunya kamu pindahkan.', 
    image: '/img/items/golden_lumber.png' 
  },
  { 
    id: 'si_tea_leaves', 
    name: 'Relaxation Tea Leaves', 
    type: 'Bahan Masakan', 
    howToGet: 'Ikuti Pesta Teh (Tea Party) bersama Harvest Sprites di musim semi. Kamu harus diundang melalui surat yang akan datang jika berteman baik dengan ketujuh Harvest Sprites (bawa hadiah Flour ke rumah mereka antara jam 3-4 PM).', 
    function: 'Juga bisa didapat dari Kuis TV Tahun Baru (streak 10-14 benar). Gunakan sebagai bahan memasak (menggunakan panci) untuk membuat Relaxation Tea, salah satu minuman terbaik yang mengembalikan banyak stamina dan sangat disukai oleh banyak penduduk.', 
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
    image: '/img/items/recipe.gif' 
  },
  { 
    id: 'si_perfume', 
    name: 'Perfume (Parfum)', 
    type: 'Kosmetik', 
    howToGet: 'Hadiah Kuis TV Tahun Baru dengan streak 30-39 jawaban benar. Catatan: Perfume TIDAK ada dalam daftar tukar Medal Horse Race — kosmetik yang bisa ditukar Medal hanya Sunblock, Skin Lotion, Facial Pack, dan Dress.', 
    function: 'Hadiah yang sangat disukai oleh para gadis desa, khususnya Karen dan Elli. Berguna untuk menaikkan FP/Affection mereka secara drastis.', 
    image: '/img/items/parfume.png' 
  },
  { 
    id: 'si_dress', 
    name: 'Dress (Gaun)', 
    type: 'Kosmetik', 
    howToGet: 'Tukar 250 Medal Horse Race ke Mayor Thomas (Spring 18 / Fall 18), atau hadiah Kuis TV Tahun Baru dengan streak 40-49 benar.', 
    function: 'Sama seperti Parfum, ini adalah hadiah langka yang sangat disukai para gadis desa.', 
    image: '/img/items/dress.png' 
  },
  { 
    id: 'si_facial_pack', 
    name: 'Facial Pack (Masker Wajah)', 
    type: 'Kosmetik', 
    howToGet: 'Tukar 42 Medal Horse Race ke Mayor Thomas, atau hadiah Kuis TV Tahun Baru dengan streak 24-29 benar.', 
    function: 'Item kosmetik yang bisa diberikan sebagai hadiah langka. Sangat disukai oleh para gadis desa untuk menaikkan FP mereka.', 
    image: '/img/items/facial.png' 
  },
  { 
    id: 'si_sunblock', 
    name: 'Sunblock (Tabir Surya)', 
    type: 'Kosmetik', 
    howToGet: 'Tukar 30 Medal Horse Race ke Mayor Thomas, atau hadiah Kuis TV Tahun Baru dengan streak 15-19 benar. Ini kosmetik termurah untuk ditukar Medal.', 
    function: 'Item kosmetik yang bisa diberikan sebagai hadiah langka. Sangat disukai oleh gadis-gadis di desa.', 
    image: '/img/items/sunblock.png' 
  },
  { 
    id: 'si_skin_lotion', 
    name: 'Skin Lotion (Losion Kulit)', 
    type: 'Kosmetik', 
    howToGet: 'Tukar 35 Medal Horse Race ke Mayor Thomas, atau hadiah Kuis TV Tahun Baru dengan streak 20-23 benar.', 
    function: 'Item kosmetik spesial. Berfungsi sebagai hadiah yang sangat bagus untuk para gadis desa.', 
    image: '/img/items/lotion.png' 
  },
  { 
    id: 'si_jewelry', 
    name: 'Perhiasan (Necklace, Earrings, Bracelet, Brooch)', 
    type: 'Perhiasan', 
    howToGet: 'Dibuat oleh Saibara di Blacksmith: 1.000 G + 1 Orichalcum, selesai dalam 2 hari. Brooch dan Necklace juga bisa ditukar dengan Medal Horse Race (18 dan 20 Medal).', 
    function: 'Hadiah mahal untuk para gadis desa. Rincian keempat perhiasan beserta permata lain ada di halaman Perhiasan & Permata.', 
    image: '/img/items/necklace.png' 
  },
  { 
    id: 'si_socks', 
    name: 'Socks (Kaus Kaki)', 
    type: 'Key Item', 
    howToGet: 'Berteman baik dulu dengan Ellen, lalu datangi rumahnya antara Winter 1 sampai Winter 23, jam 09.00 - 11.00, sambil membawa Yarn. Berikan Yarn-nya dan dia akan merajutkan kaus kaki untukmu. Kaus kaki langsung tergantung di gantungan baju dalam rumahmu.', 
    function: 'Digunakan saat Stocking Festival (Winter 25) — ini festival yang berbeda dari Starry Night Festival di Winter 24. Tidurlah antara jam 21.00 dan tengah malam; Mayor Thomas akan berperan sebagai Sinterklas dan menyelinap meninggalkan hadiah. Dia hanya datang kalau kaus kakimu sudah tergantung. Periksa kaus kaki keesokan paginya — tapi jangan terlalu berharap, hadiahnya biasanya biasa saja.', 
    image: '/img/items/sock.png' 
  }
];
