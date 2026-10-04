<template>
  <div>
    <h1 class="title">Item Spesial & Langka</h1>
    <p class="subtitle">Berbagai macam item unik yang didapat melalui pencapaian atau kondisi tertentu.</p>

    <div class="card-grid">
      <div v-for="item in specialItemsData" :key="item.id" class="card check-card">
        <div class="check-top">
          <img :src="item.image" :alt="item.name" class="jewel-img" @error="onImgError">
          <div class="tag-badge">{{ item.type }}</div>
        </div>
        <div class="content" style="margin-top: 14px;">
          <h3>{{ item.name }}</h3>
          <div class="meta-section">
            <p class="meta-title">🎣 <strong>Cara Mendapatkan:</strong></p>
            <p class="meta-text">{{ item.howToGet }}</p>
          </div>
          <div class="meta-section mt">
            <p class="meta-title">💡 <strong>Fungsi:</strong></p>
            <p class="meta-text">{{ item.function }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { specialItemsData } from '../data/specialItems';

const onImgError = (e: Event) => {
  (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e0e7ff/4338ca?text=Item';
};
</script>

<style scoped>
.check-card {
  display: flex;
  flex-direction: column;
}
.check-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding-bottom: 12px;
}
.jewel-img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 8px;
  background: var(--badge-bg);
  padding: 4px;
}
.tag-badge {
  background: var(--primary);
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.meta-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.meta-section.mt {
  margin-top: 12px;
}
.meta-title {
  font-size: 0.85rem;
  color: var(--text-light);
}
.meta-text {
  font-size: 0.9rem;
  line-height: 1.5;
  background: var(--info-bg);
  padding: 10px;
  border-radius: 8px;
}
</style>
