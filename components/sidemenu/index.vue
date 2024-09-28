<script setup lang="ts">
  import { useMenuStore } from '~/stores/menu';

  const { menu } = storeToRefs(useMenuStore());
</script>

<template>
  <UiSidedrawer class="pt-[75px] pb-[46px] pl-[58px] flex flex-col items-start gap-y-7 overflow-auto">
    <template
      v-for="(item, index) in menu"
      :key="index"
    >
      <UiAccordion
        v-if="item.items"
        :label="item.label"
        :nested="item.items"
      >
        <template #label="{ label, onClick }">
          <UiButton
            size="lg"
            :label="label"
            is-underline-hover
            is-uppercase
            @click="onClick"
          />
        </template>
        <template #content="slotScope">
          <div class="flex flex-col gap-y-6 pt-3.5">
            <UiAccordion
              v-for="(nest, nest_index) in slotScope.nested"
              :key="nest_index"
              :label="nest.label"
              :nested="nest.items"
            >
              <template #label="{ label, onClick, isOpen }">
                <UiButton
                  size="sm"
                  :label="label"
                  @click="onClick"
                >
                  <template #after>
                    <div :class="['ml-2 transition', isOpen && 'rotate-180']">
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.64645 4.35355C3.84171 4.54882 4.15829 4.54882 4.35355 4.35355L7.53553 1.17157C7.7308 0.976311 7.7308 0.659728 7.53553 0.464466C7.34027 0.269204 7.02369 0.269204 6.82843 0.464466L4 3.29289L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.64645 4.35355ZM3.5 3V4H4.5V3H3.5Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </template>
                </UiButton>
              </template>
              <template #content="slotScopeLevel">
                <div class="flex flex-col gap-y-3 pt-3.5">
                  <UiButton
                    v-for="(button, button_index) in slotScopeLevel.nested"
                    :key="button_index"
                    :to="button.to"
                    class="hover:text-accent-400 transition-colors"
                    size="xxs"
                    :label="button.label"
                  />
                </div>
              </template>
            </UiAccordion>
          </div>
        </template>
      </UiAccordion>
      <UiButton
        v-if="item.to"
        :to="item.to"
        is-uppercase
        is-underline-hover
        size="lg"
        :label="item.label"
      />
    </template>

    <div class="mt-auto pt-5">
      <UiButton
        label="@select_mgmt"
        to="@select_mgmt"
        size="xs"
      />
    </div>

  </UiSidedrawer>
</template>

<style scoped>

</style>