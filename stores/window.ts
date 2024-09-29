import { defineStore } from 'pinia';

export const useWindowStore = defineStore('window', {
  state: (): {
    token: string | null
    breakpoint: string | null,
    language: string
    immediateLocale: any,
    canplaythroughMainVideo: boolean
  } => ({
    token: null,
    breakpoint: null,
    language: '',
    immediateLocale: '',
    canplaythroughMainVideo: false
  }),
  getters: {
    isMobile: (state) => state.breakpoint === 'mobile',
    isTablet: (state) => state.breakpoint === 'tablet',
    isDesktop: (state) => state.breakpoint === 'desktop'
  },
  actions: {
    setBreakpoint(payload: string) {
      this.breakpoint = payload;
    },

    setToken(token: string) {
      this.token = token;
    },

    async setLanguage(lang: string) {
      this.language = lang;
    },

    async immediateSwitch(e, locale) {
      this.immediateLocale = locale;
      // click handler on nuxtlink prevent navigation so we have to navigate manually
      await navigateTo(e.target.getAttribute('href'));
    }
  }
});
