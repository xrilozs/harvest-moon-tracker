<template>
  <div>
    <h1 class="title">Ore & Upgrade Alat</h1>
    <p class="subtitle">Bahan tambang dan jalur upgrade alat di atas Mystrile.</p>

    <div class="card upgrade-path">
      <h2>🔧 {{ upgradePathData.title }}</h2>
      <p style="margin-bottom: 16px; color: var(--text-light);">{{ upgradePathData.description }}</p>
      <div class="steps">
        <div v-for="(step, i) in upgradePathData.steps" :key="i" class="step">
          <div class="step-number">{{ i + 1 }}</div>
          <div>
            <h3>{{ step.level }}</h3>
            <p>{{ step.howToGet }}</p>
            <p class="note">💡 {{ step.note }}</p>
          </div>
        </div>
      </div>
    </div>

    <h2 style="margin: 32px 0 16px;">Daftar Ore</h2>
    <div class="items-grid">
      <div v-for="ore in oresData" :key="ore.id" class="card item-card">
        <div class="item-header">
          
          <template v-if="ore.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${ore.image.split(':')[1]}px -${ore.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="ore.image"  :alt="ore.name" class="item-img" @error="onImgError">
          <div>
            <h3 class="item-name">{{ ore.name }}</h3>
            <span class="price-badge">{{ ore.sellPrice }} G</span>
          </div>
        </div>
        <p class="detail"><strong>Lokasi:</strong> {{ ore.location }} ({{ ore.floors }})</p>
        <p class="detail">{{ ore.usage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { oresData, upgradePathData } from '../data/ores';
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e2e8f0/64748b?text=Ore'; };
</script>

<style scoped>
.upgrade-path { margin-bottom: 24px; }
.upgrade-path h2 { font-size: 1.3rem; margin-bottom: 8px; }
.steps { display: flex; flex-direction: column; gap: 16px; }
.step { display: flex; gap: 16px; align-items: flex-start; }
.step-number { width: 36px; height: 36px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
.step h3 { font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 4px; }
.step p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 4px; }
.note { background: #fef3c7; padding: 8px 12px; border-radius: 8px; color: #92400e; font-size: 0.85rem; }
.items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.item-card { display: flex; flex-direction: column; gap: 10px; }
.item-header { display: flex; align-items: center; gap: 16px; }
.item-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: #f1f5f9; }
.item-name { font-size: 1.1rem; font-weight: 700; }
.price-badge { background: #dcfce7; color: #16a34a; font-size: 0.8rem; padding: 2px 10px; border-radius: 10px; font-weight: 600; }
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
