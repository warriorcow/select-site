<script setup lang="ts">

</script>

<template>
  <client-only>
    <div class="spinner" />
  </client-only>
</template>

<style scoped lang="scss">
.spinner {
  @apply w-[100px] aspect-square rounded-[50%] border-accent border-4 border-b-alternate animate-spin self-center;
}
</style>