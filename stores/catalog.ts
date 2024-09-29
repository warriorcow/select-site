import { defineStore } from 'pinia';
import { useWindowStore } from '~/stores/window';

export const useCatalogStore = defineStore('catalog', {
  state: (): {
    catalog: any[]
    status: string,
    titleCatalog: string
  } => ({
    catalog: [],
    status: 'success',
    titleCatalog: ''
  }),
  getters: {
    filteredCatalog(state) {
      return state.catalog;
    }
  },
  actions: {
    async fetchCatalog(slug: string): Promise<void> {
      const { immediateLocale } = storeToRefs(useWindowStore());
      const { data: category } = await useFetch(`https://admin.alekseyp.store/${immediateLocale.value}/wp-json/wp/v2/categories`, {
        query: {
          slug
        },
        onResponse({ response }): Promise<void> | void {
          if (response._data.length === 0) {
            nextTick(() => {
              throw showError({
                statusCode: 404,
                fatal: true
              });
            });
          }
        }
      });
      const { data: catalog, status } = await useFetch(`https://admin.alekseyp.store/${immediateLocale.value}/wp-json/wp/v2/posts`, {
        query: {
          categories: category.value[0].id,
          acf_format: 'standard'
        },
        onResponse({ response }): Promise<void> | void {
          if (response._data.length === 0) {
            nextTick(() => {
              throw showError({
                statusCode: 404,
                fatal: true
              });
            });
          }
        }
      });

      this.titleCatalog = catalog.value[0].name;
      this.catalog = catalog.value;
      this.status = status.value;
    }
  },
});
