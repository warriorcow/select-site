<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';
  import { useWindowStore } from '~/stores/window';
  import { useCallbackModalStore } from '~/stores/callback-modal';
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';
  import { useScroll } from '@vueuse/core';

  const { y: windowScrollY } = useScroll(window);
  const switchLocalePath = useSwitchLocalePath();
  const { locale } = useI18n();
  const localePath = useLocalePath();

  const props = withDefaults(defineProps<{
    theme?: 'dark' | 'light'
    isSticky?: boolean
    haveBg?: boolean
    withLogo?: boolean
  }>(), {
    theme: 'dark',
    withLogo: false
  });
  const { toggleMenu } = useMenuStore();
  const { isTablet, isMobile } = storeToRefs(useWindowStore());
  const { immediateSwitch } = useWindowStore();
  const { openCallbackModal } = useCallbackModalStore();

  const headerRef:Ref<HTMLElement | null> = ref(null);
  const isDarkPrevent = ref(false);
  const isDark = computed((): boolean => {
    return props.theme === 'dark' || isDarkPrevent.value;
  });
  
  const buttonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return 'sm';
    }
    if (isMobile.value) {
      return 'xs';
    }
    return 'lg';
  });

  watch(() => windowScrollY.value, (val) => {
    if (val > 50 && headerRef.value) {
      isDarkPrevent.value = true;
      headerRef.value.classList.add('bg-primary');
    } else if (headerRef.value) {
      isDarkPrevent.value = false;
      headerRef.value.classList.remove('bg-primary');
    }
  });
</script>

<template>
  <header
    ref="headerRef"
    class="header"
    :class="
      [
        haveBg && 'header--bg',
        isSticky && 'header--sticky',
      ]
    "
  >
    <NuxtLink
      v-show="withLogo"
      class="header__logo"
      :to="localePath('/')"
    >
      <UiLogo
        class="header__logo-icon"
        :class="[
          !isDark && 'fill-primary'
        ]"
      />
    </NuxtLink>

    <UiButton
      is-uppercase
      is-underline-hover
      :color="isDark ? 'secondary' : 'primary'"
      :label="$t('header.becomeAModel')"
      :size="buttonSize"
      @click="openCallbackModal"
    />
    <div class="header__lang">
      <UiButton
        is-uppercase
        :is-underline="locale === 'en'"
        :is-underline-hover="locale !== 'en'"
        :color="isDark ? 'secondary' : 'primary'"
        :size="buttonSize"
        label="en"
        :to="switchLocalePath('en')"
        @click="(e) => immediateSwitch(e, 'en')"
      />
      <UiButton
        is-uppercase
        :is-underline="locale === 'ru'"
        :is-underline-hover="locale !== 'ru'"
        :color="isDark ? 'secondary' : 'primary'"
        :size="buttonSize"
        label="ru"
        :to="switchLocalePath('ru')"
        @click="(e) => immediateSwitch(e, 'ru')"
      />
    </div>
    <button
      class="header__hamburger"
      :class="[
        isDark ? 'border-secondary' : 'border-primary'
      ]"
      @click="toggleMenu"
    >
      <span
        v-for="item in 3"
        :key="item"
        class="header__hamburger-label"
        :class="[
          isDark ? 'bg-secondary' : 'bg-primary'
        ]"
      />
    </button>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    @apply
      z-40
      fixed
      top-0
      left-0
      w-full
      items-end
      flex
      justify-end
      transition
      duration-1000
      px-[30px]
      py-[20px]
      gap-x-[47px]
      max-tablet:gap-x-4
      max-tablet:py-[13px]
      max-mobile:py-[8px]
      max-tablet:px-[40px]
      max-mobile:px-[10px];

    &__logo {
      @apply mr-auto relative w-[131px] h-[24px] max-tablet:!w-[98px] max-mobile:!w-[85px] max-tablet:!h-[18px] max-mobile:!h-[16px];
    }

    &__lang {
      @apply
        flex
        gap-x-4
        max-tablet:gap-x-3;
    }

    &__hamburger {
      @apply
        flex
        flex-col
        justify-between
        w-[58px]
        h-[24px]
        transition
        duration-300
        max-tablet:h-[20px]
        max-mobile:h-[16px]
        max-tablet:ml-9
        max-mobile:ml-0
        max-tablet:w-[46px]
        max-mobile:w-[31px];

      &-label {
        @apply
          h-px
          w-full
          transition
          duration-300
          block
          text-sm
          pb-0.5
          max-tablet:text-xs
          max-mobile:text-xxs;
      }
    }

    &--bg {
      @apply bg-primary;
    }

    &--sticky {
      @apply
        sticky
        top-0
        bg-primary;
    }
  }
</style>