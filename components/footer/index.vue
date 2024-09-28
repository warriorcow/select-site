<script setup lang="ts">
</script>

<template>
  <footer class="flex gap-x-[50px] justify-between items-center w-full px-[30px] py-[25px] max-xl:px-[30px] max-xl:py-[19px] max-sm:px-[10px] max-sm:py-[10px] max-sm:gap-x-4">
    <div class="text-sm max-xl:text-xs text-accent-400 max-sm:text-[10px] max-sm:leading-[14px]">
      ©2024 select management
    </div>
    <UiButton
      label="Privacy Policy"
      color="accent"
      size="xxs"
      to="/policy"
      is-underline-hover
      class="mr-auto max-sm:mr-0"
    />

    <UiButton
      label="design development"
      is-underline
      color="accent"
      size="xxs"
      to="/design_development"
    />
  </footer>
</template>