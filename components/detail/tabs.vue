<script setup lang="ts">
  import gsap from 'gsap';
  import { ref } from 'vue';
  import TabCard from '~/components/detail/tabCard.vue';
  import TabContent from '~/components/detail/tabContent.vue';

  const props = defineProps<{
    params: any
  }>();

  const { isMobile } = storeToRefs(useWindowStore());
  const { activeTabIndex, isAnimatedTab, transitionTime } = storeToRefs(useProfileStore());

  const tabsContentRef = ref<HTMLElement[]>([]);

  const isActiveTab = (index: string): boolean => activeTabIndex.value === +index;

  function toggleTab(index: number): void {
    if (isAnimatedTab.value) return;
    if (activeTabIndex.value === index) {
      closeTab();
    } else {
      openTab(index);
    }
  }

  watch(() => activeTabIndex.value, (index) => {
    if (index === null) return;
    setTimeout(() => {
      openTab(index);
    }, 100)

  }, {
    immediate: true
  });

  function openTab(index: number): void {
    if (isAnimatedTab.value) return;

    isAnimatedTab.value = true;
    const currentTab = tabsContentRef.value[index];
    const otherTabs = tabsContentRef.value.filter(tab => tab !== currentTab);
    function hasVisibleTab(): boolean {
      return tabsContentRef.value.some(tab => (tab as HTMLElement).offsetHeight > 0);
    }

    if (hasVisibleTab()) {
      gsap.to(otherTabs, {
        duration: transitionTime.value,
        height: 0,
        onComplete: () => {
          gsap.to(currentTab, {
            duration: transitionTime.value,
            height: currentTab.scrollHeight,
            onComplete: () => {
              setTimeout(() => {
                isAnimatedTab.value = false;
              }, 100);
              gsap.to(currentTab, {
                height: 'auto'
              });
            }
          });
        }
      });
    } else {
      gsap.to(currentTab, {
        duration: transitionTime.value,
        height: currentTab.scrollHeight,
        onComplete: () => {
          gsap.to(currentTab, {
            height: 'auto',
            onComplete: () => {
              isAnimatedTab.value = false;
            }
          });
        }
      });
    }

    activeTabIndex.value = index;
  }

  function closeTab(): void {
    if (isAnimatedTab.value) return; // Блокируем закрытие во время анимации

    isAnimatedTab.value = true;
    const currentTab = tabsContentRef.value[activeTabIndex.value!];

    gsap.to(currentTab, {
      duration: transitionTime.value,
      height: 0,
      onComplete: () => {
        activeTabIndex.value = null;
        isAnimatedTab.value = false;
      }
    });
  }

  function onTabClick(index: number): void {
    toggleTab(index);
  }
</script>

<template>
  <div class="tabs">
    <div class="flex w-full max-mobile:flex-col justify-center gap-x-[15px] mb-[35px] max-mobile:mb-0 max-mobile:gap-y-[20px]">
      <div
        v-for="(item, index) in props.params"
        :key="index"
      >
        <TabCard
          :name="item.name"
          :image="item.cover"
          :is-active="isActiveTab(index.toString())"
          :class="[
            isAnimatedTab && 'pointer-events-none'
          ]"
          @click="onTabClick(index)"
        />
        <div
          v-if="isMobile"
          ref="tabsContentRef"
          class="h-0 overflow-hidden"
        >
          <TabContent
            :is-active="isActiveTab(index.toString())"
            :type="item.type"
            :items="item.items"
            class="tab-scroll-area max-mobile:pt-[30px] max-mobile:mb-[15px]"
          />
        </div>
      </div>
    </div>

    <div v-if="!isMobile">
      <div
        v-for="(item, index) in props.params"
        :key="index"
        ref="tabsContentRef"
        class="h-0 overflow-hidden"
      >
        <TabContent
          class="tab-scroll-area"
          :is-active="isActiveTab(index.toString())"
          :type="item.type"
          :items="item.items"
        />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.tabs {
  $self: &;

  @apply px-[40px] max-mobile:px-0;

  &__header {
    @apply flex max-mobile:flex-col max-mobile:px-[65px] items-center justify-center max-w-[800px] text-6xl text-primary m-auto gap-x-[15px] uppercase max-mobile:gap-y-5;
  }

  &__tab {
    @apply relative flex items-center justify-center w-full max-w-[392px] h-[467px] max-mobile:h-auto max-mobile:aspect-[4/4.7] cursor-pointer bg-[#d3d3d3];

    &--active {
      #{$self}__cover {
        @apply grayscale;
      }
    }
  }

  &__cover {
    @apply absolute w-full h-full top-0 left-0 object-cover -z-10;
  }

  &__content {
    @apply mt-[15px] max-tablet:mt-[30px] mb-[10px] w-full max-mobile:px-2.5;
  }

  &__images {
    @apply max-w-[915px] w-full grid grid-cols-2 gap-x-[15px] max-mobile:gap-2.5 gap-y-[20px] mx-auto items-stretch mb-[40px];

    & img {
      @apply object-cover w-full h-[590px] max-mobile:h-auto max-mobile:aspect-[2.3/3];
    }
  }

  &__videos {
    @apply relative px-[70px] max-mobile:px-0 max-w-[1200px] w-full mx-auto overflow-hidden;
  }

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
</style>