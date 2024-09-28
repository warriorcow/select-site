<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';

  const { menu } = storeToRefs(useMenuStore());
</script>

<template>
  <UiSidedrawer class="pt-[75px] pb-[46px] pl-[58px] flex flex-col items-start gap-y-7 overflow-auto">
    <template
      v-for="(item, index) in menu"
      :key="index"
    >
      <UiAccordion
        v-if="item.items"
        :label="item.label"
        :nested="item.items"
      />
      <UiButton
        v-if="item.to"
        :to="item.to"
        size="lg"
        :label="item.label"
      />
    </template>
  </UiSidedrawer>
</template>

<style scoped>

</style>