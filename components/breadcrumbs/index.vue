<script setup lang="ts">
  import { NuxtLink } from '#components';
  const localePath = useLocalePath();

  defineProps<{
    items: any
  }>();
</script>

<template>
  <div class="breadcrumbs">
    <component
      :is="item.active ? NuxtLink : 'div'"
      v-for="(item, index) in items"
      :key="index"
      :to="localePath(item.link)"
      class="breadcrumbs__item"
      :class="[
        item.active && 'breadcrumbs__item--active',
        item.isWhite && 'text-primary'
      ]"
    >
      {{ item.name }}
    </component>
  </div>
</template>

<style scoped lang="scss">
  .breadcrumbs {
    @apply
      flex
      text-secondary
      text-sm
      max-tablet:text-xs
      uppercase;

    &__item {
      @apply [&:not(:last-child)]:after:content-['/'] after:mx-1;

      &--active {
        @apply text-accent ;
      }
    }
  }
</style>