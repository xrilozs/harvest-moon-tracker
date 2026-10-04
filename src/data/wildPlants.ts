export interface WildPlant {
  id: string;
  name: string;
  season: 'Spring' | 'Summer' | 'Fall' | 'Winter' | 'All';
  sellPrice: number | null;
  location: string;
  image: string;
}

export const wildPlantsData: WildPlant[] = [
  // === SPRING ===
  { id: 'bamboo_shoot', name: 'Bamboo Shoot', season: 'Spring', sellPrice: 50, location: 'Di belakang Spring Mine, dekat area bambu.', image: '/img/items/bamboo_shoot.jpg' },
  { id: 'blue_grass', name: 'Blue Grass', season: 'Spring', sellPrice: 100, location: 'Mother\'s Hill dan area sekitar ladang.', image: '/img/items/blue_grass.png' },
  { id: 'green_grass', name: 'Green Grass', season: 'Spring', sellPrice: 100, location: 'Mother\'s Hill dan area sekitar ladang.', image: '/img/items/green_grass.png' },
  { id: 'spring_moondrop', name: 'Moondrop Flower (Liar)', season: 'Spring', sellPrice: null, location: 'Tumbuh liar di sekitar Mother\'s Hill.', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a8/Moondrop.png' },
  { id: 'spring_toy', name: 'Toy Flower (Liar)', season: 'Spring', sellPrice: null, location: 'Tumbuh liar di sekitar Mother\'s Hill.', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d5/Toy.png' },

  // === SUMMER ===
  { id: 'red_grass', name: 'Red Grass', season: 'Summer', sellPrice: 110, location: 'Mother\'s Hill dan area puncak gunung.', image: '/img/items/red_grass.png' },
  { id: 'orange_grass_s', name: 'Orange Grass', season: 'Summer', sellPrice: 100, location: 'Area Pantai (Beach).', image: '/img/items/orange_grass.png' },
  { id: 'wild_grape', name: 'Wild Grape', season: 'Summer', sellPrice: 50, location: 'Di sekitar Danau dan rumah Gotz', image: '/img/items/grape.png' },
  { id: 'pink_cat_wild', name: 'Pink Cat Flower (Liar)', season: 'Summer', sellPrice: null, location: 'Tumbuh di sekitar Mother\'s Hill.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/3c/Pink_Cat.png' },

  // === FALL ===
  { id: 'apple', name: 'Apple', season: 'Fall', sellPrice: 50, location: 'Jatuh dari pohon besar di ladangmu setiap hari.', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Apple_%28FoMT%29.png' },
  { id: 'mushroom', name: 'Mushroom', season: 'Fall', sellPrice: 70, location: 'Mother\'s Hill, di bawah pohon-pohon, dan di belakang gereja.', image: '/img/items/mushroom.png' },
  { id: 'poison_mushroom', name: 'Poisonous Mushroom', season: 'Fall', sellPrice: 100, location: 'Mother\'s Hill dan di dekat rumah Gotz.', image: '/img/items/poisonous_mushroom.png' },
  { id: 'truffle', name: 'Truffle', season: 'Fall', sellPrice: 500, location: 'Mother\'s Hill dan di belakang gereja.', image: '/img/items/truffle.png' },
  { id: 'fall_green_grass', name: 'Green Grass', season: 'Fall', sellPrice: 100, location: 'Mother\'s Hill dan area gunung.', image: '/img/items/green_grass.png' },
  { id: 'fall_indigo_grass', name: 'Indigo Grass', season: 'Fall', sellPrice: 100, location: 'Area pantai.', image: '/img/items/blue_grass.png' },
  { id: 'blue_magic_grass', name: 'Blue magic grass', season: 'Fall', sellPrice: null, location: 'Mother\'s Hill.', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/08/Blue_Magic_Grass.PNG' },

  //WINTER
  { id: 'winter_white_grass', name: 'White Grass', season: 'Winter', sellPrice: 150, location: 'Dekat rumah Gotz', image: '/img/items/white_grass.png' },

];
