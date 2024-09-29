<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core';

  const { locale } = useI18n();

  const tooltipPopoverRef: Ref<HTMLElement | null> = ref(null);
  const isVisibleTooltip = ref(false);
  const isHovered = ref(false);

  const toggleTooltip = () => (isVisibleTooltip.value = !isVisibleTooltip.value);
  const isRuLocale = computed(() => locale.value === 'ru');

  onClickOutside(tooltipPopoverRef, () => (isVisibleTooltip.value = false));
</script>

<template>
  <div class="book-tooltip">
    <div
      class="book-tooltip__circle group"
      :class="[
        isRuLocale && 'book-tooltip__circle--big',
        isHovered && 'hover',
        isVisibleTooltip && 'visible-toolbar pointer-events-none',
      ]"
      @click="toggleTooltip"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div
        class="book-tooltip__content"
        v-text="$t('tooltip.buttonText')"
      />
    </div>
    <Transition name="fade">
      <div
        v-if="isVisibleTooltip"
        ref="tooltipPopoverRef"
        class="book-tooltip__popover"
      >
        <SvgoCross
          class="absolute top-2.5 right-2.5 cursor-pointer"
          @click="isVisibleTooltip = false"
        />
        <div
          class="book-tooltip__popover-title"
          v-text="$t('tooltip.popover.title')"
        />
        <div
          class="book-tooltip__popover-desc"
          v-text="$t('tooltip.popover.text')"
        />
        <UiButton
          class="book-tooltip__popover-link"
          :label="$t('tooltip.popover.linkText')"
          is-underline
          size="md"
          to="/contacts"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.book-tooltip {
  @apply fixed bottom-24 right-7 z-30 max-tablet:right-10 max-tablet:bottom-[76px] max-mobile:right-2.5 max-mobile:bottom-[60px];

  &__circle {
    @apply cursor-pointer flex justify-center items-center rounded-full bg-alternate text-secondary w-[62px] h-[62px]
    after:content-[''] after:border after:border-alternate after:w-[66px] after:h-[66px]
    after:rounded-full after:absolute after:-z-10
    after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2
    transition after:transition after:duration-500 duration-500
    select-none max-tablet:w-[54px] max-tablet:h-[54px]
    max-tablet:after:w-[57px] max-tablet:after:h-[57px];

    &--big {
      @apply
        w-[92px]
        h-[92px]
        after:w-[96px]
        after:h-[96px]
        max-tablet:w-[74px] max-tablet:h-[74px]
        max-tablet:after:w-[77px] max-tablet:after:h-[77px]
    }

    &.hover {
      @apply bg-secondary text-primary after:border-secondary;
    }

    &.visible-toolbar {
      @apply pointer-events-none bg-secondary text-primary after:border-secondary;
    }
  }

  &__content {
    @apply text-xs leading-[10px] uppercase w-[90%] text-center max-tablet:text-xxs;
  }

  &__popover {
    @apply absolute bottom-full right-full w-[276px] bg-alternate p-5;
  }

  &__popover-title {
    @apply uppercase text-4xl leading-none mb-2.5;
  }

  &__popover-desc {
    @apply text-md max-w-[192px];
  }

  &__popover-link {
    @apply mt-5 inline-block;
  }
}
</style>
