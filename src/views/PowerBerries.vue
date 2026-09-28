<template>
  <div>
    <h1 class="title">Power Berries</h1>
    <p class="subtitle">Kumpulkan 10 Power Berries untuk meningkatkan stamina maksimalmu.</p>
    
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
      </div>
      <p style="text-align: right; margin-top: 8px; font-weight: 600; color: var(--primary);">
        {{ store.collectedPowerBerries.length }} / 10 Terkumpul
      </p>
    </div>

    <div class="card-grid">
      <label v-for="berry in powerBerriesData" :key="berry.id" class="card check-card">
        <div class="check-top">
          <div class="checkbox-wrapper">
            <input 
              type="checkbox" 
              :checked="store.collectedPowerBerries.includes(berry.id)"
              @change="store.togglePowerBerry(berry.id)"
            >
            <div class="custom-checkbox">
              <CheckIcon :size="16" v-if="store.collectedPowerBerries.includes(berry.id)" />
            </div>
          </div>
        </div>
        <div class="content">
          <h3>{{ berry.location }}</h3>
          <p>{{ berry.description }}</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { CheckIcon } from '@lucide/vue';
import { powerBerriesData } from '../data/powerBerries';
import { useProgressStore } from '../store/progress';

const store = useProgressStore();

const progressPercentage = computed(() => {
  return (store.collectedPowerBerries.length / 10) * 100;
});
</script>

<style scoped>
.progress-container {
  margin-bottom: 32px;
  background: var(--surface);
  padding: 24px;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.progress-bar {
  height: 12px;
  background: var(--surface-secondary);
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--primary);
  border-radius: 6px;
  transition: width 0.5s ease;
}

.check-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.check-card:hover {
  border-color: var(--primary);
}

.check-top { display: flex; align-items: center; gap: 14px; }

.content h3 {
  font-size: 1.05rem;
  margin-bottom: 4px;
  color: var(--text-main);
}

.content p {
  color: var(--text-light);
  font-size: 0.92rem;
}
</style>
