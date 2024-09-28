<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';

  const { isOpen } = storeToRefs(useMenuStore());
  const { toggleMenu } = useMenuStore();
</script>

<template>
  <Teleport to="body">
    <Transition name="slide">
      <div
        v-if="isOpen"
        v-bind="$attrs"
        class="
          h-dvh
          w-full
          max-w-[480px]
          absolute
          right-0
          top-0
          z-20
          bg-white
          transition-transform
        "
      >
        <slot />
      </div>
    </Transition>

    <UiOverlay
      :is-visible="isOpen"
      @click="toggleMenu"
    />
  </Teleport>
</template>

<style scoped>
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(100%);
  }
</style>