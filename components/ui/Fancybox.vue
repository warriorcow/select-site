<script>
  export default {
    props: {
      options: Object,
    },
    async mounted() {
      const { Fancybox } = await import('@fancyapps/ui');
      import('@fancyapps/ui/dist/fancybox/fancybox.css');

      this.fancybox = Fancybox;
      this.fancybox.bind(this.$refs.container, '[data-fancybox]', {
        Images: {
          zoom: false
        },
        ...(this.options || {}),
      });
    },
    async updated() {
      if (this.fancybox) {
        this.fancybox.unbind(this.$refs.container);
        this.fancybox.close();

        this.fancybox.bind(this.$refs.container, '[data-fancybox]', {
          Images: {
            zoom: false
          },
          ...(this.options || {}),
        });
      }
    },
    unmounted() {
      if (this.fancybox) {
        this.fancybox.destroy();
      }
    },
  };
</script>

<template>
  <div
    v-bind="$attrs"
    ref="container"
  >
    <slot />
  </div>
</template>

<style></style>