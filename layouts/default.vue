<script setup lang="ts">
</script>

<template>
  <div class="h-dvh grid grid-rows-1">
    <Header />
    <UiSidedrawer />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
