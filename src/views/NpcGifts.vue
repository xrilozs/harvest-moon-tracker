<template>
  <div>
    <h1 class="title">Kesukaan Warga (Non-Pasangan)</h1>
    <p class="subtitle">Daftar hadiah favorit warga Mineral Town.</p>
    
    <div class="search-box">
      <input v-model="search" type="text" placeholder="Cari nama warga..." class="search-input">
    </div>

    <div class="npc-list">
      <div v-for="npc in filteredNpcs" :key="npc.id" class="card npc-card">
        <div class="npc-header" @click="toggle(npc.id)">
          
          <template v-if="npc.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${npc.image.split(':')[1]}px -${npc.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="npc.image"  :alt="npc.name" class="npc-img" @error="onImgError">
          <div>
            <h3>{{ npc.name }}</h3>
            <p class="npc-role">{{ npc.role }}</p>
            <p class="npc-bday">🎂 {{ npc.birthday }}</p>
          </div>
          <ChevronDownIcon :size="20" class="chevron" :class="{ rotated: expanded.includes(npc.id) }" />
        </div>
        <div v-if="expanded.includes(npc.id)" class="gift-list">
          <div v-for="pref in npc.gifts" :key="pref.category" class="gift-category">
            <span class="cat-badge" :class="catClass(pref.category)">{{ pref.category }}</span>
            <p>{{ pref.items.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDownIcon } from '@lucide/vue';
import { npcGiftsData } from '../data/npcGifts';
const search = ref('');
const expanded = ref<string[]>([]);
const toggle = (id: string) => { const i = expanded.value.indexOf(id); if (i > -1) expanded.value.splice(i, 1); else expanded.value.push(id); };
const filteredNpcs = computed(() => npcGiftsData.filter(n => n.name.toLowerCase().includes(search.value.toLowerCase())));
const catClass = (cat: string) => ({ 'Most Loved': 'most-loved', 'Loved': 'loved', 'Liked': 'liked', 'Neutral': 'neutral', 'Disliked': 'disliked', 'Hated': 'hated' }[cat] || '');
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e2e8f0/64748b?text=NPC'; };
</script>

<style scoped>
.search-box { margin-bottom: 24px; }
.search-input { width: 100%; max-width: 400px; padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border); font-size: 1rem; font-family: inherit; background: var(--surface); }
.search-input:focus { outline: none; border-color: var(--primary); }
.npc-list { display: flex; flex-direction: column; gap: 16px; }
.npc-card { cursor: pointer; }
.npc-header { display: flex; align-items: center; gap: 16px; }
.npc-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: #f1f5f9; flex-shrink: 0; }
.npc-header h3 { font-size: 1.1rem; font-weight: 700; }
.npc-role { color: var(--text-light); font-size: 0.85rem; }
.npc-bday { color: var(--text-light); font-size: 0.8rem; }
.chevron { margin-left: auto; transition: transform 0.2s; color: var(--text-light); }
.chevron.rotated { transform: rotate(180deg); }
.gift-list { margin-top: 16px; display: flex; flex-direction: column; gap: 10px; padding-top: 16px; border-top: 1px solid var(--border); }
.gift-category { display: flex; align-items: flex-start; gap: 12px; }
.gift-category p { color: var(--text-light); font-size: 0.9rem; }
.cat-badge { font-size: 0.75rem; padding: 3px 10px; border-radius: 8px; font-weight: 600; white-space: nowrap; }
.most-loved { background: #fce7f3; color: #be185d; }
.loved { background: #fee2e2; color: #dc2626; }
.liked { background: #fef3c7; color: #d97706; }
.neutral { background: #e2e8f0; color: #475569; }
.disliked { background: #dbeafe; color: #2563eb; }
.hated { background: #1f2937; color: white; }

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
