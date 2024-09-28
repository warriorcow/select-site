<template>
  <div class="accordion">
    <slot
      name="label"
      :label="label"
      :on-click="toggle"
      :is-open="isOpen"
    />

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-show="isOpen"
        ref="content"
        class="
          overflow-hidden
          transition-[height]
        "
      >
        <div class="flex flex-col overflow-hidden">
          <slot
            name="content"
            :nested="nested"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';

  withDefaults(defineProps<{
    label: string;
    nested?: any[]
    size?: ButtonSizesKeys
  }>(), {
    size: 'lg'
  });

  const isOpen = ref(false);
  const content = ref<HTMLElement | null>(null);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  const beforeEnter = (el: Element) => {
    const hel = el as HTMLElement;
    hel.style.height = '0';
    hel.style.overflow = 'hidden';
  };

  const enter = (el: Element) => {
    const hel = el as HTMLElement;
    hel.style.height = `${hel.scrollHeight}px`;
    hel.addEventListener('transitionend', () => {
      hel.style.height = 'auto';
    }, { once: true });
  };

  const leave = (el: Element) => {
    const hel = el as HTMLElement;
    hel.style.height = `${hel.scrollHeight}px`;
    requestAnimationFrame(() => {
      hel.style.height = '0';
    });
  };
</script>

<style scoped>
  .accordion {
    @apply flex flex-col items-start;
  }
</style>