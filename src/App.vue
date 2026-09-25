<template>
  <aside class="sidebar" :class="{ open: sidebarOpen }">
    <div class="sidebar-header">
      <div style="text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
        <img src="/fomt-icon.png" alt="FoMT Logo" style="width: 48px; height: 48px; object-fit: contain; image-rendering: pixelated; transform: scale(1.5); margin-top: 8px; margin-bottom: 8px;" />
        <h2 style="color: var(--primary-dark); font-weight: 800; font-size: 1.25rem;">HM: FoMT</h2>
        <p style="font-size: 0.8rem; color: var(--text-light); font-weight: 600;">Progress Tracker</p>
      </div>
    </div>
    
    <nav class="sidebar-nav">
      <p class="nav-section">MENU UTAMA</p>
      <router-link to="/" class="nav-link" @click="sidebarOpen = false"><HomeIcon :size="18" /> Beranda</router-link>
      
      <p class="nav-section">PERTANIAN</p>
      <router-link to="/crops" class="nav-link" @click="sidebarOpen = false"><SproutIcon :size="18" /> Tanaman Kebun</router-link>
      <router-link to="/wild-plants" class="nav-link" @click="sidebarOpen = false"><LeafIcon :size="18" /> Tanaman Liar</router-link>
      <router-link to="/animal-products" class="nav-link" @click="sidebarOpen = false"><MilkIcon :size="18" /> Telur, Susu, Wol</router-link>

      <p class="nav-section">TAMBANG & ITEM</p>
      <router-link to="/ores" class="nav-link" @click="sidebarOpen = false"><HammerIcon :size="18" /> Ore & Upgrade</router-link>
      <router-link to="/mine-items" class="nav-link" @click="sidebarOpen = false"><PickaxeIcon :size="18" /> Item Tambang</router-link>
      <router-link to="/power-berries" class="nav-link" @click="sidebarOpen = false"><AppleIcon :size="18" /> Power Berries</router-link>
      <router-link to="/jewels" class="nav-link" @click="sidebarOpen = false"><GemIcon :size="18" /> Jewels</router-link>

      <p class="nav-section">MEMANCING</p>
      <router-link to="/king-fish" class="nav-link" @click="sidebarOpen = false"><FishIcon :size="18" /> Raja Ikan</router-link>

      <p class="nav-section">EVENT</p>
      <router-link to="/village-events" class="nav-link" @click="sidebarOpen = false"><CalendarIcon :size="18" /> Event Desa</router-link>
      <router-link to="/npc-events" class="nav-link" @click="sidebarOpen = false"><UsersIcon :size="18" /> Event NPC</router-link>
      <router-link to="/bachelorette-events" class="nav-link" @click="sidebarOpen = false"><HeartIcon :size="18" /> Heart Events</router-link>

      <p class="nav-section">WARGA & HADIAH</p>
      <router-link to="/npc-gifts" class="nav-link" @click="sidebarOpen = false"><GiftIcon :size="18" /> Kesukaan Warga</router-link>
      <router-link to="/bachelorette-gifts" class="nav-link" @click="sidebarOpen = false"><HeartHandshakeIcon :size="18" /> Kesukaan Pasangan</router-link>
      <router-link to="/gifts" class="nav-link" @click="sidebarOpen = false"><PackageIcon :size="18" /> Hadiah</router-link>

      <p class="nav-section">DAPUR</p>
      <router-link to="/recipes" class="nav-link" @click="sidebarOpen = false"><ChefHatIcon :size="18" /> Resep Makanan</router-link>
    </nav>
  </aside>

  <div class="mobile-header">
    <button class="hamburger" @click="sidebarOpen = !sidebarOpen">
      <MenuIcon :size="24" />
    </button>
    <div style="display: flex; align-items: center; gap: 12px;">
      <img src="/fomt-icon.png" alt="Logo" style="width: 24px; height: 24px; image-rendering: pixelated; transform: scale(1.5);" />
      <h2>HM: FoMT</h2>
    </div>
  </div>

  <div v-if="sidebarOpen" class="overlay" @click="sidebarOpen = false"></div>

  <main class="main-content">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  HomeIcon, SproutIcon, LeafIcon, AppleIcon, GemIcon, FishIcon,
  CalendarIcon, UsersIcon, HeartIcon, GiftIcon, HeartHandshakeIcon,
  PackageIcon, ChefHatIcon, HammerIcon, PickaxeIcon, MilkIcon, MenuIcon
} from '@lucide/vue';
const sidebarOpen = ref(false);
</script>

<style>
.sidebar-header {
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 12px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.nav-section {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 16px 0 6px 16px;
  opacity: 0.6;
}

.nav-link {
  font-size: 0.9rem;
  padding: 10px 16px;
  margin-bottom: 2px;
}

.mobile-header {
  display: none;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.mobile-header h2 {
  font-size: 1.1rem;
  color: var(--primary-dark);
}

.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-main);
  padding: 4px;
}

.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 199;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -300px;
    top: 0;
    z-index: 200;
    transition: left 0.3s ease;
    width: 280px;
    height: 100vh;
    border-right: 1px solid var(--border);
    background: var(--surface);
  }
  .sidebar.open {
    left: 0;
  }
  .mobile-header {
    display: flex;
  }
  .overlay {
    display: block;
  }
  #app {
    flex-direction: column;
  }
  .main-content {
    padding: 20px;
  }
}
</style>
