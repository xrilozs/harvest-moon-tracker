<template>
  <div>
    <h1 class="title">Hadiah dari Warga</h1>
    <p class="subtitle">Item yang bisa didapat dari warga desa melalui event atau pertemanan.</p>

    <div class="gifts-list">
      <label v-for="gift in giftsData" :key="gift.id" class="card gift-card">
        <div class="checkbox-wrapper">
          <input type="checkbox" :checked="store.obtainedGifts.includes(gift.id)" @change="store.toggleGift(gift.id)">
          <div class="custom-checkbox"><CheckIcon :size="16" v-if="store.obtainedGifts.includes(gift.id)" /></div>
        </div>
        
          <template v-if="gift.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${gift.image.split(':')[1]}px -${gift.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="gift.image"  :alt="gift.name" class="gift-img" @error="onImgError">
        <div class="gift-content">
          <div class="gift-header">
            <h3>{{ gift.name }}</h3>
            <span class="source-badge">👤 {{ gift.source }}</span>
          </div>
          <div class="gift-meta">
            <p class="gift-time">⏰ <strong>Waktu:</strong> {{ gift.time }}</p>
            <p class="gift-req">✅ <strong>Syarat:</strong> {{ gift.requirement }}</p>
          </div>
          <p class="gift-how">{{ gift.howToGet }}</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@lucide/vue';
import { giftsData } from '../data/gifts';
import { useProgressStore } from '../store/progress';
const store = useProgressStore();
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e0e7ff/4338ca?text=Gift'; };
</script>

<style scoped>
.gifts-list { display: flex; flex-direction: column; gap: 16px; }
.gift-card { display: flex; gap: 20px; align-items: flex-start; cursor: pointer; }
.gift-card:hover { border-color: var(--primary); }
.gift-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: #e0e7ff; flex-shrink: 0; }
.gift-content { flex: 1; }
.gift-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
.gift-header h3 { font-size: 1.1rem; font-weight: 700; }
.source-badge { background: #e0e7ff; color: #4338ca; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
.gift-meta { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
.gift-time { color: var(--text-light); font-size: 0.85rem; }
.gift-req { color: #16a34a; font-size: 0.85rem; }
.gift-how { background: #f8fafc; padding: 10px; border-radius: 8px; font-size: 0.9rem; color: var(--text-main); }

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
