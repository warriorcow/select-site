<script setup lang="ts">
  import { useWindowStore } from '~/stores/window';
  import { useMenuStore } from '~/stores/menu';
  import { useNuxtApp } from '#app';
  import { useI18n } from 'vue-i18n';
  import { useCallbackModalStore } from '~/stores/callback-modal';

  const { t } = useI18n();
  const route = useRoute();

  definePageMeta({
    layout: 'default',
    async onError(error) {
      if (error.statusCode === 404) {
        return { layout: 'error' };
      }
    }
  });

  const { fetchMenu } = useMenuStore();
  const { $viewport } = useNuxtApp();
  const { finalizePendingLocaleChange, locale } = useI18n();
  const { immediateLocale } = storeToRefs(useWindowStore());
  const { setBreakpoint, setToken } = useWindowStore();
  const { closeCallbackModal } = useCallbackModalStore();
  const { closeMenu } =  useMenuStore();

  if (import.meta.server) {
    immediateLocale.value = locale.value;
    const { data } = await useFetch('https://admin.alekseyp.store/wp-json/jwt-auth/v1/token?username=jwt_user&password=123456', {
      method: 'post',
      pick: ['token']
    });
    setToken(data.value.token);
    await fetchMenu();
  }


  const pageIsVisible = ref(true);

  const onBeforeEnter = async () => {
    pageIsVisible.value = true;
    await finalizePendingLocaleChange();
  };

  const onBeforeLeave = async () => {
    pageIsVisible.value = false;
  };

  onMounted(() => {
    document.addEventListener('keyup', e => {
      if(e.key === 'Escape') {
        closeCallbackModal();
        closeMenu();
      }
    });
  });

  watch($viewport.breakpoint, (newBreakpoint) => {
    setBreakpoint(newBreakpoint);
  }, { immediate: true });

  watch(() => immediateLocale.value, async () => {
    await fetchMenu();
  });

  watchEffect(() => {
    useHead({
      meta: [
        {
          property: 'og:title',
          content: t('seo.main.title'),
        },
        {
          property: 'og:description',
          content: t('seo.main.description'), // добавьте описание страницы
        },
        {
          property: 'og:image',
          content: '/badge.png', // ссылка на изображение
        },
        {
          property: 'og:url',
          content: route.fullPath, // текущий URL страницы
        },
        {
          property: 'og:type',
          content: 'website', // тип контента
        },
      ],
    });
  });
</script>

<template>
  <NuxtLoadingIndicator
    :height="3"
    color="#000"
  />
  <Transition
    mode="out-in"
    name="page"
  >
    <NuxtLayout>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
          onBeforeEnter,
          onBeforeLeave
        }"
      />
      <Transition name="page">
        <BookTooltip v-show="pageIsVisible" />
      </Transition>
    </NuxtLayout>
  </Transition>
  <UiModal />
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all .4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>