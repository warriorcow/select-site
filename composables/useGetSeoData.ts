type SeoMeta = {
  property: string;
  content: string;
};

export function useGetSeoData(data, params_seo: SeoMeta[] = []) {
  const { locale } = useI18n();
  const seoTitle = computed(() => locale.value === 'ru' ? data.acf.seo_title : data.acf.seo_title_en);
  const seoDescription = computed(() => locale.value === 'ru' ? data.acf.seo_description : data.acf.seo_description_en);

  watchEffect(() => {
    useHead({
      title: seoTitle.value,
      meta: [
        {
          property: 'og:title',
          content: seoTitle.value,
        },
        {
          property: 'og:description',
          content: seoDescription.value,
        },
        {
          name: 'description',
          content: seoDescription.value
        },
        ...params_seo
      ],
    });
  });
}
