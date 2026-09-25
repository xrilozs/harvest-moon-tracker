export interface Recipe {
  id: string;
  name: string;
  category: 'No Utensil' | 'Knife' | 'Frying Pan' | 'Pot' | 'Oven' | 'Mixer' | 'Whisk' | 'Rolling Pin' | 'Seasoning Set';
  ingredients: string[];
  utensil: string;
  sellPrice: number;
  image: string;
}

export const recipesData: Recipe[] = [
  // === NO UTENSIL ===
  { id: 'r_spa_egg', name: 'Spa-Boiled Egg', category: 'No Utensil', ingredients: ['Egg (semua)'], utensil: 'Masukkan telur ke Hot Spring', sellPrice: 80, image: '/img/items/Spa-BoiledEgg.svg' },
  { id: 'r_pickled_turnip', name: 'Pickled Turnip', category: 'Knife', ingredients: ['Turnip', 'Knife'], utensil: 'Knife', sellPrice: 60, image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b3/Pickled_Turnip_%28FoMT%29.png' },

  // === KNIFE ===
  { id: 'r_salad', name: 'Salad', category: 'Knife', ingredients: ['Cucumber', 'Tomato', 'Carrot'], utensil: 'Knife', sellPrice: 120, image: 'https://static.wikia.nocookie.net/hmwikia/images/5/5c/Salad_%28FoMT%29.png' },
  { id: 'r_sandwich', name: 'Sandwich', category: 'Knife', ingredients: ['Bread', 'Tomato', 'Cucumber', 'Boiled Egg'], utensil: 'Knife', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/7/79/Sandwich_%28FoMT%29.png' },
  { id: 'r_sashimi', name: 'Sashimi', category: 'Knife', ingredients: ['Medium Fish / Large Fish'], utensil: 'Knife', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/7/75/Sashimi_%28FoMT%29.png' },
  { id: 'r_pickles', name: 'Pickles', category: 'Knife', ingredients: ['Cucumber'], utensil: 'Knife', sellPrice: 60, image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2e/Pickles_%28FoMT%29.png' },
  { id: 'r_sushi', name: 'Sushi', category: 'Knife', ingredients: ['Sashimi', 'Riceball', 'Vinegar'], utensil: 'Knife', sellPrice: 300, image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6d/Sushi.png' },
  { id: 'r_veggie_juice', name: 'Vegetable Juice', category: 'Knife', ingredients: ['Cucumber', 'Cabbage'], utensil: 'Knife + Mixer', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f5/Vegetable_Juice_%28FoMT%29.png' },

  // === FRYING PAN ===
  { id: 'r_scrambled_egg', name: 'Scrambled Eggs', category: 'Frying Pan', ingredients: ['Egg', 'Oil'], utensil: 'Frying Pan', sellPrice: 80, image: 'https://static.wikia.nocookie.net/hmwikia/images/4/4f/Scrambled_Eggs_%28FoMT%29.png' },
  { id: 'r_omelet', name: 'Omelet', category: 'Frying Pan', ingredients: ['Egg', 'Oil', 'Milk'], utensil: 'Frying Pan', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/6/61/Omelet_%28FoMT%29.png' },
  { id: 'r_omelet_rice', name: 'Omelet Rice', category: 'Frying Pan', ingredients: ['Egg', 'Oil', 'Milk', 'Riceball'], utensil: 'Frying Pan', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/0/02/Omelet_Rice_%28FoMT%29.png' },
  { id: 'r_fried_rice', name: 'Fried Rice', category: 'Frying Pan', ingredients: ['Riceball', 'Oil', 'Egg'], utensil: 'Frying Pan', sellPrice: 120, image: 'https://static.wikia.nocookie.net/hmwikia/images/1/1f/Fried_Rice_%28FoMT%29.png' },
  { id: 'r_french_fries', name: 'French Fries', category: 'Frying Pan', ingredients: ['Potato', 'Oil'], utensil: 'Frying Pan', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/9/99/French_Fries_%28FoMT%29.png' },
  { id: 'r_popcorn', name: 'Popcorn', category: 'Frying Pan', ingredients: ['Corn', 'Oil'], utensil: 'Frying Pan', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d6/Popcorn_%28FoMT%29.png' },
  { id: 'r_cornflakes', name: 'Cornflakes', category: 'Frying Pan', ingredients: ['Corn'], utensil: 'Frying Pan', sellPrice: 80, image: 'https://static.wikia.nocookie.net/hmwikia/images/a/ad/Corn_Flakes.png' },
  { id: 'r_tempura', name: 'Tempura', category: 'Frying Pan', ingredients: ['Flour', 'Egg', 'Oil'], utensil: 'Frying Pan', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a5/Tempura_%28FoMT%29.png' },
  { id: 'r_grilled_fish', name: 'Grilled Fish', category: 'Frying Pan', ingredients: ['Medium Fish', 'Oil', 'Soy Sauce'], utensil: 'Frying Pan', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/7/73/Grilled_Fish_%28FoMT%29.png' },
  { id: 'r_pancake', name: 'Pancake', category: 'Frying Pan', ingredients: ['Flour', 'Egg', 'Milk', 'Oil', 'Honey'], utensil: 'Frying Pan', sellPrice: 200, image: '/img/items/Pancake.svg' },
  { id: 'r_pizza', name: 'Pizza', category: 'Frying Pan', ingredients: ['Flour', 'Cheese', 'Ketchup'], utensil: 'Frying Pan + Oven + Rolling Pin', sellPrice: 250, image: 'https://static.wikia.nocookie.net/hmwikia/images/f/fb/Pizza_%28FoMT%29.png' },
  { id: 'r_stir_fry', name: 'Stir Fry', category: 'Frying Pan', ingredients: ['Cabbage', 'Oil', 'Soy Sauce'], utensil: 'Frying Pan + Knife', sellPrice: 120, image: 'https://static.wikia.nocookie.net/hmwikia/images/e/e1/Stir_Fry_%28FoMT%29.png' },

  // === POT ===
  { id: 'r_hot_milk', name: 'Hot Milk', category: 'Pot', ingredients: ['Milk (semua)', 'Sugar'], utensil: 'Pot', sellPrice: 120, image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8d/Hot_Milk_%28FoMT%29.png' },
  { id: 'r_strawberry_milk', name: 'Strawberry Milk', category: 'Pot', ingredients: ['Milk', 'Strawberry', 'Sugar'], utensil: 'Pot', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/c/c5/Strawberry_Milk_%28FoMT%29.png' },
  { id: 'r_boiled_egg', name: 'Boiled Egg', category: 'Pot', ingredients: ['Egg'], utensil: 'Pot', sellPrice: 80, image: 'https://static.wikia.nocookie.net/hmwikia/images/4/41/Boiled_Egg_%28FoMT%29.png' },
  { id: 'r_stew', name: 'Stew', category: 'Pot', ingredients: ['Flour', 'Milk', 'Salt'], utensil: 'Pot', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/b/bf/Stew_%28FoMT%29.png' },
  { id: 'r_curry_rice', name: 'Curry Rice', category: 'Pot', ingredients: ['Riceball', 'Curry Powder'], utensil: 'Pot', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d9/Curry_Rice_%28FoMT%29.png' },
  { id: 'r_cheese_fondue', name: 'Cheese Fondue', category: 'Pot', ingredients: ['Cheese', 'Bread', 'Wine'], utensil: 'Pot', sellPrice: 300, image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6a/Cheese_Fondue_%28FoMT%29.png' },
  { id: 'r_jam_bun', name: 'Jam Bun', category: 'Pot', ingredients: ['Apple Jam', 'Bread'], utensil: 'Pot', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/4/49/Jam_Bun.png' },
  { id: 'r_relaxation_tea', name: 'Relaxation Tea', category: 'Pot', ingredients: ['Relax Tea Leaves', 'Pot'], utensil: 'Pot', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/1/10/Relaxation_Tea_%28FoMT%29.png' },
  { id: 'r_miso_soup', name: 'Miso Soup', category: 'Pot', ingredients: ['Miso Paste', 'Salt'], utensil: 'Pot', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/5/54/Miso_Soup_%28FoMT%29.png' },
  { id: 'r_riceball', name: 'Riceball', category: 'Pot', ingredients: ['Rice Balls (dari Supermarket)'], utensil: 'Pot', sellPrice: 100, image: '/img/items/Riceball.svg' },

  // === OVEN ===
  { id: 'r_bread', name: 'Bread', category: 'Oven', ingredients: ['Flour'], utensil: 'Oven', sellPrice: 100, image: '/img/items/Bread.svg' },
  { id: 'r_cookies', name: 'Cookies', category: 'Oven', ingredients: ['Flour', 'Egg', 'Butter', 'Sugar'], utensil: 'Oven + Rolling Pin', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/9/9d/Cookies_%28FoMT%29.png' },
  { id: 'r_choco_cookies', name: 'Chocolate Cookies', category: 'Oven', ingredients: ['Cookies', 'Chocolate'], utensil: 'Oven', sellPrice: 250, image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8c/Chocolate_Cookies_%28FoMT%29.png' },
  { id: 'r_cake', name: 'Cake', category: 'Oven', ingredients: ['Flour', 'Butter', 'Egg', 'Sugar'], utensil: 'Oven + Mixer', sellPrice: 300, image: 'https://static.wikia.nocookie.net/hmwikia/images/1/1e/Cake_%28FoMT%29.png' },
  { id: 'r_choco_cake', name: 'Chocolate Cake', category: 'Oven', ingredients: ['Cake', 'Chocolate'], utensil: 'Oven + Mixer', sellPrice: 350, image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d0/Chocolate_Cake_%28FoMT%29.png' },
  { id: 'r_cheese_cake', name: 'Cheese Cake', category: 'Oven', ingredients: ['Cheese', 'Egg', 'Milk', 'Sugar'], utensil: 'Oven + Mixer', sellPrice: 350, image: 'https://static.wikia.nocookie.net/hmwikia/images/0/0e/Cheese_Cake_%28FoMT%29.png' },
  { id: 'r_apple_pie', name: 'Apple Pie', category: 'Oven', ingredients: ['Flour', 'Butter', 'Egg', 'Sugar', 'Apple'], utensil: 'Oven + Knife + Rolling Pin', sellPrice: 350, image: 'https://static.wikia.nocookie.net/hmwikia/images/1/17/Apple_Pie_%28FoMT%29.png' },
  { id: 'r_sweet_potato_oven', name: 'Baked Sweet Potato', category: 'Oven', ingredients: ['Sweet Potato', 'Butter', 'Sugar'], utensil: 'Oven', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/5/57/Baked_Sweet_Potato.png' },

  // === MIXER ===
  { id: 'r_butter', name: 'Butter', category: 'Mixer', ingredients: ['Milk (semua)'], utensil: 'Mixer', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a8/Butter_%28FoMT%29.png' },
  { id: 'r_ketchup', name: 'Ketchup', category: 'Mixer', ingredients: ['Tomato', 'Onion'], utensil: 'Mixer', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/7/74/Ketchup_%28FoMT%29.png' },
  { id: 'r_fruit_juice', name: 'Fruit Juice', category: 'Mixer', ingredients: ['Apple', 'Pineapple', 'Wild Grape (pilih salah satu)'], utensil: 'Mixer', sellPrice: 100, image: 'https://static.wikia.nocookie.net/hmwikia/images/a/af/Fruit_Juice_%28FoMT%29.png' },
  { id: 'r_mixed_juice', name: 'Mixed Juice', category: 'Mixer', ingredients: ['Vegetable Juice', 'Fruit Juice'], utensil: 'Mixer', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6c/Mixed_Juice_%28FoMT%29.png' },
  { id: 'r_apple_jam', name: 'Apple Jam', category: 'Mixer', ingredients: ['Apple', 'Sugar', 'Pot'], utensil: 'Pot + Mixer', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/f/ff/Apple_Jam_%28FoMT%29.png' },
  { id: 'r_strawberry_jam', name: 'Strawberry Jam', category: 'Mixer', ingredients: ['Strawberry', 'Sugar', 'Pot'], utensil: 'Pot + Mixer', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/7/72/Strawberry_Jam_%28FoMT%29.png' },
  { id: 'r_grape_jam', name: 'Grape Jam', category: 'Mixer', ingredients: ['Wild Grape', 'Sugar', 'Pot'], utensil: 'Pot + Mixer', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/e/ed/Grape_Jam_%28FoMT%29.png' },

  // === ROLLING PIN ===
  { id: 'r_noodles', name: 'Noodles', category: 'Rolling Pin', ingredients: ['Flour', 'Water'], utensil: 'Rolling Pin + Pot + Knife', sellPrice: 150, image: 'https://static.wikia.nocookie.net/hmwikia/images/2/20/Noodles_%28FoMT%29.png' },
  { id: 'r_curry_bread', name: 'Curry Bread', category: 'Rolling Pin', ingredients: ['Bread', 'Oil', 'Curry Powder'], utensil: 'Rolling Pin + Frying Pan', sellPrice: 250, image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6f/Curry_Bread.png' },

  // === WHISK ===
  { id: 'r_hotcake', name: 'Hotcake (Pancake)', category: 'Whisk', ingredients: ['Flour', 'Egg', 'Milk', 'Oil', 'Honey'], utensil: 'Whisk + Frying Pan', sellPrice: 200, image: '/img/items/Pancake.svg' },

  // === STEAMER (MENGGUNAKAN POT) ===
  { id: 'r_mushroom_rice', name: 'Mushroom Rice', category: 'Pot', ingredients: ['Riceball', 'Mushroom'], utensil: 'Pot', sellPrice: 200, image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d3/Mushroom_Rice.png' },
  { id: 'r_truffle_rice', name: 'Truffle Rice', category: 'Pot', ingredients: ['Riceball', 'Truffle'], utensil: 'Pot', sellPrice: 600, image: 'https://static.wikia.nocookie.net/hmwikia/images/5/54/Truffle_Rice.png' },
  { id: 'r_sweet_potato_steam', name: 'Sweet Potatoes (Steamed)', category: 'Pot', ingredients: ['Sweet Potato'], utensil: 'Pot', sellPrice: 120, image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a6/Sweet_Potatoes.png' },

  // === SEASONING SET ===
  { id: 'r_wild_grape_wine', name: 'Wild Grape Wine', category: 'Seasoning Set', ingredients: ['Wild Grape', 'Wine', 'Purple Grass'], utensil: 'Pot + Seasoning Set', sellPrice: 300, image: '/img/items/WildGrapeWine.svg' },
];
