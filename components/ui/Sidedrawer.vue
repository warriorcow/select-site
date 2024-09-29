<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';

  const { isMenuOpen } = storeToRefs(useMenuStore());
  const { toggleMenu } = useMenuStore();
</script>

<template>
  <Teleport to="body">
    <Transition name="slide">
      <div
        v-if="isMenuOpen"
        class="sidedrawer"
      >
        <button
          class="sidedrawer__close"
          @click="toggleMenu"
        >
          <SvgoCross class="sidedrawer__close-icon" />
        </button>
        <div class="sidedrawer__content">
          <slot />
        </div>
      </div>
    </Transition>

    <UiOverlay
      :is-visible="isMenuOpen"
      @click="toggleMenu"
    />
  </Teleport>
</template>

<style lang="scss" scoped>
  .sidedrawer {
    @apply
      h-full
      w-full
      max-w-[480px]
      fixed
      right-0
      top-0
      z-50
      bg-primary
      transition-transform;

    &__content {
      @apply
        pt-[75px]
        max-mobile:pt-[50px]
        pb-[46px]
        max-tablet:pb-[26px]
        pl-[58px]
        max-mobile:pl-2.5
        overflow-auto
        flex
        flex-col
        items-start
        h-full
        gap-y-7;
    }

    &__close {
      @apply
        fixed
        top-5
        max-tablet:top-2.5
        max-mobile:top-0
        right-5
        max-tablet:right-10
        max-mobile:right-1.5
        p-3;

      &-icon {
      }
    }
  }

  .slide-enter-from,
  .slide-leave-to {
    overflow: hidden;
    transform: translateX(100%);
  }
</style>