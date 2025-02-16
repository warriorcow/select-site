<script setup lang="ts">
  import type { Profile } from '~/models/profile';
  import { useWindowStore } from '~/stores/window';
  const { isMobile, isTablet } = storeToRefs(useWindowStore());
  const props = defineProps<{
    params: Profile
    index: number
  }>();

  const { locale } = useI18n();
  const localePath = useLocalePath();

  const isHovered = ref(false);
  const cardRef:Ref<HTMLElement | null> = ref(null);

  const isBeenShown = ref(false);

  const getFullName = computed((): string => `${props.params.title.rendered} ${props.params.title.rendered}`);
  const profileLink = computed((): string => `/${props.params.slug}`);

  const targetIsVisible = useElementVisibility(cardRef);
  const nameButtonSize = computed(() => {
    if (isTablet.value) {
      return '5xl';
    }
    if (isMobile.value) {
      return 'xl';
    }
    return '6xl';
  });

  watch(() => targetIsVisible.value, (val) => {
    if (val && !isBeenShown.value) {
      setTimeout(() => {
        isBeenShown.value = true;
      }, props.index % 2 === 0 ? 100 : 200);
    }
  });
</script>

<template>
  <NuxtLink
    ref="cardRef"
    :to="localePath(profileLink)"
    class="card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
        class="card__content"
        :class="[
          isBeenShown && '!opacity-100 !translate-y-0'
        ]"
    >
      <div class="overflow-hidden relative h-[403px] max-mobile:h-[232px] max-tablet:h-[327px]">
        <template v-if="params.acf.preview_image">
          <img
            class="card__cover"
            :src="params.acf.preview_image[0]?.sizes.large"
            :alt="getFullName"
          >
          <img
            v-if="params.acf.preview_image[1]"
            class="card__cover"
            :class="[
              'opacity-0 absolute top-0 left-0 ',
              isHovered && 'opacity-100 !scale-110',
            ]"
            :src="params.acf.preview_image[1]?.sizes.large"
            :alt="getFullName"
          >
        </template>
        <template v-else>
          <div class="w-full h-full bg-accent" />
        </template>
      </div>
      <div class="card__footer">
        <UiButton
          :label="params.acf.fio[locale].name"
          :size="nameButtonSize"
          :is-underline-hover="!isHovered"
          :is-underline="isHovered"
          is-uppercase
        />
        <div
          class="card__lastname"
          v-text="params.acf.fio[locale].last_name"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .card {
    @apply
      relative
      max-w-[334px]
      max-mobile:max-w-[175px]
      w-full;

    &__content {
      @apply
        translate-y-1/4
        opacity-0
        duration-700
        transition;
    }

    &__cover {
      @apply absolute top-0 left-0 transition duration-500 aspect-square w-full h-full object-cover object-top;
    }

    &__lastname {
      @apply text-lg max-tablet:text-sm max-mobile:text-xs max-mobile:mt-0 mt-1 uppercase;
    }

    &__footer {
      @apply flex flex-col items-center text-center mt-2.5;
    }
  }
</style>