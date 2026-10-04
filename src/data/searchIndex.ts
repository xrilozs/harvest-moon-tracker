import { cropsData } from './crops';
import { wildPlantsData } from './wildPlants';
import { animalProductsData } from './animalProducts';
import { recipesData } from './recipes';
import { powerBerriesData } from './powerBerries';
import { oresData } from './ores';
import { mineItemsData } from './mineItems';
import { jewelsData } from './jewels';
import { villagerProfilesData } from './villagerProfiles';
import { kingFishData, rareFishingItemsData } from './kingFish';
import { specialItemsData } from './specialItems';
import { giftsData } from './gifts';
import { npcGiftsData } from './npcGifts';
import { bacheloretteGiftsData } from './bacheloretteGifts';
import { villageEventsData } from './villageEvents';
import { bacheloretteEventsData } from './bacheloretteEvents';
import { npcEventsData } from './npcEvents';

export interface SearchItem {
  id: string;
  name: string;
  category: string;
  path: string;
}

export const searchIndex: SearchItem[] = [
  ...cropsData.map(item => ({ id: `crop_${item.id}`, name: item.name, category: 'Tanaman Kebun', path: '/crops' })),
  ...wildPlantsData.map(item => ({ id: `wild_${item.id}`, name: item.name, category: 'Tanaman Liar', path: '/wild-plants' })),
  ...animalProductsData.map(item => ({ id: `animal_${item.id}`, name: item.name, category: 'Produk Hewan', path: '/animal-products' })),
  ...recipesData.map(item => ({ id: `recipe_${item.id}`, name: item.name, category: 'Resep Makanan', path: '/recipes' })),
  ...powerBerriesData.map(item => ({ id: `berry_${item.id}`, name: item.location, category: 'Power Berry', path: '/power-berries' })),
  ...oresData.map(item => ({ id: `ore_${item.id}`, name: item.name, category: 'Barang Tambang', path: '/ores' })),
  ...mineItemsData.map(item => ({ id: `mine_${item.id}`, name: item.name, category: 'Barang Tambang', path: '/ores' })),
  ...jewelsData.map(item => ({ id: `jewel_${item.id}`, name: item.name, category: 'Jewel', path: '/jewels' })),
  ...villagerProfilesData.map(item => ({ id: `vp_${item.id}`, name: item.name, category: 'Profil Warga', path: '/villager-profiles' })),
  ...kingFishData.map(item => ({ id: `fish_${item.id}`, name: item.name, category: 'Raja Ikan', path: '/king-fish' })),
  ...rareFishingItemsData.map(item => ({ id: `rare_${item.id}`, name: item.name, category: 'Item Memancing Langka', path: '/king-fish' })),
  ...specialItemsData.map(item => ({ id: `si_${item.id}`, name: item.name, category: 'Special Item', path: '/special-items' })),
  ...giftsData.map(item => ({ id: `gift_${item.id}`, name: item.name, category: 'Hadiah', path: '/gifts' })),
  ...npcGiftsData.map(item => ({ id: `npcgift_${item.id}`, name: `Kesukaan: ${item.name}`, category: 'Kesukaan Warga', path: '/npc-gifts' })),
  ...bacheloretteGiftsData.map(item => ({ id: `bacgift_${item.id}`, name: `Kesukaan: ${item.name}`, category: 'Kesukaan Pasangan', path: '/bachelorette-gifts' })),
  ...villageEventsData.map(item => ({ id: `vevent_${item.id}`, name: item.name, category: 'Event Desa', path: '/village-events' })),
  ...bacheloretteEventsData.map(item => ({ id: `bacevent_${item.id}`, name: `Event Hati: ${item.character}`, category: 'Heart Events', path: '/bachelorette-events' })),
  ...npcEventsData.map(item => ({ id: `npcevent_${item.id}`, name: `Event: ${item.character}`, category: 'Event NPC', path: '/npc-events' }))
];
