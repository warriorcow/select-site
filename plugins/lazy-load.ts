import { defineNuxtPlugin } from '#app';
import VueLazyload from 'vue-lazyload';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {

  });
});
