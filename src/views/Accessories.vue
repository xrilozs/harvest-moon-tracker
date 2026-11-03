<template>
  <div>
    <h1 class="title">Perhiasan & Permata</h1>
    <p class="subtitle">Barang berharga yang dibuat Saibara di Blacksmith atau ditukar sebagai hadiah Horse Race.</p>

    <div class="card smith-card">
      <h2>🔨 {{ blacksmithInfo.name }}</h2>
      <p class="smith-hours">{{ blacksmithInfo.hours }}</p>
      <p class="smith-note">{{ blacksmithInfo.note }}</p>
    </div>

    <div class="tabs">
      <button v-for="cat in categories" :key="cat" class="tab-btn" :class="{ active: currentCategory === cat }" @click="currentCategory = cat">
        {{ cat }}
      </button>
    </div>

    <div class="acc-grid">
      <div v-for="item in filteredItems" :key="item.id" class="card acc-card">
        <div class="acc-header">
          <img :src="item.image" :alt="item.name" class="acc-img" @error="onImgError">
          <div>
            <h3 class="acc-name">{{ item.name }}</h3>
            <p class="acc-name-id">{{ item.nameId }}</p>
          </div>
          <span class="cat-badge" :class="item.category.toLowerCase()">{{ item.category }}</span>
        </div>

        <div v-if="item.blacksmith" class="smith-box">
          <p class="box-title">🔨 Dibuat di Blacksmith</p>
          <div class="smith-rows">
            <div class="smith-row"><span>Biaya</span><strong>{{ item.blacksmith.cost }}</strong></div>
            <div class="smith-row"><span>Bahan</span><strong>{{ item.blacksmith.material }}</strong></div>
            <div class="smith-row"><span>Lama</span><strong>{{ item.blacksmith.days }}</strong></div>
          </div>
        </div>

        <div v-if="item.prizes.length" class="prize-box">
          <p class="box-title">🎁 Didapat sebagai Hadiah</p>
          <ul>
            <li v-for="(p, i) in item.prizes" :key="i">{{ p }}</li>
          </ul>
        </div>

        <p v-if="!item.blacksmith && !item.prizes.length" class="prize-box empty">Belum ada data cara mendapatkan.</p>

        <p class="acc-usage">{{ item.usage }}</p>
      </div>
    </div>

    <div class="card tips-card">
      <h2>💡 Tips</h2>
      <ul class="tips">
        <li v-for="(tip, i) in accessoryTips" :key="i">{{ tip }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { accessoriesData, accessoryTips, blacksmithInfo } from '../data/accessories';

const categories = ['Semua', 'Perhiasan', 'Permata'];
const currentCategory = ref('Semua');

const filteredItems = computed(() =>
  currentCategory.value === 'Semua'
    ? accessoriesData
    : accessoriesData.filter(i => i.category === currentCategory.value)
);

const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/f3e8ff/7e22ce?text=Gem'; };
</script>

<style scoped>
.smith-card { margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px; }
.smith-card h2 { font-size: 1.05rem; font-weight: 700; }
.smith-hours { font-size: 0.88rem; font-weight: 600; color: var(--primary); }
.smith-note { font-size: 0.85rem; color: var(--text-light); line-height: 1.5; }

.tabs { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 8px 18px; border-radius: 20px; cursor: pointer; font-weight: 600; color: var(--text-light); font-family: inherit; font-size: 0.85rem; transition: all 0.2s; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

.acc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.acc-card { display: flex; flex-direction: column; gap: 12px; }
.acc-header { display: flex; align-items: center; gap: 12px; }
.acc-img { width: 48px; height: 48px; object-fit: contain; border-radius: 12px; background: var(--info-bg); padding: 6px; image-rendering: pixelated; flex-shrink: 0; }
.acc-name { font-size: 1.05rem; font-weight: 700; }
.acc-name-id { font-size: 0.8rem; color: var(--text-light); }
.cat-badge { margin-left: auto; font-size: 0.7rem; font-weight: 700; padding: 3px 10px; border-radius: 10px; text-transform: uppercase; background: var(--badge-bg); color: var(--badge-color); }
.cat-badge.permata { background: #f3e8ff; color: #7e22ce; }
[data-theme="dark"] .cat-badge.permata { background: #3b0764; color: #d8b4fe; }

.box-title { font-size: 0.8rem; font-weight: 700; margin-bottom: 6px; color: var(--text-main); }
.smith-box { background: var(--info-bg); padding: 10px 12px; border-radius: 10px; }
.smith-rows { display: flex; flex-direction: column; gap: 4px; }
.smith-row { display: flex; justify-content: space-between; font-size: 0.85rem; }
.smith-row span { color: var(--text-light); }
.smith-row strong { color: var(--text-main); font-weight: 600; }

.prize-box { background: var(--price-bg); padding: 10px 12px; border-radius: 10px; }
.prize-box ul { padding-left: 18px; display: flex; flex-direction: column; gap: 4px; margin: 0; }
.prize-box li { font-size: 0.85rem; color: var(--reward-color); line-height: 1.45; }
.prize-box.empty { font-size: 0.85rem; color: var(--text-light); }

.acc-usage { font-size: 0.87rem; color: var(--text-light); line-height: 1.5; }

.tips-card { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.tips-card h2 { font-size: 1.05rem; font-weight: 700; }
.tips { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; color: var(--text-light); font-size: 0.88rem; line-height: 1.5; }
</style>
