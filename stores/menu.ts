import { defineStore } from 'pinia';
import { buildTree } from '~/helpers/buildTree';
import { useWindowStore } from '~/stores/window';

export const useMenuStore = defineStore('menu', {
  state: (): {
    isMenuOpen: boolean;
    menu: any | null;
    bookingItem: any | null; // Новое поле для booking элемента
  } => ({
    isMenuOpen: false,
    menu: null,
    bookingItem: null
  }),
  actions: {
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
          // Ищем элемент с acf.slug === 'booking'
          const bookingItemIndex = data.value.findIndex(item =>
            item.acf && item.acf.slug === 'booking'
          );

          if (bookingItemIndex !== -1) {
            // Сохраняем booking элемент отдельно
            this.bookingItem = data.value[bookingItemIndex];

            // Удаляем его из массива перед построением дерева
            const menuItems = [...data.value];
            menuItems.splice(bookingItemIndex, 1);

            // Строим дерево из остальных элементов
            this.menu = buildTree(menuItems, ['title', 'url', 'slug']);
          } else {
            // Если booking элемента нет, просто строим дерево из всех элементов
            this.menu = buildTree(data.value, ['title', 'url', 'slug']);
            this.bookingItem = null;
          }
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