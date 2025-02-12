<script setup lang="ts">
  import type { Profile } from '~/models/profile';
  import { findInTree } from '~/helpers/findInTree';

  const { locale } = useI18n();
  const { isMobile } = useWindowStore();
  const { immediateLocale } = storeToRefs(useWindowStore());
  const localePath = useLocalePath();

  const props = defineProps<{
    params: Profile
  }>();

  const { data } = await useApi(`/${immediateLocale.value}/wp-json/custom/v1/categories`);

  const videoRef: Ref<HTMLVideoElement | null> = ref(null);

  const breadcrumbsData = computed(() => {
    const { name, url } = findInTree(data.value, (node) => node.id === props.params.acf.main_category.term_id);
    return {
      name,
      url: localePath(`/models${url}`)
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
    if (!hasVideo.value || !videoRef.value) return;
    setTimeout(() => {
      videoRef.value?.play();
    }, 0);
  });

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
      :poster="isMobile ? params.acf.model_main_image_mobile.url : params.acf.model_main_image.url"
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
      v-else
      class="detail-header__cover"
    >
      <source
        media="(min-width: 768px)"
        :srcset="params.acf.model_main_image.url"
      >
      <img
        :src="params.acf.model_main_image_mobile.sizes?.large"
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
    justify-end
    gap-2.5;

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