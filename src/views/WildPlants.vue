<template>
  <div>
    <h1 class="title">Tanaman Liar</h1>
    <p class="subtitle">Item yang bisa dipetik langsung dari alam berdasarkan musim.</p>
    
    <div class="tabs">
      <button v-for="season in ['Spring', 'Summer', 'Fall', 'Winter']" :key="season" class="tab-btn" :class="{ active: currentSeason === season }" @click="currentSeason = season">{{ season }}</button>
    </div>

    <div class="items-grid">
      <div v-for="plant in filteredPlants" :key="plant.id" class="card item-card">
        <div class="item-header">
          
          <template v-if="plant.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${plant.image.split(':')[1]}px -${plant.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="plant.image"  :alt="plant.name" class="item-img" @error="onImgError">
          <div>
            <h3 class="item-name">{{ plant.name }}</h3>
            <span class="price-badge" v-if="plant.sellPrice">{{ plant.sellPrice }} G</span>
            <span class="price-badge" v-else>-</span>
          </div>
        </div>
        <p class="item-location"><strong>Lokasi:</strong> {{ plant.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { wildPlantsData } from '../data/wildPlants';
const currentSeason = ref('Spring');
const filteredPlants = computed(() => wildPlantsData.filter(p => p.season === currentSeason.value));
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/64x64/e2e8f0/64748b?text=Item'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.item-card { display: flex; flex-direction: column; gap: 12px; }
.item-header { display: flex; align-items: center; gap: 16px; }
.item-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: var(--info-bg); }
.item-name { font-size: 1.1rem; font-weight: 700; }
.price-badge { background: var(--price-bg); color: var(--price-color); font-size: 0.8rem; padding: 2px 10px; border-radius: 10px; font-weight: 600; }
.item-location { color: var(--text-light); font-size: 0.9rem; }

.pixel-sprite {
  width: 16px;
  height: 16px;
  background-image: url('/img/items_spritesheet.png');
  background-repeat: no-repeat;
  image-rendering: pixelated;
  transform: scale(2.5);
  transform-origin: center;
  margin: 0 auto;
}
</style>
