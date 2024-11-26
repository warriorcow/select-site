<script setup lang="ts">
  defineProps<{
    items: any[];
  }>();

  const activeTab = ref(0);
</script>

<template>
  <div class="tabs">
    <slot name="header">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="tabs__tab"
        @click="activeTab = index"
      >
        <slot
          name="tab"
          :item="item"
        />
      </div>
    </slot>

    <div class="tabs__content">
      <slot
        name="content"
        :item="items[activeTab]"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>