<script setup lang="ts">
  import Multiselect from 'vue-multiselect';
  
  defineProps<{
    label: string;
    invalid: boolean;
  }>();
</script>

<template>
  <div class="">
    <label
      class="text-xs text-accent mb-[5px] block"
      v-text="label"
    />
    <multiselect
      class="ui-select"
      :placeholder="$t('ui.select.placeholder')"
      :class="{ invalid }"
      :show-pointer="false"
      :show-labels="false"
      :allow-empty="false"
      v-bind="$attrs"
      :searchable="false"
    />
  </div>
</template>

<style scoped lang="scss">
  .ui-select {
    @apply w-full min-h-[unset];

    :deep {
      .multiselect__select {
        height: 100%;

        @apply p-0 w-5;

        &::before {
          background-image: url('assets/icons/arrow.svg');
          background-repeat: no-repeat;
          background-size: cover;

          @apply flex items-center justify-center m-0 border-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute right-auto w-1.5 h-1;
        }
      }

      .multiselect__tags {
        @apply border-[#D9D9D9] bg-[transparent] w-full min-w-[unset] flex items-center h-[28px] min-h-[unset] pt-0 justify-start pl-[10px];

        .multiselect__single,
        .multiselect__placeholder,
        .multiselect__input {
          @apply flex items-center bg-[transparent] m-0 p-0 text-xs text-accent;
        }

        .multiselect__single {
          @apply text-secondary;
        }
      }

      .multiselect__option {
        @apply flex items-center bg-[transparent] m-0 p-0 text-xs text-secondary px-[10px] min-h-[20px] hover:text-accent;

        &--selected {
          @apply font-normal;
        }
      }

      .multiselect__content-wrapper {
        @apply bg-[#F7F7F7] border-none py-1.5;
      }
    }

    &.invalid {
      :deep {
        .multiselect__tags {
          @apply border-[#ff0000];
        }
      }
    }
  }
</style>