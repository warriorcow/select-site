<script setup lang="ts">
  const { immediateLocale } = storeToRefs(useWindowStore());
  const { t } = useI18n();

  const { data } = await useApi(`/${immediateLocale.value}/wp-json/wp/v2/pages`, {
    query: {
      slug: 'about',
      acf_format: 'standard'
    },
    transform(data) {
      return data[0];
    },
  });

  useGetSeoData(data.value);
</script>

<template>
  <div>
    <Breadcrumbs
      :items="[{
        name: t('pages.about.breadcrumbs.1'),
        link: '/',
        active: true
      },{
        name: t('pages.about.breadcrumbs.2'),
        link: '/about',
        active: false
      }]"
    />
    <div class="about">
      <h1 v-html="data.title.rendered" />
      <div v-html="data.content.rendered" />
    </div>
  </div>
  
</template>

<style lang="scss">
  .about {
    @apply mt-[160px] max-mobile:mt-10 mx-auto max-w-[610px];

    a {
      @apply underline;
    }

    h1, h2 {
      @apply text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase mb-3 max-mobile:mb-5;
    }

    p {
      @apply text-lg max-tablet:text-md max-mobile:text-sm mb-4;
    }
  }
</style>