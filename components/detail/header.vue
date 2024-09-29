<script setup lang="ts">
  import type { Profile } from '~/models/profile';

  const genderMap = {
    men: 9,
    women: 8,
  };

  const { locale, t } = useI18n();
  const { isMobile } = useWindowStore();

  const props = defineProps<{
    params: Profile
  }>();

  const videoRef: Ref<HTMLVideoElement | null> = ref(null);
  const canplaythroughVideo = ref(false);
  const targetIsVisible = useElementVisibility(videoRef);

  const getGender = computed(() => props.params.categories.includes(genderMap.men) ? t('genders.men') : t('genders.women'));

  const breadcrumbsData = computed(() => {
    return {
      name: getGender.value,
      url: `/models/${props.params.categories.includes(genderMap.men) ? 'men' : 'women'}`,
    };
  });

  const shortName = computed(() => {
    return `${props.params?.acf.fio[locale.value]?.name || ''} ${props.params?.acf.fio[locale.value]?.last_name[0] || ''}`;
  });

  const hasVideo = computed(() => {
    return !!props.params.acf.model_main_video?.url;
  });

  const videoUrl = computed(() => {
    if (isMobile && props.params.acf.model_main_video_mobile.url) {
      return props.params.acf.model_main_video_mobile.url;
    }

    return props.params.acf.model_main_video.url;
  });

  onMounted(() => {
    if (!hasVideo.value) return;
    canplaythroughVideo.value = false;
    videoRef.value?.play();


    document.body.addEventListener('touchmove', () => {
      setTimeout(() => {
        // canplaythroughVideo.value = true;
        // videoRef.value.play();
      }, 1000)


    });
  });

  // watch(() => canplaythroughVideo.value, (value) => {
  //   if (value && hasVideo.value) {
  //     videoRef.value.play();
  //   }
  // });

  // watch(() => targetIsVisible.value, (isVisible: boolean) => {
  //   if (isVisible) {
  //     videoRef.value?.play();
  //   } else {
  //     videoRef.value?.pause();
  //   }
  // });

</script>

<template>
  <div class="detail-header">
    <Breadcrumbs
      class="mb-auto mr-auto mt-[57px] max-tablet:mt-[34px] z-30"
      :items="[{
        name: breadcrumbsData.name,
        link: breadcrumbsData.url,
        active: true
      },{
        name: shortName,
        link: '',
        active: false,
        isWhite: true
      }]"
    />
    <video
      v-if="hasVideo"
      ref="videoRef"
      muted
      playsinline
      loop
      pip="false"
      class="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none z-20"
    >
      <source
        :src="videoUrl"
        type="video/mp4"
      >
      Your browser does not support HTML video.
    </video>
    
    <picture
      v-if="params.acf.model_main_image.url && !hasVideo"
      class="detail-header__cover"
    >
      <source
        media="(min-width: 768px)"
        :srcset="params.acf.model_main_image.url"
      >
      <img
        :src="params.acf.model_main_image_mobile.url"
        :alt="shortName"
      >
    </picture>

    <div
      class="detail-header__title"
      v-html="shortName"
    />
    <div class="detail-header__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-header {
  @apply
    h-[calc(100vh-110px)]
    relative
    p-[30px]
    max-tablet:px-[40px]
    max-mobile:px-2.5
    max-mobile:py-5
    flex
    flex-col
    items-center
    text-primary
    min-h-[400px]
    bg-[#d3d3d3]
    justify-end;

  &__cover {
    @apply
      absolute
      h-full
      w-full
      z-10
      object-cover
      top-0
      left-0;

    img {
      @apply
        object-cover
        h-full
        w-full;
    }
  }

  &__title {
    @apply
      z-30
      text-10xl
      max-tablet:text-9xl
      max-mobile:text-[clamp(2.5rem,-1.1364rem+18.1818vw,3.75rem)]
      uppercase
      font-bold
      max-mobile:absolute
      max-mobile:top-1/2
      max-mobile:-translate-y-1/2;
  }

  &__actions {
    @apply
      z-30
      flex
      flex-wrap
      justify-center
      gap-x-[35px]
      max-tablet:gap-x-[30px]
      max-mobile:gap-x-[20px]
      gap-y-[17px];
  }
}
</style>