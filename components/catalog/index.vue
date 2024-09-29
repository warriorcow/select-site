<script setup lang="ts">
  import { useWindowStore } from '~/stores/window';

  const props = withDefaults(defineProps<{
    models: any
  }>(), {
    models: () => []
  });

  const { isMobile, isTablet, isDesktop } = storeToRefs(useWindowStore());

  const filteredItems = computed(() => {
    if (!pattern.value) return [];
    const result = [];
    let i = 0;

    while (i < props.models?.length) {
      let size: number = pattern.value[result.length % pattern.value.length];

      // Проверка условия для паттерна 4 и оставшихся 3 элементов
      const remaining = props.models.length - i;
      if (size === 4 && remaining === 3 && i !== 0) {
        size = 2; // Кладем 2 элемента
      }

      result.push(props.models.slice(i, i + size));
      i += size;

      // Если при паттерне 4 было 3 элемента, то добавляем оставшийся в новый массив
      if (size === 2 && remaining === 3) {
        result.push(props.models.slice(i, i + 1));
        i += 1;
      }
    }

    return result;
  });

  const pattern = computed(() => {
    if (isDesktop.value) {
      return [4,3];
    }
    if (isTablet.value) {
      return [3,2];
    }
    if (isMobile.value) {
      return [2,1];
    }

    return [4,3];
  });

</script>

<template>
  <div class="catalog">
    <div class="catalog__container">
      <div
        v-for="(row, index_row) in filteredItems"
        :key="index_row"
        class="catalog__row"
      >
        <Card
          v-for="(item, index_item) in row"
          :key="index_item"
          :params="item"
          :index="index_item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  @apply flex flex-col flex-1 mb-9;

  &__title {
    @apply text-6xl text-center uppercase;
  }

  &__filter {
    @apply flex justify-center gap-x-[40px] mt-6 h-[100px];
  }

  &__container {
    @apply
    grid
    gap-y-12
    max-mobile:gap-y-5;
  }

  &__row {
    @apply flex gap-x-[15px] max-tablet:gap-x-[20px] justify-center;
  }
}
</style>