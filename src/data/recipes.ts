export interface Recipe {
  id: string;
  name: string;
  category: 'No Utensil' | 'Knife' | 'Frying Pan' | 'Pot' | 'Oven' | 'Mixer' | 'Whisk' | 'Rolling Pin' | 'Seasoning Set';
  ingredients: string[];
  utensil: string;
  image: string;
}

export const recipesData: Recipe[] = [
  // === NO UTENSIL ===
  { id: 'r_spa_egg', name: 'Spa-Boiled Egg', category: 'No Utensil', ingredients: ['Egg (lempar ke Hot Spring)'], utensil: 'Lempar Egg ke Hot Spring', image: '/img/items/spa_egg.png' },
  { id: 'r_pickled_turnip', name: 'Pickled Turnip', category: 'No Utensil', ingredients: ['Turnip', 'Vinegar'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b3/Pickled_Turnip_%28FoMT%29.png' },
  { id: 'r_pickled_cucumber', name: 'Pickled Cucumber', category: 'No Utensil', ingredients: ['Cucumber', 'Vinegar'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2e/Pickles_%28FoMT%29.png' },
  { id: 'r_salad', name: 'Salad', category: 'No Utensil', ingredients: ['Cucumber', 'Tomato', 'Carrot'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/5c/Salad_%28FoMT%29.png' },

  // === KNIFE ===
  { id: 'r_sashimi', name: 'Sashimi', category: 'Knife', ingredients: ['Medium Fish / Large Fish'], utensil: 'Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/75/Sashimi_%28FoMT%29.png' },
  { id: 'r_sandwich', name: 'Sandwich', category: 'Knife', ingredients: ['Bread', 'Tomato / Cucumber / Boiled Egg'], utensil: 'Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/79/Sandwich_%28FoMT%29.png' },
  { id: 'r_sushi', name: 'Sushi', category: 'No Utensil', ingredients: ['Sashimi', 'Riceball', 'Vinegar'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6d/Sushi.png' },
  { id: 'r_stir_fry', name: 'Stir Fry', category: 'Knife', ingredients: ['Cabbage', 'Oil', 'Soy Sauce'], utensil: 'Knife + Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/e1/Stir_Fry_%28FoMT%29.png' },
  { id: 'r_veggie_juice', name: 'Vegetable Juice', category: 'Knife', ingredients: ['Cucumber', 'Cabbage'], utensil: 'Knife + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f5/Vegetable_Juice_%28FoMT%29.png' },

  // === FRYING PAN ===
  { id: 'r_scrambled_egg', name: 'Scrambled Eggs', category: 'Frying Pan', ingredients: ['Egg', 'Oil'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/4f/Scrambled_Eggs_%28FoMT%29.png' },
  { id: 'r_omelet', name: 'Omelet', category: 'Frying Pan', ingredients: ['Egg', 'Oil', 'Milk'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/61/Omelet_%28FoMT%29.png' },
  { id: 'r_omelet_rice', name: 'Omelet Rice', category: 'Frying Pan', ingredients: ['Egg', 'Oil', 'Milk', 'Riceball'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/02/Omelet_Rice_%28FoMT%29.png' },
  { id: 'r_fried_rice', name: 'Fried Rice', category: 'Frying Pan', ingredients: ['Riceball', 'Oil', 'Egg'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/1f/Fried_Rice_%28FoMT%29.png' },
  { id: 'r_french_fries', name: 'French Fries', category: 'Frying Pan', ingredients: ['Potato', 'Oil'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/99/French_Fries_%28FoMT%29.png' },
  { id: 'r_popcorn', name: 'Popcorn', category: 'Frying Pan', ingredients: ['Corn', 'Oil'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d6/Popcorn_%28FoMT%29.png' },
  { id: 'r_cornflakes', name: 'Cornflakes', category: 'Frying Pan', ingredients: ['Corn'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/ad/Corn_Flakes.png' },
  { id: 'r_tempura', name: 'Tempura', category: 'Frying Pan', ingredients: ['Flour', 'Egg', 'Oil'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a5/Tempura_%28FoMT%29.png' },
  { id: 'r_grilled_fish', name: 'Grilled Fish', category: 'Frying Pan', ingredients: ['Medium Fish', 'Oil', 'Soy Sauce'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/73/Grilled_Fish_%28FoMT%29.png' },
  { id: 'r_savory_pancake', name: 'Savory Pancake', category: 'Frying Pan', ingredients: ['Flour', 'Cabbage', 'Egg', 'Oil'], utensil: 'Frying Pan + Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/58/Savory_Pancake_%28FoMT%29.png' },
  { id: 'r_pizza', name: 'Pizza', category: 'Frying Pan', ingredients: ['Flour', 'Cheese', 'Ketchup'], utensil: 'Frying Pan + Oven + Rolling Pin', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/fb/Pizza_%28FoMT%29.png' },
  { id: 'r_fried_noodles', name: 'Fried Noodles', category: 'Frying Pan', ingredients: ['Noodles', 'Oil', 'Egg'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/20/Noodles_%28FoMT%29.png' },

  // === POT ===
  { id: 'r_hot_milk', name: 'Hot Milk', category: 'Pot', ingredients: ['Milk (semua)', 'Sugar'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8d/Hot_Milk_%28FoMT%29.png' },
  { id: 'r_strawberry_milk', name: 'Strawberry Milk', category: 'Pot', ingredients: ['Milk', 'Strawberry', 'Sugar'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/c5/Strawberry_Milk_%28FoMT%29.png' },
  { id: 'r_boiled_egg', name: 'Boiled Egg', category: 'Pot', ingredients: ['Egg'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/41/Boiled_Egg_%28FoMT%29.png' },
  { id: 'r_stew', name: 'Stew', category: 'Pot', ingredients: ['Flour', 'Milk', 'Salt'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/bf/Stew_%28FoMT%29.png' },
  { id: 'r_curry_rice', name: 'Curry Rice', category: 'Pot', ingredients: ['Riceball', 'Curry Powder'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d9/Curry_Rice_%28FoMT%29.png' },
  { id: 'r_cheese_fondue', name: 'Cheese Fondue', category: 'Pot', ingredients: ['Cheese', 'Bread', 'Wine'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6a/Cheese_Fondue_%28FoMT%29.png' },
  { id: 'r_jam_bun', name: 'Jam Bun', category: 'Pot', ingredients: ['Apple Jam', 'Bread'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/49/Jam_Bun.png' },
  { id: 'r_relaxation_tea', name: 'Relaxation Tea', category: 'Pot', ingredients: ['Relax Tea Leaves'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/10/Relaxation_Tea_%28FoMT%29.png' },
  { id: 'r_miso_soup', name: 'Miso Soup', category: 'Pot', ingredients: ['Miso Paste', 'Salt'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/54/Miso_Soup_%28FoMT%29.png' },
  { id: 'r_rice_gruel', name: 'Rice Gruel', category: 'Pot', ingredients: ['Riceball', 'Salt'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/69/Rice_Gruel.png' },
  { id: 'r_noodles', name: 'Noodles', category: 'Pot', ingredients: ['Flour'], utensil: 'Pot + Rolling Pin + Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/20/Noodles_%28FoMT%29.png' },
  { id: 'r_tempura_noodles', name: 'Tempura Noodles', category: 'Pot', ingredients: ['Noodles', 'Tempura', 'Soy Sauce'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/fe/Tempura_Noodles_%28FoMT%29.png' },
  { id: 'r_mushroom_rice', name: 'Mushroom Rice', category: 'Pot', ingredients: ['Riceball', 'Mushroom'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d3/Mushroom_Rice.png' },
  { id: 'r_truffle_rice', name: 'Truffle Rice', category: 'Pot', ingredients: ['Riceball', 'Truffle'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/54/Truffle_Rice.png' },
  { id: 'r_sweet_potato_steam', name: 'Sweet Potatoes (Steamed)', category: 'Pot', ingredients: ['Sweet Potato'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a6/Sweet_Potatoes.png' },

  // === OVEN ===
  // { id: 'r_bread', name: 'Bread', category: 'Oven', ingredients: ['Flour'], utensil: 'Oven', image: '/img/items/Bread.svg' },
  { id: 'r_cookies', name: 'Cookies', category: 'Oven', ingredients: ['Flour', 'Egg', 'Butter', 'Sugar'], utensil: 'Oven + Rolling Pin', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/9d/Cookies_%28FoMT%29.png' },
  { id: 'r_choco_cookies', name: 'Chocolate Cookies', category: 'Oven', ingredients: ['Cookies', 'Chocolate'], utensil: 'Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8c/Chocolate_Cookies_%28FoMT%29.png' },
  { id: 'r_cake', name: 'Cake', category: 'Oven', ingredients: ['Flour', 'Butter', 'Egg', 'Sugar'], utensil: 'Oven + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/1e/Cake_%28FoMT%29.png' },
  { id: 'r_choco_cake', name: 'Chocolate Cake', category: 'Oven', ingredients: ['Cake', 'Chocolate'], utensil: 'Oven + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d0/Chocolate_Cake_%28FoMT%29.png' },
  { id: 'r_cheese_cake', name: 'Cheese Cake', category: 'Oven', ingredients: ['Cheese', 'Egg', 'Milk', 'Sugar'], utensil: 'Oven + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/0e/Cheese_Cake_%28FoMT%29.png' },
  { id: 'r_apple_pie', name: 'Apple Pie', category: 'Oven', ingredients: ['Flour', 'Butter', 'Egg', 'Sugar', 'Apple'], utensil: 'Oven + Knife + Rolling Pin', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/17/Apple_Pie_%28FoMT%29.png' },
  { id: 'r_sweet_potato_oven', name: 'Baked Sweet Potato', category: 'Oven', ingredients: ['Sweet Potato', 'Butter', 'Sugar'], utensil: 'Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/57/Baked_Sweet_Potato.png' },

  // === MIXER ===
  { id: 'r_butter', name: 'Butter', category: 'Mixer', ingredients: ['Milk (semua)'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a8/Butter_%28FoMT%29.png' },
  // { id: 'r_cheese', name: 'Cheese', category: 'Mixer', ingredients: ['Milk (semua)'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/0e/Cheese_Cake_%28FoMT%29.png' },
  { id: 'r_ketchup', name: 'Ketchup', category: 'Mixer', ingredients: ['Tomato', 'Onion'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/74/Ketchup_%28FoMT%29.png' },
  { id: 'r_fruit_juice', name: 'Fruit Juice', category: 'Mixer', ingredients: ['Apple / Pineapple / Wild Grape / Strawberry'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/af/Fruit_Juice_%28FoMT%29.png' },
  { id: 'r_mixed_juice', name: 'Mixed Juice', category: 'Mixer', ingredients: ['Vegetable Juice', 'Fruit Juice'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6c/Mixed_Juice_%28FoMT%29.png' },
  { id: 'r_fruit_latte', name: 'Fruit Latte', category: 'Mixer', ingredients: ['Fruit Juice', 'Milk'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/39/Fruit_Latte_%28FoMT%29.png' },
  { id: 'r_veggie_latte', name: 'Vegetable Latte', category: 'Mixer', ingredients: ['Vegetable Juice', 'Milk'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f5/Vegetable_Juice_%28FoMT%29.png' },
  { id: 'r_mixed_latte', name: 'Mixed Latte', category: 'Mixer', ingredients: ['Mixed Juice', 'Milk'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2d/Mixed_Latte_%28FoMT%29.png' },
  { id: 'r_apple_jam', name: 'Apple Jam', category: 'Mixer', ingredients: ['Apple', 'Sugar', 'Pot'], utensil: 'Pot + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/ff/Apple_Jam_%28FoMT%29.png' },
  { id: 'r_strawberry_jam', name: 'Strawberry Jam', category: 'Mixer', ingredients: ['Strawberry', 'Sugar', 'Pot'], utensil: 'Pot + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/72/Strawberry_Jam_%28FoMT%29.png' },
  { id: 'r_grape_jam', name: 'Grape Jam', category: 'Mixer', ingredients: ['Wild Grape', 'Sugar', 'Pot'], utensil: 'Pot + Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/ed/Grape_Jam_%28FoMT%29.png' },
  { id: 'r_pineapple_juice', name: 'Pineapple Juice', category: 'Mixer', ingredients: ['Pineapple'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/af/Fruit_Juice_%28FoMT%29.png' },
  { id: 'r_tomato_juice', name: 'Tomato Juice', category: 'Mixer', ingredients: ['Tomato'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/90/Tomato_Juice_%28FoMT%29.png' },

  // === ROLLING PIN ===
  { id: 'r_curry_bread', name: 'Curry Bread', category: 'Rolling Pin', ingredients: ['Bread', 'Oil', 'Curry Powder'], utensil: 'Rolling Pin + Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/02/Curry_Bread.png' },

  // === WHISK ===
  { id: 'r_hotcake', name: 'Pancakes', category: 'Whisk', ingredients: ['Flour', 'Egg', 'Milk', 'Oil', 'Honey'], utensil: 'Whisk + Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/7c/Pancakes_%28FoMT%29.png' },

  // === SEASONING SET ===
  { id: 'r_wild_grape_wine', name: 'Wild Grape Wine', category: 'Seasoning Set', ingredients: ['Wild Grape', 'Wine', 'Purple Grass'], utensil: 'Pot + Seasoning Set', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/c3/Wild_Grape_Juice_%28FoMT%29.png' },
  { id: 'r_greens', name: 'Greens', category: 'Seasoning Set', ingredients: ['Spinach', 'Soy Sauce'], utensil: 'Pot + Seasoning Set', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/5c/Salad_%28FoMT%29.png' },

  // === ADDED FROM WIKI ===
  { id: 'r_mayonnaise_s', name: 'Mayonnaise (S)', category: 'Whisk', ingredients: ['Regular Quality Egg', 'Oil'], utensil: 'Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6c/Mayonnaise_%28S%29.png' },
  { id: 'r_mayonnaise_m', name: 'Mayonnaise (M)', category: 'Whisk', ingredients: ['Good Quality Egg', 'Oil'], utensil: 'Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/44/Mayonnaise_%28M%29.png' },
  { id: 'r_mayonnaise_l', name: 'Mayonnaise (L)', category: 'Whisk', ingredients: ['High Quality Egg', 'Oil'], utensil: 'Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/01/Mayonnaise_%28L%29.png' },
  { id: 'r_mayonnaise_g', name: 'Mayonnaise (G)', category: 'Whisk', ingredients: ['Golden Egg', 'Oil'], utensil: 'Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a5/Mayonnaise_%28G%29.png' },
  { id: 'r_mayonnaise_p', name: 'Mayonnaise (P)', category: 'Whisk', ingredients: ['P Egg', 'Oil'], utensil: 'Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/16/Mayonnaise_%28P%29.png' },
  { id: 'r_mayonnaise_x', name: 'Mayonnaise (X)', category: 'Whisk', ingredients: ['X Egg', 'Oil'], utensil: 'Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f9/Mayonnaise_%28X%29.png' },
  { id: 'r_x_egg', name: 'X Egg', category: 'No Utensil', ingredients: ['Regular Quality Egg', 'Good Quality Egg', 'High Quality Egg', 'Golden Egg', 'P Egg'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2d/X_Egg.png' },
  { id: 'r_milk_x', name: 'Milk (X)', category: 'No Utensil', ingredients: ['Milk (S)', 'Milk (M)', 'Milk (L)', 'Milk (G)', 'Milk (P)'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/34/Milk_%28X%29.png' },
  { id: 'r_cheese_x', name: 'Cheese (X)', category: 'No Utensil', ingredients: ['Cheese (S)', 'Cheese (M)', 'Cheese (L)', 'Cheese (G)', 'Cheese (P)'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/94/Cheese_%28X%29_%28FoMT%29.png' },
  { id: 'r_wild_grape_juice', name: 'Wild Grape Juice', category: 'Pot', ingredients: ['Wild Grape', 'Wine', 'Purple Grass'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/c3/Wild_Grape_Juice_%28FoMT%29.png' },
  { id: 'r_pickles', name: 'Pickles', category: 'No Utensil', ingredients: ['Cucumber'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2e/Pickles_%28FoMT%29.png' },
  { id: 'r_corn_flakes', name: 'Corn Flakes', category: 'Oven', ingredients: ['Corn'], utensil: 'Oven,  Rolling Pin', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/ad/Corn_Flakes.png' },
  { id: 'r_baked_corn', name: 'Baked Corn', category: 'Oven', ingredients: ['Corn'], utensil: 'Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6a/Baked_Corn.png' },
  { id: 'r_pumpkin_pudding', name: 'Pumpkin Pudding', category: 'Pot', ingredients: ['Any Egg', 'any Milk', 'Pumpkin'], utensil: 'Pot, Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/44/Pumpkin_Pudding.png' },
  { id: 'r_pumpkin_stew', name: 'Pumpkin Stew', category: 'Pot', ingredients: ['Pumpkin'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/35/Pumpkin_Stew.png' },
  { id: 'r_happy_eggplant', name: 'Happy Eggplant', category: 'Frying Pan', ingredients: ['Eggplant'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/22/Happy_Eggplant.png' },
  { id: 'r_sweet_potatoes', name: 'Sweet Potatoes', category: 'Pot', ingredients: ['Butter', 'any Egg', 'Sweet Potato'], utensil: 'Pot, Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a6/Sweet_Potatoes.png' },
  { id: 'r_pudding', name: 'Pudding', category: 'Pot', ingredients: ['Any Egg', 'any Milk'], utensil: 'Pot, Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/c6/Pudding_%28FoMT%29.png' },
  { id: 'r_apple_souffle', name: 'Apple Souffle', category: 'Frying Pan', ingredients: ['Any Apple'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b8/Apple_Souffle_%28FoMT%29.png' },
  { id: 'r_bamboo_rice', name: 'Bamboo Rice', category: 'No Utensil', ingredients: ['Bamboo Shoot', 'Rice Ball'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/7e/Bamboo_Rice_%28FoMT%29.png' },
  { id: 'r_grape_juice', name: 'Grape Juice', category: 'Mixer', ingredients: ['Wild Grape'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/af/Grape_Juice_%28FoMT%29.png' },
  { id: 'r_dinner_roll', name: 'Dinner Roll', category: 'No Utensil', ingredients: ['Bread', 'Butter'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f9/Dinner_Roll.png' },
  { id: 'r_raisin_bread', name: 'Raisin Bread', category: 'No Utensil', ingredients: ['Bread', 'Wild Grapes'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/cd/Raisin_Bread.png' },
  { id: 'r_toast', name: 'Toast', category: 'Oven', ingredients: ['Bread'], utensil: 'Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/32/Toast.png' },
  { id: 'r_french_toast', name: 'French Toast', category: 'Frying Pan', ingredients: ['Bread', 'any Egg', 'Oil'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/f/f7/French_Toast_%28FoMT%29.png' },
  { id: 'r_chirashi_sushi', name: 'Chirashi Sushi', category: 'Knife', ingredients: ['Scrambled Eggs', 'Sashimi', 'Rice Ball'], utensil: 'Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d5/Chirashi_Sushi_%28FoMT%29.png' },
  { id: 'r_curry_noodles', name: 'Curry Noodles', category: 'Pot', ingredients: ['Noodles', 'Curry Powder'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/e/e5/Curry_Noodles_%28FoMT%29.png' },
  { id: 'r_buckwheat_noodles', name: 'Buckwheat Noodles', category: 'Knife', ingredients: ['Buckwheat Flour'], utensil: 'Pot, Knife, Rolling Pin', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/31/Buckwheat_Noodles_%28FoMT%29.png' },
  { id: 'r_tempura_buckwheat_noodles', name: 'Tempura Buckwheat Noodles', category: 'Pot', ingredients: ['Tempura', 'Buckwheat Noodles'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/3/38/Tempura_Buckwheat_Noodles_%28FoMT%29.png' },
  { id: 'r_fried_buckwheat_noodles', name: 'Fried Buckwheat Noodles', category: 'Frying Pan', ingredients: ['Buckwheat Noodles', 'any Egg', 'Oil'], utensil: 'Frying Pan', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a9/Fried_Buckwheat_Noodles_%28FoMT%29.png' },
  { id: 'r_buckwheat_chips', name: 'Buckwheat Chips', category: 'Pot', ingredients: ['Buckwheat Flour'], utensil: 'Pot, Rolling Pin', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/47/Buckwheat_Chips_%28FoMT%29.png' },
  { id: 'r_mountain_stew', name: 'Mountain Stew', category: 'Knife', ingredients: ['Carrot', 'Mushroom', 'Bamboo Shoot'], utensil: 'Pot, Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/d/d6/Mountain_Stew_%28FoMT%29.png' },
  { id: 'r_moon_dumpling', name: 'Moon Dumpling', category: 'No Utensil', ingredients: ['Dumpling Powder'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/64/Moon_Dumplings_%28FoMT%29.png' },
  { id: 'r_roasted_rice_cake', name: 'Roasted Rice Cake', category: 'Oven', ingredients: ['Rice Cake'], utensil: 'Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2b/Roasted_Rice_Cake.png' },
  { id: 'r_toasted_rice_ball', name: 'Toasted Rice Ball', category: 'Oven', ingredients: ['Rice Ball'], utensil: 'Oven', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/b8/Toasted_Rice_Ball.png' },
  { id: 'r_tempura_rice', name: 'Tempura Rice', category: 'No Utensil', ingredients: ['Rice Ball', 'Tempura'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/07/Tempura_Rice.png' },
  { id: 'r_egg_over_rice', name: 'Egg Over Rice', category: 'Pot', ingredients: ['Any Egg', 'Rice Ball'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/a/a2/Egg_Over_Rice.png' },
  { id: 'r_candied_potato', name: 'Candied Potato', category: 'Pot', ingredients: ['Sweet Potato', 'Honey'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/9/96/Candied_Potato.png' },
  { id: 'r_potato_pancakes', name: 'Potato Pancakes', category: 'Knife', ingredients: ['Potato', 'Onion', 'any Egg', 'Oil', 'Flour'], utensil: 'Frying Pan, Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/b/bb/Potato_Pancakes.png' },
  { id: 'r_fish_sticks', name: 'Fish Sticks', category: 'Mixer', ingredients: ['Medium Fish'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/1/11/Fish_Sticks.png' },
  { id: 'r_ice_cream', name: 'Ice Cream', category: 'Pot', ingredients: ['Any Milk', 'any Egg'], utensil: 'Pot, Whisk', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/78/Ice_Cream_%28FoMT%29.png' },
  { id: 'r_sugdw_apple', name: 'SUGDW Apple', category: 'No Utensil', ingredients: ['Apple', 'HMSGB Apple', 'AEPFE Apple'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Apple_%28FoMT%29.png' },
  { id: 'r_hmsgb_apple', name: 'HMSGB Apple', category: 'No Utensil', ingredients: ['Apple', 'SUGDW Apple', 'AEPFE Apple'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Apple_%28FoMT%29.png' },
  { id: 'r_aepfe_apple', name: 'AEPFE Apple', category: 'No Utensil', ingredients: ['Apple', 'SUGDW Apple', 'HMSGB Apple'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/8f/Apple_%28FoMT%29.png' },
  { id: 'r_bodigizer', name: 'Bodigizer', category: 'Pot', ingredients: ['Honey', 'Orange Grass', 'Black Grass', 'Red Magic Flower'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/7/7c/Bodigizer_%28FoMT%29.png' },
  { id: 'r_bodigizer_xl', name: 'Bodigizer XL', category: 'Mixer', ingredients: ['Bodigizer', 'Blue Grass'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/6a/Bodigizer_XL_%28FoMT%29.png' },
  { id: 'r_turbojolt', name: 'Turbojolt', category: 'Pot', ingredients: ['Honey', 'Orange Grass', 'White Grass', 'Red Magic Flower'], utensil: 'Pot', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/2f/Turbojolt_%28FoMT%29.png' },
  { id: 'r_turbojolt_xl', name: 'Turbojolt XL', category: 'Mixer', ingredients: ['Turbojolt', 'Green Grass'], utensil: 'Mixer', image: 'https://static.wikia.nocookie.net/hmwikia/images/5/55/Turbojolt_XL_%28FoMT%29.png' },
  { id: 'r_relaxation_tea_leaves', name: 'Relaxation Tea Leaves', category: 'Knife', ingredients: ['Red Grass', 'Orange Grass', 'Yellow Grass', 'Green Grass', 'Purple Grass', 'Blue Grass', 'Indigo Grass', 'Weed'], utensil: 'Frying Pan, Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/6/64/Relaxation_Tea_Leaves_%28FoMT%29.png' },
  { id: 'r_elli_leaves', name: 'Elli Leaves', category: 'Knife', ingredients: ['Bodigizer XL', 'Turbojolt XL', 'all 6 burnt dishes'], utensil: 'Frying Pan, Pot, Oven, Knife', image: 'https://static.wikia.nocookie.net/hmwikia/images/0/00/Elli_Leaves_%28FoMT%29.png' },
  { id: 'r_the_spring_sun', name: 'The Spring Sun', category: 'No Utensil', ingredients: ['Blue Magic Flower', 'Red Magic Flower', 'Moon Drop Flower', 'Toy Flower', 'Pink Cat Flower'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/2/25/The_Spring_Sun.png' },
  { id: 'r_the_summer_sun', name: 'The Summer Sun', category: 'No Utensil', ingredients: ['All 3 fish sizes', 'Fossil of Ancient Fish', 'Pirate Treasure'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/8/88/The_Summer_Sun.png' },
  { id: 'r_the_autumn_sun', name: 'The Autumn Sun', category: 'No Utensil', ingredients: ['Milk (X)', 'Cheese (X)', 'X Egg', 'Mayonnaise (X)', 'Wool (X)', 'Yarn (X)'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/c/ce/The_Autumn_Sun.png' },
  { id: 'r_the_winter_sun', name: 'The Winter Sun', category: 'No Utensil', ingredients: ['Alexandrite', 'Diamond', 'Pink Diamond', 'Emerald', 'Moonstone', 'Mythic Stone', 'Sand Rose'], utensil: 'Tidak perlu alat dapur', image: 'https://static.wikia.nocookie.net/hmwikia/images/4/42/The_Winter_Sun.png' },
];