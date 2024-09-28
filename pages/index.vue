<script setup lang="ts">
  definePageMeta({
    layout: 'main',
  });
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <picture class="w-full h-full object-cover">
      <source
        media="(min-width:640px)"
        srcset="~/assets/images/cover.png"
      >
      <img
        class="w-full h-full object-cover"
        src="~/assets/images/cover-mobile.png"
        alt="Flowers"
      >
    </picture>
    <NuxtLink
      class="absolute w-full max-w-[696px]"
      to="/models"
    >
      <img
        src="~/assets/images/select-logo.png"
        alt="logo"
      >
    </NuxtLink>
  </div>
</template>