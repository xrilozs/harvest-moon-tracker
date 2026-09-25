<template>
  <div>
    <h1 class="title">Telur, Susu, dan Wol</h1>
    <p class="subtitle">Cara mendapatkan produk hewan berkualitas tinggi.</p>

    <div class="tips-card card">
      <h2>💡 Tips Meningkatkan Kualitas Produk</h2>
      <ul>
        <li v-for="tip in animalTips" :key="tip">{{ tip }}</li>
      </ul>
    </div>

    <div class="tabs">
      <button v-for="type in ['Egg', 'Milk', 'Wool']" :key="type" class="tab-btn" :class="{ active: currentType === type }" @click="currentType = type">{{ type === 'Egg' ? '🥚 Telur' : type === 'Milk' ? '🥛 Susu' : '🧶 Wol' }}</button>
    </div>

    <div class="products-list">
      <div v-for="product in filteredProducts" :key="product.id" class="card product-card">
        <div class="product-header">
          
          <template v-if="product.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${product.image.split(':')[1]}px -${product.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="product.image"  :alt="product.name" class="product-img" @error="onImgError">
          <div>
            <h3>{{ product.name }}</h3>
            <span class="price-badge">{{ product.sellPrice }} G</span>
            <span class="quality-badge" :class="qualityClass(product.quality)">{{ product.quality }}</span>
          </div>
        </div>
        <p class="how-to-get">{{ product.howToGet }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { animalProductsData, animalTips } from '../data/animalProducts';
const currentType = ref('Egg');
const filteredProducts = computed(() => animalProductsData.filter(p => p.type === currentType.value));
const qualityClass = (q: string) => ({ 'Small': 'q-small', 'Medium': 'q-medium', 'Large': 'q-large', 'Gold': 'q-gold', 'P': 'q-p', 'X': 'q-x' }[q] || '');
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/fef3c7/d97706?text=Farm'; };
</script>

<style scoped>
.tips-card { margin-bottom: 24px; cursor: default; }
.tips-card:hover { transform: none; }
.tips-card h2 { font-size: 1.2rem; margin-bottom: 12px; }
.tips-card ul { padding-left: 20px; }
.tips-card li { color: var(--text-light); font-size: 0.9rem; margin-bottom: 6px; }
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.products-list { display: flex; flex-direction: column; gap: 16px; }
.product-card { display: flex; flex-direction: column; gap: 12px; }
.product-header { display: flex; align-items: center; gap: 16px; }
.product-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: #fef3c7; }
.product-header h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.price-badge { background: #dcfce7; color: #16a34a; font-size: 0.8rem; padding: 2px 10px; border-radius: 10px; font-weight: 600; margin-right: 6px; }
.quality-badge { font-size: 0.75rem; padding: 2px 8px; border-radius: 8px; font-weight: 600; }
.q-small { background: #e2e8f0; color: #475569; }
.q-medium { background: #dbeafe; color: #2563eb; }
.q-large { background: #dcfce7; color: #16a34a; }
.q-gold { background: #fef3c7; color: #d97706; }
.q-p { background: #fce7f3; color: #be185d; }
.q-x { background: #7c3aed; color: white; }
.how-to-get { color: var(--text-light); font-size: 0.9rem; background: #f8fafc; padding: 12px; border-radius: 10px; }

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
