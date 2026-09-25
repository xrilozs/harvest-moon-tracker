<template>
  <div>
    <h1 class="title">Heart Events (Calon Pasangan)</h1>
    <p class="subtitle">Event romantis dengan 5 bachelorette.</p>
    
    <div class="tabs">
      <button v-for="girl in girls" :key="girl" class="tab-btn" :class="{ active: currentGirl === girl }" @click="currentGirl = girl">{{ girl }}</button>
    </div>

    <div class="events-list">
      <label v-for="event in filteredEvents" :key="event.id" class="card event-card">
        <div class="checkbox-wrapper">
          <input type="checkbox" :checked="store.completedEvents.includes(event.id)" @change="store.toggleEvent(event.id)">
          <div class="custom-checkbox"><CheckIcon :size="16" v-if="store.completedEvents.includes(event.id)" /></div>
        </div>
        
          <template v-if="event.image.startsWith('sprite:')">
            <div class="pixel-sprite" :style="{ backgroundPosition: `-${event.image.split(':')[1]}px -${event.image.split(':')[2]}px` }"></div>
          </template>
          <img v-else :src="event.image"  :alt="event.character" class="char-img" @error="onImgError">
        <div class="event-content">
          <div class="event-header">
            <h3>{{ event.title }}</h3>
            <span class="heart-badge" :class="event.heartColor.toLowerCase()">{{ event.heartColor }} Heart</span>
          </div>
          <p class="event-time">⏰ {{ event.time }} | 📍 {{ event.location }}</p>
          <p class="trigger">🔑 {{ event.trigger }}</p>
          <p class="event-desc">{{ event.description }}</p>
          <p class="choices">💬 {{ event.choices }}</p>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { CheckIcon } from '@lucide/vue';
import { bacheloretteEventsData } from '../data/bacheloretteEvents';
import { useProgressStore } from '../store/progress';
const store = useProgressStore();
const girls = ['Ann', 'Karen', 'Mary', 'Elli', 'Popuri'];
const currentGirl = ref('Ann');
const filteredEvents = computed(() => bacheloretteEventsData.filter(e => e.character === currentGirl.value));
const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/56x56/fce7f3/ec4899?text=Heart'; };
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: #ec4899; color: white; border-color: #ec4899; }
.events-list { display: flex; flex-direction: column; gap: 16px; }
.event-card { display: flex; gap: 20px; align-items: flex-start; cursor: pointer; }
.event-card:hover { border-color: #ec4899; }
.char-img { width: 56px; height: 56px; border-radius: 12px; object-fit: cover; background: #fce7f3; flex-shrink: 0; }
.event-content { flex: 1; }
.event-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
.event-header h3 { font-size: 1.1rem; }
.heart-badge { font-size: 0.8rem; padding: 4px 12px; border-radius: 10px; font-weight: 600; }
.heart-badge.black { background: #1f2937; color: white; }
.heart-badge.purple { background: #7c3aed; color: white; }
.heart-badge.blue { background: #2563eb; color: white; }
.heart-badge.yellow { background: #f59e0b; color: white; }
.event-time { color: var(--text-light); font-size: 0.85rem; margin-bottom: 6px; }
.trigger { color: #7c3aed; font-size: 0.85rem; margin-bottom: 6px; }
.event-desc { color: var(--text-light); font-size: 0.9rem; margin-bottom: 6px; }
.choices { color: #0891b2; font-size: 0.85rem; background: #ecfeff; padding: 8px 12px; border-radius: 8px; }

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
