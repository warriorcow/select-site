<script setup lang="ts">
</script>

<template>
  <div class="h-dvh grid grid-rows-1">
    <Header theme="light" />
    <Sidemenu />
    <main>
      <Suspense>
        <slot />
      </Suspense>
    </main>
    <Footer />
  </div>
</template>
