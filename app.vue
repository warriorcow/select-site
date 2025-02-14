<script setup lang="ts">
  import { useWindowStore } from '~/stores/window';
  import { useMenuStore } from '~/stores/menu';
  import { useNuxtApp } from '#app';
  import { useI18n } from 'vue-i18n';
  import { useCallbackModalStore } from '~/stores/callback-modal';
  const config = useRuntimeConfig();
  const { t } = useI18n();
  const route = useRoute();
  const { fetchMenu } = useMenuStore();
  const { $viewport } = useNuxtApp();
  const { finalizePendingLocaleChange, locale } = useI18n();
  const { immediateLocale } = storeToRefs(useWindowStore());
  const { setBreakpoint, setToken } = useWindowStore();
  const { closeCallbackModal } = useCallbackModalStore();
  const { closeMenu } =  useMenuStore();

  if (import.meta.server) {
    immediateLocale.value = locale.value;
    const { data } = await useApi(`/wp-json/jwt-auth/v1/token?username=${config.public.username}&password=${config.public.password}`, {
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
          property: 'og:image',
          content: '/badge.png',
        },
        {
          property: 'og:url',
          content: route.fullPath,
        },
        {
          property: 'og:type',
          content: 'website',
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
  transition: all 300ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>