<template>
  <div>
    <h1 class="title">Event NPC (Non-Pasangan)</h1>
    <p class="subtitle">Event penting dari karakter non-pasangan.</p>
    <div class="events-list">
      <label v-for="event in npcEventsData" :key="event.id" class="card event-card">
        <div class="checkbox-wrapper">
          <input type="checkbox" :checked="store.completedEvents.includes(event.id)" @change="store.toggleEvent(event.id)">
          <div class="custom-checkbox"><CheckIcon :size="16" v-if="store.completedEvents.includes(event.id)" /></div>
        </div>
        <div class="event-content">
          <div class="event-header">
            <h3>{{ event.title }}</h3>
            <span class="char-badge">{{ event.character }}</span>
          </div>
          <p class="event-time">📅 {{ event.date }} | ⏰ {{ event.time }} | 📍 {{ event.location }}</p>
          <p class="event-desc">{{ event.description }}</p>
          <p class="trigger">🔑 <strong>Pemicu:</strong> {{ event.trigger }}</p>
          <div class="event-details" v-if="event.whatToBring !== 'Tidak perlu.' && event.whatToBring !== 'Tidak perlu'">
            <p class="bring">🎒 <strong>Bawa:</strong> {{ event.whatToBring }}</p>
          </div>
          <div class="event-details" v-if="event.reward">
            <p class="reward">🎁 <strong>Hadiah:</strong> {{ event.reward }}</p>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@lucide/vue';
import { npcEventsData } from '../data/npcEvents';
import { useProgressStore } from '../store/progress';
const store = useProgressStore();
</script>

<style scoped>
.events-list { display: flex; flex-direction: column; gap: 16px; }
.event-card { display: flex; gap: 20px; align-items: flex-start; cursor: pointer; }
.event-card:hover { border-color: var(--primary); }
.event-content { flex: 1; }
.event-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
.event-header h3 { font-size: 1.1rem; }
.char-badge { background: #e0e7ff; color: #4338ca; font-size: 0.8rem; padding: 4px 12px; border-radius: 10px; font-weight: 600; }
.event-time { color: var(--text-light); font-size: 0.85rem; margin-bottom: 8px; }
.event-desc { color: var(--text-light); font-size: 0.9rem; margin-bottom: 8px; }
.trigger { color: #7c3aed; font-size: 0.85rem; margin-bottom: 8px; }
.event-details { background: #f8fafc; padding: 10px 14px; border-radius: 8px; margin-bottom: 6px; }
.bring { color: #1e40af; font-size: 0.85rem; }
.reward { color: #15803d; font-size: 0.85rem; }

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
