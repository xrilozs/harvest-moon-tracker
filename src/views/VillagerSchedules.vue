<template>
  <div>
    <h1 class="title">Jadwal Harian Warga</h1>
    <p class="subtitle">Lokasi setiap warga berdasarkan waktu dan hari. Berguna untuk memberikan hadiah!</p>

    <div class="filter-row">
      <input type="text" v-model="searchQuery" placeholder="Cari nama warga..." class="search-input" />
    </div>

    <!-- Day Tabs -->
    <div class="day-tabs">
      <button v-for="day in days" :key="day" 
              class="day-btn" :class="{ active: selectedDay === day }"
              @click="selectedDay = day">
        {{ day }}
      </button>
    </div>

    <!-- Grid List -->
    <div class="schedules-grid">
      <div v-for="villager in filteredSchedules" :key="villager.id" class="card sched-card">
        <div class="sched-header">
          <img :src="villager.image" :alt="villager.name" class="sched-img" @error="onImgError" />
          <div>
            <h2>{{ villager.name }}</h2>
          </div>
        </div>
        
        <p class="sched-notes" v-if="villager.notes">💡 {{ villager.notes }}</p>
        
        <div class="schedule-table">
          <div v-for="(slot, i) in getScheduleForDay(villager, selectedDay)" :key="i" class="schedule-row">
            <span class="time-cell">{{ slot.time }}</span>
            <span class="location-cell">{{ slot.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { villagerSchedulesData } from '../data/villagerSchedules';

const searchQuery = ref('');
const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
const selectedDay = ref('Senin');

const filteredSchedules = computed(() => {
  return villagerSchedulesData.filter(v =>
    v.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Helper untuk mengambil jadwal hari tertentu (sementara fallback ke regularDays jika data per hari belum lengkap)
const getScheduleForDay = (villager: any, day: string) => {
  if (villager.schedules && villager.schedules[day]) {
    return villager.schedules[day];
  }
  return villager.regularDays || [];
};

const onImgError = (e: Event) => { (e.target as HTMLImageElement).src = 'https://placehold.co/48x48/e0e7ff/4338ca?text=NPC'; };
</script>

<style scoped>
.filter-row { display: flex; gap: 16px; margin-bottom: 20px; }
.search-input { padding: 12px 16px; border-radius: 12px; border: 1px solid var(--border); background: var(--surface); color: var(--text-main); font-size: 1rem; width: 100%; max-width: 350px; outline: none; transition: border-color 0.2s; font-family: inherit; }
.search-input:focus { border-color: var(--primary); }

.day-tabs { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
.day-btn { background: var(--surface); border: 1px solid var(--border); padding: 8px 16px; border-radius: 20px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.day-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

.schedules-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
  gap: 20px; 
}

.sched-card { display: flex; flex-direction: column; gap: 16px; align-items: flex-start; }

.sched-header { display: flex; align-items: center; gap: 14px; width: 100%; }
.sched-img { width: 56px; height: 56px; border-radius: 14px; object-fit: cover; background: var(--info-bg); image-rendering: pixelated; }
.sched-header h2 { font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin: 0; }

.sched-notes { background: var(--note-bg); color: var(--note-color); padding: 10px 14px; border-radius: 10px; font-size: 0.88rem; width: 100%; box-sizing: border-box; }

.schedule-table { display: flex; flex-direction: column; gap: 4px; width: 100%; }
.schedule-row { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; border-radius: 8px; font-size: 0.88rem; transition: background 0.2s; border-left: 3px solid var(--primary); background: var(--info-bg); margin-bottom: 4px;}
.time-cell { font-weight: 700; color: var(--primary-dark); }
.location-cell { color: var(--text-main); }
</style>
