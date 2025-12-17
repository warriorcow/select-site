<script setup lang="ts">
import {fa} from "cronstrue/dist/i18n/locales/fa";

withDefaults(defineProps<{
  isAdaptive: boolean
}>(), {
  isAdaptive: false
})
</script>

<template>
  <client-only>
    <div class="spinner" :class="{'is-adaptive': isAdaptive}" />
  </client-only>
</template>

<style scoped lang="scss">
.spinner {
  @apply w-[100px] aspect-square rounded-[50%] border-accent border-4 border-b-alternate animate-spin self-center;

  &.is-adaptive {
    @apply w-auto h-[60%];
  }
}
</style>