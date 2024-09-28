<script setup lang="ts">
  defineProps<{
    isVisible: boolean
  }>();
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="
        absolute
        top-0
        left-0
        bottom-0
        right-0
        bg-black
        opacity-50
        transition-opacity
        z-10
      "
    />
  </Transition>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>