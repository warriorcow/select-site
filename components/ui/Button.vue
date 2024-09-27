<script setup lang="ts">
  import { NuxtLink } from '#components';

  const ButtonColors = {
    primary: 'text-white after:bg-white',
    secondary: 'text-black after:bg-black',
    accent: 'text-accent-400 after:bg-accent-400',
  } as const;

  const ButtonSizes = {
    xxs: 'text-sm',
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-[25px]',
  } as const;

  type ButtonColorKeys = keyof typeof ButtonColors;
  type ButtonSizesKeys = keyof typeof ButtonSizes;

  const props = withDefaults(defineProps<{
    label: string;
    link?: boolean;
    to?: string | null;
    color?: ButtonColorKeys;
    size?: ButtonSizesKeys;
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
    :class="[
      ButtonColors[color], 
      ButtonSizes[size], 
      link && 'after:scale-x-100'
    ]"
    class="
      leading-none
      text-left
      relative
      uppercase
      after:content-['']
      after:absolute
      after:w-full
      after:h-px
      after:left-0
      after:bottom-[-1px]
      after:scale-x-0
      after:origin-bottom-left
      after:transition
      hover:after:scale-x-100
    "
  >
    {{ label }}
  </component>
</template>
