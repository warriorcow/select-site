<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';

  withDefaults(defineProps<{
    color?: 'black' | 'white'
  }>(), {
    color: 'white'
  });

  const { toggleMenu } = useMenuStore();
</script>

<template>
  <header class="absolute w-full items-end flex justify-end px-[30px] py-[20px] gap-x-[47px]">
    <UiButton
      is-uppercase
      is-underline-hover
      color="primary"
      label="become a model"
    />
    <div class="flex gap-x-4">
      <UiButton
        is-uppercase
        is-underline-hover
        color="primary"
        label="en"
      />
      <UiButton
        is-uppercase
        is-underline-hover
        color="primary"
        label="ru"
      />
    </div>
    <button
      class="
        w-[58px]
        pb-[8px]
        text-white
        border-b-2 border-white
      "
      @click="toggleMenu"
    >
      <span class="block text-xs border-b-2 pb-0.5 border-white">
        menu
      </span>
    </button>
  </header>
</template>