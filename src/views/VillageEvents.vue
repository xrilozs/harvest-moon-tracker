<template>
  <div>
    <h1 class="title">Event Desa (Festival)</h1>
    <p class="subtitle">Jadwal festival dan event sepanjang tahun.</p>
    
    <div class="tabs">
      <button v-for="season in ['Spring', 'Summer', 'Fall', 'Winter']" :key="season" class="tab-btn" :class="{ active: currentSeason === season }" @click="currentSeason = season">{{ season }}</button>
    </div>

    <div class="events-list">
      <div v-for="event in filteredEvents" :key="event.id" class="card event-card" style="cursor: default;">
        <div class="event-content">
          <div class="event-header">
            <h3>{{ event.name }}</h3>
            <span class="date-badge">{{ event.date }}</span>
          </div>
          <p class="event-time">⏰ {{ event.time }} | 📍 {{ event.location }}</p>
          <p class="event-desc">{{ event.description }}</p>
          <div class="event-details" v-if="event.whatToBring !== 'Tidak perlu membawa apa-apa.' && event.whatToBring !== 'Tidak perlu.'">
            <p class="bring">🎒 <strong>Bawa:</strong> {{ event.whatToBring }}</p>
          </div>
          <div class="event-details" v-if="event.rewards !== 'Tidak ada hadiah khusus. Festival pembuka tahun baru.'">
            <p class="reward">🎁 <strong>Hadiah:</strong> {{ event.rewards }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { villageEventsData } from '../data/villageEvents';
const currentSeason = ref('Spring');
const filteredEvents = computed(() => villageEventsData.filter(e => e.season === currentSeason.value));
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
.events-list { display: flex; flex-direction: column; gap: 16px; }
.event-card { display: flex; gap: 20px; align-items: flex-start; }
.event-content { flex: 1; }
.event-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px; }
.event-header h3 { font-size: 1.1rem; }
.date-badge { background: var(--note-bg); color: var(--note-color); font-size: 0.8rem; padding: 4px 12px; border-radius: 10px; font-weight: 600; white-space: nowrap; }
.event-time { color: var(--text-light); font-size: 0.85rem; margin-bottom: 8px; }
.event-desc { color: var(--text-light); font-size: 0.9rem; margin-bottom: 10px; }
.event-details { background: var(--info-bg); padding: 10px 14px; border-radius: 8px; margin-bottom: 6px; }
.bring { color: var(--bring-color); font-size: 0.85rem; }
.reward { color: var(--reward-color); font-size: 0.85rem; }
</style>
