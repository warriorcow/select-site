<script setup lang="ts">
  const localePath = useLocalePath();
  const { canplaythroughMainVideo } = storeToRefs(useWindowStore());
  const { isMobile } = useWindowStore();
  const { t } = useI18n();

  definePageMeta({
    layout: 'main'
  });

  watchEffect(() => {
    useHead({
      title: t('seo.main.title'),
      meta: [
        {
          name: 'description',
          content: t('seo.main.title')
        },
      ],
    });
  });

  const { data } = await useFetch('https://admin.alekseyp.store/wp-json/wp/v2/pages', {
    query: {
      slug: 'main',
      acf_format: 'standard'
    },
    transform(data) {
      return data[0];
    },
  });

  const videoRef: Ref<HTMLVideoElement | null> = ref(null);

  const hasVideo = computed(() => {
    return !!data.value.acf.video?.url;
  });

  const videoUrl = computed(() => {
    if (isMobile && data.value.acf.video_mobile?.url) {
      return data.value.acf.video_mobile?.url;
    }

    return data.value.acf.video?.url;
  });

  onMounted(() => {
    if (!hasVideo.value) return;
    videoRef.value?.addEventListener('canplaythrough', () => {
      canplaythroughMainVideo.value = true;
    });
    videoRef.value.play();
  });



  watch(() => canplaythroughMainVideo.value, (value) => {
    if (value && hasVideo.value) {
      videoRef.value.play();
    }
  });
</script>

<template>
  <div class="w-full h-full flex justify-center items-center relative overflow-hidden">
    <h1
      class="absolute text-[0px] opacity-0 pointer-events-none select-none"
      v-text="$t('seo.main.title.h1')"
    />
    <NuxtLink
      class="absolute inset-0 flex items-center justify-center w-full z-30"
      :to="localePath('/models')"
    />

    <video
      v-if="hasVideo"
      ref="videoRef"
      muted
      playsinline
      loop
      preload="none"
      pip="false"
      class="absolute w-full h-full object-cover select-none pointer-events-none"
      :class="[canplaythroughMainVideo && 'z-20']"
    >
      <source
        class="pointer-events-none select-none"
        :src="videoUrl"
        type="video/mp4"
      >
    </video>
    
    <picture
      v-if="data.acf.image?.url"
      class="absolute w-full h-full object-cover"
    >
      <source
        media="(min-width: 768px)"
        :srcset="data.acf.image?.url"
      >
      <img
        class="w-full h-full object-cover"
        :src="data.acf.image_mobile?.url"
        alt="Flowers"
      >
    </picture>
    <UiLogo
      animation-out
      class="!max-w-[590px] !h-[105px] px-5 fill-primary z-20"
    />
  </div>
</template>

<style scoped lang="scss">
</style>