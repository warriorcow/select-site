<script setup lang="ts">
  import { VueTelInput } from 'vue-tel-input';

  const model = defineModel<string>();
  const emit = defineEmits(['is-valid']);

  withDefaults(defineProps<{
    label?: string | null
  }>(), {
    label: null
  });

  const isValid = ref<boolean | null>(null);

  function validate(value: boolean) {
    isValid.value = value.valid;
    emit('is-valid', isValid.value);
  }
</script>

<template>
  <div class="grid">
    <label
      v-if="label"
      class="capitalize mb-[5px] text-accent text-xs"
      v-text="label"
    />
    <ClientOnly fallback-tag="span">
      <template #fallback>
        <div class="focus:outline-secondary outline-offset-0 w-full border border-[#D9D9D9] py-1.5 m-0 px-2.5 rounded-[5px] h-[28px] placeholder-accent text-secondary text-xs" />
      </template>
      <vue-tel-input
        v-bind="$attrs"
        v-model="model"
        valid-characters-only
        :dropdownOptions="{
          showSearchBox: true,
          showFlags: true
        }"
        :input-options="{
          showDialCode: true
        }"
        class="focus:outline-secondary outline-offset-0 w-full border !border-[#D9D9D9] m-0 px-2.5 !rounded-[5px] h-[28px] placeholder-accent text-secondary text-xs !shadow-none"
        :class="!isValid && '!border-[#ff0000]'"
        @validate="validate"
      />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
:global(.vti__dropdown-arrow) {
  //display: none;
}

:global(.vue-tel-input) {
  //overflow: hidden;
}

:global(.vti__input) {
  @apply py-1.5;
}

:global(.vti__dropdown) {
  padding-left: 0;
  padding-right: 0;
}

:global(.vti__dropdown.disabled) {
  cursor: default;
  padding: 0;
  background-color: transparent;
}

:global(.vti__dropdown:hover) {
  background-color: transparent;
}

:global(.vti__flag) {
  //margin: 0;
  height: 14px !important;
}

:global(.vue-tel-input:focus-within) {
  outline: 2px solid #000;
  outline-offset: -2px;
}

:global(.vti__dropdown-list) {
  left: -10px;
  width: 230px;

  @apply max-mobile:w-[calc(100vw-50px)];
}

:global(.vti__search_box) {
  border-radius: 5px;
}
</style>