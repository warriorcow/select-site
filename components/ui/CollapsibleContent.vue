<script setup lang="ts">
  const isOpen = inject('isOpen');

  if (isOpen === undefined) {
    throw new Error('CollapsibleContent должен использоваться внутри Collapsible.');
  }

</script>

<template>
  <section
    class="accordion-animation-wrapper"
    :class="[isOpen && 'open']"
  >
    <div class="accordion-animation">
      <div
        class="accordion-transform-wrapper"
        :class="[isOpen && 'open']"
      >
        <div class="accordion-content">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* The accordion functionality */
$transitionLength: .5s;
$transitionTiming: cubic-bezier(.87, 0, .13, 1);

.accordion-animation-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows $transitionLength $transitionTiming;
}

.accordion-animation {
  min-height: 0;
}

.accordion-transform-wrapper {
  transform: translateY(-100%);
  visibility: hidden;
  transition: transform $transitionLength $transitionTiming, visibility 0s $transitionLength $transitionTiming;
}

.accordion-content * {
  margin: 0;
}

.accordion-transform-wrapper.open {
  transform: translateY(0);
  visibility: visible;
  transition: transform $transitionLength $transitionTiming, visibility 0s linear;
}

.accordion-animation-wrapper.open {
  grid-template-rows: 1fr;
}
</style>