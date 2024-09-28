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
  <header class="absolute w-full flex justify-end px-[30px] py-[20px] gap-x-[47px]">
    <UiButton
      color="primary"
      label="become a model"
    />
    <div class="flex gap-x-4">
      <UiButton
        color="primary"
        label="en"
      />
      <UiButton
        color="primary"
        label="ru"
      />
    </div>
    <UiButton
      color="primary"
      label="menu"
      @click="toggleMenu"
    />
  </header>
</template>