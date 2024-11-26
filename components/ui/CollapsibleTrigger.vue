<script setup lang="ts">
  const toggle = inject('toggle');

  if (toggle === undefined) {
    throw new Error('CollapsibleTrigger должен использоваться внутри Collapsible.');
  }
</script>

<template>
  <label
    class="accordion-trigger"
    @click="toggle"
  >
    <slot />
  </label>
</template>

<style scoped lang="scss">
.accordion-trigger {
  display: block;
  position: relative;
}
</style>