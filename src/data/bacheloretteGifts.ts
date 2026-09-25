import type { GiftPreference } from './npcGifts';

export interface BacheloretteGiftData {
  id: string;
  name: string;
  birthday: string;
  location: string;
  personality: string;
  image: string;
  gifts: GiftPreference[];
}

export const bacheloretteGiftsData: BacheloretteGiftData[] = [
  {
    id: 'ann', name: 'Ann', birthday: 'Summer 17', location: 'Inn (Penginapan)', personality: 'Tomboi, energik, dan pandai memasak. Anak perempuan Doug, pemilik Inn.', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/30/Ann.png',
    gifts: [
      { category: 'Most Loved', items: ['Spa-Boiled Egg', 'Cheese Fondue', 'Pizza', 'Truffle Rice', 'Mushroom Rice', 'Tempura'] },
      { category: 'Loved', items: ['Cheese (semua)', 'Riceball', 'Corn', 'Apple', 'Honey', 'Wild Grape', 'Bamboo Shoot'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Fish (semua)', 'Mushroom', 'Flowers (semua)'] },
      { category: 'Neutral', items: ['Turnip', 'Potato', 'Carrot', 'Onion'] },
      { category: 'Disliked', items: ['Blue Grass', 'Green Grass', 'Red Grass', 'Orange Grass'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Junk Ore', 'Weed', 'Stone', 'Branch'] },
    ]
  },
  {
    id: 'karen', name: 'Karen', birthday: 'Fall 15', location: 'Supermarket', personality: 'Mandiri, tegas, suka wine. Anak perempuan Jeff dan Sasha.', image: '/img/items/Karen.svg',
    gifts: [
      { category: 'Most Loved', items: ['Wine', 'Wild Grape Wine', 'Popcorn', 'French Fries', 'Pizza', 'Tempura', 'Bamboo Shoot'] },
      { category: 'Loved', items: ['Cheese Fondue', 'Sashimi', 'Sushi', 'Apple', 'Pineapple', 'Truffle'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Flowers (semua)', 'Fish (semua)'] },
      { category: 'Neutral', items: ['Turnip', 'Potato', 'Carrot'] },
      { category: 'Disliked', items: ['Blue Grass', 'Green Grass', 'Red Grass', 'Curry Powder'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Junk Ore', 'Weed', 'Chocolate Cookies'] },
    ]
  },
  {
    id: 'mary', name: 'Mary', birthday: 'Winter 20', location: 'Perpustakaan (Library)', personality: 'Pendiam, pemalu, suka membaca dan menulis. Anak Basil dan Anna.', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/aa/Mary.png',
    gifts: [
      { category: 'Most Loved', items: ['Relaxation Tea', 'Vegetable Juice', 'Truffle', 'Bamboo Shoot', 'Mushroom', 'Blue Grass', 'Red Grass', 'Green Grass', 'Yellow Grass'] },
      { category: 'Loved', items: ['Apple', 'Wild Grape', 'Flowers (semua)', 'Chocolate', 'Cheese Cake'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Honey'] },
      { category: 'Neutral', items: ['Turnip', 'Potato', 'Fish (kecil)'] },
      { category: 'Disliked', items: ['Fried Foods'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Junk Ore', 'Weed', 'Fries'] },
    ]
  },
  {
    id: 'elli', name: 'Elli', birthday: 'Spring 16', location: 'Clinic', personality: 'Lembut, penyayang, pekerja keras. Tinggal bersama nenek Ellen dan adik Stu.', image: '/img/items/Elli.svg',
    gifts: [
      { category: 'Most Loved', items: ['Hot Milk', 'Strawberry Milk', 'Relax Tea Leaves', 'Moon Drop Flower', 'Toy Flower', 'Pink Cat Flower'] },
      { category: 'Loved', items: ['Honey', 'Apple', 'Flowers (semua)', 'Chocolate Cake', 'Cheese Cake', 'Cookies'] },
      { category: 'Liked', items: ['Egg (semua)', 'Milk (semua)', 'Cheese (semua)', 'Yarn'] },
      { category: 'Neutral', items: ['Turnip', 'Potato', 'Carrot', 'Fish (semua)'] },
      { category: 'Disliked', items: ['Red Grass', 'Orange Grass', 'Blue Grass'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Junk Ore', 'Weed', 'Fried Foods'] },
    ]
  },
  {
    id: 'popuri', name: 'Popuri', birthday: 'Summer 3', location: 'Poultry Farm', personality: 'Ceria, polos, menyukai bunga dan hewan. Adik Rick, anak Lillia.', image: '/img/items/Popuri.svg',
    gifts: [
      { category: 'Most Loved', items: ['Toy Flower', 'Pink Cat Flower', 'Moondrop Flower', 'Scrambled Eggs', 'Omelet Rice', 'Cake'] },
      { category: 'Loved', items: ['Flowers (semua)', 'Egg (semua)', 'Corn', 'Apple', 'Honey', 'Chocolate'] },
      { category: 'Liked', items: ['Milk (semua)', 'Cheese (semua)', 'Chicken Feed'] },
      { category: 'Neutral', items: ['Turnip', 'Potato', 'Fish (semua)'] },
      { category: 'Disliked', items: ['Herbs (semua)', 'Wine'] },
      { category: 'Hated', items: ['Poisonous Mushroom', 'Junk Ore', 'Weed', 'Stone', 'Branch'] },
    ]
  },
];
