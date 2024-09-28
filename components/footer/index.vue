<script setup lang="ts">
</script>

<template>
  <footer class="flex gap-x-[50px] justify-between items-center w-full px-[30px] py-[25px]">
    <div class="text-sm text-accent-400">
      ©2024 select management
    </div>
    <UiButton
      label="Privacy Policy"
      color="accent"
      size="xxs"
      to="/policy"
      class="mr-auto"
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