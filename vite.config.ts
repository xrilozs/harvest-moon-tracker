import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'HM: FoMT Tracker',
        short_name: 'FoMT Tracker',
        description: 'Progress tracker interaktif untuk Harvest Moon: Friends of Mineral Town',
        theme_color: '#22c55e',
        background_color: '#f3f4f6',
        display: 'standalone',
        icons: [
          {
            src: 'https://placehold.co/192x192/22c55e/ffffff?text=HM',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://placehold.co/512x512/22c55e/ffffff?text=HM',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'https://placehold.co/512x512/22c55e/ffffff?text=HM',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
