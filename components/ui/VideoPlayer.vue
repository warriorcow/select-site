<script setup lang="ts">
import { vueVimeoPlayer } from 'vue-vimeo-player';

  const { activeTabIndex } = storeToRefs(useProfileStore());

  const props = defineProps<{
    idVideo?: string
    cover: string
    isPaused?: boolean
    isVertical?: boolean
  }>();

  const iframeRef:Ref<HTMLElement | null> = ref(null);

  const isPlayedVideo = ref(false);

  watch(() => props.isPaused, (value: boolean): void => {
    if (value) {
      iframeRef.value.pause();
      iframeRef.value.update(props.idVideo);
      isPlayedVideo.value = false;
    }
  });

  function onPlay() {
    iframeRef.value.play();
  }

  function onPause() {
    iframeRef.value.pause();
    isPlayedVideo.value = false;
  }

  function hideVideoCover() {
    isPlayedVideo.value = true;
    setTimeout(() => {
      onPlay();
    }, 200);
  }

  watch(() => activeTabIndex.value, () => {
    onPause();
  })
</script>

<template>
  <div
    class="video-player"
    :class="[
      isVertical && 'video-player--vertical'
    ]"
  >
    <Transition name="fade">
      <div
        v-show="!isPlayedVideo"
        class="video-player__cover"
        @click="hideVideoCover"
      >
        <img
          v-if="cover"
          :src="cover"
          alt="cover"
        >
        <SvgoPlay
          filled
          class="video-player__icon"
        />
      </div>
    </Transition>

    <vueVimeoPlayer
        :key="idVideo"
        class="video-player__video"
        ref="iframeRef"
        :video-id="idVideo"
        @play="onPlay"
        @pause="onPause"
    />
  </div>
</template>

<style scoped lang="scss">
.video-player {
  @apply relative aspect-[7/3.94];

  &--vertical {
    @apply aspect-[2/3.6] mx-auto max-w-[430px];
  }

  &__cover {
    @apply absolute w-full h-full cursor-pointer bg-[#d3d3d3] z-[1000];

    & img {
      @apply w-full h-full object-cover pointer-events-none;
    }
  }

  &__icon {
    @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[67px] h-[67px] max-mobile:w-[49px] max-mobile:h-[49px];
  }

  &__video {
    @apply z-0 w-full h-full;

    & > * {
      @apply w-full h-full;
    }
  }

  :deep {
    &__iframe::-webkit-media-controls {
      display:none !important;
    }
  }
}
</style>