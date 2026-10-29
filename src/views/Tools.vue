<template>
  <div>
    <h1 class="title">Upgrade Alat</h1>
    <p class="subtitle">Lacak level setiap alat dari Basic (Lv 0) sampai Mythic (Lv 7), termasuk progres bless Cursed Tool.</p>

    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: overallPercentage + '%' }"></div>
      </div>
      <p style="text-align: right; margin-top: 8px; font-weight: 600; color: var(--primary);">
        {{ mythicCount }} / {{ toolsData.length }} Alat Mythic
      </p>
    </div>

    <div class="collapsible-card">
      <div class="collapsible-header" @click="tipsOpen = !tipsOpen">
        <h2>💡 Tips Cursed Tools</h2>
        <ChevronDownIcon :size="20" class="collapsible-chevron" :class="{ open: tipsOpen }" />
      </div>
      <div class="collapsible-body" :class="{ open: tipsOpen }">
        <ul class="tips">
          <li v-for="(tip, i) in cursedToolTips" :key="i">{{ tip }}</li>
        </ul>
      </div>
    </div>

    <div class="tools-grid">
      <div v-for="tool in toolsData" :key="tool.id" class="card tool-card">
        <div class="tool-header">
          <div class="tool-title">
            <img :src="toolImage(tool)" :alt="tool.name" class="tool-img" @error="onImgError">
            <h3>{{ tool.name }}</h3>
          </div>
          <span class="level-badge" :class="currentLevel(tool).id">Lv {{ currentLevel(tool).lv }} · {{ currentLevel(tool).name }}</span>
        </div>

        <div class="level-steps">
          <button
            v-for="levelId in tool.levels"
            :key="levelId"
            class="level-chip"
            :class="[levelById[levelId].id, { reached: isReached(tool, levelId), current: currentLevel(tool).id === levelId }]"
            :title="levelById[levelId].howToGet"
            @click="store.setToolLevel(tool.id, levelId)"
          >
            <span class="chip-lv">{{ levelById[levelId].lv }}</span>
            <span class="chip-name">{{ levelById[levelId].name }}</span>
          </button>
        </div>

        <div v-if="nextLevel(tool)" class="next-step">
          <strong>Berikutnya ({{ nextLevel(tool)!.name }}):</strong>
          {{ nextHowTo(tool) }}
        </div>
        <div v-else class="next-step done">🎉 Sudah level maksimal!</div>

        <div v-if="currentLevel(tool).id === 'cursed'" class="bless-box">
          <div class="bless-head">
            <strong>✨ Progres Bless: {{ blessMethods[tool.blessMethod].label }}</strong>
            <span>{{ blessValue(tool) }} / {{ blessMethods[tool.blessMethod].target }} {{ blessMethods[tool.blessMethod].unit }}</span>
          </div>
          <div class="progress-bar small">
            <div class="progress-fill purple" :style="{ width: blessPercentage(tool) + '%' }"></div>
          </div>
          <div class="bless-controls">
            <button v-if="tool.blessMethod === 'use'" class="ctrl-btn" @click="addBless(tool, -10)">-10</button>
            <button class="ctrl-btn" @click="addBless(tool, -1)">-1</button>
            <button class="ctrl-btn" @click="addBless(tool, 1)">+1</button>
            <button v-if="tool.blessMethod === 'use'" class="ctrl-btn" @click="addBless(tool, 10)">+10</button>
            <button class="ctrl-btn primary" :disabled="blessValue(tool) < blessMethods[tool.blessMethod].target" @click="store.setToolLevel(tool.id, 'blessed')">Tandai Blessed</button>
          </div>
        </div>

        <div class="tool-info">
          <p><strong>Cursed:</strong> Lake Mine lantai {{ tool.cursedFloor }}</p>
          <p><strong>Kekuatan Cursed/Blessed:</strong> {{ tool.cursedPower }}</p>
          <p><strong>Cara Bless:</strong> {{ blessMethods[tool.blessMethod].description }}</p>
          <p v-if="tool.blessTip" class="note">💡 {{ tool.blessTip }}</p>
          <p v-if="tool.note" class="note">⚠️ {{ tool.note }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDownIcon } from '@lucide/vue';
import { toolsData, toolLevels, blessMethods, cursedToolTips, toolImage, type Tool, type ToolLevel, type ToolLevelId } from '../data/tools';
import { useProgressStore } from '../store/progress';

const store = useProgressStore();
const tipsOpen = ref(false);
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/e2e8f0/64748b?text=Tool'; };

const levelById = Object.fromEntries(toolLevels.map(l => [l.id, l])) as Record<ToolLevelId, ToolLevel>;

const currentLevel = (tool: Tool): ToolLevel => {
  const id = store.toolLevels[tool.id] as ToolLevelId | undefined;
  return id && tool.levels.includes(id) ? levelById[id] : levelById.basic;
};

const isReached = (tool: Tool, levelId: ToolLevelId) => levelById[levelId].lv <= currentLevel(tool).lv;

const nextLevel = (tool: Tool): ToolLevel | null => {
  const idx = tool.levels.indexOf(currentLevel(tool).id);
  const next = tool.levels[idx + 1];
  return next ? levelById[next] : null;
};

const nextHowTo = (tool: Tool) => {
  const next = nextLevel(tool)!;
  if (next.id === 'cursed') return `Gali di Lake Mine lantai ${tool.cursedFloor} (hanya saat Winter atau via Teleport Stone).`;
  if (next.id === 'blessed') return blessMethods[tool.blessMethod].description;
  return next.howToGet;
};

const blessValue = (tool: Tool) => store.blessProgress[tool.id] ?? 0;
const blessPercentage = (tool: Tool) => Math.min(blessValue(tool) / blessMethods[tool.blessMethod].target * 100, 100);
const addBless = (tool: Tool, delta: number) => {
  const target = blessMethods[tool.blessMethod].target;
  store.setBlessProgress(tool.id, Math.min(blessValue(tool) + delta, target));
};

const mythicCount = computed(() => toolsData.filter(t => currentLevel(t).id === 'mythic').length);
const overallPercentage = computed(() => {
  const total = toolsData.reduce((sum, t) => sum + t.levels.length - 1, 0);
  const done = toolsData.reduce((sum, t) => sum + t.levels.indexOf(currentLevel(t).id), 0);
  return done / total * 100;
});
</script>

<style scoped>
.progress-container { margin-bottom: 24px; background: var(--surface); padding: 24px; border-radius: 16px; box-shadow: var(--shadow-sm); border: 1px solid var(--border); }
.progress-bar { height: 12px; background: var(--surface-secondary); border-radius: 6px; overflow: hidden; }
.progress-bar.small { height: 8px; }
.progress-fill { height: 100%; background: var(--primary); border-radius: 6px; transition: width 0.5s ease; }
.progress-fill.purple { background: #9333ea; }

.collapsible-card { margin-bottom: 24px; }
.tips { padding-left: 20px; display: flex; flex-direction: column; gap: 8px; color: var(--text-light); font-size: 0.9rem; }

.tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 20px; }
.tool-card { display: flex; flex-direction: column; gap: 14px; }
.tool-header { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
.tool-title { display: flex; align-items: center; gap: 12px; }
.tool-img { width: 48px; height: 48px; border-radius: 12px; object-fit: contain; background: var(--info-bg); image-rendering: pixelated; }
.tool-header h3 { font-size: 1.1rem; font-weight: 700; }

.level-badge { font-size: 0.75rem; padding: 3px 10px; border-radius: 8px; font-weight: 700; background: var(--surface-secondary); color: var(--text-main); }

.level-steps { display: flex; flex-wrap: wrap; gap: 6px; }
.level-chip { display: flex; flex-direction: column; align-items: center; min-width: 58px; padding: 6px 8px; border-radius: 10px; border: 1px solid var(--border); background: var(--surface); color: var(--text-light); cursor: pointer; font-family: inherit; transition: all 0.2s; }
.level-chip:hover { border-color: var(--primary); }
.level-chip .chip-lv { font-size: 0.65rem; opacity: 0.7; }
.level-chip .chip-name { font-size: 0.75rem; font-weight: 600; }
.level-chip.reached { background: var(--primary-light); color: var(--primary-dark); border-color: var(--primary); }
.level-chip.current { outline: 2px solid var(--primary); outline-offset: 1px; }
.level-chip.reached.cursed, .level-badge.cursed { background: #fee2e2; color: #b91c1c; border-color: #f87171; }
.level-chip.reached.blessed, .level-badge.blessed { background: #fef9c3; color: #a16207; border-color: #facc15; }
.level-chip.reached.mythic, .level-badge.mythic { background: #f3e8ff; color: #7e22ce; border-color: #c084fc; }
[data-theme="dark"] .level-chip.reached.cursed, [data-theme="dark"] .level-badge.cursed { background: #450a0a; color: #fca5a5; }
[data-theme="dark"] .level-chip.reached.blessed, [data-theme="dark"] .level-badge.blessed { background: #422006; color: #fde047; }
[data-theme="dark"] .level-chip.reached.mythic, [data-theme="dark"] .level-badge.mythic { background: #3b0764; color: #d8b4fe; }

.next-step { font-size: 0.88rem; color: var(--text-light); background: var(--surface-secondary); padding: 10px 12px; border-radius: 10px; }
.next-step.done { color: var(--primary-dark); font-weight: 600; }

.bless-box { display: flex; flex-direction: column; gap: 8px; padding: 12px; border-radius: 10px; border: 1px dashed #c084fc; }
.bless-head { display: flex; justify-content: space-between; gap: 8px; flex-wrap: wrap; font-size: 0.85rem; color: var(--text-main); }
.bless-controls { display: flex; gap: 6px; flex-wrap: wrap; }
.ctrl-btn { padding: 6px 12px; border-radius: 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text-main); cursor: pointer; font-family: inherit; font-weight: 600; font-size: 0.8rem; }
.ctrl-btn.primary { background: #9333ea; color: white; border-color: #9333ea; margin-left: auto; }
.ctrl-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.tool-info { display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem; color: var(--text-light); }
.note { background: var(--note-bg); padding: 8px 12px; border-radius: 8px; color: var(--note-color); font-size: 0.85rem; }

@media (max-width: 480px) {
  .tools-grid { grid-template-columns: 1fr; }
}
</style>
