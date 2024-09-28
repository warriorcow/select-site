<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';

  const props = withDefaults(defineProps<{
    theme?: 'dark' | 'light'
    withLogo?: boolean
  }>(), {
    theme: 'dark',
    withLogo: false
  });

  const { toggleMenu } = useMenuStore();

  const isDark = computed((): boolean => {
    return props.theme === 'dark';
  });
</script>

<template>
  <header
    class="
      absolute
      w-full
      items-end
      flex
      justify-end
      px-[30px]
      py-[20px]
      gap-x-[47px]
      max-xl:py-[13px]
      max-xl:px-[40px]
      max-xl:gap-x-8
      max-sm:gap-x-[18px]
      max-sm:px-2.5
      max-sm:py-2.5
    "
  >
    <NuxtLink
      v-if="withLogo"
      class="mr-auto"
      to="/"
    >
      <img
        class="h-8 max-xl:h-6 max-sm:h-5"
        alt="select-logo"
        src="~/assets/images/select-logo-small.png"
      >
    </NuxtLink>

    <UiButton
      is-uppercase
      is-underline-hover
      :color="isDark ? 'secondary' : 'primary'"
      label="become a model"
    />
    <div class="flex gap-x-4">
      <UiButton
        is-uppercase
        is-underline-hover
        :color="isDark ? 'secondary' : 'primary'"
        label="en"
      />
      <UiButton
        is-uppercase
        is-underline-hover
        :color="isDark ? 'secondary' : 'primary'"
        label="ru"
      />
    </div>
    <button
      class="
        w-[58px]
        pb-2.5
        border-b-2
        max-xl:w-[46px]
        max-xl:pb-1.5
        max-sm:border-b
        max-sm:w-[31px]
        max-sm:pb-[3px]
        max-sm:mb-[3px]
      "
      :class="[
        isDark ? 'border-black' : 'border-white'
      ]"
      @click="toggleMenu"
    >
      <span
        class="block text-xs max-xl:text-[10px] max-sm:text-[8px] max-xl:leading-[14px] max-xl:pb-0 border-b-2 max-sm:border-b pb-0.5 "
        :class="[
          isDark ? 'text-black border-black' : 'text-white border-white'
        ]"
      >
        menu
      </span>
    </button>
  </header>
</template>