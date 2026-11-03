<template>
  <div>
    <h1 class="title">Kredit & Sumber</h1>
    <p class="subtitle">Gambar dan informasi di situs ini dikumpulkan dari panduan komunitas Harvest Moon. Terima kasih untuk semuanya.</p>

    <h2 class="section-title">🖼️ Sumber Gambar & Sprite</h2>
    <div class="credit-list">
      <div v-for="src in assetCredits" :key="src.id" class="card credit-card">
        <div class="credit-head">
          <h3>{{ src.name }}</h3>
          <a :href="src.url" target="_blank" rel="noopener noreferrer" class="credit-link">
            Kunjungi <ExternalLinkIcon :size="14" />
          </a>
        </div>
        <ul class="credit-items">
          <li v-for="(item, i) in src.usedFor" :key="i">{{ item }}</li>
        </ul>
        <p v-if="src.note" class="credit-note">{{ src.note }}</p>
      </div>
    </div>

    <h2 class="section-title">📖 Sumber Informasi & Data</h2>
    <div class="credit-list">
      <div v-for="src in infoCredits" :key="src.id" class="card credit-card">
        <div class="credit-head">
          <h3>{{ src.name }}</h3>
          <a :href="src.url" target="_blank" rel="noopener noreferrer" class="credit-link">
            Kunjungi <ExternalLinkIcon :size="14" />
          </a>
        </div>
        <ul class="credit-items">
          <li v-for="(item, i) in src.usedFor" :key="i">{{ item }}</li>
        </ul>
        <p v-if="src.note" class="credit-note">{{ src.note }}</p>
      </div>
    </div>

    <h2 class="section-title">⚖️ Hak Cipta</h2>
    <div class="card disclaimer-card">
      <p v-for="(line, i) in creditsDisclaimer" :key="i">{{ line }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLinkIcon } from '@lucide/vue';
import { assetCredits, infoCredits, creditsDisclaimer } from '../data/credits';
</script>

<style scoped>
.section-title { font-size: 1.15rem; font-weight: 700; margin: 28px 0 14px; color: var(--text-main); }
.credit-list { display: flex; flex-direction: column; gap: 16px; }
.credit-card { display: flex; flex-direction: column; gap: 12px; }
.credit-head { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
.credit-head h3 { font-size: 1.05rem; font-weight: 700; }
.credit-link { display: inline-flex; align-items: center; gap: 5px; font-size: 0.82rem; font-weight: 600; color: var(--primary); text-decoration: none; background: var(--info-bg); padding: 5px 12px; border-radius: 20px; white-space: nowrap; }
.credit-link:hover { background: var(--badge-bg); }
.credit-items { display: flex; flex-direction: column; gap: 6px; padding-left: 20px; margin: 0; }
.credit-items li { font-size: 0.88rem; color: var(--text-light); line-height: 1.5; }
.credit-note { font-size: 0.82rem; color: var(--reward-color); background: var(--price-bg); padding: 8px 12px; border-radius: 8px; }
.disclaimer-card { display: flex; flex-direction: column; gap: 10px; }
.disclaimer-card p { font-size: 0.86rem; color: var(--text-light); line-height: 1.6; }
</style>
