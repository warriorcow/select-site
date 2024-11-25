import { defineStore } from 'pinia';
import { buildTree } from '~/helpers/buildTree';
import { useWindowStore } from '~/stores/window';

export const useMenuStore = defineStore('menu', {
  state: (): {
    isMenuOpen: boolean;
    menu: any | null;
  } => ({
    isMenuOpen: false,
    menu: null
  }),
  actions: {
    // Загрузка меню с API и построение дерева
    async fetchMenu() {
      const { token, immediateLocale } = storeToRefs(useWindowStore());
      const route = useRoute();

      try {
        const { data, refresh } = await useApi(`/${immediateLocale.value}/wp-json/wp/v2/menu-items`, {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
          key: route.path,
          method: 'get',
        });

        if (data.value) {
          this.menu = buildTree(data.value, ['title', 'url', 'slug']);
        }

        return refresh;
      } catch (error) {
        console.error('Ошибка при загрузке меню:', error);
      }
    },

    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    },

    closeMenu(): void {
      this.isMenuOpen = false;
    }
  },
});
