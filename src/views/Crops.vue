<template>
  <div>
    <h1 class="title">Tanaman Kebun</h1>
    <p class="subtitle">Daftar tanaman yang bisa ditanam berdasarkan musim.</p>
    
    <div class="tabs">
      <button v-for="season in ['Spring', 'Summer', 'Fall']" :key="season" class="tab-btn" :class="{ active: currentSeason === season }" @click="currentSeason = season">{{ season }}</button>
    </div>

    <div class="crops-grid">
      <div v-for="crop in filteredCrops" :key="crop.id" class="card crop-card">
        <div class="crop-header">
          
          <template v-if="crop.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${crop.image.split(':')[1]}px -${crop.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="crop.image"  :alt="crop.name" class="crop-img" @error="onImgError">
          <div>
            <h3 class="crop-name">{{ crop.name }}</h3>
            <span v-if="crop.recommended" class="badge">⭐ Disarankan</span>
          </div>
        </div>
        
        <p v-if="crop.recommendReason" class="recommend-reason">{{ crop.recommendReason }}</p>

        <div class="crop-details">
          <div class="detail-item"><span class="label">Harga Beli:</span><span class="value">{{ crop.buyPrice }} G</span></div>
          <div class="detail-item"><span class="label">Harga Jual:</span><span class="value sell">{{ crop.sellPrice }} G</span></div>
          <div class="detail-item"><span class="label">Waktu Panen:</span><span class="value">{{ crop.growTime }} Hari</span></div>
          <div class="detail-item" v-if="crop.regrowTime"><span class="label">Tumbuh Kembali:</span><span class="value regrow">{{ crop.regrowTime }} Hari ♻️</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { cropsData } from '../data/crops';
const currentSeason = ref('Spring');
const filteredCrops = computed(() => cropsData.filter(c => c.season === currentSeason.value));
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/64x64/dcfce7/16a34a?text=Crop'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.crops-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.crop-card { display: flex; flex-direction: column; gap: 12px; }
.crop-header { display: flex; align-items: center; gap: 16px; }
.crop-img { width: 64px; height: 64px; border-radius: 12px; object-fit: cover; background: #f1f5f9; }
.crop-name { font-size: 1.15rem; font-weight: 700; margin-bottom: 4px; }
.badge { background: #fef3c7; color: #d97706; font-size: 0.75rem; padding: 2px 10px; border-radius: 12px; font-weight: 600; }
.recommend-reason { color: #15803d; font-size: 0.85rem; background: #f0fdf4; padding: 8px 12px; border-radius: 8px; }
.crop-details { background: #f8fafc; padding: 14px; border-radius: 12px; display: flex; flex-direction: column; gap: 6px; }
.detail-item { display: flex; justify-content: space-between; font-size: 0.9rem; }
.detail-item .label { color: var(--text-light); }
.detail-item .value { font-weight: 600; color: var(--text-main); }
.detail-item .sell { color: #16a34a; }
.detail-item .regrow { color: #0891b2; }

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
