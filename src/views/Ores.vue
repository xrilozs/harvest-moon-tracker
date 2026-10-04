<template>
  <div>
    <h1 class="title">Ores, Gems, Stones, dan Cursed Tools</h1>
    <p class="subtitle">Bahan tambang, permata, dan item spesial di Spring & Lake Mine.</p>

    <div class="tabs">
      <button v-for="cat in categories" :key="cat" class="tab-btn" :class="{ active: currentCategory === cat }" @click="currentCategory = cat">
        {{ cat }}
      </button>
    </div>

    <div class="collapsible-card" v-if="currentCategory === 'all' || currentCategory === 'ores & upgrade items'">
      <div class="collapsible-header" @click="upgradeOpen = !upgradeOpen">
        <h2>🔧 {{ upgradePathData.title }}</h2>
        <ChevronDownIcon :size="20" class="collapsible-chevron" :class="{ open: upgradeOpen }" />
      </div>
      <div class="collapsible-body" :class="{ open: upgradeOpen }">
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
    </div>

    <div class="items-grid">
      <div v-for="item in filteredItems" :key="item.id" class="card item-card">
        <div class="item-header">
          <template v-if="item.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${item.image.split(':')[1]}px -${item.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="item.image" :alt="item.name" class="item-img" @error="onImgError">
          <div>
            <h3 class="item-name">{{ item.name }}</h3>
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 4px;">
              <span class="price-badge" v-if="item.sellPrice > 0">{{ item.sellPrice.toLocaleString() }} G</span>
              <span class="floor-badge" v-if="item.floors">{{ item.floors }}</span>
            </div>
          </div>
        </div>
        <p class="detail"><strong>Lokasi:</strong> {{ item.mine }}</p>
        <p class="detail">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDownIcon } from '@lucide/vue';
import { oresData, upgradePathData } from '../data/ores';
import { mineItemsData } from '../data/mineItems';

const unifiedItems = computed(() => {
  const o = oresData.map(item => ({
    id: item.id,
    name: item.name,
    mine: item.location,
    floors: item.floors,
    sellPrice: item.sellPrice,
    description: item.usage,
    image: item.image,
    category: ['mythic_stone'].includes(item.id) ? 'special item' : 'ores & upgrade items'
  }));

  const m = mineItemsData.map(item => ({
    id: item.id,
    name: item.name,
    mine: item.mine,
    floors: item.floors,
    sellPrice: item.sellPrice,
    description: item.description,
    image: item.image,
    category: item.id.startsWith('cursed_') ? 'cursed tools' : (['black_grass', 'teleport_stone', 'french_fries_recipe', 'pink_diamond', 'alexandrite'].includes(item.id) ? 'special item' : 'gem & stones')
  }));

  return [...o, ...m];
});

const currentCategory = ref('all');
const categories = ['all', 'spring mine', 'lake mine', 'ores & upgrade items', 'gem & stones', 'cursed tools', 'special item'];

const filteredItems = computed(() => {
  if (currentCategory.value === 'all') return unifiedItems.value;
  if (currentCategory.value === 'spring mine') return unifiedItems.value.filter(i => i.mine.toLowerCase().includes('spring'));
  if (currentCategory.value === 'lake mine') return unifiedItems.value.filter(i => i.mine.toLowerCase().includes('lake'));
  return unifiedItems.value.filter(i => i.category === currentCategory.value);
});

const upgradeOpen = ref(false);
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e2e8f0/64748b?text=Item'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 8px 20px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; text-transform: capitalize; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

.collapsible-card { margin-bottom: 24px; }
.steps { display: flex; flex-direction: column; gap: 16px; }
.step { display: flex; gap: 16px; align-items: flex-start; }
.step-number { width: 36px; height: 36px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
.step h3 { font-size: 1.1rem; color: var(--primary-dark); margin-bottom: 4px; }
.step p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 4px; }
.note { background: var(--note-bg); padding: 8px 12px; border-radius: 8px; color: var(--note-color); font-size: 0.85rem; }

.items-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.item-card { display: flex; flex-direction: column; gap: 10px; }
.item-header { display: flex; align-items: center; gap: 16px; }
.item-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: var(--info-bg); }
.item-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 2px; }
.price-badge { background: var(--price-bg); color: var(--price-color); font-size: 0.75rem; padding: 2px 8px; border-radius: 8px; font-weight: 600; }
.floor-badge { background: #e0e7ff; color: #4338ca; font-size: 0.75rem; padding: 2px 8px; border-radius: 8px; font-weight: 600; }
.detail { color: var(--text-light); font-size: 0.9rem; }

[data-theme="dark"] .floor-badge { background: #312e81; color: #a5b4fc; }

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
