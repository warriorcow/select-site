<script setup lang="ts">
  defineProps<{
    isVisible: boolean
  }>();
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="overlay"
    />
  </Transition>
</template>

<style lang="scss" scoped>
  .overlay {
    @apply
      fixed
      top-0
      left-0
      bottom-0
      right-0
      bg-secondary
      opacity-50
      transition-opacity
      z-50;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>