<template>
  <div>
    <h1 class="title">Kesukaan Calon Pasangan</h1>
    <p class="subtitle">Daftar hadiah favorit 5 bachelorette.</p>
    
    <div class="tabs">
      <button v-for="girl in bacheloretteGiftsData" :key="girl.id" class="tab-btn" :class="{ active: currentGirl === girl.id }" @click="currentGirl = girl.id">{{ girl.name }}</button>
    </div>

    <div v-if="selectedGirl" class="card girl-card">
      <div class="girl-header">
        
          <template v-if="selectedGirl.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${selectedGirl.image.split(':')[1]}px -${selectedGirl.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="selectedGirl.image"  :alt="selectedGirl.name" class="girl-img" @error="onImgError">
        <div>
          <h2>{{ selectedGirl.name }}</h2>
          <p class="girl-info">{{ selectedGirl.personality }}</p>
          <p class="girl-bday">🎂 {{ selectedGirl.birthday }} | 📍 {{ selectedGirl.location }}</p>
        </div>
      </div>

      <div class="gift-list">
        <div v-for="pref in selectedGirl.gifts" :key="pref.category" class="gift-category">
          <span class="cat-badge" :class="catClass(pref.category)">{{ pref.category }}</span>
          <div class="items-wrap">
            <span v-for="item in pref.items" :key="item" class="item-tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { bacheloretteGiftsData } from '../data/bacheloretteGifts';
const currentGirl = ref('ann');
const selectedGirl = computed(() => bacheloretteGiftsData.find(g => g.id === currentGirl.value));
const catClass = (cat: string) => ({ 'Most Loved': 'most-loved', 'Loved': 'loved', 'Liked': 'liked', 'Neutral': 'neutral', 'Disliked': 'disliked', 'Hated': 'hated' }[cat] || '');
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/80x80/fce7f3/ec4899?text=Heart'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: #ec4899; color: white; border-color: #ec4899; }
.girl-card { cursor: default; }
.girl-card:hover { transform: none; }
.girl-header { display: flex; align-items: center; gap: 20px; margin-bottom: 24px; }
.girl-img { width: 80px; height: 80px; border-radius: 16px; object-fit: cover; background: #fce7f3; }
.girl-header h2 { font-size: 1.5rem; }
.girl-info { color: var(--text-light); font-size: 0.9rem; margin: 4px 0; }
.girl-bday { color: var(--text-light); font-size: 0.85rem; }
.gift-list { display: flex; flex-direction: column; gap: 14px; }
.gift-category { display: flex; align-items: flex-start; gap: 12px; }
.cat-badge { font-size: 0.75rem; padding: 4px 12px; border-radius: 8px; font-weight: 600; white-space: nowrap; min-width: 90px; text-align: center; }
.most-loved { background: #fce7f3; color: #be185d; }
.loved { background: #fee2e2; color: #dc2626; }
.liked { background: #fef3c7; color: #d97706; }
.neutral { background: #e2e8f0; color: #475569; }
.disliked { background: #dbeafe; color: #2563eb; }
.hated { background: #1f2937; color: white; }
.items-wrap { display: flex; flex-wrap: wrap; gap: 6px; }
.item-tag { background: #f8fafc; border: 1px solid var(--border); padding: 3px 10px; border-radius: 8px; font-size: 0.85rem; color: var(--text-main); }

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
