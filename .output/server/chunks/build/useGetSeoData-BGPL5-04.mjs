import { u as useI18n, j as useHead } from './server.mjs';
import { computed, watchEffect } from 'vue';

function useGetSeoData(data, params_seo = []) {
  const { locale } = useI18n();
  const seoTitle = computed(() => locale.value === "ru" ? data.acf.seo_title : data.acf.seo_title_en);
  const seoDescription = computed(() => locale.value === "ru" ? data.acf.seo_description : data.acf.seo_description_en);
  watchEffect(() => {
    useHead({
      title: seoTitle.value,
      meta: [
        {
          property: "og:title",
          content: seoTitle.value
        },
        {
          property: "og:description",
          content: seoDescription.value
        },
        {
          name: "description",
          content: seoDescription.value
        },
        ...params_seo
      ]
    });
  });
}

export { useGetSeoData as u };
//# sourceMappingURL=useGetSeoData-BGPL5-04.mjs.map
