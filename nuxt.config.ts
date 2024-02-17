// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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

})
