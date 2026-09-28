<template>
  <div>
    <h1 class="title">🏠 Rumah & Cottage</h1>
    <p class="subtitle">Semua rumah dan cottage yang tersedia di FoMT.</p>

    <div class="tabs">
      <button class="tab-btn" :class="{ active: currentTab === 'rumah' }" @click="currentTab = 'rumah'">🏡 Rumah & Bangunan</button>
      <button class="tab-btn" :class="{ active: currentTab === 'cottage' }" @click="currentTab = 'cottage'">🏖️ Cottage Liburan</button>
    </div>

    <!-- TAB: Rumah -->
    <div v-if="currentTab === 'rumah'">
      <h2 class="section-title">Upgrade Rumah (via Gotz)</h2>
      <p class="section-desc">Ada <strong>3 level rumah utama</strong> yang dibangun oleh <strong>Gotz (tukang kayu)</strong>.</p>

      <div class="houses-list">
        <div v-for="(house, i) in houseUpgrades" :key="i" class="card house-card">
          <div class="house-header">
            <span class="level-num">{{ i + 1 }}</span>
            <div>
              <h3>{{ house.name }}</h3>
              <div class="cost-row">
                <span class="cost-badge">💰 {{ house.cost }}</span>
                <span class="material-badge" v-if="house.materials !== 'Tidak perlu'">🪵 {{ house.materials }}</span>
              </div>
            </div>
          </div>
          <div class="features-list">
            <div v-for="feat in house.features" :key="feat" class="feature-item">
              <span class="feat-dot">✓</span>
              <span>{{ feat }}</span>
            </div>
          </div>
          <p class="how-to-get">{{ house.howToGet }}</p>
        </div>
      </div>

      <!-- Farm Buildings -->
      <h2 class="section-title" style="margin-top: 40px;">Upgrade Bangunan Farm</h2>
      <p class="section-desc">Bangunan farm yang bisa di-upgrade melalui Gotz.</p>

      <div class="buildings-grid">
        <div v-for="building in farmBuildingsData" :key="building.name" class="card building-card">
          <h3>{{ building.name }}</h3>
          <div class="cost-row">
            <span class="cost-badge">💰 {{ building.cost }}</span>
            <span class="material-badge">🪵 {{ building.materials }}</span>
          </div>
          <p class="building-desc">{{ building.description }}</p>
        </div>
      </div>

      <!-- Gotz Info -->
      <div class="card gotz-info">
        <h3>🪓 Tentang Gotz (Tukang Kayu)</h3>
        <ul>
          <li><strong>Lokasi:</strong> Rumah Gotz, di jalan menuju Mother's Hill.</li>
          <li><strong>Jadwal:</strong> Buka setiap hari kecuali <strong>Sabtu</strong> (libur).</li>
          <li><strong>Jam Kerja:</strong> 11:00 - 16:00</li>
          <li><strong>Cara Pesan:</strong> Kunjungi rumahnya dan bicara untuk memilih upgrade.</li>
          <li><strong>Waktu Bangun:</strong> Setiap upgrade membutuhkan sekitar <strong>3 hari kerja</strong>. Gotz tidak bekerja saat festival atau cuaca buruk.</li>
          <li><strong>Lumber:</strong> Dapatkan Lumber dengan memotong kayu menggunakan Axe di area farm atau hutan.</li>
        </ul>
      </div>
    </div>

    <!-- TAB: Cottage -->
    <div v-if="currentTab === 'cottage'">
      <h2 class="section-title">Vacation Cottages</h2>
      <p class="section-desc">Ada <strong>3 cottage liburan</strong> yang bisa didapatkan dengan cara berbeda-beda.</p>

      <div class="houses-list">
        <div v-for="(cottage, i) in cottages" :key="i" class="card house-card cottage-highlight">
          <div class="house-header">
            <span class="level-num cottage-num">{{ i + 1 }}</span>
            <div>
              <h3>{{ cottage.name }}</h3>
              <div class="cost-row">
                <span class="cost-badge">💰 {{ cottage.cost }}</span>
                <span class="material-badge" v-if="cottage.materials !== 'Tidak perlu'">🪵 {{ cottage.materials }}</span>
              </div>
            </div>
          </div>
          <div class="features-list">
            <div v-for="feat in cottage.features" :key="feat" class="feature-item">
              <span class="feat-dot cottage-dot">✓</span>
              <span>{{ feat }}</span>
            </div>
          </div>
          <p class="how-to-get">{{ cottage.howToGet }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { houseLevelsData, farmBuildingsData } from '../data/guideData';

const currentTab = ref('rumah');
const houseUpgrades = computed(() => houseLevelsData.slice(0, 3));
const cottages = computed(() => houseLevelsData.slice(3));
</script>

<style scoped>
.tabs { display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
.tab-btn { background: var(--surface); border: 1px solid var(--border); padding: 10px 24px; border-radius: 24px; cursor: pointer; font-weight: 600; color: var(--text-light); transition: all 0.2s; font-family: inherit; }
.tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); }

.section-title { font-size: 1.3rem; font-weight: 700; margin: 8px 0; color: var(--text-main); }
.section-desc { color: var(--text-light); margin-bottom: 20px; font-size: 0.95rem; }

.houses-list { display: flex; flex-direction: column; gap: 20px; }

.house-card { display: flex; flex-direction: column; gap: 16px; border-left: 4px solid var(--primary); }
.house-card.cottage-highlight { border-left-color: var(--accent); }

.house-header { display: flex; align-items: center; gap: 16px; }
.level-num { width: 44px; height: 44px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.2rem; flex-shrink: 0; }
.cottage-num { background: var(--accent); }

.house-header h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 4px; }
.cost-row { display: flex; gap: 10px; flex-wrap: wrap; }
.cost-badge { background: var(--price-bg); color: var(--price-color); padding: 3px 12px; border-radius: 10px; font-size: 0.8rem; font-weight: 600; }
.material-badge { background: var(--note-bg); color: var(--note-color); padding: 3px 12px; border-radius: 10px; font-size: 0.8rem; font-weight: 600; }

.features-list { display: flex; flex-direction: column; gap: 6px; }
.feature-item { display: flex; align-items: flex-start; gap: 8px; font-size: 0.9rem; color: var(--text-main); }
.feat-dot { color: var(--primary); font-weight: 700; flex-shrink: 0; }
.cottage-dot { color: var(--accent); }

.how-to-get { background: var(--info-bg); padding: 12px 16px; border-radius: 10px; font-size: 0.88rem; color: var(--text-light); line-height: 1.6; }

.buildings-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.building-card { display: flex; flex-direction: column; gap: 10px; }
.building-card h3 { font-size: 1rem; font-weight: 700; }
.building-desc { color: var(--text-light); font-size: 0.88rem; }

.gotz-info { margin-top: 32px; cursor: default; }
.gotz-info:hover { transform: none; }
.gotz-info h3 { font-size: 1.1rem; margin-bottom: 12px; }
.gotz-info ul { padding-left: 20px; }
.gotz-info li { color: var(--text-light); font-size: 0.9rem; margin-bottom: 8px; line-height: 1.6; }
.gotz-info strong { color: var(--text-main); }
</style>
