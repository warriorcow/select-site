export default defineNuxtPlugin(async () => {
  const { Fancybox } = await import('@fancyapps/ui');

  return {
    provide: {
      fancybox: Fancybox,
    },
  };
});