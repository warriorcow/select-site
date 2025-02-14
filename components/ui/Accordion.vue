<template>
  <div
    class="accordion"
    :class="[
      isAbsolute && 'accordion--absolute'
    ]"
  >
    <div
      class="flex w-full relative"
      :class="[
        hasArrow && 'accordion--arrow'
      ]"
    >
      <slot
        v-if="hasLabel"
        name="label"
        :label="label"
        :is-open="isOpen"
      />
      <UiButton
        v-else
        size="5xl"
        :label="label"
        is-uppercase
        :is-underline-hover="!isOpen"
        :is-underline="isOpen"
        @click="toggle"
      />
  
      <div
        v-if="hasArrow"
        class="flex justify-start items-center px-2.5 cursor-pointer transition origin-center absolute right-0 h-full"
        :class="[isOpen && '-scale-y-100']"
        @click="toggle"
      >
        <SvgoArrow
          v-if="hasArrow === 'lg'"
          class="!w-3 !h-2 !m-0"
        />
        <SvgoArrow
          v-if="hasArrow === 'sm'"
          class="!w-2 !h-2 !m-0"
        />
      </div>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="isOpen"
        ref="content"
        class="accordion__wrapper"
      >
        <div class="accordion__content">
          <slot
            name="content"
            :nested="nested"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { inject, ref, watch } from 'vue';

  const emit = defineEmits(['toggle']);

  const props = withDefaults(defineProps<{
    id?: string
    label: string
    nested?: any[]
    hasArrow?: 'sm' | 'lg' | boolean
    isAbsolute?: boolean
  }>(), {});

  const slots = useSlots();
  const isOpen = ref(false);
  const content = ref<HTMLElement | null>(null);

  const hasLabel = slots.label !== undefined;
  const activeAccordion = inject<Ref<string | null> | null>('activeAccordion', null);
  const setActiveAccordion = inject<((id: string | null) => void) | null>('setActiveAccordion', null);

  if (activeAccordion && setActiveAccordion) {
    watch(activeAccordion, (newVal) => {
      isOpen.value = newVal === props.id;
    });
  }

  const toggle = () => {
    if (activeAccordion && setActiveAccordion) {
      if (isOpen.value) {
        setActiveAccordion(null);
      } else {
        setActiveAccordion(props.id);
      }
    } else {
      isOpen.value = !isOpen.value;
    }
    emit('toggle', isOpen.value);
  };

  const beforeEnter = async (el: Element) => {
    const hel = el as HTMLElement;
    hel.style.height = '0';
    hel.style.overflow = 'scroll';
    await nextTick();
    hel.style.width = `${hel.scrollWidth}px`;
    hel.style.overflow = 'hidden';
  };

  const enter = (el: Element) => {
    const hel = el as HTMLElement;
    hel.style.height = `${hel.scrollHeight}px`;
    hel.addEventListener('transitionend', () => {
      hel.style.height = 'auto';
    }, { once: true });
  };

  const leave = (el: Element) => {
    const hel = el as HTMLElement;
    hel.style.height = `${hel.scrollHeight}px`;
    requestAnimationFrame(() => {
      hel.style.height = '0';
    });
  };
</script>

<style lang="scss" scoped>
  .accordion {
    @apply
      flex
      flex-col
      items-start;

    &__wrapper {
      @apply
        w-full
        transition-[height];
    }

    &__content {
      @apply
        flex
        flex-col
        overflow-hidden;
    }

    &--absolute {
      @apply relative overflow-visible;

      .accordion__wrapper {
        @apply overflow-visible absolute top-5;
      }

      .accordion__content {
        @apply overflow-visible;
      }
    }

    &--arrow {
      @apply pr-8;
    }
  }
</style>