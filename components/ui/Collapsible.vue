<script setup lang="ts">
  const isOpen = ref(false);

  function toggle() {
    isOpen.value = !isOpen.value;
  }

  // Предоставляем состояние и функцию переключения дочерним компонентам
  provide('isOpen', isOpen);
  provide('toggle', toggle);
</script>
<template>
  <div class="accordion">
    <div class="accordion-item">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion-item {
  overflow: hidden;
}
</style>