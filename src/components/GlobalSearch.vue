<template>
  <div class="search-container" ref="searchRef">
    <div class="search-input-wrapper">
      <SearchIcon :size="18" class="search-icon" />
      <input 
        type="text" 
        v-model="query" 
        placeholder="Cari tanaman, warga, resep, event..." 
        @focus="isOpen = true"
      />
      <button v-if="query" class="clear-btn" @click="clearSearch"><XIcon :size="16" /></button>
    </div>
    
    <div v-if="isOpen && query.length > 1" class="search-dropdown">
      <div v-if="results.length === 0" class="no-results">
        Tidak ditemukan hasil untuk "{{ query }}"
      </div>
      <div v-else class="results-list">
        <router-link 
          v-for="item in results.slice(0, 8)" 
          :key="item.id" 
          :to="item.path" 
          class="search-item"
          @click="selectItem"
        >
          <div class="item-info">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-cat">{{ item.category }}</span>
          </div>
        </router-link>
        <div v-if="results.length > 8" class="more-results">
          + {{ results.length - 8 }} hasil lainnya...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { SearchIcon, XIcon } from '@lucide/vue';
import { searchIndex } from '../data/searchIndex';

const query = ref('');
const isOpen = ref(false);
const searchRef = ref<HTMLElement | null>(null);

const results = computed(() => {
  if (query.value.length < 2) return [];
  const q = query.value.toLowerCase();
  return searchIndex.filter(item => 
    item.name.toLowerCase().includes(q) || 
    item.category.toLowerCase().includes(q)
  );
});

const clearSearch = () => {
  query.value = '';
  isOpen.value = false;
};

const selectItem = () => {
  isOpen.value = false;
};

const handleClickOutside = (e: MouseEvent) => {
  if (searchRef.value && !searchRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
}
.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text-light);
}
.search-input-wrapper input {
  width: 100%;
  padding: 10px 36px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-main);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
}
.search-input-wrapper input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(34,197,94,0.2);
}
.clear-btn {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  color: var(--text-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.clear-btn:hover {
  color: var(--text-main);
}
.search-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  overflow: hidden;
  z-index: 1000;
}
.results-list {
  max-height: 400px;
  overflow-y: auto;
}
.no-results {
  padding: 16px;
  text-align: center;
  color: var(--text-light);
  font-size: 0.9rem;
}
.search-item {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
.search-item:last-child {
  border-bottom: none;
}
.search-item:hover {
  background: var(--bg-color);
}
.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.item-name {
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.95rem;
}
.item-cat {
  font-size: 0.7rem;
  color: var(--primary);
  background: rgba(34, 197, 94, 0.1);
  align-self: flex-start;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 700;
  text-transform: uppercase;
}
.more-results {
  padding: 8px;
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-light);
  background: var(--bg-color);
  font-weight: 600;
}
</style>
