<template>
  <div>
    <h1 class="title">Jewels</h1>
    <p class="subtitle">Kumpulkan 9 Truth, 9 Goddess, dan 9 Kappa Jewels.</p>
    
    <div class="tabs">
      <button v-for="type in ['Truth', 'Goddess', 'Kappa']" :key="type" class="tab-btn" :class="{ active: currentType === type }" @click="currentType = type">{{ type }} ({{ countByType(type) }}/9)</button>
    </div>

    <div class="card-grid">
      <label v-for="jewel in filteredJewels" :key="jewel.id" class="card check-card">
        <div class="check-top">
          <div class="checkbox-wrapper">
            <input type="checkbox" :checked="store.collectedJewels.includes(jewel.id)" @change="store.toggleJewel(jewel.id)">
            <div class="custom-checkbox"><CheckIcon :size="16" v-if="store.collectedJewels.includes(jewel.id)" /></div>
          </div>
          <template v-if="jewel.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${jewel.image.split(':')[1]}px -${jewel.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="jewel.image" :alt="jewel.name" class="jewel-img" @error="onImgError">
        </div>
        <div class="content">
          <h3>{{ jewel.name }}</h3>
          <p><strong>Lokasi:</strong> {{ jewel.location }}</p>
          <p>{{ jewel.howToGet }}</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { CheckIcon } from '@lucide/vue';
import { jewelsData } from '../data/jewels';
import { useProgressStore } from '../store/progress';
const store = useProgressStore();
const currentType = ref('Truth');
const filteredJewels = computed(() => jewelsData.filter(j => j.type === currentType.value));
const countByType = (type: string) => store.collectedJewels.filter(id => jewelsData.find(j => j.id === id)?.type === type).length;
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/48x48/e2e8f0/64748b?text=Jewel'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.check-card { display: flex; flex-direction: column; gap: 14px; cursor: pointer; }
.check-card:hover { border-color: var(--primary); }
.check-top { display: flex; align-items: center; gap: 14px; }
.jewel-img { width: 48px; height: 48px; border-radius: 8px; object-fit: cover; }
.content h3 { font-size: 1rem; margin-bottom: 4px; color: var(--text-main); }
.content p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 2px; }

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
