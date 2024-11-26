<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
  import type { ButtonSizesKeys } from '~/components/ui/Button.vue';
  import { useWindowStore } from '~/stores/window';
  import type { Category } from '~/models/category';

  const { isMobile, isTablet } = storeToRefs(useWindowStore());
  const localePath = useLocalePath();

  const props = defineProps<{
    params: Category
  }>();

  const currentImageIndex = ref(0);
  const isVisibleCategories = ref(false);
  const isHovered = ref(false);
  const intervalId = ref(null);

  const currentImage = computed(() => props.params.images[currentImageIndex.value]?.url || '');

  const buttonSize = computed((): ButtonSizesKeys => {
    if (isTablet.value) {
      return '5xl';
    }
    if (isMobile.value) {
      return '3xl';
    }
    return '6xl';
  });

  const toggleVisibleCategories = () => (isVisibleCategories.value = !isVisibleCategories.value);

  onMounted(() => {
    const countImages = props.params.images?.length - 1 || 0;
    intervalId.value = setInterval(() => {
      if (currentImageIndex.value === countImages) {
        currentImageIndex.value = 0;
      } else {
        currentImageIndex.value++;
      }
    }, 2000000000000000);
  });

  onBeforeUnmount(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value);
    }
  });
</script>

<template>
  <div
    class="category-card"
    @mouseenter="isHovered = true"
    @mouseleave="onMouseLeave"
  >
    <Transition
      name="fade"
      mode="in-out"
    >
      <picture
        :key="currentImage"
        class="category-card__cover"
      >
        <img
          class="w-full h-full object-cover"
          :src="currentImage"
          alt="Dynamic Image"
        >
      </picture>
    </Transition>
    <Transition
      name="fade"
      mode="out-in"
    >
      <UiButton
        v-if="!isVisibleCategories"
        :label="params.name"
        is-uppercase
        is-underline-hover
        :size="buttonSize"
        :to="!params.childrens && localePath(`/models${params.url}`) || null"
        @click="toggleVisibleCategories()"
      />

      <div
        v-else
        class="flex flex-col items-center gap-y-6"
      >
        <UiAccordion
          v-for="(item, index) in params.childrens"
          :key="index"
          :label="item.name"
          :has-arrow="item.childrens ? 'lg' : false"
        >
          <template #label="{ label, isOpen }">
            <UiButton
              class="ml-[0.7rem] max-tablet:ml-[1.3rem] max-mobile:ml-[1.5rem]"
              :size="buttonSize"
              :label="label"
              :to="localePath(`/models${item.url}`)"
              :is-underline="isOpen"
              :is-underline-hover="!isOpen"
            />
          </template>
          <template #content>
            <div class="flex flex-col items-center gap-y-3 mt-2">
              <UiButton
                v-for="(sub_menu, index_sub) in item.childrens"
                :key="index_sub"
                :label="sub_menu.name"
                :to="localePath(`/models${sub_menu.url}`)"
                size="xl"
                is-underline-hover
              />
            </div>
          </template>
        </UiAccordion>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.category-card {
  @apply relative h-full min-h-[700px] max-mobile:h-[364px] w-full flex items-center justify-center bg-top bg-cover bg-[#d3d3d3];

  &__cover {
    @apply absolute top-0 left-0 w-full h-full;

    img {
      @apply w-full h-full object-cover object-top;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
