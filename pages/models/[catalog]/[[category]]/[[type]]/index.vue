<script setup lang="ts">
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';
  import { useWindowStore } from '~/stores/window';
  import { findBySlug } from '~/helpers/findBySlug';
  import pull from 'lodash/pull';
  import pick from 'lodash/pick';
  import type { Category, RootCategory } from '~/models/category';
  const localePath = useLocalePath();
  const { isMobile, isTablet, immediateLocale } = storeToRefs(useWindowStore());
  const { t } = useI18n();
  const route = useRoute();

  const createdSlug = pull(Object.values(pick(route.params, ['catalog', 'category'])), '').join('-');

  // Загрузка тайтла
  const { data: categories } = await useFetch<RootCategory>(`https://admin.alekseyp.store/${immediateLocale.value}/wp-json/custom/v1/categories`);
  const title = `${categories.value[route.params.catalog].name} ${route.params.category ? findBySlug(categories.value[route.params.catalog], createdSlug).name : ''}`;


  // Получение одменю
  const menu = computed((): Category => {
    return findBySlug(categories.value[route.params.catalog], createdSlug);
  });

  // Получение моделей
  const catalogCategorySlug = pull(Object.values(route.params), '').join('-');
  const categoryId = findBySlug(categories.value[route.params.catalog], catalogCategorySlug).id;
  const { data: models } = await useFetch(`https://admin.alekseyp.store/${immediateLocale.value}/wp-json/wp/v2/posts`, {
    query: {
      categories: categoryId,
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

  const titleKey = ref(0);
  const titleRef = ref();
  const getBreadcrumbs = computed(() => {
    return [
      {
        name: t('pages.catalog.breadcrumbs.1'),
        link: '/',
        active: true
      },
      {
        name: categories.value[route.params.catalog].name,
        link: '',
        active: false
      }
    ];
  });
  const buttonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return 'md';
    }
    if (isMobile.value) {
      return 'xs';
    }
    return 'xl';
  });
  const subButtonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return 'sm';
    }
    if (isMobile.value) {
      return 'xs';
    }
    return 'md';
  });
  const currentCategory = computed(() => {
    return route.params.category;
  });

  watchEffect(() => {
    useHead({
      title: `${title} | Каталог моделей Select Management`,
      meta: [
        {
          name: 'description',
          content: t('seo.policy.title')
        },
      ],
    });
  });
</script>

<template>
  <div class="h-full w-full overflow-hidden">
    <div class="grid grid-cols-[1fr_auto_1fr]">
      <Breadcrumbs :items="getBreadcrumbs" />
      <h1
        v-if="!isMobile && !isTablet"
        :key="titleKey"
        class="text-center text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase title-animate"
        v-text="title"
      />
    </div>

    <h1
      v-if="isMobile || isTablet"
      ref="titleRef"
      class="mt-[30px] text-center text-6xl max-tablet:text-5xl max-mobile:text-3xl uppercase title-animate"
      v-text="title"
    />

    <div
      v-if="currentCategory"
      class="flex justify-center gap-x-5 mt-[15px] mb-[25px]"
    >
      <UiButton
        v-for="(sub_menu, index_sub) in menu.childrens"
        :key="index_sub"
        :label="sub_menu.name"
        :size="subButtonSize"
        :is-select-color="localePath(`/models${sub_menu.url}`) === localePath(route.path)"
        :is-select-color-hover="localePath(`/models${sub_menu.url}`) !== localePath(route.path)"
        :to="localePath(`/models${sub_menu.url}`)"
      />
    </div>
    <UiAccordionGroup
      v-else
      class="flex justify-center gap-x-[40px] mt-6 max-mobile:mt-[15px] min-h-[100px] max-mobile:min-h-fit max-mobile:mb-6"
    >
      <UiAccordion
        v-for="(menu_item, index) in menu.childrens"
        :id="index"
        :key="index"
        :is-absolute="!isMobile"
        :has-arrow="menu_item.childrens ? !isMobile ? 'lg' : 'sm' : false"
        :label="menu_item.name"
      >
        <template #label="{ label, isOpen }">
          <UiButton
            :size="buttonSize"
            is-uppercase
            :label="label"
            :is-underline="isOpen"
            :is-underline-hover="!isOpen"
            :to="localePath(`/models${menu_item.url}`)"
          />
        </template>
        <template #content>
          <div class="flex flex-col items-start gap-y-1 mt-2">
            <UiButton
              v-for="(sub_menu, index_sub) in menu_item.childrens"
              :key="index_sub"
              :label="sub_menu.name"
              :size="subButtonSize"
              :to="localePath(`/models${sub_menu.url}`)"
            />
          </div>
        </template>
      </UiAccordion>
    </UiAccordionGroup>

    <div class="h-full w-full flex justify-center">
      <Catalog :models="models" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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