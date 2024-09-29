<script setup lang="ts">
  import type { NuxtError } from '#app';
  import { useMenuStore } from '~/stores/menu';

  defineProps<{
    error: NuxtError
  }>();

  const { fetchMenu } = useMenuStore();
  const { setToken } = useWindowStore();

  if (process.server) {
    const { data } = await useFetch('https://admin.alekseyp.store/wp-json/jwt-auth/v1/token?username=jwt_user&password=123456', {
      method: 'post',
      pick: ['token']
    });
    setToken(data.value.token);
    await fetchMenu();
  }

  const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <NuxtLayout name="default">
    <div class="flex flex-col justify-center items-center h-full mb-10">
      <h2 class="text-[180px] leading-none font-bold">{{ error.statusCode }}</h2>
      <h3 class="text-6xl text-center uppercase max-w-lg mt-3">Looks like you've landed on&nbsp;the wrong page</h3>
      <UiButton
        class="mt-7"
        label="back home"
        is-underline
        is-uppercase
        size="2xl"
        @click="handleError"
      />
    </div>
  </NuxtLayout>
</template>