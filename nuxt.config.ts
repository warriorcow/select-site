// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      fakeApiUrl: process.env.FAKE_API_URL,
      useFakeApi: process.env.USE_FAKE_API,
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    skipSettingLocaleOnNavigate: true,
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'ru', language: 'ru-RU' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://my-nuxt-app.com'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      script: [
        {
          src: 'https://vk.com/js/api/videoplayer.js'
        }
      ],
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
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },
  css: ['../assets/scss/main.css', '../assets/scss/fonts.scss', 'vue-multiselect/dist/vue-multiselect.min.css', '@fancyapps/ui/dist/fancybox/fancybox.css'],
  plugins: ['../plugins/vuelidate.js', '../plugins/vue3-tel-input.client.ts'],
  modules: [
    '@nuxt/eslint',
    'nuxt-svgo',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'nuxt-viewport',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],
  viewport: {
    breakpoints: {
      desktop: 1201,
      tablet: 600,
      mobile: 321,
    }
  }
});