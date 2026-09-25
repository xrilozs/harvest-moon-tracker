import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Crops from '../views/Crops.vue';
import WildPlants from '../views/WildPlants.vue';
import KingFish from '../views/KingFish.vue';
import PowerBerries from '../views/PowerBerries.vue';
import Jewels from '../views/Jewels.vue';
import Ores from '../views/Ores.vue';
import MineItems from '../views/MineItems.vue';
import VillageEvents from '../views/VillageEvents.vue';
import NpcEvents from '../views/NpcEvents.vue';
import BacheloretteEvents from '../views/BacheloretteEvents.vue';
import NpcGifts from '../views/NpcGifts.vue';
import BacheloretteGifts from '../views/BacheloretteGifts.vue';
import Recipes from '../views/Recipes.vue';
import AnimalProducts from '../views/AnimalProducts.vue';
import Gifts from '../views/Gifts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/crops', component: Crops },
  { path: '/wild-plants', component: WildPlants },
  { path: '/king-fish', component: KingFish },
  { path: '/power-berries', component: PowerBerries },
  { path: '/jewels', component: Jewels },
  { path: '/ores', component: Ores },
  { path: '/mine-items', component: MineItems },
  { path: '/village-events', component: VillageEvents },
  { path: '/npc-events', component: NpcEvents },
  { path: '/bachelorette-events', component: BacheloretteEvents },
  { path: '/npc-gifts', component: NpcGifts },
  { path: '/bachelorette-gifts', component: BacheloretteGifts },
  { path: '/recipes', component: Recipes },
  { path: '/animal-products', component: AnimalProducts },
  { path: '/gifts', component: Gifts },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
