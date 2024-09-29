<script setup lang="ts">
  import { useProfileStore } from '~/stores/profile';
  import gsap from 'gsap';

  const { t } = useI18n();

  const props = defineProps<{
    params: any
  }>();

  const { activePortfolioIndex } = storeToRefs(useProfileStore());
  const hasOpenTab = ref(false);
  const portfolioCoverRef = ref(null);
  const moreImagesRef:Ref<HTMLElement[]> = ref([]);
  const accordionContentRef = ref([]);
  const parentImageTabHeight = ref(0);
  const currentPortfolioData = computed(() => props.params[activePortfolioIndex.value]);
  const showAllImages = ref(false);

  watch(() => currentPortfolioData.value, () => {
    if (hasOpenTab.value) {
      accordionContentRef.value.forEach((item: HTMLElement, index) => {
        closeTab(index, () => {
          changePortfolio(() => {
            moreImagesRef.value.forEach((item: HTMLElement, index: number) => {
              closeTabMoreImages(index);
            });
            openTab(activePortfolioIndex.value);
          });
        });
      });
    } else {
      changePortfolio(() => {
        openTab(activePortfolioIndex.value);
      });
    }
  });

  function changePortfolio(onComplete?: () => void) {
    showAllImages.value = false;
    gsap.to(portfolioCoverRef.value, {
      translateX: `-${100 * activePortfolioIndex.value}dvw`,
      duration: 0.7,
      ease: 'expo.out',
      onComplete
    });
  }

  function closeTab(indexItem: number, onComplete?: () => void): void {
    const element = accordionContentRef.value[indexItem] as HTMLElement;

    hasOpenTab.value = false;
    gsap.to(element, {
      duration: 0.7,
      ease: 'expoScale(0.5,7,none)',
      height: 0,
      onComplete
    });
  }

  function openTab(indexItem: number, onComplete?: () => void): void {
    const element = accordionContentRef.value[indexItem] as HTMLElement;

    hasOpenTab.value = true;
    gsap.to(element, {
      duration: 0.7,
      ease: 'expoScale(0.5,7,none)',
      height: element.scrollHeight,
      onComplete
    });
  }

  function toggleTab(indexItem: number): void {
    if (!hasOpenTab.value) {
      openTab(indexItem);
    } else {
      accordionContentRef.value.forEach((item: HTMLElement, index: number) => {
        closeTab(index);
      });
    }
  }

  function closeTabMoreImages(index: number) {
    showAllImages.value = false;
    gsap.to(moreImagesRef.value[index], {
      duration: 0.7,
      ease: 'expoScale(0.5,7,none)',
      height: 0,
      onStart: () => {
        gsap.to(accordionContentRef.value[index], {
          duration: 0.7,
          height: parentImageTabHeight.value || accordionContentRef.value[activePortfolioIndex.value].scrollHeight,
        });
      }
    });
  }

  function openTabMoreImages() {
    parentImageTabHeight.value = accordionContentRef.value[activePortfolioIndex.value].scrollHeight;
    showAllImages.value = true;
    gsap.to(moreImagesRef.value[activePortfolioIndex.value], {
      duration: 0.7,
      ease: 'expoScale(0.5,7,none)',
      height: moreImagesRef.value[activePortfolioIndex.value].scrollHeight,
      onStart: () => {
        gsap.to(accordionContentRef.value[activePortfolioIndex.value], {
          height: 'fit-content',
        });
      },
      onComplete: () => {
        gsap.set(accordionContentRef.value[activePortfolioIndex.value], {
          height: accordionContentRef.value[activePortfolioIndex.value].scrollHeight,
        });
      }
    });
  }

  function toggleTabMoreImages() {
    if (!showAllImages.value) {
      openTabMoreImages();
    } else {
      closeTabMoreImages(activePortfolioIndex.value);
    }
  }

  onMounted(() => {
    gsap.to(portfolioCoverRef.value, {
      translateX: `-${100 * activePortfolioIndex.value}dvw`,
      duration: 0
    });
  });
</script>

<template>
  <div
    v-if="params.filter(portfolio => !portfolio.hidden).length"
    class="portfolio flex overflow-hidden"
  >
    <div
      ref="portfolioCoverRef"
      class="flex relative"
    >
      <div
        v-for="(item, index) in params.filter(portfolio => !portfolio.hidden)"
        :key="index"
      >
        <div>
          <div class="portfolio__header w-dvw">
            <div class="portfolio__cover">
              <picture v-if="item.cover">
                <source
                  media="(min-width: 768px)"
                  :srcset="item.cover"
                >
                <img
                  :src="item.coverMobile"
                  :alt="item.name"
                >
              </picture>
            </div>
            <div class="flex flex-col items-center">
              <div class="portfolio__title">
                {{ item.name }}
              </div>
              <div class="portfolio__actions">
                <UiButton
                  class="text-lg max-tablet:text-sm -mt-1.5 max-mobile:m-2"
                  :label="`${t('pages.profile.actions.view_portfolio')} ${item.name}`"
                  color="primary"
                  is-uppercase
                  is-underline-hover
                  @click="toggleTab(index)"
                />
              </div>
            </div>
          </div>

          <div
            ref="accordionContentRef"
            class="overflow-hidden h-0"
          >
            <UiFancybox class="px-2.5">
              <div class="grid grid-cols-2 mx-auto gap-2.5 max-w-[915px] pt-[50px] max-mobile:pt-[30px]">
                <UiPhotoPortfolio
                  v-for="(img, index_photo) in item.items.slice(0, 4)"
                  :key="index_photo"
                  :src="img"
                  :index="index"
                />
              </div>
              <div
                ref="moreImagesRef"
                class="overflow-hidden h-0"
              >
                <div class="grid grid-cols-2 mx-auto gap-2.5 mt-2.5 max-w-[915px]">
                  <UiPhotoPortfolio
                    v-for="(img, index_nested_photo) in item.items.slice(4)"
                    :key="index_nested_photo"
                    :src="img"
                    :index="index"
                  />
                </div>
              </div>
            </UiFancybox>
            <UiButton
              v-if="item.items.length > 4"
              :label="!showAllImages ? $t('pages.profile.actions.show_all') : $t('pages.profile.actions.hide')"
              is-underline
              is-uppercase
              class="mx-auto mt-[40px] max-mobile:mt-[15px] mb-[30px] max-mobile:mb-[15px] max-mobile:text-xs"
              @click="toggleTabMoreImages"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio {
  @apply
  mb-[55px]
  max-tablet:mb-[20px]
  ;

  &__header {
    height: calc(100dvh - 110px);

    @apply
    relative
    p-[30px]
    max-mobile:p-[25px]
    max-h-[592px]
    max-tablet:max-h-[495px]
    flex
    flex-col
    items-center
    text-primary
    justify-end;
  }

  &__cover {
    @apply
      absolute
      h-full
      w-full
      -z-10
      top-0
      bg-center
      bg-no-repeat
      bg-cover
      bg-[#d3d3d3]
      left-0;

    img {
      @apply
      object-cover
      h-full
      w-full;
    }
  }

  &__title {
    @apply text-10xl max-tablet:text-9xl uppercase font-bold max-mobile:text-7xl;
  }

  &__actions {
    @apply flex gap-x-[35px];
  }

  &__tab {
    @apply px-[40px] max-mobile:px-2.5;

    &-wrapper {
      @apply grid grid-cols-2 max-w-[930px] gap-[15px] max-mobile:gap-2.5 m-auto;

      img {
        @apply h-full object-cover max-mobile:aspect-[2.3/3];
      }
    }
  }

  // Animation

  .portfolio__tab {
    overflow: hidden;
  }
  .portfolio__tab[data-state="open"] {
    animation: slideDown 800ms cubic-bezier(.87,0,.13,1);
  }
  .portfolio__tab[data-state="closed"] {
    animation: slideUp 800ms cubic-bezier(.87,0,.13,1);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-collapsible-content-height);
    }
    to {
      height: 0;
    }
  }
}
</style>