export interface WildPlant {
  id: string;
  name: string;
  season: 'Spring' | 'Summer' | 'Fall' | 'All';
  sellPrice: number;
  location: string;
  image: string;
}

export const wildPlantsData: WildPlant[] = [
  // === SPRING ===
  { id: 'bamboo_shoot', name: 'Bamboo Shoot', season: 'Spring', sellPrice: 50, location: 'Di belakang Spring Mine, dekat area bambu.', image: '/img/items/BambooShoot.svg' },
  { id: 'blue_grass', name: 'Blue Grass', season: 'Spring', sellPrice: 100, location: 'Mother\'s Hill dan area sekitar ladang.', image: '/img/items/BlueGrass.svg' },
  { id: 'green_grass', name: 'Green Grass', season: 'Spring', sellPrice: 100, location: 'Mother\'s Hill dan area sekitar ladang.', image: '/img/items/GreenGrass.svg' },
  { id: 'spring_moondrop', name: 'Moondrop Flower (Liar)', season: 'Spring', sellPrice: 60, location: 'Tumbuh liar di sekitar Mother\'s Hill.', image: '/img/items/MoondropFlower.svg' },
  { id: 'spring_toy', name: 'Toy Flower (Liar)', season: 'Spring', sellPrice: 100, location: 'Tumbuh liar di sekitar Mother\'s Hill.', image: '/img/items/ToyFlower.svg' },

  // === SUMMER ===
  { id: 'red_grass', name: 'Red Grass', season: 'Summer', sellPrice: 110, location: 'Mother\'s Hill dan area puncak gunung.', image: '/img/items/RedGrass.svg' },
  { id: 'orange_grass_s', name: 'Orange Grass', season: 'Summer', sellPrice: 100, location: 'Mother\'s Hill dan area sekitar Hot Spring.', image: '/img/items/OrangeGrass.svg' },
  { id: 'pink_cat_wild', name: 'Pink Cat Flower (Liar)', season: 'Summer', sellPrice: 60, location: 'Tumbuh di sekitar danau Mother\'s Hill.', image: '/img/items/PinkCatFlower.svg' },
  { id: 'summer_pineapple', name: 'Pineapple (Liar)', season: 'Summer', sellPrice: 50, location: 'Area pantai (Beach).', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Pineapple_%28FoMT%29.png' },

  // === FALL ===
  { id: 'mushroom', name: 'Mushroom', season: 'Fall', sellPrice: 70, location: 'Mother\'s Hill, di bawah pohon-pohon.', image: '/img/items/Mushroom.svg' },
  { id: 'poison_mushroom', name: 'Poisonous Mushroom', season: 'Fall', sellPrice: 100, location: 'Mother\'s Hill, lebih jarang ditemukan. Warna ungu.', image: '/img/items/PoisonousMushroom.svg' },
  { id: 'truffle', name: 'Truffle', season: 'Fall', sellPrice: 500, location: 'Mother\'s Hill, sangat langka. Ditemukan di dekat pohon besar.', image: '/img/items/Truffle.svg' },
  { id: 'wild_grape', name: 'Wild Grape', season: 'Fall', sellPrice: 50, location: 'Puncak Mother\'s Hill dan area vineyard.', image: '/img/items/WildGrape.svg' },
  { id: 'apple', name: 'Apple', season: 'Fall', sellPrice: 50, location: 'Jatuh dari pohon apel dekat gereja (Church).', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Apple_%28FoMT%29.png' },
  { id: 'fall_red_grass', name: 'Red Grass', season: 'Fall', sellPrice: 110, location: 'Mother\'s Hill dan area gunung.', image: '/img/items/RedGrass.svg' },
  { id: 'fall_orange_grass', name: 'Orange Grass', season: 'Fall', sellPrice: 100, location: 'Mother\'s Hill dan area gunung.', image: '/img/items/OrangeGrass.svg' },
  { id: 'magic_red_wild', name: 'Magic Red Flower (Liar)', season: 'Fall', sellPrice: 200, location: 'Mother\'s Hill, sangat jarang.', image: '/img/items/MagicRedFlower.svg' },
];
