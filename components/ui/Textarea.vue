<script setup lang="ts">
  withDefaults(defineProps<{
    label: string
    placeholder?: string
  }>(), {
    placeholder: ''
  });

  const model = defineModel<string>({ required: true });
</script>

<template>
  <div class="grid">
    <label
      v-if="label"
      class="mb-[5px] text-accent text-xs"
      v-text="label"
    />

    <textarea
      v-model="model"
      class="focus:outline-secondary outline-offset-0 resize-none min-h-[80px] w-full border border-[#D9D9D9] py-1.5 m-0 px-2.5 rounded-[5px] placeholder-accent text-secondary text-xs"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">

</style>