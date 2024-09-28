<script setup lang="ts">
  import { NuxtLink } from '#components';

  const ButtonColors = {
    primary: 'text-white after:bg-white',
    secondary: 'text-black after:bg-black',
    accent: 'text-accent-400 after:bg-accent-400',
  } as const;

  const ButtonSizes = {
    xxs: 'text-sm max-xl:text-xs max-sm:text-[10px] max-sm:leading-[14px]',
    xs: 'text-base leading-none max-xl:text-xs max-sm:text-[10px] max-sm:leading-[14px]',
    sm: 'text-lg leading-none',
    md: 'text-xl leading-none',
    lg: 'text-[25px] leading-none max-sm:text-[22px]',
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
  }>(), {
    to: null,
    color: 'secondary',
    size: 'xs',
  });

  const buttonType = props.to ? NuxtLink : 'button';
</script>

<template>
  <component
    :is="buttonType"
    :to="to"
    class="
      flex
      items-center
      text-left
      relative
      whitespace-nowrap
    "
    :class="[
      ButtonColors[color], 
      ButtonSizes[size],
      isUnderline && 'button--underline',
      isUnderlineHover && 'button--underline button--underline-hover',
      isUppercase && 'uppercase'
    ]"
  >
    {{ label }}
    <slot name="after" />
  </component>
</template>

<style lang="scss" scoped>
  .button--underline {
    @apply
      after:content-['']
      after:absolute
      after:w-full
      after:h-px
      after:left-0
      after:bottom-0
      after:scale-x-100
      after:origin-bottom-left
  }

  .button--underline-hover {
    @apply
      after:transition
      after:scale-x-0
      hover:after:scale-x-100
  }
</style>
