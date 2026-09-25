import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['fomt-icon.png'],
      manifest: {
        name: 'HM: FoMT Tracker',
        short_name: 'FoMT Tracker',
        description: 'Progress tracker interaktif untuk Harvest Moon: Friends of Mineral Town',
        theme_color: '#22c55e',
        background_color: '#f3f4f6',
        display: 'standalone',
        icons: [
          {
            src: '/fomt-icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/fomt-icon.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/fomt-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
