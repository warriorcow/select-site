<script setup lang="ts">
  const props = defineProps<{
    src: string
    index: number
  }>();

  const cardRef:Ref<HTMLElement | null> = ref(null);
  const isBeenShown = ref(false);

  const targetIsVisible = useElementVisibility(cardRef);

  watch(() => targetIsVisible.value, (val) => {
    if (val && !isBeenShown.value) {
      setTimeout(() => {
        isBeenShown.value = true;
      }, props.index * 100);
    }
  });
</script>

<template>
  <a
    ref="cardRef"
    data-fancybox="gallery"
    :href="src"
    class="opacity-0
      duration-700
      transition"
    :class="[
      isBeenShown && '!opacity-100'
    ]"
  >
    <NuxtImg
      loading="lazy"
      :src="src"
      alt=""
      placeholder
      placeholder-class="LOADING_IMAGE"
      class="h-[clamp(11.375rem,4.0536rem+36.6071vw,37rem)] w-full object-cover object-top"
    />
  </a>
</template>

<style scoped lang="scss">

</style>