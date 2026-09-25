<template>
  <div>
    <h1 class="title">Special Item Tambang</h1>
    <p class="subtitle">Item spesial yang ditemukan di Spring Mine dan Lake Mine.</p>
    
    <div class="tabs">
      <button v-for="mine in ['Spring Mine', 'Lake Mine']" :key="mine" class="tab-btn" :class="{ active: currentMine === mine }" @click="currentMine = mine">{{ mine }}</button>
    </div>

    <div class="items-grid">
      <div v-for="item in filteredItems" :key="item.id" class="card item-card">
        <div class="item-header">
          
          <template v-if="item.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${item.image.split(':')[1]}px -${item.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="item.image"  :alt="item.name" class="item-img" @error="onImgError">
          <div>
            <h3 class="item-name">{{ item.name }}</h3>
            <span class="floor-badge">{{ item.floors }}</span>
          </div>
        </div>
        <p class="detail" v-if="item.sellPrice > 0"><strong>Harga Jual:</strong> {{ item.sellPrice.toLocaleString() }} G</p>
        <p class="detail">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { mineItemsData } from '../data/mineItems';
const currentMine = ref('Spring Mine');
const filteredItems = computed(() => mineItemsData.filter(i => i.mine === currentMine.value));
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e2e8f0/64748b?text=Jewel'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.item-card { display: flex; flex-direction: column; gap: 10px; }
.item-header { display: flex; align-items: center; gap: 16px; }
.item-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: #f1f5f9; }
.item-name { font-size: 1.1rem; font-weight: 700; }
.floor-badge { background: #e0e7ff; color: #4338ca; font-size: 0.8rem; padding: 2px 10px; border-radius: 10px; font-weight: 600; }
.detail { color: var(--text-light); font-size: 0.9rem; }

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
