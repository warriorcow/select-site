<script setup lang="ts">
  import { useProfileStore } from '~/stores/profile';
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';
  import { useWindowStore } from '~/stores/window';
  import type { DetailTabs } from '#components';
  import type { Profile } from '~/models/profile';

  const { isMobile, isTablet, immediateLocale } = storeToRefs(useWindowStore());
  const { setActivePortfolioIndex, setActiveTabIndex } = useProfileStore();
  const { isAnimatedTab, transitionTime } = storeToRefs(useProfileStore());
  const route = useRoute();
  const router = useRouter();
  const { t } = useI18n();

  definePageMeta({
    layout: 'profile'
  });

  const slug = ref(route.params.profile);
  const detailCategoryRef:Ref<HTMLElement | null> = ref(null);
  const detailTabsRef = ref<InstanceType<typeof DetailTabs> | null>(null);
  const profileComponentRef = ref();
  const isVisibleTab = ref(false);

  const buttonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return 'sm';
    }
    if (isMobile.value) {
      return 'xs';
    }
    return 'lg';
  });
  // Получение профиля
  const { data: profileData } = await useApi(`/${immediateLocale.value}/wp-json/wp/v2/posts`, {
    query: {
      slug,
      acf_format: 'standard'
    },
    transform(data: Profile[]) {
      return data[0];
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

  watchEffect(() => {
    useHead({
      title: profileData.value?.acf.seo_title || 'seo_title',
      meta: [
        {
          property: 'og:title',
          content: profileData.value?.acf.seo_title,
        },
        {
          property: 'og:description',
          content: profileData.value?.acf.seo_description, // добавьте описание страницы
        },
        {
          name: 'description',
          content: profileData.value?.acf.seo_description || 'seo_description'
        },
        {
          property: 'og:image',
          content: profileData.value?.acf.model_main_image.url || '/badge.png', // ссылка на изображение
        },
      ],
    });
  });

  const portfolios = computed(() => {
    const createPortfolio = (name: string, key: string, index: number) => ({
      index,
      name: t(`pages.profile.actions.${name}`),
      cover: profileData.value.acf[`${key}_image`]?.url || '',
      key,
      coverMobile: profileData.value.acf[`${key}_image_mobile`]?.url || '',
      items: profileData.value.acf[key]?.map((image: { url: string }) => image.url) || [],
      hidden: profileData.value.acf.switch_tabs.includes(key)
    });

    const keys = [
      { name: 'portfolio', key: 'portfolio' },
      { name: 'covers', key: 'covers' },
      { name: 'shows', key: 'shows' }
    ];

    return keys
      .filter(({ key }) => profileData.value.acf[key]) // Проверяем, что данные существуют
      .map(({ name, key }, index) => createPortfolio(name, key, index))
      .filter(portfolio => !portfolio.hidden);
  });

  const tabs = computed(() => {
    const createItem = (name: string, type: string, key: string) => ({
      name: t(`pages.profile.actions.${name}`),
      cover: profileData.value.acf[`${key}_image`]?.url || '',
      type,
      key,
      items: profileData.value.acf[name]?.map((item: { url: string }) => type === 'image' ? item.url : item) || [],
      hidden: profileData.value.acf.switch_tabs.includes(key)
    });

    const keys = [
      { name: 'digitals', type: 'image', key: 'digitals' },
      { name: 'videos', type: 'video', key: 'videos' }
    ];

    return keys
      .filter(({ name }) => profileData.value.acf[name]) // Проверяем наличие данных
      .map(({ name, type, key }) => createItem(name, type, key))
      .filter(tab => !tab.hidden);
  });

  onMounted( () => {
    setTimeout(() => {
      isVisibleTab.value = true;
    }, 500);
  });

  function clickPortfolioButton(index: number): void {
    setActivePortfolioIndex(index);
    detailCategoryRef.value?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  function clickTabButton(index: number): void {
    transitionTime.value = 0;
    if (isAnimatedTab.value) return;
    setActiveTabIndex(index);
    setTimeout(() => {

      document.querySelectorAll('.tab-scroll-area')[index].scrollIntoView({ block: 'start', behavior: 'smooth' });
    transitionTime.value = 0.4;
    }, 200);
  }
</script>

<template>
  <div
    ref="profileComponentRef"
    class="detail"
  >
    <template v-if="profileData">
      <DetailHeader
        :params="profileData"
      >
        <template #actions>
          <UiButton
            v-for="(item, index) in portfolios"
            :key="item.index"
            :label="$t(`pages.profile.actions.${item.key}`)"
            :size="buttonSize"
            color="primary"
            is-uppercase
            is-underline-hover
            @click="clickPortfolioButton(index)"
          />
          <UiButton
            v-for="(item, index) in tabs"
            :key="index"
            :label="$t(`pages.profile.actions.${item.key}`)"
            :size="buttonSize"
            color="primary"
            is-uppercase
            is-underline-hover
            @click="clickTabButton(index)"
          />
          <UiButton
            v-if="profileData.acf.instagram && !profileData.acf.switch_tabs.includes('instagram')"
            :label="$t('pages.profile.actions.instagram')"
            :to="profileData.acf.instagram"
            target="_blank"
            :size="buttonSize"
            color="primary"
            is-uppercase
            is-underline-hover
          />
          <UiButton
            v-if="profileData.acf.www && !profileData.acf.switch_tabs.includes('site')"
            label="models.com"
            :to="profileData.acf.www"
            target="_blank"
            :size="buttonSize"
            color="primary"
            is-uppercase
            is-underline-hover
          />
        </template>
      </DetailHeader>

      <DetailCharacteristics 
        :params="profileData.acf.params"
      />
      <div ref="detailCategoryRef" />
      <DetailCategory :params="portfolios" />
      <DetailTabs
        v-if="tabs.length && isVisibleTab"
        ref="detailTabsRef"
        :params="tabs"
      />

      <div class="flex justify-center p-[30px] max-mobile:p-[40px] max-mobile:px-2.5">
        <UiButton
          class="text-2xl max-tablet:text-lg max-mobile:text-sm"
          :label="$t('pages.profile.actions.see_other_models')"
          is-uppercase
          is-underline
          @click="router.options.history.state.back ? router.back() : router.push(profileData.acf.back_link)"
        />
      </div>
    </template>


  </div>
</template>