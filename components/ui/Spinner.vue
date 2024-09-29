<script setup lang="ts">

</script>

<template>
  <div class="spinner"></div>
</template>

<style scoped lang="scss">
.spinner {
  @apply w-[100px] aspect-square rounded-[50%] border-accent border-4 border-b-alternate animate-spin self-center;

  //animation: l2 2s infinite linear;
}
//@keyframes l2 {to{transform: rotate(1turn)}}
</style>