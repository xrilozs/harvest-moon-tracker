export interface GiftPreference {
  category: 'Most Loved' | 'Loved' | 'Liked' | 'Neutral' | 'Disliked' | 'Hated';
  items: string[];
}

export interface NpcGiftData {
  id: string;
  name: string;
  role: string;
  birthday: string;
  image: string;
  gifts: GiftPreference[];
}

export const npcGiftsData: NpcGiftData[] = [
  {
    id: 'doctor', name: 'Doctor (Trent)', role: 'Dokter di Clinic', birthday: 'Fall 17', image: 'https://fogu.com/hm4/img/peeps/doctor.gif',
    gifts: [
      { category: 'Most Loved', items: ['Truffle', 'Poisonous Mushroom', 'Red Grass', 'Elli Leaves'] },
      { category: 'Loved', items: ['Apple', 'Honey', 'Wild Grape', 'Black Grass'] },
      { category: 'Liked', items: ['Milk (semua)', 'Egg (semua)', 'Cheese'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed', 'Stone', 'Branch'] },
      { category: 'Hated', items: ['Blue Grass', 'Green Grass', 'Red Magic Flower', 'Gold Ore'] },
    ]
  },
  {
    id: 'jeff', name: 'Jeff', role: 'Pemilik Supermarket, ayah Karen', birthday: 'Winter 25', image: 'https://fogu.com/hm4/img/peeps/jeff.gif',
    gifts: [
      { category: 'Most Loved', items: ['Turnip', 'Flour', 'Oil'] },
      { category: 'Loved', items: ['Egg (semua)', 'Milk (semua)', 'Bread'] },
      { category: 'Liked', items: ['Apple', 'Honey', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Poisonous Mushroom', 'Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Branch', 'Gold Ore'] },
    ]
  },
  {
    id: 'sasha', name: 'Sasha', role: 'Istri Jeff, ibu Karen', birthday: 'Spring 30', image: 'https://fogu.com/hm4/img/peeps/sasha.gif',
    gifts: [
      { category: 'Most Loved', items: ['Chocolate Cookies', 'Chocolate Cake', 'Pink Diamond'] },
      { category: 'Loved', items: ['Diamond', 'Dress', 'Perfume'] },
      { category: 'Liked', items: ['Flowers (semua)', 'Egg (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weeds'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Bugs'] },
    ]
  },
  {
    id: 'doug', name: 'Doug', role: 'Pemilik Inn, ayah Ann', birthday: 'Winter 11', image: 'https://fogu.com/hm4/img/peeps/doug.gif',
    gifts: [
      { category: 'Most Loved', items: ['Tempura', 'Buckwheat Flour', 'Cheese Fondue'] },
      { category: 'Loved', items: ['Fish (semua)', 'Riceball', 'Wine'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Apple'] },
      { category: 'Disliked', items: ['Poisonous Mushroom', 'Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'basil', name: 'Basil', role: 'Botanist, ayah Mary', birthday: 'Summer 11', image: 'https://fogu.com/hm4/img/peeps/basil.gif',
    gifts: [
      { category: 'Most Loved', items: ['Truffle', 'Mushroom', 'Wild Grape'] },
      { category: 'Loved', items: ['Apple', 'Bamboo Shoot', 'Honey'] },
      { category: 'Liked', items: ['Flowers (semua)', 'Herbs (semua)'] },
      { category: 'Disliked', items: ['Junk Ore', 'Fish'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'anna', name: 'Anna', role: 'Istri Basil, ibu Mary', birthday: 'Fall 23', image: 'https://fogu.com/hm4/img/peeps/anna.gif',
    gifts: [
      { category: 'Most Loved', items: ['Cake', 'Chocolate Cake', 'Jam Bun'] },
      { category: 'Loved', items: ['Flowers (semua)', 'Apple Pie', 'Honey'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Cheese'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Bugs', 'Stone'] },
    ]
  },
  {
    id: 'lillia', name: 'Lillia', role: 'Ibu Popuri & Rick, pemilik Poultry Farm', birthday: 'Spring 19', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b5/Lillia_FoMT.png',
    gifts: [
      { category: 'Most Loved', items: ['Toy Flower', 'Pink Cat Flower', 'Truffle'] },
      { category: 'Loved', items: ['Flowers (semua)', 'Perfume', 'Dress'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Fish (semua)', 'Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'rick', name: 'Rick', role: 'Kakak Popuri, bekerja di Poultry Farm', birthday: 'Fall 27', image: 'https://fogu.com/hm4/img/peeps/rick.gif',
    gifts: [
      { category: 'Most Loved', items: ['Chicken Feed', 'Spa-Boiled Egg', 'Honey'] },
      { category: 'Loved', items: ['Egg (semua)', 'Corn', 'Apple'] },
      { category: 'Liked', items: ['Flowers (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Chocolate', 'Wine'] },
      { category: 'Hated', items: ['Weed', 'Junk Ore', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'cliff', name: 'Cliff', role: 'Pendatang, tinggal di Church/Inn', birthday: 'Summer 6', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/e6/Cliff_and_Cain.jpeg',
    gifts: [
      { category: 'Most Loved', items: ['Wine', 'Curry Rice', 'Tempura'] },
      { category: 'Loved', items: ['Riceball', 'Fish (semua)', 'Apple'] },
      { category: 'Liked', items: ['Flowers (semua)', 'Egg (semua)'] },
      { category: 'Disliked', items: ['Junk Ore', 'Stone'] },
      { category: 'Hated', items: ['Weed', 'Branch', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'gray', name: 'Gray', role: 'Murid pandai besi, cucu Saibara', birthday: 'Winter 6', image: 'https://fogu.com/hm4/img/peeps/gray.gif',
    gifts: [
      { category: 'Most Loved', items: ['Orichalcum', 'Adamantite', 'Mythic Stone'] },
      { category: 'Loved', items: ['Copper Ore', 'Silver Ore', 'Gold Ore', 'Mystrile Ore'] },
      { category: 'Liked', items: ['Honey', 'Apple', 'Cheese'] },
      { category: 'Disliked', items: ['Flowers (semua)', 'Chocolate'] },
      { category: 'Hated', items: ['Junk Ore', 'Weed', 'Branch'] },
    ]
  },
  {
    id: 'saibara', name: 'Saibara', role: 'Pandai besi (Blacksmith)', birthday: 'Spring 11', image: 'https://fogu.com/hm4/img/peeps/saibara.gif',
    gifts: [
      { category: 'Most Loved', items: ['Adamantite', 'Orichalcum', 'Bamboo Shoot'] },
      { category: 'Loved', items: ['Ore (semua kecuali Junk)', 'Wine', 'Tempura'] },
      { category: 'Liked', items: ['Fish (semua)', 'Mushroom', 'Truffle'] },
      { category: 'Disliked', items: ['Chocolate', 'Flowers (semua)'] },
      { category: 'Hated', items: ['Junk Ore', 'Weed', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'carter', name: 'Carter', role: 'Pastor di Church', birthday: 'Fall 20', image: 'https://fogu.com/hm4/img/peeps/carter.gif',
    gifts: [
      { category: 'Most Loved', items: ['Curry Rice', 'Milk (L)', 'Truffle'] },
      { category: 'Loved', items: ['Bread', 'Riceball', 'Wine'] },
      { category: 'Liked', items: ['Egg (semua)', 'Flowers (semua)'] },
      { category: 'Disliked', items: ['Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'harris', name: 'Harris', role: 'Polisi desa', birthday: 'Summer 4', image: 'https://fogu.com/hm4/img/peeps/harris.gif',
    gifts: [
      { category: 'Most Loved', items: ['Wild Grape Wine', 'Cheese Fondue', 'Truffle'] },
      { category: 'Loved', items: ['Wine', 'Fish (semua)', 'Honey'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Junk Ore', 'Chocolate'] },
      { category: 'Hated', items: ['Weed', 'Poisonous Mushroom', 'Bugs'] },
    ]
  },
  {
    id: 'barley', name: 'Barley', role: 'Pemilik Yodel Ranch', birthday: 'Spring 17', image: 'https://fogu.com/hm4/img/peeps/barley.gif',
    gifts: [
      { category: 'Most Loved', items: ['Cheese (L)', 'Milk (L)', 'Truffle'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape'] },
      { category: 'Liked', items: ['Egg (semua)', 'Flowers (semua)'] },
      { category: 'Disliked', items: ['Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'ellen', name: 'Ellen', role: 'Nenek Elli & Stu', birthday: 'Winter 13', image: 'https://fogu.com/hm4/img/peeps/ellen.gif',
    gifts: [
      { category: 'Most Loved', items: ['Hot Milk', 'Yarn', 'Stew'] },
      { category: 'Loved', items: ['Flowers (semua)', 'Apple', 'Honey'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Fish (semua)'] },
      { category: 'Hated', items: ['Weed', 'Junk Ore', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'manna', name: 'Manna', role: 'Istri Duke, pemilik Winery', birthday: 'Fall 11', image: 'https://fogu.com/hm4/img/peeps/manna.gif',
    gifts: [
      { category: 'Most Loved', items: ['Diamond', 'Dress', 'Perfume'] },
      { category: 'Loved', items: ['Flowers (semua)', 'Honey', 'Apple'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Fish (semua)'] },
      { category: 'Hated', items: ['Weed', 'Junk Ore', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'duke', name: 'Duke', role: 'Pemilik Aja Winery', birthday: 'Winter 15', image: 'https://fogu.com/hm4/img/peeps/duke.gif',
    gifts: [
      { category: 'Most Loved', items: ['Tempura', 'Wine', 'Wild Grape'] },
      { category: 'Loved', items: ['Mushroom', 'Truffle', 'Fish (semua)'] },
      { category: 'Liked', items: ['Apple', 'Honey', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Chocolate', 'Flowers (semua)'] },
      { category: 'Hated', items: ['Weed', 'Junk Ore', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'thomas', name: 'Mayor Thomas', role: 'Walikota Mineral Town', birthday: 'Summer 25', image: 'https://fogu.com/hm4/img/peeps/thomas.gif',
    gifts: [
      { category: 'Most Loved', items: ['Truffle', 'Pink Diamond', 'Honey'] },
      { category: 'Loved', items: ['Wine', 'Cheese', 'Apple'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Flowers (semua)'] },
      { category: 'Disliked', items: ['Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'zack', name: 'Zack', role: 'Pengangkut barang (Shipper)', birthday: 'Summer 29', image: 'https://fogu.com/hm4/img/peeps/zack.gif',
    gifts: [
      { category: 'Most Loved', items: ['Pineapple', 'Large Fish', 'Corn'] },
      { category: 'Loved', items: ['Egg (semua)', 'Milk (semua)', 'Apple'] },
      { category: 'Liked', items: ['Flowers (semua)', 'Honey'] },
      { category: 'Disliked', items: ['Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'won', name: 'Won (Huang)', role: 'Pedagang, tinggal di rumah Zack di Pantai', birthday: 'Winter 19', image: 'https://fogu.com/hm4/img/peeps/won.gif',
    gifts: [
      { category: 'Most Loved', items: ['Gold Ore', 'Orichalcum', 'Pink Diamond', 'Diamond', 'Adamantite'] },
      { category: 'Loved', items: ['Alexandrite', 'Emerald', 'Ruby', 'Topaz'] },
      { category: 'Liked', items: ['Ore (semua kecuali Junk)', 'Apple'] },
      { category: 'Disliked', items: ['Flowers (semua)', 'Weeds'] },
      { category: 'Hated', items: ['Junk Ore', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'kai', name: 'Kai', role: 'Penjual makanan musim panas di pantai', birthday: 'Summer 22', image: 'https://fogu.com/hm4/img/peeps/kai.gif',
    gifts: [
      { category: 'Most Loved', items: ['Pineapple', 'Corn', 'Pizza'] },
      { category: 'Loved', items: ['Popcorn', 'Tomato', 'Onion'] },
      { category: 'Liked', items: ['Egg (semua)', 'Flour', 'Oil'] },
      { category: 'Disliked', items: ['Junk Ore', 'Stone'] },
      { category: 'Hated', items: ['Weed', 'Poisonous Mushroom'] },
    ]
  },
  {
    id: 'gotz', name: 'Gotz', role: 'Tukang kayu (Woodcutter)', birthday: 'Fall 2', image: 'https://fogu.com/hm4/img/peeps/gotz.gif',
    gifts: [
      { category: 'Most Loved', items: ['Tempura', 'Mushroom Rice', 'Truffle'] },
      { category: 'Loved', items: ['Fish (semua)', 'Honey', 'Apple'] },
      { category: 'Liked', items: ['Lumber', 'Egg (semua)', 'Milk (semua)'] },
      { category: 'Disliked', items: ['Flowers (semua)', 'Chocolate'] },
      { category: 'Hated', items: ['Weed', 'Junk Ore', 'Poisonous Mushroom'] },
    ]
  },
  // === ANAK-ANAK ===
  {
    id: 'stu', name: 'Stu', role: 'Adik Elli', birthday: 'Fall 5', image: 'https://fogu.com/hm4/img/peeps/stu.gif',
    gifts: [
      { category: 'Most Loved', items: ['Chocolate', 'Chocolate Cake', 'Chocolate Cookies', 'Wild Grape'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Cookies', 'Cake', 'Ice Cream'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Flowers (semua)', 'Candy'] },
      { category: 'Disliked', items: ['Fish (semua)', 'Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Stone', 'Poisonous Mushroom', 'Branch'] },
    ]
  },
  {
    id: 'may', name: 'May', role: 'Cucu Barley', birthday: 'Winter 26', image: 'https://fogu.com/hm4/img/peeps/may.gif',
    gifts: [
      { category: 'Most Loved', items: ['Chocolate', 'Chocolate Cake', 'Honey', 'Apple'] },
      { category: 'Loved', items: ['Cookies', 'Cake', 'Ice Cream', 'Wild Grape', 'Flowers (semua)'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Boots'] },
      { category: 'Disliked', items: ['Fish (semua)', 'Junk Ore'] },
      { category: 'Hated', items: ['Weed', 'Poisonous Mushroom', 'Stone'] },
    ]
  },
  // === HARVEST SPRITES ===
  {
    id: 'chef', name: 'Chef (Merah)', role: 'Harvest Sprite', birthday: 'Fall 14', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d1/Th_Chef.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Red Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'bold', name: 'Bold (Ungu)', role: 'Harvest Sprite', birthday: 'Spring 4', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/94/Th_Bold.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Purple Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'staid', name: 'Staid (Biru Tua)', role: 'Harvest Sprite', birthday: 'Spring 15', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/5d/Th_Staid.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Blue Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'aqua', name: 'Aqua (Cyan)', role: 'Harvest Sprite', birthday: 'Spring 26', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/67/Th_Aqua.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Indigo Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'timid', name: 'Timid (Hijau)', role: 'Harvest Sprite', birthday: 'Summer 16', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/c4/Th_Timid.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Green Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'hoggy', name: 'Hoggy (Kuning)', role: 'Harvest Sprite', birthday: 'Fall 10', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/7e/Th_Hoggy.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Yellow Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'nappy', name: 'Nappy (Orange)', role: 'Harvest Sprite', birthday: 'Winter 22', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/bb/Th_Nappy.png',
    gifts: [
      { category: 'Most Loved', items: ['Flour', 'Bread', 'Riceball', 'Orange Grass'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Wild Grape', 'Mushroom'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Bamboo Shoot'] },
      { category: 'Disliked', items: ['Junk Ore', 'Weed'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Stone', 'Branch'] },
    ]
  }
];
