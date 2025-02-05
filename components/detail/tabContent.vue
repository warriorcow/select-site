<script setup lang="ts">
  import gsap from 'gsap';
  import {SwiperVirtual} from "#imports";

  const props = defineProps<{
    type: 'image' | 'video'
    items: any[]
    isActive: boolean
  }>();

  const activeVideoSlide = ref(0);
  const showAllImages = ref(false);
  const moreImagesRef = ref(null);
  const isImages = computed(() => props.type === 'image');
  const isVideos = computed(() => props.type === 'video');

  watch(() => props.isActive, (value: boolean) => {
    if (!value) {
      showAllImages.value = false;
      closeTabMoreImages();
    }
  });

  function openTabMoreImages() {
    showAllImages.value = true;
    gsap.to(moreImagesRef.value, {
      duration: 0.7,
      ease: 'expoScale(0.5,7,none)',
      height: moreImagesRef.value.scrollHeight,
    });
  }

  function closeTabMoreImages() {
    showAllImages.value = false;
    gsap.to(moreImagesRef.value, {
      duration: 0.7,
      ease: 'expoScale(0.5,7,none)',
      height: 0,
    });
  }

  function toggleTabMoreImages() {
    if (!showAllImages.value) {
      openTabMoreImages();
    } else {
      closeTabMoreImages();
    }
  }
</script>

<template>
  <div>
    <div v-if="isImages">
      <UiFancybox class="tab-images group">
        <UiPhotoPortfolio
          v-for="(image, index) in items.slice(0, 4)"
          :key="index"
          :src="image"
          :index="index"
          class="tab-images__image"
        />
        <div
          ref="moreImagesRef"
          class="tab-images tab-images--more"
        >
          <UiPhotoPortfolio
            v-for="(image, index) in items.slice(4)"
            :key="index"
            :src="image"
            :index="index"
            class="tab-images__image"
          />
        </div>
      </UiFancybox>

      <UiButton
        class="max-mobile:!text-xs mx-auto"
        :label="!showAllImages ? $t('pages.profile.actions.show_all') : $t('pages.profile.actions.hide')"
        is-underline
        is-uppercase
        @click="toggleTabMoreImages"
      />
    </div>
    <div v-if="isVideos && items.length > 0">
      <div class="tab-videos">
        <div class="tab-videos__arrow tab-videos__arrow--prev">
          <SvgoArrow />
        </div>

        <Swiper
          ref="swiperRef"
          :modules="[SwiperNavigation]"
          :slides-per-view="1"
          auto-height
          loop
          :space-between="30"
          :navigation="{
            enabled: true,
            nextEl: '.tab-videos__arrow--next',
            prevEl: '.tab-videos__arrow--prev',
          }"
          @slide-change-transition-end="(e) => {
            activeVideoSlide = e.realIndex
          }"
        >
          <SwiperSlide
            v-for="(video, index) in items"
            :key="index"
          >
            <div class="tab-videos__video-slide">
              <UiVideoPlayer
                :is-vertical="video.vertical"
                :is-paused="activeVideoSlide !== index"
                :id-video="video.link"
                :cover="video.image.url"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="tab-videos__arrow tab-videos__arrow--next">
          <SvgoArrow />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tab-videos {
  @apply relative px-[70px] max-mobile:px-2.5 max-w-[1200px] w-full mx-auto overflow-hidden;

  &__video-slide {
    @apply relative w-full h-full mx-auto;
  }

  &__arrow {
    @apply absolute top-1/2 -translate-y-1/2 opacity-100 transition cursor-pointer p-3 max-mobile:hidden;

    & svg {
      @apply w-5 h-3 m-0;
    }

    &--next {
      @apply right-0 -rotate-90;
    }

    &--prev {
      @apply left-0 rotate-90;
    }

    &.swiper-button-disabled {
      @apply opacity-0;
    }
  }
}

.tab-images {
  @apply max-w-[915px] w-full grid grid-cols-2 gap-x-[15px] max-mobile:gap-2.5 mx-auto items-stretch mb-[40px] max-mobile:mb-[12px] max-mobile:px-2.5;

  &--more {
    @apply overflow-hidden h-0 col-span-2 !m-0;

    & > *:nth-child(-n+2) {
      @apply mt-5 max-mobile:mt-0;
    }
  }

  &__image {
    &:nth-child(n+3) {
      @apply mt-5 max-mobile:mt-0;
    }
  }
}
</style>