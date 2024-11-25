<script setup lang="ts">
  import { IMaskComponent } from 'vue-imask';

  withDefaults(defineProps<{
    label?: string | null
    placeholder?: string
    type?: string,
    invalid: boolean
  }>(), {
    label: null,
    type: 'text',
    placeholder: '',
    invalid: false
  });

  const model = defineModel<string>();
</script>

<template>
  <div class="grid">
    <label
      v-if="label"
      class="mb-[5px] text-accent text-xs"
      v-text="label"
    />
    <IMaskComponent
      v-bind="$attrs"
      v-model="model"
      :mask="Date"
      radix="."
      class="focus:outline-secondary outline-offset-0 w-full border border-[#D9D9D9] h-[28px] py-1.5 m-0 px-2.5 rounded-[5px] placeholder-accent text-secondary text-xs"
      :class="[
        invalid && 'border-[#ff0000]'
      ]"
      :placeholder='placeholder'
    />
  </div>
</template>

<style lang="scss">
.datepicker {}
</style>