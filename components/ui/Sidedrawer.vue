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
        <button
          class="absolute top-5 right-5 p-3"
          @click="toggleMenu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.4448 11L0.322549 1.87995C0.220288 1.77769 0.139171 1.65629 0.0838278 1.52268C0.0284848 1.38907 1.07749e-09 1.24587 0 1.10125C-1.07749e-09 0.956632 0.0284848 0.81343 0.0838278 0.67982C0.139171 0.54621 0.220288 0.424809 0.322549 0.322549C0.424809 0.220288 0.54621 0.139171 0.67982 0.0838278C0.81343 0.0284848 0.956632 -1.07749e-09 1.10125 0C1.24587 1.07749e-09 1.38907 0.0284848 1.52268 0.0838278C1.65629 0.139171 1.77769 0.220288 1.87995 0.322549L11 9.4448L20.12 0.322549C20.3266 0.116024 20.6067 0 20.8988 0C21.1908 0 21.4709 0.116024 21.6775 0.322549C21.884 0.529073 22 0.809181 22 1.10125C22 1.39332 21.884 1.67343 21.6775 1.87995L12.5552 11L21.6775 20.12C21.884 20.3266 22 20.6067 22 20.8988C22 21.1908 21.884 21.4709 21.6775 21.6775C21.4709 21.884 21.1908 22 20.8988 22C20.6067 22 20.3266 21.884 20.12 21.6775L11 12.5552L1.87995 21.6775C1.67343 21.884 1.39332 22 1.10125 22C0.809181 22 0.529073 21.884 0.322549 21.6775C0.116024 21.4709 0 21.1908 0 20.8988C0 20.6067 0.116024 20.3266 0.322549 20.12L9.4448 11Z"
              fill="black"
            />
          </svg>
        </button>
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