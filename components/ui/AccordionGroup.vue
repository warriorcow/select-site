<script setup lang="ts">
  import { provide, ref } from 'vue';

  const activeAccordion = ref<string | null>(null);

  const slots = useSlots();

  // Метод для установки активного аккордеона
  const setActiveAccordion = (id: string | null) => {
    activeAccordion.value = id;
  };

  // Передаём состояние и метод для изменения активного аккордеона
  provide('activeAccordion', activeAccordion);
  provide('setActiveAccordion', setActiveAccordion);
</script>

<template>
  <div class="accordion-group">
    <slot />
  </div>
</template>
