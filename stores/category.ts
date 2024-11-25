import { defineStore } from 'pinia';
import { useWindowStore } from '~/stores/window';
import type { RootCategory } from '~/models/category';

export const useCategoryStore = defineStore('category', {
  state: (): {
    categories: RootCategory | null
  } => ({
    categories: {}
  }),
  actions: {
    async fetchCategory(): Promise<void> {
      const { immediateLocale } = storeToRefs(useWindowStore());

      try {
        const { data } = await useApi<RootCategory>(`/${immediateLocale.value}/wp-json/custom/v1/categories`);

        if (data.value) {
          this.categories = data.value;
        }
      } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
      }
    }
  },
});
