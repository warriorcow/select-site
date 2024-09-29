<script setup lang="ts">
// onMounted(() => {
//   window.scrollTo({top: 0})
// })
</script>

<template>
  <div class="flex flex-col min-h-dvh justify-start">
    <Header
      with-logo
      theme="light"
    />
    <Sidemenu />
    <main class="flex flex-col h-full">
      <slot />
    </main>
    <Footer class="mt-auto" />
  </div>
</template>
