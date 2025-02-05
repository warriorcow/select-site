<script setup lang="ts">
  import type { RootCategory } from '~/models/category';
  import { useGetSeoData } from '~/composables/useGetSeoData';
  
  const { immediateLocale } = storeToRefs(useWindowStore());
  const { data: pageData } = await useApi<RootCategory>(`/${immediateLocale.value}/wp-json/wp/v2/categories?slug=models`);
  const { data: categoriesData } = await useApi<RootCategory>(`/${immediateLocale.value}/wp-json/custom/v1/categories`);

  useGetSeoData(pageData.value[0]);
</script>

<template>
  <div class="models">
    <Breadcrumbs
      :items="[{
        name: $t('pages.models.breadcrumbs.1'),
        link: '/',
        active: true
      },{
        name: $t('pages.models.breadcrumbs.2'),
        link: '/models',
        active: false
      }]"
    />
    <h1
      class="absolute text-[0px] opacity-0 pointer-events-none select-none"
      v-text="$t('seo.models.title.h1')"
    />
    <h2
      class="models__title title-animate uppercase"
      v-html="$t('pages.models.title')"
    />
    <div class="models__container">
      <CategoryCard
        v-for="category in categoriesData"
        :key="category.id"
        :params="category"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .models {
    @apply flex flex-col h-full mb-9 max-tablet:mb-6 max-mobile:mb-4 overflow-hidden;

    &__title {
      @apply text-6xl max-tablet:text-5xl text-center mt-0 max-tablet:mt-3 max-mobile:mt-[30px];
    }

    &__container {
      @apply flex max-mobile:flex-col max-mobile:gap-y-[15px] h-full w-full gap-x-[15px] max-tablet:gap-x-5 max-w-[1150px] max-tablet:max-w-[835px] mx-auto mt-[30px] max-mobile:mt-4;
    }
  }

  .letter {
    opacity: 0;
    transform: translateY(200px);
    animation: appear 0.5s forwards;
  }

  .letter:nth-child(1) {
    animation-delay: 100ms;
  }

  @keyframes appear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .title-animate {
    opacity: 0;
    transform: translateX(-50px);
    animation: titleAnimate 0.5s forwards;
  }

  @keyframes titleAnimate {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>