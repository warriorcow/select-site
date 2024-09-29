<script setup lang="ts">
  import { useWindowStore } from '~/stores/window';
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';

  const localePath = useLocalePath();
  const { isTablet, isMobile } = storeToRefs(useWindowStore());
  const buttonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return 'sm';
    }
    if (isMobile.value) {
      return 'xs';
    }
    return 'md';
  });
</script>

<template>
  <footer class="footer">
    <div class="footer__copyright">
      ©2024 select management
    </div>
    <UiButton
      :label="$t('footer.policyText')"
      color="accent"
      :size="buttonSize"
      :to="localePath('/policy')"
      is-underline-hover
    />
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    @apply
      flex gap-x-[50px]
      justify-between
      items-center
      w-full
      py-[25px]
      max-tablet:py-[20px]
      max-mobile:py-[10px]
      px-[30px]
      max-tablet:px-[40px]
      max-mobile:px-[10px];

    &__copyright {
      @apply
        text-md
        max-tablet:text-sm
        max-mobile:text-xs
        text-accent;
    }
  }
</style>