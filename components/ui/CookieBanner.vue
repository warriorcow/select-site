<script setup lang="ts">
  const isVisible = ref(false);

  onMounted(() => {
    if (!localStorage.getItem('cookie-consent')) {
      isVisible.value = true;
    }
  });

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    isVisible.value = false;
  }
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-top">
      <div
        v-if="isVisible"
        class="fixed bottom-0 left-0 right-0 z-50 bg-primary drop-shadow-[0px_1px_10px_rgba(0,0,0,0.2)] mobile:max-w-[393px] mobile:bottom-[36px] mobile:left-[14px]"
      >
        <div class="flex flex-col gap-y-2 px-5 py-3 mobile:justify-between">
          <p class="text-accent text-sm">
            {{ $t('cookieBanner.text') }}
          </p>
          <NuxtLink
            class="text-sm underline"
            to="/policy"
          >
            {{ $t('cookieBanner.learnMore') }}
          </NuxtLink>
          <button
            class="ml-auto mobile:w-[163px] cookie-banner__btn flex items-center justify-center bg-secondary text-primary text-sm uppercase h-[37px] w-full mobile:w-auto mobile:shrink-0 mobile:px-10"
            @click="accept"
          >
            {{ $t('cookieBanner.accept') }}
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.cookie-banner__btn {
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
