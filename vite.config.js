import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'
import { VitePWA } from 'vite-plugin-pwa'
import qrcodeTerminal from 'qrcode-terminal'

const customQrPlugin = () => {
  return {
    name: 'custom-qr',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        setTimeout(() => {
          console.log('\n  Scan this QR code to visit the production PWA:');
          qrcodeTerminal.generate('https://gigpath26.netlify.app/', { small: true });
        }, 100);
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    customQrPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'GigPath',
        short_name: 'GigPath',
        description: 'GigPath Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
