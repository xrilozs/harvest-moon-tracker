<template>
  <div>
    <h1 class="title">
      <img src="/fomt-icon.png" alt="Cow Logo" style="width: 32px; height: 32px; image-rendering: pixelated; transform: scale(1.5); margin-right: 8px; vertical-align: middle;" />
      Harvest Moon: FoMT
    </h1>
    <p class="subtitle">Selamat datang di Progress Tracker untuk Harvest Moon: Friends of Mineral Town!</p>
    
    <div class="stats-grid">
      <div class="card stat-card">
        <div class="icon-bg" style="background: #fef3c7; color: #f59e0b;">
          <AppleIcon :size="28" />
        </div>
        <div>
          <h3>Power Berries</h3>
          <p class="stat-value">{{ store.collectedPowerBerries.length }} / 10</p>
          <div class="mini-bar"><div class="mini-fill" :style="{ width: (store.collectedPowerBerries.length / 10 * 100) + '%' }"></div></div>
        </div>
      </div>
      
      <div class="card stat-card">
        <div class="icon-bg" style="background: #e0e7ff; color: #4f46e5;">
          <GemIcon :size="28" />
        </div>
        <div>
          <h3>Jewels</h3>
          <p class="stat-value">{{ store.collectedJewels.length }} / 27</p>
          <div class="mini-bar"><div class="mini-fill indigo" :style="{ width: (store.collectedJewels.length / 27 * 100) + '%' }"></div></div>
        </div>
      </div>
      
      <div class="card stat-card">
        <div class="icon-bg" style="background: #dcfce7; color: #16a34a;">
          <FishIcon :size="28" />
        </div>
        <div>
          <h3>Raja Ikan</h3>
          <p class="stat-value">{{ store.caughtKingFish.length }} / 6</p>
          <div class="mini-bar"><div class="mini-fill green" :style="{ width: (store.caughtKingFish.length / 6 * 100) + '%' }"></div></div>
        </div>
      </div>

      <div class="card stat-card">
        <div class="icon-bg" style="background: #fce7f3; color: #ec4899;">
          <CalendarIcon :size="28" />
        </div>
        <div>
          <h3>Events</h3>
          <p class="stat-value">{{ store.completedEvents.length }} selesai</p>
          <div class="mini-bar"><div class="mini-fill pink" :style="{ width: Math.min(store.completedEvents.length / 30 * 100, 100) + '%' }"></div></div>
        </div>
      </div>

      <div class="card stat-card">
        <div class="icon-bg" style="background: #ffedd5; color: #ea580c;">
          <ChefHatIcon :size="28" />
        </div>
        <div>
          <h3>Resep Masakan</h3>
          <p class="stat-value">{{ store.cookedRecipes.length }} / 108</p>
          <div class="mini-bar"><div class="mini-fill orange" :style="{ width: (store.cookedRecipes.length / 108 * 100) + '%' }"></div></div>
        </div>
      </div>

      <div class="card stat-card">
        <div class="icon-bg" style="background: #e0e7ff; color: #4338ca;">
          <GiftIcon :size="28" />
        </div>
        <div>
          <h3>Hadiah</h3>
          <p class="stat-value">{{ store.obtainedGifts.length }} didapat</p>
          <div class="mini-bar"><div class="mini-fill indigo" :style="{ width: Math.min(store.obtainedGifts.length / 20 * 100, 100) + '%' }"></div></div>
        </div>
      </div>
    </div>

    <div class="card reset-card">
      <p>Ingin memulai dari awal?</p>
      <button class="btn btn-danger" @click="confirmReset">🗑️ Reset Semua Progres</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppleIcon, GemIcon, FishIcon, CalendarIcon, GiftIcon, ChefHatIcon } from '@lucide/vue';
import { useProgressStore } from '../store/progress';
const store = useProgressStore();
const confirmReset = () => {
  if (confirm('Apakah kamu yakin ingin mereset SEMUA progres? Tindakan ini tidak bisa dibatalkan!')) {
    store.resetAll();
  }
};
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.stat-card { display: flex; align-items: center; gap: 16px; }
.icon-bg { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-value { font-size: 1.3rem; font-weight: 700; color: var(--text-main); margin: 2px 0 6px; }
h3 { color: var(--text-light); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; }

.mini-bar { height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden; width: 120px; }
.mini-fill { height: 100%; background: var(--primary); border-radius: 3px; transition: width 0.5s ease; }
.mini-fill.indigo { background: #4f46e5; }
.mini-fill.green { background: #16a34a; }
.mini-fill.pink { background: #ec4899; }
.mini-fill.orange { background: #ea580c; }

.reset-card {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
}
.reset-card:hover { transform: none; }
.reset-card p { color: var(--text-light); }
.btn-danger {
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.btn-danger:hover { background: #dc2626; }

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
