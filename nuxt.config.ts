// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      useFakeApi: process.env.USE_FAKE_API,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    }
  },
  vite: {
    server: {
      hmr: {
        protocol: 'http',
        host: 'localhost',
        clientPort: 3000,
        port: 3000,
      }
    }
  },
  css: ['../assets/scss/main.scss'],
  modules: [
    '@nuxt/eslint',
    'nuxt-svgo',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ]
});