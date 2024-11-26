<script setup lang="ts">
  import { provide, ref } from 'vue';

  const activeAccordion = ref<string | null>(null);

  const setActiveAccordion = (id: string | null) => {
    activeAccordion.value = id;
  };

  provide('activeAccordion', activeAccordion);
  provide('setActiveAccordion', setActiveAccordion);
</script>

<template>
  <div class="accordion-group">
    <slot />
  </div>
</template>
