<script setup lang="ts">

</script>

<template>
  <div class="grid grid-rows-[1fr_auto] min-h-dvh pt-[72px] max-tablet:pt-[52px] max-mobile:pt-[33px]">
    <Header
      with-logo
      have-bg
      theme="dark"
    />
    <Sidemenu />
    <main class="flex flex-col h-full pt-5 max-tablet:pt-[14px] max-mobile:pt-[30px] px-[30px] max-tablet:px-[40px] max-mobile:px-[10px]">
      <slot />
    </main>
    <Footer class="" />
  </div>
</template>
