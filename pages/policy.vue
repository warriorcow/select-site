<script setup lang="ts">
  import { useGetSeoData } from '~/composables/useGetSeoData';

  const { immediateLocale } = storeToRefs(useWindowStore());
  const { t } = useI18n();

  const { data } = await useApi(`/${immediateLocale.value}/wp-json/wp/v2/pages`, {
    query: {
      slug: 'policy',
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
        name: t('pages.policy.breadcrumbs.1'),
        link: '/',
        active: true
      },{
        name: t('pages.policy.breadcrumbs.2'),
        link: '/policy',
        active: false
      }]"
    />
    <div class="policy">
      <h1 v-html="data.title.rendered" />
      <div v-html="data.content.rendered" />
    </div>
  </div>
</template>

<style lang="scss">
.policy {
  @apply mt-[160px] max-mobile:mt-10 mx-auto max-w-[610px];

  h1 {
    @apply text-6xl max-mobile:text-3xl uppercase mb-3
  }

  a {
    @apply underline;
  }

  ol {
    margin-top: 10px;
    counter-reset: item;

    @apply max-mobile:text-md;

    & > li {
      counter-increment: item;
      margin-top: 25px;

      h2 {
        display: inline-block;
        margin-bottom: 10px;
        padding-left: 0;

        @apply max-mobile:text-md
      }

      & > * {
        padding-left: 20px;
      }

      ul {
        margin-left: 20px;
      }

      &::before {
        content: counter(item) ".";
        margin-right: 10px;
      }
    }
  }

  ul {
    margin-top: 10px;

    @apply list-disc;
  }

  li {
    margin-top: 15px;
  }

  p {
    @apply text-lg max-mobile:text-md mb-4;
  }
}
</style>