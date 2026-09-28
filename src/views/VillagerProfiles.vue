<template>
  <div>
    <h1 class="title">Profil Warga Mineral Town</h1>
    <p class="subtitle">Informasi personal semua warga desa, termasuk Kappa dan Harvest Goddess.</p>

    <div class="filter-row">
      <input type="text" v-model="searchQuery" placeholder="Cari nama warga..." class="search-input" />
      
      

      <div class="filter-chips">
        <button class="chip-btn special-chip" :class="{ active: showSpecial }" @click="showSpecial = !showSpecial">✨ Makhluk Spesial</button>
      </div>
    </div>
    <div class="filter-row">
      <label for="season-filter">Musim Kelahiran:</label>
      <div class="filter-chips">
        <button class="chip-btn" :class="{ active: selectedSeason === 'Semua' }" @click="selectedSeason = 'Semua'">Semua Musim</button>
        <button class="chip-btn" :class="{ active: selectedSeason === 'Spring' }" @click="selectedSeason = 'Spring'">🌸 Spring</button>
        <button class="chip-btn" :class="{ active: selectedSeason === 'Summer' }" @click="selectedSeason = 'Summer'">🌻 Summer</button>
        <button class="chip-btn" :class="{ active: selectedSeason === 'Fall' }" @click="selectedSeason = 'Fall'">🍂 Fall</button>
        <button class="chip-btn" :class="{ active: selectedSeason === 'Winter' }" @click="selectedSeason = 'Winter'">⛄ Winter</button>
      </div>
    </div>

    <div class="card-grid">
      <div v-for="villager in filteredVillagers" :key="villager.id" class="card villager-card">
        <div class="villager-header">
          <img :src="villager.image" :alt="villager.name" class="villager-img" @error="onImgError" />
          <div>
            <h3>{{ villager.name }}</h3>
            <span class="role-badge" :class="{ special: villager.isSpecial }">{{ villager.role }}</span>
          </div>
        </div>
        <div class="villager-info">
          <p><strong>🎂 Ulang Tahun:</strong> {{ villager.birthday }}</p>
          <p><strong>📍 Lokasi:</strong> {{ villager.location }}</p>
          <p><strong>👨‍👩‍👧 Keluarga:</strong> {{ villager.family }}</p>
        </div>
        <p class="personality">{{ villager.personality }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { villagerProfilesData } from '../data/villagerProfiles';

const searchQuery = ref('');
const showSpecial = ref(false);
const selectedSeason = ref('Semua');

const getBirthdayValue = (birthday: string) => {
  const seasons: Record<string, number> = { 'spring': 100, 'summer': 200, 'fall': 300, 'winter': 400 };
  const lower = birthday.toLowerCase();
  for (const [season, base] of Object.entries(seasons)) {
    if (lower.includes(season)) {
      const match = lower.match(/\d+/);
      const day = match ? parseInt(match[0], 10) : 99;
      return base + day;
    }
  }
  return 999; // Untuk "Tidak diketahui" atau format lain
};

const filteredVillagers = computed(() => {
  let result = villagerProfilesData.filter(v => {
    // Text search
    const matchSearch = v.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                        v.role.toLowerCase().includes(searchQuery.value.toLowerCase());
    
    // Season filter
    const matchSeason = selectedSeason.value === 'Semua' || v.birthday.toLowerCase().includes(selectedSeason.value.toLowerCase());

    // Special filter
    if (showSpecial.value) return v.isSpecial && matchSearch && matchSeason;
    
    return matchSearch && matchSeason;
  });

  // Urutkan berdasarkan nilai ulang tahun (Musim lalu Tanggal)
  result.sort((a, b) => getBirthdayValue(a.birthday) - getBirthdayValue(b.birthday));

  return result;
});

const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/64x64/e0e7ff/4338ca?text=NPC'; };
</script>

<style scoped>
.filter-row { display: flex; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; align-items: center; }
.search-input { padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border); background: var(--surface); color: var(--text-main); font-size: 1rem; width: 100%; max-width: 350px; outline: none; transition: border-color 0.2s; font-family: inherit; }
.search-input:focus { border-color: var(--primary); }
.filter-chips { display: flex; gap: 8px; flex-wrap: wrap; }
.chip-btn { background: var(--surface); border: 1px solid var(--border); padding: 8px 16px; border-radius: 20px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; font-size: 0.9rem; }
.chip-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.special-chip.active { background: #7c3aed; color: white; border-color: #7c3aed; }

.villager-card { display: flex; flex-direction: column; gap: 14px; }
.villager-header { display: flex; align-items: center; gap: 16px; }
.villager-img { width: 64px; height: 64px; border-radius: 14px; object-fit: cover; background: var(--info-bg); image-rendering: pixelated; }
.villager-header h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 4px; }
.role-badge { background: var(--badge-bg); color: var(--badge-color); padding: 3px 10px; border-radius: 10px; font-size: 0.75rem; font-weight: 600; }
.role-badge.special { background: #7c3aed; color: white; }
.villager-info p { color: var(--text-light); font-size: 0.88rem; margin-bottom: 4px; }
.villager-info strong { color: var(--text-main); }
.personality { background: var(--info-bg); padding: 12px; border-radius: 10px; font-size: 0.88rem; color: var(--text-light); line-height: 1.6; }
</style>
