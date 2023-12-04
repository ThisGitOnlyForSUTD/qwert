export default defineNuxtConfig({
  modules: [
    '@nuxt/image'
  ],
  devtools: { enabled: true },
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/scss/styles.scss";'
        }
      }
    }
  }
})
