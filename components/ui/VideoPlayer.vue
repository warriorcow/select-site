<script setup lang="ts">
  import type { VkPlayer } from '~/models/vkVideo';

  const props = defineProps<{
    src?: string
    cover: string
    isPaused?: boolean
    isVertical?: boolean
  }>();

  const vkIframeRef:Ref<HTMLElement | null> = ref(null);

  const isPlayedVideo = ref(false);
  const player:Ref<VkPlayer | null> = ref(null);
  const videoSrc = computed(() => `${props.src}&js_api=1`);

  onMounted((): void => {
    player.value = VK.VideoPlayer(vkIframeRef.value);

    player.value.on('paused', () => {
      isPlayedVideo.value = false;
    });

    player.value.on('ended', () => {
      isPlayedVideo.value = false;
    });
  });

  watch(() => props.isPaused, (value: boolean): void => {
    if (value) {
      player.value.pause();
    }
  });

  function hideVideoCover() {
    isPlayedVideo.value = true;
    player.value?.seek(0);
    player.value?.play();
  }
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

    <iframe
      v-show="isPlayedVideo"
      ref="vkIframeRef"
      class="video-player__iframe"
      :src="videoSrc"
      width="100%"
      height="100%"
      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
    />

  </div>
</template>

<style scoped lang="scss">
.video-player {
  @apply relative aspect-[7/3.94];

  &--vertical {
    @apply aspect-[2/3.8] mx-auto max-w-[430px];
  }

  &__cover {
    @apply absolute w-full h-full cursor-pointer bg-[#d3d3d3];

    & img {
      @apply w-full h-full object-cover pointer-events-none;
    }
  }

  &__icon {
    @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[67px] h-[67px] max-mobile:w-[49px] max-mobile:h-[49px];
  }

  :deep {
    &__iframe::-webkit-media-controls {
      display:none !important;
    }
  }
}
</style>