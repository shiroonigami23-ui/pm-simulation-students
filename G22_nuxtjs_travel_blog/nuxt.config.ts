export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,   // SSR enabled — this is where the trap manifests
  css: ['leaflet/dist/leaflet.css'],
  app: {
    head: {
      title: 'WanderLog',
      meta: [{ name: 'description', content: 'Travel stories and destination guides' }]
    }
  }
})
