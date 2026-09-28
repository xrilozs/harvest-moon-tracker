<template>
  <div>
    <h1 class="title">📺 Kuis TV — Harvest Goddess</h1>
    <p class="subtitle">Mainkan kuis tebak angka di TV untuk mendapatkan item langka! Semakin banyak streak menang, semakin bagus hadiahnya.</p>

    <div class="card how-to">
      <h2>🎮 Cara Bermain</h2>
      <ol>
        <li>Periksa TV di rumahmu (tekan tombol kiri berulang kali pada TV).</li>
        <li>Harvest Goddess akan muncul dan memberikan angka acak.</li>
        <li>Tebak apakah angka selanjutnya <strong>lebih tinggi (Higher)</strong> atau <strong>lebih rendah (Lower)</strong>.</li>
        <li>Jika benar, streak bertambah dan hadiah semakin bagus!</li>
        <li><strong>TIPS:</strong> Save sebelum bermain, load jika kalah untuk menjaga streak.</li>
      </ol>
    </div>

    <h2 style="margin: 28px 0 16px;">🎁 Daftar Hadiah Berdasarkan Streak</h2>

    <div class="prizes-grid">
      <div v-for="(prize, i) in tvQuizPrizesData" :key="i" class="card prize-card">
        <div class="prize-header">
          <span class="streak-badge">🔥 {{ prize.streak }}</span>
        </div>
        <h3 class="prize-name">{{ prize.prize }}</h3>
        <p class="prize-desc">{{ prize.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tvQuizPrizesData } from '../data/guideData';
</script>

<style scoped>
.how-to { cursor: default; margin-bottom: 8px; }
.how-to:hover { transform: none; }
.how-to h2 { font-size: 1.2rem; margin-bottom: 12px; }
.how-to ol { padding-left: 20px; }
.how-to li { color: var(--text-light); font-size: 0.92rem; margin-bottom: 8px; line-height: 1.6; }
.how-to strong { color: var(--text-main); }

.prizes-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.prize-card { display: flex; flex-direction: column; gap: 10px; }
.prize-header { display: flex; justify-content: space-between; align-items: center; }
.streak-badge { background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; padding: 4px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 700; }
.prize-name { font-size: 1.1rem; font-weight: 700; color: var(--text-main); }
.prize-desc { color: var(--text-light); font-size: 0.88rem; }
</style>
