// https://nuxt.com/docs/api/configuration/nuxt-config
import { VitePWA } from 'vite-plugin-pwa'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt'
  ],

  googleFonts: {
    families: {
      Roboto: true,
      'poppins': true,
      // Atau tambahkan font yang lain sesuai kebutuhan
    },
    // Opsi tambahan jika diperlukan
    display: 'swap',
    prefetch: true,
    preload: true,
    download: true,
    inject: true,
    base64: false,
    preconnect: false,
  },

  pwa: {
    /* PWA options */
    manifest: {
      name: "Your Dream",
      short_name: "Your Dream",
      description: "Your Dream App",
      theme_color: "#0AB85F",
      icons: [
        {
          src: "/icon.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/", // Fallback to index.html
      globPatterns: [
        "**/*.{js,css,html,png,jpg,jpeg,svg,woff2,woff,ttf,eot,webmanifest}",
      ],
    },
    client: {
      installPrompt: true,
    },
    registerWebManifestInRouteRules: true,
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/$/],
    },
    registerType: "autoUpdate",
  },
})
