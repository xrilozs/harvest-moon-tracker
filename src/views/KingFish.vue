<template>
  <div>
    <h1 class="title">Raja Ikan (King Fish)</h1>
    <p class="subtitle">Tangkap ikan-ikan legendaris ini.</p>
    
    <div class="list-container">
      <label v-for="fish in kingFishData" :key="fish.id" class="card check-card">
        <div class="checkbox-wrapper">
          <input type="checkbox" :checked="store.caughtKingFish.includes(fish.id)" @change="store.toggleKingFish(fish.id)">
          <div class="custom-checkbox"><CheckIcon :size="16" v-if="store.caughtKingFish.includes(fish.id)" /></div>
        </div>
        
          <template v-if="fish.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${fish.image.split(':')[1]}px -${fish.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="fish.image"  :alt="fish.name" class="fish-img" @error="onImgError">
        <div class="content">
          <div class="fish-header">
            <h3>{{ fish.name }}</h3>
            <span class="season-badge">{{ fish.season }}</span>
          </div>
          <p><strong>📍 Lokasi:</strong> {{ fish.location }}</p>
          <p><strong>✅ Syarat:</strong> {{ fish.requirement }}</p>
          <p><strong>🎣 Umpan:</strong> {{ fish.bait }}</p>
          <p class="price"><strong>💰 Harga Jual:</strong> {{ fish.sellPrice }} G</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@lucide/vue';
import { kingFishData } from '../data/kingFish';
import { useProgressStore } from '../store/progress';
const store = useProgressStore();
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/64x64/dbeafe/2563eb?text=Fish'; };
</script>

<style scoped>
.list-container { display: flex; flex-direction: column; gap: 16px; }
.check-card { display: flex; align-items: flex-start; gap: 20px; cursor: pointer; }
.check-card:hover { border-color: var(--primary); }
.fish-img { width: 64px; height: 64px; border-radius: 12px; object-fit: cover; background: #dbeafe; flex-shrink: 0; }
.content { flex: 1; }
.fish-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
.content h3 { font-size: 1.1rem; }
.content p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 4px; }
.price { color: #16a34a; font-weight: 600; }
.season-badge { background: #e0f2fe; color: #0284c7; font-size: 0.75rem; padding: 4px 10px; border-radius: 12px; font-weight: 600; }

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
