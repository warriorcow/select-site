<template>
  <div class="accordion">
    <UiButton
      :label="label"
      :size="size"
      @click="toggle"
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
        style="transition-duration: 500ms"
      >

        <template
          v-if="isNested"
        >
          <template
            v-for="(item, index) in nested"
            :key="index"
          >
            <div
              v-if="item.items?.length"
              class="
                pt-5
                overflow-hidden
                flex
                flex-col
                gap-y-6
                items-start
              "
            >
              <UiAccordion
                size="sm"
                :label="item.label"
                :nested="item.items"
              />
            </div>
            <div
              v-else-if="item.to"
              class="
                flex
                flex-col
                first:pt-5
                pt-3
                overflow-hidden
                items-start
              "
            >
              <UiButton
                size="xxs"
                :to="item.to"
                :label="item.label"
              />
            </div>
          </template>
        </template>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';

  const props = withDefaults(defineProps<{
    label: string;
    nested?: any[]
    size?: ButtonSizesKeys
  }>(), {
    size: 'lg'
  });

  const isOpen = ref(false);
  const content = ref<HTMLElement | null>(null);
  const isNested = computed(() => props.nested?.length || false);

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