<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';
  import { useCallbackModalStore } from '~/stores/callback-modal';
  const { menu, isMenuOpen } = storeToRefs(useMenuStore());
  const { closeMenu } = useMenuStore();
  const { openCallbackModal } = useCallbackModalStore();
  const localePath = useLocalePath();

  watch(() => isMenuOpen.value, (value) => {
    document.body.style.overflow = value ? 'hidden' : null;
  });
</script>

<template>
  <UiSidedrawer>
    <template
      v-for="(item, index) in menu"
      :key="index"
    >
      <UiAccordion
        v-if="!!item.children.length"
        :label="item.title.rendered"
        :nested="item.children"
      >
        <template #content="slotScope">
          <div class="flex flex-col items-start gap-y-6 pt-3.5">
            <UiAccordion
              v-for="(nest, nest_index) in slotScope.nested"
              :key="nest_index"
              :label="nest.title.rendered"
              :nested="nest.children"
              :has-arrow="nest.children.length ? 'lg' : false"
            >
              <template #label="{ label }">
                <UiButton
                  size="xl"
                  :to="localePath(`/models${nest.url}`)"
                  :label="label"
                  @click="closeMenu"
                />
              </template>
              <template #content="slotScopeLevel">
                <div class="flex flex-col gap-y-3 pt-3.5">
                  <UiButton
                    v-for="(button, button_index) in slotScopeLevel.nested"
                    :key="button_index"
                    :to="localePath(`/models${button.url}`)"
                    class="hover:!text-accent transition-colors"
                    size="md"
                    :label="button.title.rendered"
                    @click="closeMenu"
                  />
                </div>
              </template>
            </UiAccordion>
          </div>
        </template>
      </UiAccordion>
      <UiButton
        v-if="item.children.length === 0 && item.url"
        :to="localePath(`${item.url}`)"
        is-uppercase
        is-underline-hover
        size="5xl"
        :label="item.title.rendered"
        @click="closeMenu()"
      />
      <UiButton
        v-else-if="item.children.length === 0"
        is-uppercase
        is-underline-hover
        size="5xl"
        :label="item.title.rendered"
        @click="closeMenu(), openCallbackModal()"
      />
    </template>

    <div class="mt-auto pt-5">
      <NuxtLink
        class="flex items-center gap-x-2 text-lg"
        to="https://www.instagram.com/selectmgmt"
      >
        <SvgoInstagramIcon class="!w-6 !h-6 block !mb-0" />
        @select_mgmt
      </NuxtLink>
    </div>
  </UiSidedrawer>
</template>