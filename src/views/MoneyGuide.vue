<template>
  <div>
    <h1 class="title">💰 Tips Mengumpulkan Uang</h1>
    <p class="subtitle">Strategi cepat mendapatkan uang yang banyak di setiap musim.</p>

    <!-- Season Filter -->
    <div class="tabs">
      <button v-for="s in seasons" :key="s" class="tab-btn" :class="{ active: currentSeason === s }" @click="currentSeason = s">
        {{ seasonEmoji(s) }} {{ s }}
      </button>
    </div>

    <!-- Money Tips -->
    <div class="tips-list">
      <div v-for="tip in filteredTips" :key="tip.id" class="card tip-card" :class="'priority-' + tip.priority">
        <div class="tip-header">
          <h3>{{ tip.title }}</h3>
          <div class="tip-badges">
            <span class="income-badge">{{ tip.income }}</span>
            <span class="priority-badge" :class="tip.priority">{{ tip.priority === 'high' ? '⭐ Prioritas' : tip.priority === 'medium' ? '📌 Berguna' : '💡 Opsional' }}</span>
          </div>
        </div>
        <p class="tip-desc">{{ tip.description }}</p>
        <div class="steps-list">
          <div v-for="(step, i) in tip.steps" :key="i" class="step-item">
            <span class="step-num">{{ i + 1 }}</span>
            <span>{{ step }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { moneyTipsData } from '../data/guideData';

const seasons = ['Spring', 'Summer', 'Fall', 'Winter', 'Semua Season'];
const currentSeason = ref('Spring');

const seasonEmoji = (s: string) => ({ 'Spring': '🌸', 'Summer': '☀️', 'Fall': '🍂', 'Winter': '❄️', 'Semua Season': '📅' }[s] || '');

const filteredTips = computed(() => {
  return moneyTipsData.filter(t => t.season === currentSeason.value);
});
</script>

<style scoped>
.tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 8px 16px; border-radius: 20px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-size: 0.85rem; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

.tips-list { display: flex; flex-direction: column; gap: 20px; }
.tip-card { display: flex; flex-direction: column; gap: 14px; border-left: 4px solid var(--border); }
.tip-card.priority-high { border-left-color: var(--primary); }
.tip-card.priority-medium { border-left-color: var(--accent); }
.tip-card.priority-low { border-left-color: var(--text-light); }

.tip-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; }
.tip-header h3 { font-size: 1.1rem; font-weight: 700; }
.tip-badges { display: flex; gap: 8px; flex-wrap: wrap; }
.income-badge { background: var(--price-bg); color: var(--price-color); padding: 4px 12px; border-radius: 10px; font-size: 0.78rem; font-weight: 600; }
.priority-badge { padding: 4px 10px; border-radius: 10px; font-size: 0.75rem; font-weight: 600; }
.priority-badge.high { background: #dcfce7; color: #16a34a; }
.priority-badge.medium { background: #fef3c7; color: #d97706; }
.priority-badge.low { background: var(--info-bg); color: var(--text-light); }

[data-theme="dark"] .priority-badge.high { background: #14532d; color: #86efac; }
[data-theme="dark"] .priority-badge.medium { background: #422006; color: #fbbf24; }

.tip-desc { color: var(--text-light); font-size: 0.9rem; }

.steps-list { display: flex; flex-direction: column; gap: 6px; }
.step-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: var(--text-main); }
.step-num { width: 24px; height: 24px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0; }
</style>
