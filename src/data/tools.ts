export type ToolLevelId = 'basic' | 'copper' | 'silver' | 'gold' | 'mystrile' | 'cursed' | 'blessed' | 'mythic';

export interface ToolLevel {
  id: ToolLevelId;
  name: string;
  lv: number;
  howToGet: string;
}

export const toolLevels: ToolLevel[] = [
  { id: 'basic', name: 'Basic', lv: 0, howToGet: 'Alat awal yang kamu miliki sejak hari pertama.' },
  { id: 'copper', name: 'Copper', lv: 1, howToGet: 'Bawa alat + 1 Copper Ore + 1.000G ke Saibara (Blacksmith).' },
  { id: 'silver', name: 'Silver', lv: 2, howToGet: 'Bawa alat Copper + 1 Silver Ore + 2.000G ke Saibara (Blacksmith).' },
  { id: 'gold', name: 'Gold', lv: 3, howToGet: 'Bawa alat Silver + 1 Gold Ore + 3.000G ke Saibara (Blacksmith).' },
  { id: 'mystrile', name: 'Mystrile', lv: 4, howToGet: 'Bawa alat Gold + 1 Mystrile Ore + 5.000G ke Saibara (Blacksmith).' },
  { id: 'cursed', name: 'Cursed', lv: 5, howToGet: 'Gali di lantai tertentu Lake Mine (Winter Mine). Tidak perlu upgrade sebelumnya.' },
  { id: 'blessed', name: 'Blessed', lv: 6, howToGet: 'Hilangkan kutukan Cursed Tool (cara berbeda untuk tiap alat).' },
  { id: 'mythic', name: 'Mythic', lv: 7, howToGet: 'Bawa alat Blessed + 1 Mythic Stone + 50.000G ke Saibara (Blacksmith).' },
];

export type BlessMethod = 'use' | 'carter' | 'equip';

export const blessMethods: Record<BlessMethod, { label: string; unit: string; target: number; description: string }> = {
  use: {
    label: 'Gunakan 255 kali',
    unit: 'kali dipakai',
    target: 255,
    description: 'Gunakan Cursed Tool sebanyak 255 kali. Kutukan hilang otomatis.',
  },
  carter: {
    label: 'Minta Carter memberkati 10 kali',
    unit: 'kali diberkati',
    target: 10,
    description: 'Datangi Pastor Carter di Gereja dan minta dia memberkati alat (bisa dilakukan sekali sehari). Biaya 1.000G per sesi, total 10.000G.',
  },
  equip: {
    label: 'Bawa (equip) selama 10 hari',
    unit: 'hari dibawa',
    target: 10,
    description: 'Biarkan Cursed Tool ter-equip di tangan selama 10 hari. Setelah itu alat bisa dilepas.',
  },
};

export interface Tool {
  id: string;
  name: string;
  levels: ToolLevelId[];
  cursedFloor: number;
  cursedItemId: string;
  cursedPower: string;
  blessMethod: BlessMethod;
  blessTip?: string;
  note?: string;
}

const allLevels: ToolLevelId[] = ['basic', 'copper', 'silver', 'gold', 'mystrile', 'cursed', 'blessed', 'mythic'];

export const toolsData: Tool[] = [
  {
    id: 'hoe', name: 'Hoe (Cangkul)', levels: allLevels, cursedFloor: 39, cursedItemId: 'cursed_hoe',
    cursedPower: 'Mencangkul 12x3 petak tanah sekaligus.',
    blessMethod: 'carter',
  },
  {
    id: 'axe', name: 'Axe (Kapak)', levels: allLevels, cursedFloor: 49, cursedItemId: 'cursed_ax',
    cursedPower: 'Menebang SEMUA tunggul pohon di layar sekaligus.',
    blessMethod: 'use',
    blessTip: 'Paling mudah di-bless: ayunkan saat festival, tidak menguras stamina tapi tetap terhitung.',
  },
  {
    id: 'hammer', name: 'Hammer (Palu)', levels: allLevels, cursedFloor: 59, cursedItemId: 'cursed_hammer',
    cursedPower: 'Menghancurkan batu dan batu besar dalam 1 pukulan.',
    blessMethod: 'equip',
  },
  {
    id: 'watering_can', name: 'Watering Can (Penyiram)', levels: allLevels, cursedFloor: 69, cursedItemId: 'cursed_watering_can',
    cursedPower: 'Menyiram 6x13 petak tanah sekaligus.',
    blessMethod: 'carter',
  },
  {
    id: 'sickle', name: 'Sickle (Sabit)', levels: allLevels, cursedFloor: 79, cursedItemId: 'cursed_sickle',
    cursedPower: 'Memotong rumput/gulma 9x9 petak sekaligus.',
    blessMethod: 'equip',
  },
  {
    id: 'fishing_rod', name: 'Fishing Rod (Pancingan)', levels: ['basic', 'cursed', 'blessed', 'mythic'], cursedFloor: 29, cursedItemId: 'cursed_fishing_rod',
    cursedPower: 'Bisa menangkap Ikan (L), King Fish, Pirate Treasure, dan Fish Fossil.',
    blessMethod: 'use',
    blessTip: 'Tidak perlu benar-benar memancing — cukup ayunkan di darat 255 kali, atau ayunkan saat festival (tanpa stamina).',
    note: 'Fishing Rod tidak bisa di-upgrade dengan ore (Copper s/d Mystrile).',
  },
];

export const cursedToolTips: string[] = [
  'Lake Mine hanya bisa dimasuki saat Winter (danau Mother\'s Hill membeku), atau kapan saja via Teleport Stone.',
  'Selama masih cursed, alat TIDAK bisa dilepas dari tangan (unequip) sampai di-bless.',
  'Cursed Tool tidak menggantikan alat lama — ia mengambil slot baru di Rucksack. Bawa alat seminimal mungkin (cukup Hoe & Hammer).',
  'Cursed Tool tidak selalu muncul. Save di awal lantai, cari tangga/alatnya, lalu reload bila perlu.',
  'Tidak harus diambil berurutan — kalau kelewatan Cursed Hoe, kamu tetap bisa ambil Cursed Axe di lantai 49.',
  'Bawa Cursed Axe & Cursed Fishing Rod ke festival lalu ayunkan berkali-kali — tidak menguras stamina tapi tetap dihitung.',
  'Setelah SEMUA Cursed Tool di-bless, set Cursed Tool baru akan muncul lagi di Lake Mine. Set kedua bisa di-bless lalu di-upgrade ke Mythic, jadi kamu bisa punya Blessed + Mythic sekaligus.',
  'Jangan menaruh 2 alat Blessed/Mythic yang sama (mis. 2 Hammer) di satu slot Rucksack/Toolbox — keduanya akan menyatu selamanya kecuali salah satunya di-upgrade.',
];

// Sprite per level: /img/tools/<id alat>_<id level>.png (khusus Cursed berformat .gif)
export const toolImage = (tool: Tool, levelId: ToolLevelId): string =>
  `/img/tools/${tool.id}_${levelId}.${levelId === 'cursed' ? 'gif' : 'png'}`;
