<template>
  <div>
    <h1 class="title">Hadiah dari Warga</h1>
    <p class="subtitle">Item yang bisa didapat dari warga desa melalui event atau pertemanan.</p>

    <div class="tabs">
      <button v-for="cat in ['Semua', 'Barang', 'Resep', 'Pasangan']" :key="cat" class="tab-btn" :class="{ active: currentCat === cat }" @click="currentCat = cat">{{ cat }}</button>
    </div>

    <div class="card-grid">
      <label v-for="gift in filteredGifts" :key="gift.id" class="card gift-card">
        <div class="gift-top">
          <div class="checkbox-wrapper">
            <input type="checkbox" :checked="store.obtainedGifts.includes(gift.id)" @change="store.toggleGift(gift.id)">
            <div class="custom-checkbox"><CheckIcon :size="16" v-if="store.obtainedGifts.includes(gift.id)" /></div>
          </div>
          <!-- <template v-if="gift.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${gift.image.split(':')[1]}px -${gift.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="gift.image" :alt="gift.name" class="gift-img" @error="onImgError"> -->
        </div>
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
import { ref, computed } from 'vue';
import { CheckIcon } from '@lucide/vue';
import { giftsData } from '../data/gifts';
import { useProgressStore } from '../store/progress';

const store = useProgressStore();
const currentCat = ref('Semua');

const filteredGifts = computed(() => {
  if (currentCat.value === 'Semua') return giftsData;
  return giftsData.filter(g => g.type === currentCat.value.toLowerCase());
});

const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e0e7ff/4338ca?text=Gift'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 8px 20px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; text-transform: capitalize; }
.tab-btn.active, .tab-btn:hover { background: var(--primary); color: white; border-color: var(--primary); }

.gift-card { display: flex; flex-direction: column; gap: 14px; cursor: pointer; }
.gift-card:hover { border-color: var(--primary); }
.gift-top { display: flex; align-items: center; gap: 14px; }
.gift-img { width: 48px; height: 48px; border-radius: 10px; object-fit: cover; background: var(--badge-bg); flex-shrink: 0; }
.gift-content { flex: 1; }
.gift-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
.gift-header h3 { font-size: 1.05rem; font-weight: 700; }
.source-badge { background: var(--badge-bg); color: var(--badge-color); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
.gift-meta { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
.gift-time { color: var(--text-light); font-size: 0.82rem; }
.gift-req { color: var(--price-color); font-size: 0.82rem; }
.gift-how { background: var(--info-bg); padding: 10px; border-radius: 8px; font-size: 0.85rem; color: var(--text-main); }

.pixel-sprite {
  width: 16px; height: 16px;
  background-image: url('/img/items_spritesheet.png');
  background-repeat: no-repeat;
  image-rendering: pixelated;
  transform: scale(2.5);
  transform-origin: center;
  margin: 0 auto;
}
</style>
