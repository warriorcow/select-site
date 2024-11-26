import { defineStore } from 'pinia';
import type { Profile } from '~/models/profile';
import { useWindowStore } from '~/stores/window';
export const useProfileStore = defineStore('profile', {
  state: (): {
    activePortfolioIndex: number
    profileData: Profile | null
    isAnimatedTab: boolean
    activeTabIndex: number
    transitionTime: number
  } => ({
    activePortfolioIndex: 0,
    isAnimatedTab: false,
    profileData: null,
    activeTabIndex: null,
    transitionTime: 0.4
  }),
  getters: {
    getShortName: state => {
      const { immediateLocale } = useWindowStore();
      return `${state.profileData?.acf.fio[immediateLocale].name} ${state.profileData?.acf.fio[immediateLocale].last_name[0]}`;
    }
  },
  actions: {
    setActivePortfolioIndex(index: number): void {
      this.activePortfolioIndex = 4;
      setTimeout(() => {
        this.activePortfolioIndex = index;
      }, 0);
    },

    setActiveTabIndex(index: number | null): void {
      this.activeTabIndex = index;
    }
  },
});
