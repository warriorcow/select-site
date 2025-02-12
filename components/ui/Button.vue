<script setup lang="ts">
  import { NuxtLink } from '#components';

  const ButtonColors = {
    primary: 'ui-button--color-primary',
    secondary: 'ui-button--color-secondary',
    accent: 'ui-button--color-accent',
    'accent-light': 'ui-button--color-accent-light'
  } as const;

  const ButtonSizes = {
    xxs: 'text-xxs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
    '10xl': 'text-10xl'
  } as const;

  export type ButtonColorKeys = keyof typeof ButtonColors;
  export type ButtonSizesKeys = keyof typeof ButtonSizes;

  const props = withDefaults(defineProps<{
    label: string;
    to?: string | null;
    color?: ButtonColorKeys;
    size?: ButtonSizesKeys;
    isUnderline?: boolean;
    isUnderlineHover?: boolean;
    isUppercase?: boolean;
    isCenter?: boolean;
    isSelectColor?: boolean;
    isSelectColorHover?: boolean;
    isDisabled?: boolean;
  }>(), {
    to: null,
    color: 'secondary',
    size: 'lg',
  });

  const buttonType = props.to ? NuxtLink : 'button';
</script>

<template>
  <component
    :is="buttonType"
    :to="to"
    class="ui-button"
    :class="[
      ButtonColors[color],
      ButtonSizes[size],
      isUnderline && 'ui-button--underline',
      isUnderlineHover && 'ui-button--underline ui-button--underline-hover',
      isUppercase && 'ui-button--uppercase',
      isCenter && 'ui-button--center',
      isSelectColor && 'ui-button--select-color',
      isSelectColorHover && 'ui-button--select-color-hover',
      isDisabled && 'pointer-events-none'
    ]"
  >
    {{ label }}
    <slot name="after" />
  </component>
</template>

<style lang="scss" scoped>
  .ui-button {
    @apply
      flex
      items-center
      text-left
      relative
      transition
      duration-300
      whitespace-nowrap
      after:transition
      after:duration-300
      after:content-['']
      after:absolute
      after:w-full
      after:h-0.5
      after:left-0
      after:bottom-0
      after:scale-x-0
      after:origin-bottom-left;

    &--underline {
      @apply after:scale-x-100;

      &-hover {
        @apply
          after:scale-x-0
          hover:after:scale-x-100;
      }
    }

    &--uppercase {
      @apply uppercase;
    }

    &--center {
      @apply w-full justify-center;
    }

    &--color {
      &-primary {
        @apply
          text-primary
          after:bg-primary;
      }

      &-secondary {
        @apply
          text-secondary
          after:bg-secondary;
      }

      &-accent {
        @apply
          text-accent
          after:bg-accent;
      }

      &--color-accent-light {
        @apply
          text-[#D9D9D9]
          after:bg-[#D9D9D9];
      }
    }

    &--select-color {
      @apply text-accent;

      &-hover {
        @apply hover:text-accent;
      }
    }
  }
</style>
