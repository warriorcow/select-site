export default defineNuxtPlugin(nuxtApp => {
  const router = useRouter();
  router.afterEach(() => {
    // setTimeout(() => {
    //   nuxtApp.$i18n.finalizePendingLocaleChange();
    //   console.log(nuxtApp.$i18n.locale.value);
    // }, 400); // whatever the duration of your page transition is
  });
});