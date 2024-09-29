<script setup lang="ts">
  // import Collapsible from '~/components/ui/Collapsible.vue';
  //
  // const toggle = (event) => {
  //   const isOpen = event.target.parentElement.classList.contains('open');
  //   if(!isOpen) {
  //     event.target.parentElement.classList.add('open');
  //   } else {
  //     event.target.parentElement.querySelectorAll('.open').forEach(acc => {
  //       acc.classList.remove('open');
  //     });
  //     event.target.parentElement.classList.remove('open');
  //   }
  // };

  const toggle = inject('toggle');

  if (toggle === undefined) {
    throw new Error('CollapsibleTrigger должен использоваться внутри Collapsible.');
  }
</script>

<template>
  <label
    class="accordion-trigger"
    @click="toggle"
  >
    <slot />
  </label>
</template>

<style scoped lang="scss">
.accordion-trigger {
  display: block;
  position: relative;
}
</style>