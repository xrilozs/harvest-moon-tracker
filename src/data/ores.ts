export interface Ore {
  id: string;
  name: string;
  location: string;
  floors: string;
  sellPrice: number;
  usage: string;
  image: string;
}

export const oresData: Ore[] = [
  { id: 'copper', name: 'Copper Ore', location: 'Spring Mine', floors: 'Lantai 3+', sellPrice: 15, usage: 'Upgrade alat ke level Copper. Biaya upgrade: 1.000G + 1 Copper Ore.', image: '/img/items/cooper.png' },
  { id: 'silver', name: 'Silver Ore', location: 'Spring Mine', floors: 'Lantai 3+', sellPrice: 20, usage: 'Upgrade alat ke level Silver. Biaya upgrade: 2.000G + 1 Silver Ore.', image: '/img/items/silver.png' },
  { id: 'gold', name: 'Gold Ore', location: 'Spring Mine', floors: 'Lantai 3+', sellPrice: 25, usage: 'Upgrade alat ke level Gold. Biaya upgrade: 3.000G + 1 Gold Ore.', image: '/img/items/gold.png' },
  { id: 'mystrile', name: 'Mystrile Ore', location: 'Spring Mine', floors: 'Lantai 5+', sellPrice: 40, usage: 'Upgrade alat ke level Mystrile. Biaya upgrade: 5.000G + 1 Mystrile Ore.', image: '/img/items/mystrile.png' },
  { id: 'orichalcum', name: 'Orichalcum', location: 'Spring Mine', floors: 'Lantai 10+ (langka)', sellPrice: 50, usage: 'Bahan untuk perhiasan dan hadiah. Bisa dijual ke Won.', image: 'https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vghARncvwpKRsFrakKLuTJkEmPaq2FsI7c-uLr5VHzpjDhPflWYTXZy0X0kzacqkThSlzd3aG5YvqfJdClC-ISIfbATNPK8tsrwVqh7sGgYqDx9A=s0-d' },
  { id: 'adamantite', name: 'Adamantite', location: 'Spring Mine', floors: 'Lantai 10+ (langka)', sellPrice: 50, usage: 'Bahan untuk perhiasan dan hadiah. Bisa dijual ke Won.', image: 'https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_vKZSTRmBF4_feyE86rwhvfAjj2ZjUzUoxWlFznPw25QYKzgPtHIcwDZJmQ8dywyWxIs0UZx5vF0_0bfEIkgOCkTQMhWeD4I01tOcf-kU7QLVZYtA=s0-d' },
  { id: 'mythic_stone', name: 'Mythic Stone', location: 'Lake Mine (Winter Mine)', floors: 'Lantai dalam (60+)', sellPrice: 20000, usage: 'Upgrade alat Blessed ke level Mythic. Biaya upgrade: 50.000G + 1 Mythic Stone.', image: '/img/items/mythic_stone.jpg' },
  { id: 'junk_ore', name: 'Junk Ore', location: 'Spring Mine & Lake Mine', floors: 'Semua lantai', sellPrice: 1, usage: 'Tidak berguna. Bisa dijual atau dibuang.', image: '/img/items/junk_ore.png' },
];

export const upgradePathData = {
  title: 'Jalur Upgrade Alat di Atas Mystrile',
  description: 'Setelah alat mencapai level Mystrile, jalur upgrade menjadi berbeda:',
  steps: [
    {
      level: 'Cursed',
      howToGet: 'Temukan Cursed Tool di Lake Mine (Winter Mine). Setiap alat ada di lantai tertentu: Cursed Fishing Rod (Lantai 29), Cursed Hoe (Lantai 39), Cursed Axe (Lantai 49), Cursed Hammer (Lantai 59), Cursed Watering Can (Lantai 69), Cursed Sickle (Lantai 79).',
      note: 'Selama cursed, alat tidak bisa dilepas (unequip) sampai di-bless! Cursed Tool tidak menggantikan alat lama, jadi bawa alat seminimal mungkin.'
    },
    {
      level: 'Blessed',
      howToGet: 'Cara bless berbeda tiap alat — Fishing Rod & Axe: gunakan 255 kali. Hoe & Watering Can: minta Carter di Gereja memberkati 10 kali (1.000G per sesi). Hammer & Sickle: bawa (equip) selama 10 hari.',
      note: 'Kekuatan alat sama persis dengan versi cursed, tapi sekarang bisa dilepas. Tips: ayunkan Axe & Fishing Rod saat festival — tidak menguras stamina tapi tetap dihitung.'
    },
    {
      level: 'Mythic',
      howToGet: 'Bawa Blessed Tool + Mythic Stone + 50.000G ke Saibara (Blacksmith). Dia akan meng-upgrade alatmu ke level Mythic.',
      note: 'Level tertinggi! Alat memiliki charge area terluas dan efisiensi maksimum.'
    }
  ]
};
