<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core';
  import { useMenuStore } from "~/stores/menu";

  const { locale } = useI18n();
  const { bookingItem } = storeToRefs(useMenuStore());

  const tooltipPopoverRef: Ref<HTMLElement | null> = ref(null);
  const isVisibleTooltip = ref(false);
  const isHovered = ref(false);

  const toggleTooltip = () => (isVisibleTooltip.value = !isVisibleTooltip.value);
  const isRuLocale = computed(() => locale.value === 'ru');

  onClickOutside(tooltipPopoverRef, () => (isVisibleTooltip.value = false));

  onMounted(() => {
    document.addEventListener('keyup', e => {
      if(e.key === 'Escape') {
        isVisibleTooltip.value = false;
      }
    });
  });
</script>

<template>
  <div class="book-tooltip">
    <a
      target="_blank"
      :href="bookingItem.url"
      class="book-tooltip__circle group"
      :class="[isHovered && 'hover']"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div
        class="book-tooltip__content"
        v-text="bookingItem.title.rendered"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
.book-tooltip {
  @apply fixed bottom-24 right-7 z-30 max-tablet:right-10 max-tablet:bottom-[76px] max-mobile:right-2.5 max-mobile:bottom-[60px];

  &__circle {
    @apply cursor-pointer flex justify-center items-center rounded-full bg-alternate text-secondary w-auto aspect-square max-w-[92px]
    after:content-[''] after:border after:border-alternate after:w-[calc(100%+4px)] after:h-[calc(100%+4px)]
    after:rounded-full after:absolute after:-z-10
    after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
    transition after:transition after:duration-500 duration-500
    select-none max-tablet:max-w-[74px]
    max-tablet:after:w-[calc(100%+3px)] max-tablet:after:h-[calc(100%+3px)];

    &.hover {
      @apply bg-secondary text-primary after:border-secondary;
    }
  }

  &__content {
    @apply text-xs leading-[10px] uppercase w-[90%] text-center max-tablet:text-xxs;
  }
}
</style>
