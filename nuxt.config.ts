// https://nuxt.com/docs/api/configuration/nuxt-config
import { VitePWA } from 'vite-plugin-pwa'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
    'nuxt-swiper'
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

  app: {
    head: {
      viewport: 'initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/403828377_374385221919274_5333529820649623523_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vhqf_IZkYRUQ7kNvgH33MAk&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDpPgVQ62ptnmpcD6QREkcHvNq76rp4ZWFNKJgXtdcr7w&oe=667E1A19&_nc_sid=cf751b' }
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff' } // Ganti dengan warna yang diinginkan
      ]
    }
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
          src: "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/403828377_374385221919274_5333529820649623523_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vhqf_IZkYRUQ7kNvgH33MAk&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDpPgVQ62ptnmpcD6QREkcHvNq76rp4ZWFNKJgXtdcr7w&oe=667E1A19&_nc_sid=cf751b",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/403828377_374385221919274_5333529820649623523_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vhqf_IZkYRUQ7kNvgH33MAk&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDpPgVQ62ptnmpcD6QREkcHvNq76rp4ZWFNKJgXtdcr7w&oe=667E1A19&_nc_sid=cf751b",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/403828377_374385221919274_5333529820649623523_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vhqf_IZkYRUQ7kNvgH33MAk&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDpPgVQ62ptnmpcD6QREkcHvNq76rp4ZWFNKJgXtdcr7w&oe=667E1A19&_nc_sid=cf751b",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/403828377_374385221919274_5333529820649623523_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vhqf_IZkYRUQ7kNvgH33MAk&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDpPgVQ62ptnmpcD6QREkcHvNq76rp4ZWFNKJgXtdcr7w&oe=667E1A19&_nc_sid=cf751b",
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
