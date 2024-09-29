<script setup lang="ts">
  defineProps<{
    name: string
    image: string
    isActive: boolean
  }>();

  const isHovered = ref(false);
</script>

<template>
  <div
    class="flex items-center justify-center relative h-[467px] w-[392px]
    cursor-pointer max-mobile:mx-auto
    max-tablet:w-[clamp(11.625rem,8.7841rem+14.2045vw,19.4375rem)] max-tablet:h-[clamp(13.8125rem,10.4034rem+17.0455vw,23.1875rem)]"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img
      class="absolute top-0 left-0 h-full w-full object-cover grayscale-0 transition duration-500"
      :class="[
        isActive && '!grayscale'
      ]"
      :src="image"
      :alt="name"
    >
    <UiButton
      :label="name"
      class="!text-6xl max-mobile:!text-xl"
      color="primary"
      is-uppercase
      :is-underline="isHovered || isActive"
    />
  </div>
</template>

<style scoped lang="scss">

</style>